import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type BlogAuthorType = "team" | "guest"

export type BlogPostMeta = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorBio?: string
  authorType: BlogAuthorType
  published: boolean
  tags?: string[]
}

export type BlogPost = BlogPostMeta & {
  content: string
}

function parsePost(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw)

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "DUWiT Hacks"),
    authorBio: data.authorBio ? String(data.authorBio) : undefined,
    authorType: data.authorType === "guest" ? "guest" : "team",
    published: data.published !== false,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    content: content.trim(),
  }
}

export function getAllPosts(includeDrafts = false): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "")
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
      return parsePost(slug, raw)
    })
    .filter((post) => includeDrafts || post.published)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug: string, includeDrafts = false): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return undefined

  const post = parsePost(slug, fs.readFileSync(filePath, "utf8"))
  if (!includeDrafts && !post.published) return undefined

  return post
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T12:00:00`)
  if (Number.isNaN(parsed.getTime())) return date

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed)
}
