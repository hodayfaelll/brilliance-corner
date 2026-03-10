import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogCardProps } from '@/components/ui/BlogCard'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta extends BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
}

export interface Post extends PostMeta {
  content: string
}

function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true })
  }
}

export function getAllSlugs(): string[] {
  ensureContentDir()
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx?|md)$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  ensureContentDir()
  const extensions = ['.mdx', '.md']
  let filePath: string | null = null

  for (const ext of extensions) {
    const candidate = path.join(CONTENT_DIR, `${slug}${ext}`)
    if (fs.existsSync(candidate)) {
      filePath = candidate
      break
    }
  }

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? new Date().toISOString(),
    readingTime: stats.text,
    category: data.category ?? 'Insights',
    content,
  }
}

export function getAllPosts(): Post[] {
  return getAllSlugs()
    .map(getPostBySlug)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getLatestPosts(count: number): Promise<PostMeta[]> {
  return getAllPosts()
    .slice(0, count)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ content, ...meta }) => meta)
}

export function getRelatedPosts(currentSlug: string, count = 3): PostMeta[] {
  const current = getPostBySlug(currentSlug)
  const all = getAllPosts()
  const others = all.filter((p) => p.slug !== currentSlug)

  // Same category first, then by recency
  const sameCategory = others.filter((p) => p.category === current?.category)
  const different = others.filter((p) => p.category !== current?.category)
  const sorted = [...sameCategory, ...different].slice(0, count)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return sorted.map(({ content, ...meta }) => meta)
}
