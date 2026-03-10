// Service data — no 'use client' directive so it can be used from both server and client components

export interface ServiceData {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  outcomes: string[]
}

export const services: ServiceData[] = [
  {
    id: 'web-design',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: 'Web Design',
    description:
      'Your website is your most permanent first impression. We design and build fast, beautiful, conversion-optimised websites that look like the premium brand you are — and perform like the growth engine you need.',
    outcomes: [
      'Premium UI/UX design',
      'Next.js development (fast, SEO-ready)',
      'Mobile-first, CWV-optimised',
      'CMS or MDX content system',
    ],
  },
  {
    id: 'copywriting',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: 'Copywriting',
    description:
      'Words that convert. From website copy and email sequences to ad creative and brand voice — every sentence engineered to move your ideal customer closer to yes.',
    outcomes: [
      'Website & landing page copy',
      'Email sequences & newsletters',
      'Ad creative & social captions',
      'Brand voice guidelines',
    ],
  },
  {
    id: 'seo',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO & Backlinks',
    description:
      'Sustainable search visibility that compounds over time. Technical audits, content strategy, and authority link building rooted in your business goals — not vanity metrics.',
    outcomes: [
      'Technical SEO audit & fixes',
      'Keyword strategy & content plan',
      'On-page optimisation',
      'Authority link building',
    ],
  },
  {
    id: 'social-media',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: 'Social Media',
    description:
      'Content that builds communities and drives pipeline. Strategic calendars, scroll-stopping visuals, and community management that turns followers into clients.',
    outcomes: [
      'Content strategy & calendars',
      'Copywriting & caption production',
      'Community management',
      'Monthly performance reporting',
    ],
  },
]
