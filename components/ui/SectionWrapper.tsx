import { cn } from '@/lib/utils'

type Size = 'sm' | 'md' | 'lg' | 'xl'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  size?: Size
  as?: React.ElementType
  id?: string
  'aria-labelledby'?: string
}

const verticalPadding: Record<Size, string> = {
  sm: 'py-section-sm',
  md: 'py-section-md',
  lg: 'py-section-lg',
  xl: 'py-section-xl',
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  size = 'lg',
  as: Tag = 'section',
  id,
  'aria-labelledby': ariaLabelledby,
}: SectionWrapperProps) {
  return (
    <Tag id={id} aria-labelledby={ariaLabelledby} className={cn(verticalPadding[size], 'px-4 sm:px-6 lg:px-8', className)}>
      <div className={cn('mx-auto w-full max-w-content', innerClassName)}>{children}</div>
    </Tag>
  )
}
