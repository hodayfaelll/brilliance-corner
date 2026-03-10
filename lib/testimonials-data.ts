export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  company: string
  initials: string
  avatarGradient: string
  projectId: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-mitchell',
    quote:
      'I have worked with three agencies before The Brilliance Corner. None of them came close. They understood our positioning before we even briefed them properly, moved at a pace that honestly shocked us, and the copy they delivered was sharper than anything we had written internally over five years. Our demo pipeline doubled in month one.',
    name: 'Sarah Mitchell',
    title: 'CEO',
    company: 'Apex Consulting Group',
    initials: 'SM',
    avatarGradient: 'from-[#8B7EC8] to-[#5A4E9A]',
    projectId: 'apex-consulting',
  },
  {
    id: 'james-al-rashid',
    quote:
      'We handed them a broken website and a vague brief. What came back was a premium, fast, beautifully designed site that genuinely represents the quality of our work for the first time. The attention to detail — from the typography to the booking flow — was exceptional. Enquiries jumped within the first week of going live.',
    name: 'James Al-Rashid',
    title: 'Founder & Creative Director',
    company: 'Luxe Living Interiors',
    initials: 'JA',
    avatarGradient: 'from-[#C9A84C] to-[#8C6E28]',
    projectId: 'luxe-living',
  },
  {
    id: 'priya-nair',
    quote:
      'Our SEO had been neglected for years and it showed. The team at The Brilliance Corner ran the most thorough audit we had ever seen, explained everything in plain language, and then executed flawlessly. Fourteen months later we rank on page one for our top 12 keywords and organic is now our highest-converting channel.',
    name: 'Priya Nair',
    title: 'Head of Growth',
    company: 'NovaTech Solutions',
    initials: 'PN',
    avatarGradient: 'from-[#4A9E7F] to-[#2D6B55]',
    projectId: 'novatech',
  },
]
