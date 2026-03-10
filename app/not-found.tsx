import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { LinkButton } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex min-h-svh flex-col items-center justify-center px-4 pt-16 text-center">
        <p className="overline mb-4">404</p>
        <h1 className="font-display text-display-xl text-text-primary mb-4">Page not found.</h1>
        <p className="text-body-lg text-text-secondary mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <LinkButton href="/">Back to Home</LinkButton>
          <LinkButton href="/blog" variant="secondary">Read the Blog</LinkButton>
        </div>
      </main>
      <Footer />
    </>
  )
}
