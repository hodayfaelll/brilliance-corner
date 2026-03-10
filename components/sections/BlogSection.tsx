'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BlogCard, type BlogCardProps } from '@/components/ui/BlogCard'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'
import { staggerContainer, fadeUp } from '@/lib/animations'

interface BlogSectionProps {
  posts: BlogCardProps[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <SectionWrapper
      id="blog"
      aria-labelledby="blog-heading"
      className="bg-surface-raised/40"
    >
      {/* Header */}
      <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4 max-w-xl">
          <AnimateIn>
            <p className="overline">Insights</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2 id="blog-heading" className="font-display text-display-lg text-text-primary text-balance">
              Ideas worth{' '}
              <span className="text-accent italic">stealing.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-body-base text-text-secondary">
              Practical marketing insights for founders who want the edge, not the fluff.
            </p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15} className="shrink-0">
          <LinkButton href="/blog" variant="secondary" size="sm">
            View All Posts
          </LinkButton>
        </AnimateIn>
      </div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={fadeUp}>
            <BlogCard {...post} className="h-full" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
