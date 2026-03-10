import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactForm } from '@/components/sections/ContactForm'
import { getLatestPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'The Brilliance Corner — Premium Digital Marketing Agency',
  description:
    'We craft compelling copy, social media strategies, and SEO campaigns for founders and brands who refuse to settle for average.',
  alternates: { canonical: 'https://thebrilliance.co' },
}

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3)

  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        {latestPosts.length > 0 && <BlogSection posts={latestPosts} />}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
