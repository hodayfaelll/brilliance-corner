import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BlogCard } from '@/components/ui/BlogCard'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical marketing insights for founders who want the edge, not the fluff. Copywriting, SEO, social media strategy.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main id="main-content">
        <SectionWrapper as="div" size="xl" className="pt-32">
          {/* Header */}
          <div className="mb-16 flex flex-col gap-4 max-w-2xl">
            <AnimateIn>
              <p className="overline">The Blog</p>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h1 className="font-display text-display-xl text-text-primary text-balance">
                Ideas worth{' '}
                <span className="text-accent italic">stealing.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-body-lg text-text-secondary">
                Practical marketing insights for founders who want the edge,
                not the fluff.
              </p>
            </AnimateIn>
          </div>

          {/* Posts grid */}
          {posts.length === 0 ? (
            <AnimateIn>
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <p className="text-body-lg text-text-secondary">No posts yet.</p>
                <p className="text-body-sm text-text-muted">Check back soon.</p>
              </div>
            </AnimateIn>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <AnimateIn key={post.slug} delay={0.05 * Math.min(i, 5)}>
                  <BlogCard {...post} className="h-full" />
                </AnimateIn>
              ))}
            </div>
          )}
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
