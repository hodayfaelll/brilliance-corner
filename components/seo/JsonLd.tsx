const BASE_URL = 'https://thebrilliancecorner.com'

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'The Brilliance Corner',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
          width: 200,
          height: 60,
        },
        description:
          'Premium digital marketing agency offering copywriting, social media management, SEO, and web design services.',
        sameAs: [
          'https://www.instagram.com/thebrilliancecorner/',
          'https://www.facebook.com/thebrilliancecorner/',
          'https://www.linkedin.com/company/thebrilliancecorner/',
          'https://x.com/thebrilliancecorner/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'The Brilliance Corner',
        publisher: { '@id': `${BASE_URL}/#organization` },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
        name: 'The Brilliance Corner',
        url: BASE_URL,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        priceRange: '$$$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        serviceType: ['Copywriting', 'Social Media Management', 'SEO', 'Web Design'],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  publishedDate: string
  slug: string
  category: string
}

export function ArticleJsonLd({ title, description, publishedDate, slug, category }: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: 'Hodayfa',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'The Brilliance Corner',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
    url: `${BASE_URL}/blog/${slug}`,
    articleSection: category,
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
