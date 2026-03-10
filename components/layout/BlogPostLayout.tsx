import Link from 'next/link'
import type { Post, PostMeta } from '@/lib/blog'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'
import { BlogCard } from '@/components/ui/BlogCard'

interface BlogPostLayoutProps {
  post: Post
  relatedPosts?: PostMeta[]
  children: React.ReactNode
}

export function BlogPostLayout({ post, relatedPosts = [], children }: BlogPostLayoutProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Nav />
      <main id="main-content">
        <SectionWrapper as="div" size="xl" className="pt-32" innerClassName="max-w-prose mx-auto">
          {/* Back link */}
          <AnimateIn className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-body-sm text-text-secondary hover:text-accent transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All Posts
            </Link>
          </AnimateIn>

          {/* Article header */}
          <article>
            <header className="mb-12 flex flex-col gap-4">
              <AnimateIn>
                <p className="overline">{post.category}</p>
              </AnimateIn>
              <AnimateIn delay={0.05}>
                <h1 className="font-display text-display-lg text-text-primary text-balance">
                  {post.title}
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="flex items-center gap-3 text-body-sm text-text-muted">
                  <time dateTime={post.date}>{formattedDate}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.12}>
                <div className="h-px bg-border mt-2" aria-hidden />
              </AnimateIn>
            </header>

            {/* MDX content */}
            <AnimateIn delay={0.15}>
              <div className="prose prose-invert max-w-none">{children}</div>
            </AnimateIn>
          </article>

          {/* CTA at end of post */}
          <AnimateIn className="mt-20 flex flex-col gap-6 rounded border border-border bg-surface p-8">
            <div className="flex flex-col gap-2">
              <p className="overline">Ready to Apply This?</p>
              <h2 className="font-display text-display-md text-text-primary">
                Let us put it into practice for your brand.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton href="/contact">Start a Project</LinkButton>
              <LinkButton href="/blog" variant="secondary">Read More Posts</LinkButton>
            </div>
          </AnimateIn>
        </SectionWrapper>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <SectionWrapper
            as="aside"
            aria-label="Related articles"
            className="border-t border-border/50 bg-surface-raised/30"
          >
            <div className="mb-10">
              <AnimateIn>
                <h2 className="font-display text-display-md text-text-primary">
                  Continue reading
                </h2>
              </AnimateIn>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <AnimateIn key={related.slug} delay={0.06 * i}>
                  <BlogCard {...related} className="h-full" />
                </AnimateIn>
              ))}
            </div>
          </SectionWrapper>
        )}
      </main>
      <Footer />
    </>
  )
}
