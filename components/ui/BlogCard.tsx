import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  className?: string
}

export function BlogCard({ slug, title, excerpt, date, readingTime, category, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col gap-4 rounded border border-border bg-surface p-6',
        'transition-all duration-300 ease-expo-out',
        'hover:border-accent/30 hover:bg-surface-raised hover:shadow-card card-hover',
        className
      )}
    >
      {/* Meta row */}
      <div className="flex items-center gap-3">
        <span className="text-label text-accent uppercase tracking-widest font-medium">
          {category}
        </span>
        <span className="text-text-muted text-xs" aria-hidden>·</span>
        <time className="text-body-sm text-text-muted" dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <span className="text-text-muted text-xs" aria-hidden>·</span>
        <span className="text-body-sm text-text-muted">{readingTime}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-display-md text-text-primary leading-snug text-balance group-hover:text-accent transition-colors duration-200">
        <Link
          href={`/blog/${slug}`}
          className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
        >
          {title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="text-body-base text-text-secondary line-clamp-3 flex-1">{excerpt}</p>

      {/* Read more */}
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center gap-1.5 text-body-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
        aria-label={`Read more about ${title}`}
      >
        Read Article
        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </article>
  )
}
