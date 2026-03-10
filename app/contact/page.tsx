import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { ContactFormInner } from '@/components/sections/ContactFormInner'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Tell us about your project. We'll review it within 24 hours and come back with a clear plan — no generic proposals, no wasted calls.",
}

const faqs = [
  {
    q: 'How quickly do you respond?',
    a: 'Every inquiry is reviewed and responded to within 24 hours, Monday to Friday. You will receive a real, considered reply — not an automated acknowledgement.',
  },
  {
    q: 'Do you take on one-off projects or retainers only?',
    a: 'Both. We handle project-based work (website builds, launch copy, one-off audits) and monthly retainers for ongoing SEO, social media, and content. We will recommend the right model for your goals.',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'A website build typically takes 4–8 weeks from brief to launch. Copywriting projects range from 1–3 weeks depending on scope. SEO is an ongoing engagement with initial traction visible in 60–90 days.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We work with clients across the GCC, Europe, and North America. All work is conducted in English, and we are available across multiple time zones.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <SectionWrapper as="div" size="xl" className="pt-32">
          {/* Page header */}
          <div className="mb-16 max-w-2xl flex flex-col gap-4">
            <AnimateIn>
              <p className="overline">Get in Touch</p>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h1 className="font-display text-display-xl text-text-primary text-balance">
                Ready to build something{' '}
                <span className="text-accent italic">exceptional?</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-body-lg text-text-secondary max-w-xl">
                Tell us about your project. We&apos;ll review it within 24 hours
                and come back with a clear, honest plan — no generic proposals,
                no wasted calls.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_420px] lg:gap-20">
            {/* Form */}
            <ContactFormInner />

            {/* Sidebar */}
            <aside className="flex flex-col gap-10">
              {/* Details */}
              <AnimateIn>
                <div className="flex flex-col gap-5">
                  <h2 className="font-display text-display-md text-text-primary">
                    What to expect
                  </h2>
                  <ul className="flex flex-col gap-4" role="list">
                    {[
                      {
                        icon: (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        label: 'Response time',
                        value: 'Within 24 hours',
                      },
                      {
                        icon: (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        ),
                        label: 'First meeting',
                        value: 'Free 30-min strategy call',
                      },
                      {
                        icon: (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                          </svg>
                        ),
                        label: 'Engagement style',
                        value: 'Retainer or project-based',
                      },
                    ].map(({ icon, label, value }) => (
                      <li key={label} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
                          {icon}
                        </span>
                        <span className="text-body-base text-text-secondary">
                          <span className="text-text-primary font-medium">{label}:</span>{' '}
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              {/* Divider */}
              <div className="h-px bg-border" aria-hidden />

              {/* FAQ */}
              <AnimateIn>
                <div className="flex flex-col gap-5">
                  <h2 className="font-display text-display-md text-text-primary">
                    Common questions
                  </h2>
                  <dl className="flex flex-col gap-5">
                    {faqs.map(({ q, a }) => (
                      <div key={q} className="flex flex-col gap-2">
                        <dt className="text-body-base font-medium text-text-primary">{q}</dt>
                        <dd className="text-body-sm text-text-secondary leading-relaxed">{a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </AnimateIn>
            </aside>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
