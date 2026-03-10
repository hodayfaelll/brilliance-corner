'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/animations'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
}

export function AnimateIn({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      animate={isInView || shouldReduceMotion ? 'visible' : 'hidden'}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
