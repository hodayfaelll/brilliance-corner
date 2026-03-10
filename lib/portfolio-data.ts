export interface PortfolioItem {
  id: string
  company: string
  industry: string
  service: string
  serviceId: 'web-design' | 'seo' | 'copywriting' | 'social-media'
  headline: string
  description: string
  metric: string
  metricLabel: string
  tags: string[]
  gradient: string
  accentColor: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'luxe-living',
    company: 'Luxe Living Interiors',
    industry: 'Interior Design Studio',
    service: 'Web Design',
    serviceId: 'web-design',
    headline: 'A conversion-focused website that turned browsers into buyers',
    description:
      'Luxe Living came to us with a dated WordPress site that failed to reflect the premium quality of their work. We designed and built a bespoke Next.js website from scratch — immersive full-bleed galleries, a seamless consultation booking flow, and copy that positioned them as the definitive choice for high-end residential projects.',
    metric: '+340%',
    metricLabel: 'Increase in consultation bookings within 60 days',
    tags: ['UI/UX Design', 'Next.js Development', 'Conversion Optimisation', 'Copywriting'],
    gradient: 'from-[#1A1410] via-[#2C1F0E] to-[#1A1410]',
    accentColor: '#C9A84C',
  },
  {
    id: 'novatech',
    company: 'NovaTech Solutions',
    industry: 'B2B SaaS',
    service: 'SEO & Backlinks',
    serviceId: 'seo',
    headline: 'From 800 to 14,200 monthly organic visitors in under 6 months',
    description:
      'NovaTech had a strong product but zero organic visibility. We ran a full technical audit, eliminated 47 critical crawl errors, rebuilt their content architecture around high-intent keywords, and executed a white-hat link building campaign that secured 38 DR 60+ placements. Their domain authority jumped from 18 to 41.',
    metric: '1,675%',
    metricLabel: 'Growth in monthly organic traffic',
    tags: ['Technical SEO', 'Link Building', 'Content Strategy', 'Keyword Research'],
    gradient: 'from-[#0E1A1A] via-[#0E2020] to-[#0E1A1A]',
    accentColor: '#4A9E7F',
  },
  {
    id: 'apex-consulting',
    company: 'Apex Consulting Group',
    industry: 'Management Consulting',
    service: 'Copywriting',
    serviceId: 'copywriting',
    headline: 'A complete brand voice overhaul that doubled demo requests',
    description:
      'Apex were losing deals to competitors despite being the stronger offer — because their copy sounded like every other consultancy. We rewrote their homepage, services pages, and 6-email nurture sequence with sharp, authority-driven copy that spoke directly to their ideal client\'s pain points. The result was impossible to ignore.',
    metric: '2×',
    metricLabel: 'Demo requests in the first month post-launch',
    tags: ['Website Copy', 'Email Sequences', 'Brand Voice', 'Lead Nurture'],
    gradient: 'from-[#0F0F1A] via-[#141428] to-[#0F0F1A]',
    accentColor: '#8B7EC8',
  },
  {
    id: 'wild-harvest',
    company: 'The Wild Harvest Co.',
    industry: 'Organic Food & Wellness',
    service: 'Social Media',
    serviceId: 'social-media',
    headline: 'Built a 23K community and a social channel that drives real revenue',
    description:
      'The Wild Harvest Co. had a beautiful product and zero social strategy. We built their content playbook from scratch — a consistent editorial voice, weekly content batching, and a community engagement system. Within four months their Instagram became their top-performing acquisition channel, driving 31% of all e-commerce revenue.',
    metric: '23K',
    metricLabel: 'Engaged followers gained in 4 months',
    tags: ['Content Strategy', 'Instagram Growth', 'Community Management', 'Content Production'],
    gradient: 'from-[#0F1A0E] via-[#142010] to-[#0F1A0E]',
    accentColor: '#6DAF5A',
  },
]
