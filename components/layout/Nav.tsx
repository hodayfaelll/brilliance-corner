'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LinkButton } from '@/components/ui/Button'
import { mobileMenuOverlay, mobileMenuLinks, mobileMenuLink } from '@/lib/animations'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeMenu])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/'
    if (href === '/blog') return pathname === '/blog' || pathname.startsWith('/blog/')
    return pathname === href
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-300',
          isScrolled
            ? 'bg-bg/90 backdrop-blur-sm border-b border-border/60 shadow-[0_1px_0_rgba(42,42,42,0.5)]'
            : 'bg-transparent'
        )}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="mx-auto flex h-full max-w-content items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
          >
            <span className="font-display text-lg text-text-primary leading-none">
              The<span className="text-accent"> Brilliance</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-body-sm font-medium transition-colors duration-200 pb-0.5',
                    isActive(link.href)
                      ? 'text-text-primary border-b border-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <LinkButton href="/#contact" size="sm" variant="primary">
              Start a Project
            </LinkButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              className="block h-px w-6 bg-text-primary origin-center"
              animate={isOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            />
            <motion.span
              className="block h-px w-6 bg-text-primary"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
            />
            <motion.span
              className="block h-px w-6 bg-text-primary origin-center"
              animate={isOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={shouldReduceMotion ? undefined : mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-bg/95 backdrop-blur-md md:hidden"
            onClick={(e) => e.target === e.currentTarget && closeMenu()}
          >
            <motion.ul
              variants={shouldReduceMotion ? undefined : mobileMenuLinks}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-2"
              role="list"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={shouldReduceMotion ? undefined : mobileMenuLink}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'block min-h-[48px] px-8 flex items-center text-2xl font-display font-bold transition-colors duration-200',
                      isActive(link.href) ? 'text-accent' : 'text-text-primary hover:text-accent'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={shouldReduceMotion ? undefined : mobileMenuLink} className="mt-6">
                <LinkButton href="/#contact" size="lg" onClick={closeMenu}>
                  Start a Project
                </LinkButton>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
