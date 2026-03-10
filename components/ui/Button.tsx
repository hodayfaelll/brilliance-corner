import { cn } from '@/lib/utils'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  children: React.ReactNode
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
  href: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 font-ui font-medium transition-all duration-200 ease-expo-out focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent-hover hover:shadow-gold-strong active:scale-[0.98]',
  secondary:
    'border border-accent text-accent hover:bg-accent/10 active:scale-[0.98]',
  ghost:
    'text-text-secondary hover:text-text-primary underline-offset-4 hover:underline',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-sm',
  md: 'px-6 py-3 text-base rounded-sm',
  lg: 'px-8 py-4 text-lg rounded-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span className="opacity-0 select-none" aria-hidden>
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  )
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 absolute"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
