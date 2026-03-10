'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { heroSequence, heroItem, decorativeLine, fadeIn } from '@/lib/animations'
import { LinkButton } from '@/components/ui/Button'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-svh flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background texture layer */}
      <motion.div
        variants={shouldReduceMotion ? undefined : fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.06),transparent)]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-content text-center">
        <motion.div
          variants={shouldReduceMotion ? undefined : heroSequence}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Overline */}
          <motion.p
            variants={shouldReduceMotion ? undefined : heroItem}
            className="overline"
          >
            Premium Digital Marketing Agency
          </motion.p>

          {/* Gold decorative line */}
          <motion.div
            variants={shouldReduceMotion ? undefined : decorativeLine}
            className="w-16 h-px bg-accent"
            aria-hidden
          />

          {/* Headline */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : heroItem}
            className="font-display text-display-xl text-text-primary text-balance max-w-4xl"
          >
            Marketing That{' '}
            <span className="text-accent italic">Performs</span>{' '}
            as Brilliantly as It{' '}
            <span className="relative inline-block">
              Looks
              <motion.span
                variants={shouldReduceMotion ? undefined : decorativeLine}
                className="absolute -bottom-1 left-0 right-0 h-px bg-accent/60"
                aria-hidden
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={shouldReduceMotion ? undefined : heroItem}
            className="text-body-lg text-text-secondary max-w-2xl text-balance"
          >
            We craft compelling copy, social media strategies, and SEO campaigns
            for founders and brands who refuse to settle for average.
            Results-obsessed. Beautifully delivered.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={shouldReduceMotion ? undefined : heroItem}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <LinkButton href="/#contact" size="lg">
              Start a Project
            </LinkButton>
            <LinkButton href="/#services" size="lg" variant="secondary">
              See Our Services
            </LinkButton>
          </motion.div>

          {/* Social proof micro-line */}
          <motion.p
            variants={shouldReduceMotion ? undefined : heroItem}
            className="text-body-sm text-text-muted mt-4"
          >
            Trusted by SaaS founders, e-commerce brands &amp; content creators
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={shouldReduceMotion ? undefined : fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-label text-text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
