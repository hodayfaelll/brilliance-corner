'use client'

import { useState, useId } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { AnimateIn } from '@/components/ui/AnimateIn'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FieldError {
  name?: string
  email?: string
  message?: string
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''

export function ContactFormInner() {
  const id = useId()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FieldError>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  function validate(data: FormData): FieldError {
    const errs: FieldError = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name) errs.name = 'Your name is required.'
    if (!email) errs.email = 'Your email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Please enter a valid email address.'
    if (!message) errs.message = 'A message is required.'
    else if (message.length < 20) errs.message = 'Please write at least 20 characters.'
    return errs
  }

  function handleBlur(field: keyof FieldError) {
    setTouched((t) => ({ ...t, [field]: true }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const validationErrors = validate(data)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setTouched({ name: true, email: true, message: true })
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      data.set('access_key', WEB3FORMS_KEY)
      data.set('subject', `New project inquiry from ${data.get('name')}`)
      data.set('from_name', 'The Brilliance Corner Website')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()

      if (json.success) {
        setStatus('success')
        form.reset()
        setTouched({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimateIn>
      <form
        onSubmit={handleSubmit}
        role="form"
        aria-label="Project inquiry form"
        noValidate
        className="flex flex-col gap-5"
      >
        {/* Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" aria-hidden tabIndex={-1} />

        {/* Banners */}
        {status === 'success' && (
          <div
            role="alert"
            aria-live="polite"
            className="flex items-start gap-3 rounded border border-success bg-success/10 px-4 py-3 text-success text-body-sm"
          >
            <svg className="h-4 w-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Message sent! We&apos;ll be in touch within 24 hours.</span>
          </div>
        )}
        {status === 'error' && (
          <div
            role="alert"
            aria-live="assertive"
            className="flex items-start gap-3 rounded border border-error bg-error/10 px-4 py-3 text-error text-body-sm"
          >
            <svg className="h-4 w-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span>Something went wrong. Please try again or email us directly.</span>
          </div>
        )}

        {/* Two-column row: name + email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            id={`${id}-name`}
            name="name"
            label="Your Name"
            type="text"
            autoComplete="name"
            required
            error={touched.name ? errors.name : undefined}
            onBlur={() => handleBlur('name')}
          />
          <Field
            id={`${id}-email`}
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            required
            error={touched.email ? errors.email : undefined}
            onBlur={() => handleBlur('email')}
          />
        </div>

        <Field
          id={`${id}-company`}
          name="company"
          label="Company or Brand"
          type="text"
          autoComplete="organization"
          placeholder="Optional"
        />

        {/* Service interest */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${id}-service`} className="text-body-sm font-medium text-text-secondary">
            Service of interest
          </label>
          <select
            id={`${id}-service`}
            name="service"
            className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-body-base text-text-primary focus:outline-none focus:border-accent transition-colors duration-200 hover:border-border-focus/50"
          >
            <option value="">Select a service…</option>
            <option value="copywriting">Copywriting</option>
            <option value="social-media">Social Media Management</option>
            <option value="seo">SEO &amp; Backlinks</option>
            <option value="web-design">Web Design &amp; Development</option>
            <option value="multiple">Multiple services / not sure yet</option>
          </select>
          <div className="min-h-[1.25rem]" />
        </div>

        <Field
          id={`${id}-message`}
          name="message"
          label="Tell us about your project"
          as="textarea"
          required
          rows={5}
          error={touched.message ? errors.message : undefined}
          onBlur={() => handleBlur('message')}
          placeholder="What are you working on? What outcomes matter most to you?"
        />

        <Button
          type="submit"
          size="lg"
          isLoading={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          Send Message
        </Button>

        <p className="text-body-sm text-text-muted">
          We respond within 24 hours, Monday to Friday.
          Your information is never shared or sold.
        </p>
      </form>
    </AnimateIn>
  )
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  error?: string
  as?: 'input' | 'textarea'
  rows?: number
}

function Field({ id, name, label, error, as = 'input', rows, required, ...props }: FieldProps) {
  const inputClass = cn(
    'w-full rounded-sm border bg-surface px-4 py-3 text-body-base text-text-primary placeholder:text-text-muted',
    'transition-colors duration-200',
    'focus:outline-none focus:border-accent',
    error ? 'border-error' : 'border-border hover:border-border-focus/50'
  )

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm font-medium text-text-secondary">
        {label}
        {required && (
          <span className="ml-1 text-accent" aria-label="required">*</span>
        )}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={cn(inputClass, 'resize-none')}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          name={name}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={inputClass}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      <div className="min-h-[1.25rem]">
        {error && (
          <p id={`${id}-error`} role="alert" className="text-body-sm text-error">{error}</p>
        )}
      </div>
    </div>
  )
}
