'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { portfolioItems } from '@/lib/portfolio-data'

const serviceColors: Record<string, string> = {
  'web-design': 'text-accent border-accent/30 bg-accent/10',
  seo: 'text-[#4A9E7F] border-[#4A9E7F]/30 bg-[#4A9E7F]/10',
  copywriting: 'text-[#8B7EC8] border-[#8B7EC8]/30 bg-[#8B7EC8]/10',
  'social-media': 'text-[#6DAF5A] border-[#6DAF5A]/30 bg-[#6DAF5A]/10',
}

function PortfolioCard({ item, index }: { item: (typeof portfolioItems)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      variants={shouldReduceMotion ? undefined : fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={shouldReduceMotion ? undefined : { transitionDelay: `${index * 0.1}s` }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-focus"
    >
      {/* Visual header */}
      <div className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-end p-6 overflow-hidden`}>
        {/* Decorative circles */}
        <div
          className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-10"
          style={{ background: item.accentColor }}
        />
        <div
          className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10"
          style={{ background: item.accentColor }}
        />
        {/* Metric callout */}
        <div className="relative z-10">
          <div
            className="text-4xl font-display font-bold leading-none tracking-tight"
            style={{ color: item.accentColor }}
          >
            {item.metric}
          </div>
          <div className="mt-1 text-body-sm text-text-secondary">{item.metricLabel}</div>
        </div>
        {/* Service badge */}
        <span
          className={`absolute right-5 top-5 rounded-full border px-3 py-1 text-label font-medium ${serviceColors[item.serviceId]}`}
        >
          {item.service}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-label text-text-muted uppercase tracking-widest">{item.industry}</p>
          <h3 className="mt-1 font-display text-xl text-text-primary leading-snug">{item.company}</h3>
        </div>
        <p className="text-body-sm font-medium text-text-primary leading-snug">{item.headline}</p>
        <p className="text-body-sm text-text-secondary leading-relaxed">{item.description}</p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-raised px-2.5 py-1 text-label text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function PortfolioSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-16 max-w-2xl"
        >
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="text-label font-medium uppercase tracking-widest text-accent"
          >
            Our Work
          </motion.p>
          <motion.h2
            id="portfolio-heading"
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mt-3 font-display text-display-md text-text-primary"
          >
            Results that speak for themselves
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mt-4 text-body-lg text-text-secondary"
          >
            Every project starts with a goal. Here is what happens when strategy, craft, and execution come together.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
