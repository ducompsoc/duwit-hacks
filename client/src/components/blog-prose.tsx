import { marked } from "marked"

marked.setOptions({
  gfm: true,
  breaks: false,
})

export function BlogProse({ content }: { content: string }) {
  const html = marked.parse(content) as string

  return <div className="blog-prose" dangerouslySetInnerHTML={{ __html: html }} />
}
