'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { services } from '@/lib/services-data'

export { services }

export function ServicesSection() {
  return (
    <SectionWrapper id="services" aria-labelledby="services-heading">
      <div className="mb-16 flex flex-col gap-4 max-w-2xl">
        <AnimateIn>
          <p className="overline">What We Do</p>
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <h2 id="services-heading" className="font-display text-display-lg text-text-primary text-balance">
            Four disciplines. One obsession: your{' '}
            <span className="text-accent italic">results.</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-body-lg text-text-secondary max-w-xl">
            We don&apos;t dilute our focus with 17 services. We master four —
            and deliver outcomes that justify every pound of the investment.
          </p>
        </AnimateIn>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={fadeUp}>
            <ServiceCard {...service} className="h-full" />
          </motion.div>
        ))}
      </motion.div>

      <AnimateIn delay={0.1} className="mt-12 flex justify-center">
        <LinkButton href="/services" variant="secondary" size="md">
          Explore All Services
        </LinkButton>
      </AnimateIn>
    </SectionWrapper>
  )
}
