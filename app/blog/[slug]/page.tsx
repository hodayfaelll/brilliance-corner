import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { BlogPostLayout } from '@/components/layout/BlogPostLayout'
import { ArticleJsonLd } from '@/components/seo/JsonLd'
import { mdxComponents } from '@/components/mdx/MdxComponents'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Hodayfa'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(params.slug, 3)

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        publishedDate={post.date}
        slug={post.slug}
        category={post.category}
      />
      <BlogPostLayout post={post} relatedPosts={relatedPosts}>
        <MDXRemote source={post.content} components={mdxComponents} />
      </BlogPostLayout>
    </>
  )
}
