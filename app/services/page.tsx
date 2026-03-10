import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { LinkButton } from '@/components/ui/Button'
import { ServiceDetailCard } from '@/components/ui/ServiceDetailCard'
import { services } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Copywriting, social media management, SEO & backlinks, and web design — four disciplines delivered at the standard your brand deserves.',
}

const serviceDetails = [
  {
    id: 'copywriting',
    headline: 'Copy that closes.',
    body: [
      'Most website copy commits one fatal sin: it talks about the brand instead of the buyer. It lists features while the reader is silently asking "what does this mean for me?" We write from the inside of your prospect\'s mind outward — entering the conversation already happening there.',
      'Every word we write is pressure-tested against a single question: does this move the reader one step closer to yes? Clever copy without conversion is just expensive decoration. We do not separate beautiful from effective.',
    ],
    deliverables: [
      { label: 'Website & Landing Pages', desc: 'Homepage, service pages, and campaign landing pages written to convert cold traffic.' },
      { label: 'Email Sequences', desc: 'Welcome series, nurture flows, and sales sequences that build trust and drive revenue.' },
      { label: 'Ad Creative', desc: 'Headlines and hooks for Meta, Google, and LinkedIn ads — tested to stop the scroll.' },
      { label: 'Brand Voice Guidelines', desc: 'A documented voice and tone system so every piece of content sounds unmistakably you.' },
      { label: 'Case Studies & Whitepapers', desc: 'In-depth proof documents that move enterprise buyers through long decision cycles.' },
    ],
    ideal: 'SaaS founders, e-commerce brands, and professional service firms who know their product is strong but their words are not doing it justice.',
  },
  {
    id: 'social-media',
    headline: 'Presence that builds pipeline.',
    body: [
      'Social media has two modes: performative and strategic. Performative is posting for the sake of posting — chasing trends, recycling templates, measuring success by likes. Strategic is building a content ecosystem that makes your ideal client trust you before they ever speak to you.',
      'We build the second kind. Every post is positioned to demonstrate authority, build trust, or move a specific segment of your audience toward a specific action. We don\'t celebrate vanity metrics. We celebrate discovery calls.',
    ],
    deliverables: [
      { label: 'Content Strategy', desc: 'Monthly content architecture mapped to your sales funnel and audience awareness levels.' },
      { label: 'Caption & Copy Production', desc: 'Platform-native writing for LinkedIn, Instagram, and X that sounds human, not templated.' },
      { label: 'Community Management', desc: 'Proactive engagement with comments, DMs, and industry conversations on your behalf.' },
      { label: 'Visual Direction', desc: 'Art direction for your visual content so every post looks like premium brand marketing.' },
      { label: 'Monthly Performance Reports', desc: 'Clear reporting on metrics that actually map to business outcomes — not just engagement.' },
    ],
    ideal: 'Founders, personal brands, and businesses whose audiences live on social media but whose current content does not reflect the standard they operate at.',
  },
  {
    id: 'seo',
    headline: 'Search visibility that compounds.',
    body: [
      'Paid traffic rents your audience. SEO buys it. The difference becomes catastrophic at scale — a well-executed SEO strategy generates leads at a cost per acquisition that drops every month while ad costs rise.',
      'We build search visibility the right way: technical foundations first, then content that answers real questions your buyers are asking, then authority signals that tell Google you are the definitive source. No shortcuts. No link schemes. Just a compounding asset.',
    ],
    deliverables: [
      { label: 'Technical SEO Audit', desc: 'Full crawl analysis, Core Web Vitals fixes, schema markup, and indexation health.' },
      { label: 'Keyword & Content Strategy', desc: 'Mapping your ideal client\'s search journey to a content plan that captures them at every stage.' },
      { label: 'On-Page Optimisation', desc: 'Title tags, meta descriptions, heading structure, and internal linking — systematically optimised.' },
      { label: 'Authority Link Building', desc: 'White-hat outreach to earn placements on publications your prospects already read and trust.' },
      { label: 'Monthly SEO Reporting', desc: 'Ranking movement, organic traffic trends, and conversion tracking — every metric tied to revenue.' },
    ],
    ideal: 'Businesses that have spent on ads and want to build something they own. Founders who understand compounding and want to apply that logic to marketing.',
  },
  {
    id: 'web-design',
    headline: 'A website that earns its place.',
    body: [
      'Your website is not a brochure. It is a 24/7 sales representative, a trust signal, and the single most visited piece of marketing you own. Most websites fail at all three because they were built to look good in a screenshot — not to perform in the real world.',
      'We design and build websites that do both. Premium visual execution built on Next.js, optimised for Core Web Vitals, and engineered to convert. We don\'t hand you a template and a login. We hand you a competitive weapon.',
    ],
    deliverables: [
      { label: 'UI/UX Design', desc: 'Full design direction — layout, typography, colour, motion — tailored to your brand and audience.' },
      { label: 'Next.js Development', desc: 'Production-grade builds: App Router, SSG, TypeScript, and Tailwind CSS for performance and maintainability.' },
      { label: 'Mobile-First & CWV-Optimised', desc: 'Built to pass Core Web Vitals with LCP < 2.5s, CLS < 0.1, and INP < 200ms.' },
      { label: 'SEO Infrastructure', desc: 'Sitemap, robots.txt, canonical tags, JSON-LD, and OpenGraph — fully implemented from day one.' },
      { label: 'CMS or MDX Integration', desc: 'A content system that lets you publish without a developer — blog, case studies, or portfolio.' },
    ],
    ideal: 'Founders and brands who have outgrown their current website and know they need something that reflects the quality of what they actually deliver.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <SectionWrapper as="div" size="xl" className="pt-32 border-b border-border/50">
          <div className="max-w-3xl flex flex-col gap-6">
            <AnimateIn>
              <p className="overline">Our Services</p>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h1 className="font-display text-display-xl text-text-primary text-balance">
                Four disciplines. Delivered at the standard your brand{' '}
                <span className="text-accent italic">deserves.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-body-lg text-text-secondary max-w-2xl">
                We don&apos;t offer 17 services and half-deliver all of them.
                We master four — and bring the same obsessive precision to
                each engagement, regardless of scope.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15} className="flex flex-wrap gap-3 pt-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-body-sm text-text-secondary hover:border-accent/50 hover:text-accent transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {s.title}
                </a>
              ))}
            </AnimateIn>
          </div>
        </SectionWrapper>

        {/* Service detail sections */}
        {serviceDetails.map((detail, i) => {
          const service = services.find((s) => s.id === detail.id)!
          return (
            <SectionWrapper
              key={detail.id}
              id={detail.id}
              aria-labelledby={`${detail.id}-heading`}
              className={i % 2 === 1 ? 'bg-surface-raised/30' : ''}
            >
              <ServiceDetailCard
                icon={service.icon}
                title={service.title}
                headline={detail.headline}
                body={detail.body}
                deliverables={detail.deliverables}
                outcomes={service.outcomes}
                ideal={detail.ideal}
                index={i}
              />
            </SectionWrapper>
          )
        })}

        {/* CTA section */}
        <SectionWrapper size="md" className="border-t border-border/50 bg-surface-raised/20">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <AnimateIn>
              <p className="overline">Ready to Begin?</p>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h2 className="font-display text-display-lg text-text-primary text-balance">
                Let&apos;s build something that{' '}
                <span className="text-accent italic">outperforms</span> the competition.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-body-lg text-text-secondary">
                Tell us about your project. We&apos;ll come back with a clear,
                honest assessment and a plan — no sales theatrics, no generic proposals.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15} className="flex flex-col sm:flex-row gap-4">
              <LinkButton href="/contact" size="lg">
                Start a Project
              </LinkButton>
              <LinkButton href="/blog" size="lg" variant="secondary">
                Read Our Insights
              </LinkButton>
            </AnimateIn>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
