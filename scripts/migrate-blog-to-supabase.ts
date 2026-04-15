// content/blog/*.md 파일을 읽어 Supabase investkorea_blog_posts 테이블로 이전한다.
// 사용: npx tsx scripts/migrate-blog-to-supabase.ts [--dry]
//
// 파일 규칙: <slug>.md (ko), <slug>.en.md, <slug>.zh.md, <slug>.ja.md
// frontmatter: title, date, category, excerpt, image, slug
// 다국어 frontmatter(titleEn, categoryEn 등)가 ko 파일에 있는 경우도 우선 사용한다.

import { config as loadEnv } from 'dotenv'
loadEnv({ path: '.env.local' })
loadEnv()

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'
import { createClient } from '@supabase/supabase-js'

type Locale = 'ko' | 'en' | 'zh' | 'ja'
const LOCALES: Locale[] = ['ko', 'en', 'zh', 'ja']

const DRY = process.argv.includes('--dry')
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function mdToHtml(md: string): string {
  return remark().use(remarkGfm).use(html, { sanitize: false }).processSync(md).toString()
}

function readBase(slug: string) {
  const p = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p, 'utf8')
  return matter(raw)
}

function readLocalized(slug: string, locale: Locale) {
  if (locale === 'ko') {
    return readBase(slug)
  }
  const p = path.join(BLOG_DIR, `${slug}.${locale}.md`)
  if (fs.existsSync(p)) {
    const raw = fs.readFileSync(p, 'utf8')
    return matter(raw)
  }
  return null
}

function pickLocalizedFromBase(base: matter.GrayMatterFile<string> | null, locale: Locale) {
  if (!base) return null
  const suffix = locale === 'ko' ? '' : locale.charAt(0).toUpperCase() + locale.slice(1)
  const title = base.data[`title${suffix}`]
  const excerpt = base.data[`excerpt${suffix}`]
  const category = base.data[`category${suffix}`]
  const content = base.data[`content${suffix}`]
  if (!title && !content) return null
  return {
    title: title || base.data.title,
    excerpt: excerpt || base.data.excerpt,
    category: category || base.data.category,
    // Non-ko frontmatter may or may not carry separate body. Fall back to base content.
    body: content || base.content,
    date: base.data.date,
    image: base.data.image,
  }
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY
  if (!url || !key) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY')

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  if (!fs.existsSync(BLOG_DIR)) throw new Error(`blog dir not found: ${BLOG_DIR}`)

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const slugs = new Set<string>()
  for (const f of files) {
    const m = f.match(/^(.+?)(?:\.(?:en|zh|ja))?\.md$/)
    if (m) slugs.add(m[1])
  }

  console.log(`found ${slugs.size} unique slugs across ${files.length} files`)

  const rows: Array<{
    slug: string
    locale: Locale
    title: string
    category: string | null
    excerpt: string | null
    image: string | null
    content: string
    post_date: string
    published: boolean
  }> = []

  for (const slug of slugs) {
    const base = readBase(slug)
    if (!base) {
      console.warn(`  [skip] base ko file missing for ${slug}`)
      continue
    }
    const baseDate = base.data.date
      ? (typeof base.data.date === 'string'
          ? base.data.date.slice(0, 10)
          : new Date(base.data.date).toISOString().slice(0, 10))
      : new Date().toISOString().slice(0, 10)

    for (const locale of LOCALES) {
      // Prefer dedicated locale file, then fall back to base with localized frontmatter
      let data:
        | { title: string; excerpt?: string; category?: string; body: string; date?: string; image?: string }
        | null = null

      const localized = readLocalized(slug, locale)
      if (localized && locale !== 'ko') {
        data = {
          title: localized.data.title,
          excerpt: localized.data.excerpt,
          category: localized.data.category,
          body: localized.content,
          date: localized.data.date,
          image: localized.data.image,
        }
      }
      if (!data) {
        const picked = pickLocalizedFromBase(base, locale)
        if (picked) data = picked
      }
      // Final fallback: ko content
      if (!data && locale === 'ko') {
        data = {
          title: base.data.title,
          excerpt: base.data.excerpt,
          category: base.data.category,
          body: base.content,
          date: base.data.date,
          image: base.data.image,
        }
      }
      if (!data) continue

      const d = data.date
        ? (typeof data.date === 'string'
            ? data.date.slice(0, 10)
            : new Date(data.date as unknown as string).toISOString().slice(0, 10))
        : baseDate

      rows.push({
        slug,
        locale,
        title: String(data.title || slug),
        category: data.category ? String(data.category) : null,
        excerpt: data.excerpt ? String(data.excerpt) : null,
        image: data.image ? String(data.image) : '/slides/building.jpg',
        content: mdToHtml(data.body || ''),
        post_date: d,
        published: true,
      })
    }
  }

  console.log(`prepared ${rows.length} rows (expected ~${slugs.size * 4})`)

  if (DRY) {
    console.log('DRY run — not writing to DB')
    console.log('sample row:', JSON.stringify({ ...rows[0], content: (rows[0]?.content || '').slice(0, 120) + '…' }, null, 2))
    return
  }

  // Batch upsert in chunks of 50
  let upserted = 0
  for (let i = 0; i < rows.length; i += 50) {
    const chunk = rows.slice(i, i + 50)
    const { error } = await supabase
      .from('investkorea_blog_posts')
      .upsert(chunk, { onConflict: 'slug,locale' })
    if (error) {
      console.error('upsert error:', error.message)
      throw error
    }
    upserted += chunk.length
    process.stdout.write(`\r  upserted ${upserted}/${rows.length}`)
  }
  console.log('\nDONE')
}

main().catch((e) => {
  console.error('FAIL:', e?.message || e)
  process.exit(1)
})
