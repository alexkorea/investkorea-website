import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  content: string
}

export function getPostSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory)
  return files.filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
}

export function getPostBySlug(slug: string, locale: string = 'ko'): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Get localized fields
  const localeSuffix = locale === 'ko' ? '' : locale.charAt(0).toUpperCase() + locale.slice(1)

  return {
    slug: data.slug || slug,
    title: data[`title${localeSuffix}`] || data.title,
    date: typeof data.date === 'string' ? data.date : new Date(data.date).toISOString().slice(0, 10),
    category: data[`category${localeSuffix}`] || data.category,
    excerpt: data[`excerpt${localeSuffix}`] || data.excerpt,
    image: data.image || '/slides/building.jpg',
    content: content,
  }
}

export function getAllPosts(locale: string = 'ko'): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, locale))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts
}
