import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a free 30-minute strategy call. No pitch, no template questions — just a focused conversation about your situation, your goals, and where the real leverage is.',
  },
  {
    number: '02',
    title: 'Bespoke Proposal',
    description:
      'We send you a clear, specific proposal within 48 hours. Not a rate card — an actual plan that names the deliverables, the timeline, and the outcomes we are both accountable to.',
  },
  {
    number: '03',
    title: 'Aligned Execution',
    description:
      'Once aligned, we get to work. You receive regular progress updates, not just monthly reports. Every decision we make is tied back to your stated business objectives.',
  },
  {
    number: '04',
    title: 'Measure & Compound',
    description:
      'We review results with you, not at you. What worked, what we are improving, what the next 90 days look like. Every cycle compounds on the last.',
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-border/50 bg-surface-raised/20"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20 items-start">
        {/* Left: sticky label */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-24">
          <AnimateIn>
            <p className="overline">How We Work</p>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2 id="process-heading" className="font-display text-display-lg text-text-primary text-balance">
              No surprises. No{' '}
              <span className="text-accent italic">guesswork.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-body-base text-text-secondary">
              Every engagement follows a clear process designed to protect your time,
              eliminate ambiguity, and maximise results.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <LinkButton href="/contact" size="sm" variant="primary" className="w-fit mt-2">
              Start the Conversation
            </LinkButton>
          </AnimateIn>
        </div>

        {/* Right: steps */}
        <ol className="flex flex-col gap-0" role="list">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={0.08 * i}>
              <li className="flex gap-6 pb-10 last:pb-0 relative">
                {/* Vertical connector line */}
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-[1.375rem] top-10 bottom-0 w-px bg-border"
                    aria-hidden
                  />
                )}
                {/* Step number circle */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border bg-surface text-accent font-display font-bold text-sm z-10">
                  {step.number}
                </span>
                {/* Content */}
                <div className="flex flex-col gap-2 pt-1.5 pb-6">
                  <h3 className="font-display text-display-md text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-body-base text-text-secondary">{step.description}</p>
                </div>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  )
}
