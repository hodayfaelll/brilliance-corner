import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'

const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '3×', label: 'Average ROI' },
  { value: '4.9', label: 'Client Satisfaction' },
  { value: '48h', label: 'Response Guarantee' },
]

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface-raised/40 border-t border-border/50"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <AnimateIn>
            <p className="overline">About Us</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2 id="about-heading" className="font-display text-display-lg text-text-primary text-balance">
              We believe boring marketing is{' '}
              <span className="text-accent italic">expensive.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-body-lg text-text-secondary">
              The Brilliance Corner was built for one reason: too many talented
              founders were invisible. Not because their product was weak — but
              because their marketing didn&apos;t match their ambition.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-body-base text-text-secondary">
              We fix that. With sharp copy, strategic social content, and SEO
              that compounds — we make sure the right people find you, and the
              right message converts them.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <LinkButton href="/#contact" variant="secondary" size="md" className="w-fit">
              Work With Us
            </LinkButton>
          </AnimateIn>
        </div>

        {/* Right: stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map(({ value, label }, i) => (
            <AnimateIn key={label} delay={0.1 * i}>
              <div className="flex flex-col gap-2 rounded border border-border bg-surface p-6">
                <span className="font-display text-display-lg text-accent leading-none">{value}</span>
                <span className="text-body-sm text-text-secondary">{label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
