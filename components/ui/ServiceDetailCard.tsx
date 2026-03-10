import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'

interface Deliverable {
  label: string
  desc: string
}

interface ServiceDetailCardProps {
  icon: React.ReactNode
  title: string
  headline: string
  body: string[]
  deliverables: Deliverable[]
  outcomes: string[]
  ideal: string
  index: number
}

export function ServiceDetailCard({
  icon,
  title,
  headline,
  body,
  deliverables,
  ideal,
  index,
}: ServiceDetailCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 ${isEven ? '' : 'lg:[direction:rtl]'}`}>
      {/* Text column */}
      <div className={`flex flex-col gap-6 ${isEven ? '' : 'lg:[direction:ltr]'}`}>
        <AnimateIn>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent shrink-0">
              {icon}
            </div>
            <p className="overline">{title}</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <h2 className="font-display text-display-lg text-text-primary text-balance">
            {headline}
          </h2>
        </AnimateIn>
        {body.map((paragraph, i) => (
          <AnimateIn key={i} delay={0.08 + i * 0.04}>
            <p className="text-body-lg text-text-secondary">{paragraph}</p>
          </AnimateIn>
        ))}
        <AnimateIn delay={0.15}>
          <div className="rounded-sm border-l-2 border-accent pl-4 py-1">
            <p className="text-body-sm text-text-secondary">
              <span className="text-text-primary font-medium">Best for: </span>
              {ideal}
            </p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.18}>
          <LinkButton href="/contact" variant="primary" size="md" className="w-fit">
            Discuss This Service
          </LinkButton>
        </AnimateIn>
      </div>

      {/* Deliverables column */}
      <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
        <AnimateIn>
          <h3 className="font-display text-display-md text-text-primary mb-6">
            What&apos;s included
          </h3>
        </AnimateIn>
        <ul className="flex flex-col gap-4" role="list">
          {deliverables.map((d, i) => (
            <AnimateIn key={d.label} delay={0.06 * i}>
              <li className="flex gap-4 rounded border border-border bg-surface p-4 transition-colors duration-200 hover:border-accent/30">
                <span className="mt-0.5 h-5 w-5 shrink-0 flex items-center justify-center rounded-sm bg-accent/10 text-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-body-base font-medium text-text-primary">{d.label}</span>
                  <span className="text-body-sm text-text-secondary">{d.desc}</span>
                </div>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </div>
  )
}
