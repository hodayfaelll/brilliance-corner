import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// ─── Callout ───────────────────────────────────────────────────────────────
type CalloutType = 'info' | 'warning' | 'tip' | 'important'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

const calloutStyles: Record<CalloutType, { container: string; icon: React.ReactNode }> = {
  info: {
    container: 'border-border bg-surface-raised text-text-secondary',
    icon: (
      <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
  },
  tip: {
    container: 'border-success/40 bg-success/5 text-text-secondary',
    icon: (
      <svg className="h-4 w-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  warning: {
    container: 'border-accent/40 bg-accent/5 text-text-secondary',
    icon: (
      <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  important: {
    container: 'border-error/40 bg-error/5 text-text-secondary',
    icon: (
      <svg className="h-4 w-4 text-error shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[type]
  return (
    <aside
      className={cn(
        'not-prose my-6 flex gap-3 rounded border p-4 text-body-sm leading-relaxed',
        style.container
      )}
    >
      {style.icon}
      <div className="flex flex-col gap-1 min-w-0">
        {title && (
          <p className="font-medium text-text-primary">{title}</p>
        )}
        <div>{children}</div>
      </div>
    </aside>
  )
}

// ─── Image with caption ─────────────────────────────────────────────────────
interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export function BlogImage({ src, alt, caption, width = 1200, height = 630 }: BlogImageProps) {
  return (
    <figure className="not-prose my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full rounded border border-border"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-body-sm text-text-muted italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// ─── Key Takeaway box ───────────────────────────────────────────────────────
export function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded border-l-4 border-accent bg-accent/5 px-6 py-4">
      <p className="text-label text-accent uppercase tracking-widest font-medium mb-2">Key Takeaway</p>
      <div className="text-body-base text-text-primary font-medium leading-relaxed">{children}</div>
    </div>
  )
}

// ─── MDX component map ───────────────────────────────────────────────────────
export const mdxComponents: MDXComponents = {
  // Override default elements for better styling
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href ?? '#'} {...props}>
        {children}
      </Link>
    )
  },
  // Custom components available in MDX
  Callout,
  BlogImage,
  KeyTakeaway,
}
