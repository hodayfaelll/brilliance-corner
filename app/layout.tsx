import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import { OrganizationJsonLd } from '@/components/seo/JsonLd'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? ''

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thebrilliancecorner.com'),
  title: {
    default: 'The Brilliance Corner — Premium Digital Marketing Agency',
    template: '%s | The Brilliance Corner',
  },
  description:
    'We craft compelling copy, social media strategies, and SEO campaigns for founders and brands who refuse to settle for average. Results-obsessed. Beautifully delivered.',
  keywords: ['digital marketing', 'copywriting', 'SEO', 'social media', 'content marketing', 'agency'],
  authors: [{ name: 'The Brilliance Corner' }],
  creator: 'The Brilliance Corner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The Brilliance Corner',
    title: 'The Brilliance Corner — Premium Digital Marketing Agency',
    description:
      'We craft compelling copy, social media strategies, and SEO campaigns for founders and brands who refuse to settle for average.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brilliance Corner — Premium Digital Marketing Agency',
    description:
      'We craft compelling copy, social media strategies, and SEO campaigns for founders and brands who refuse to settle for average.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  ...(GSC_VERIFICATION && {
    verification: { google: GSC_VERIFICATION },
  }),
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <OrganizationJsonLd />
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        {children}
        {/* Google Analytics 4 — loaded after interactive, never blocks render */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
