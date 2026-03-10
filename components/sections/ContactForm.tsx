import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'
import { ContactFormInner } from './ContactFormInner'

export function ContactForm() {
  return (
    <SectionWrapper id="contact" aria-labelledby="contact-heading" className="border-t border-border/50">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6">
          <AnimateIn>
            <p className="overline">Get in Touch</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2 id="contact-heading" className="font-display text-display-lg text-text-primary text-balance">
              Ready to build something{' '}
              <span className="text-accent italic">exceptional?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-body-lg text-text-secondary">
              Tell us about your project. We&apos;ll review it within 24 hours
              and come back with a clear plan — no generic proposals, no wasted calls.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <ul className="flex flex-col gap-3 mt-2" role="list">
              {[
                { label: 'Response time', value: 'Within 24 hours' },
                { label: 'First meeting', value: 'Free 30-min strategy call' },
                { label: 'Engagement style', value: 'Retainer or project-based' },
              ].map(({ label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-body-base text-text-secondary">
                    <span className="text-text-primary font-medium">{label}:</span>{' '}
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <LinkButton href="/contact" variant="secondary" size="sm" className="w-fit mt-2">
              Visit Contact Page
            </LinkButton>
          </AnimateIn>
        </div>
        <ContactFormInner />
      </div>
    </SectionWrapper>
  )
}
