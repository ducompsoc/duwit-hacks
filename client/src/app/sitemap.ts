import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { blogEnabled } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const entries: MetadataRoute.Sitemap = [
    {
      url: "https://duwithacks.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]

  if (!blogEnabled) return entries

  const posts = getAllPosts()

  return [
    ...entries,
    {
      url: "https://duwithacks.com/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `https://duwithacks.com/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
