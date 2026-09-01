import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BlogShell } from "@/components/blog-shell"
import { formatPostDate, getAllPosts } from "@/lib/blog"
import { blogEnabled } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, tips, and guest voices from the DUWiT Hacks community.",
  openGraph: {
    title: "Blog | DUWiT Hacks",
    description: "Articles, tips, and guest voices from the DUWiT Hacks community.",
    url: "https://duwithacks.com/blog",
    type: "website",
  },
}

export default function BlogIndexPage() {
  if (!blogEnabled) notFound()

  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <BlogShell active="blog">
      <main className="blog-main">
        <header className="blog-hero">
          <p className="blog-kicker">Transmission log</p>
          <h1 className="blog-title">Stories from the mission</h1>
          <p className="blog-lead">
            Hackathon tips, community highlights, and occasional guest articles — written for search and for people
            discovering DUWiT Hacks.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="blog-empty">No posts yet. Check back soon.</p>
        ) : (
          <div className="blog-grid">
            {featured ? (
              <article className="blog-card blog-card--featured">
                <div className="blog-card-meta">
                  <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                  {featured.authorType === "guest" ? <span className="blog-badge">Guest</span> : null}
                </div>
                <h2>
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.description}</p>
                <p className="blog-card-author">By {featured.author}</p>
              </article>
            ) : null}

            {rest.length > 0 ? (
              <ul className="blog-list">
                {rest.map((post) => (
                  <li key={post.slug}>
                    <article className="blog-card">
                      <div className="blog-card-meta">
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                        {post.authorType === "guest" ? <span className="blog-badge">Guest</span> : null}
                      </div>
                      <h2>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p>{post.description}</p>
                      <p className="blog-card-author">By {post.author}</p>
                    </article>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </main>
    </BlogShell>
  )
}
