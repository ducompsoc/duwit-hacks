import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BlogProse } from "@/components/blog-prose"
import { BlogShell } from "@/components/blog-shell"
import { formatPostDate, getAllSlugs, getPostBySlug } from "@/lib/blog"
import { blogEnabled } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  if (!blogEnabled) return []
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `https://duwithacks.com/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  if (!blogEnabled) notFound()

  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "DUWiT Hacks",
      url: "https://duwithacks.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://duwithacks.com/blog/${post.slug}`,
    },
  }

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="blog-main blog-main--article">
        <Link href="/blog" className="blog-back">
          ← All posts
        </Link>

        <header className="blog-article-header">
          <div className="blog-card-meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.authorType === "guest" ? <span className="blog-badge">Guest</span> : null}
          </div>
          <h1 className="blog-article-title">{post.title}</h1>
          <p className="blog-article-deck">{post.description}</p>
        </header>

        <article className="blog-article-body">
          <BlogProse content={post.content} />
        </article>

        <footer className="blog-author-card">
          <p className="blog-kicker">{post.authorType === "guest" ? "Guest author" : "Author"}</p>
          <p className="font-display mt-2 text-lg text-white">{post.author}</p>
          {post.authorBio ? <p className="blog-author-bio">{post.authorBio}</p> : null}
        </footer>
      </main>
    </BlogShell>
  )
}
