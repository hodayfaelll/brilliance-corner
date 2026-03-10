import { cn } from '@/lib/utils'

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  outcomes: string[]
  className?: string
}

export function ServiceCard({ icon, title, description, outcomes, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col gap-5 rounded border border-border bg-surface p-8',
        'transition-all duration-300 ease-expo-out',
        'hover:border-accent/40 hover:bg-surface-raised hover:shadow-gold card-hover',
        className
      )}
    >
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/15">
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-display-md text-text-primary leading-tight">
          {title}
        </h3>
        <p className="text-body-base text-text-secondary">{description}</p>
      </div>

      {/* Outcomes */}
      <ul className="flex flex-col gap-2 mt-auto" role="list">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2 text-body-sm text-text-secondary">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {outcome}
          </li>
        ))}
      </ul>

      {/* Hover accent line */}
      <span
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
    </article>
  )
}
