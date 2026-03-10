'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { testimonials } from '@/lib/testimonials-data'

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-accent text-accent" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.figure
      ref={ref}
      variants={shouldReduceMotion ? undefined : fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={shouldReduceMotion ? undefined : { transitionDelay: `${index * 0.12}s` }}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-border-focus"
    >
      {/* Quote mark */}
      <svg
        className="h-8 w-8 shrink-0 text-accent/40"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden
      >
        <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.8C8.4 11.6 9.978 10 12 10l-2-2zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.2C22.4 11.6 23.978 10 26 10l-2-2z" />
      </svg>

      {/* Quote */}
      <blockquote>
        <p className="text-body-base text-text-secondary leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Stars */}
      <StarRating />

      {/* Attribution */}
      <figcaption className="mt-auto flex items-center gap-4 border-t border-border/60 pt-6">
        {/* Avatar */}
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarGradient}`}
          aria-hidden
        >
          <span className="text-label font-semibold text-white">{testimonial.initials}</span>
        </div>
        <div>
          <div className="text-body-sm font-semibold text-text-primary">{testimonial.name}</div>
          <div className="text-body-sm text-text-muted">
            {testimonial.title}, {testimonial.company}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  )
}

export function TestimonialsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-24 sm:py-32 bg-surface"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" aria-hidden />

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
            Client Stories
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mt-3 font-display text-display-md text-text-primary"
          >
            What our clients say
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mt-4 text-body-lg text-text-secondary"
          >
            We measure success by the results our clients achieve — and what they say when those results arrive.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
