// 블로그 글은 Supabase(investkorea_blog_posts)에서 가져온다.
// 파일시스템 의존 제거 → 새 글 추가/수정 시 Vercel 빌드 불필요.
// ISR(revalidate) + /api/revalidate 로 캐시 갱신을 다룬다.

import { getAnonClient } from './supabase'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  content: string
}

const TABLE = 'investkorea_blog_posts'
const FALLBACK_IMAGE = '/slides/building.jpg'

type Row = {
  slug: string
  locale: string
  title: string
  category: string | null
  excerpt: string | null
  image: string | null
  content: string
  post_date: string
}

function toPost(row: Row): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    date: row.post_date,
    category: row.category || '',
    excerpt: row.excerpt || '',
    image: row.image || FALLBACK_IMAGE,
    content: row.content,
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const sb = getAnonClient()
  const { data, error } = await sb
    .from(TABLE)
    .select('slug')
    .eq('locale', 'ko')
    .eq('published', true)
  if (error) throw error
  return Array.from(new Set((data || []).map((r) => r.slug)))
}

export async function getPostBySlug(slug: string, locale: string = 'ko'): Promise<BlogPost | null> {
  const sb = getAnonClient()
  // Prefer requested locale. Fall back to ko if missing.
  const { data: primary } = await sb
    .from(TABLE)
    .select('*')
    .eq('slug', slug)
    .eq('locale', locale)
    .eq('published', true)
    .maybeSingle()
  if (primary) return toPost(primary as Row)

  if (locale === 'ko') return null
  const { data: ko } = await sb
    .from(TABLE)
    .select('*')
    .eq('slug', slug)
    .eq('locale', 'ko')
    .eq('published', true)
    .maybeSingle()
  return ko ? toPost(ko as Row) : null
}

export async function getAllPosts(locale: string = 'ko'): Promise<BlogPost[]> {
  const sb = getAnonClient()
  const { data, error } = await sb
    .from(TABLE)
    .select('*')
    .eq('locale', locale)
    .eq('published', true)
    .order('post_date', { ascending: false })
  if (error) throw error
  const posts = (data || []).map((r) => toPost(r as Row))
  // If requested locale has fewer posts than ko (translation not yet complete), fill gaps from ko
  if (locale !== 'ko') {
    const slugs = new Set(posts.map((p) => p.slug))
    const { data: koData } = await sb
      .from(TABLE)
      .select('*')
      .eq('locale', 'ko')
      .eq('published', true)
      .order('post_date', { ascending: false })
    for (const row of koData || []) {
      if (!slugs.has((row as Row).slug)) posts.push(toPost(row as Row))
    }
    posts.sort((a, b) => (a.date > b.date ? -1 : 1))
  }
  return posts
}
