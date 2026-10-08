import { SiteFooter } from "@/components/site-footer"
import { StarBackdrop } from "@/components/star-backdrop"
import type { ReactNode } from "react"

export function DocLayout({
  title,
  meta,
  children,
}: {
  title: string
  meta?: string
  children: ReactNode
}) {
  return (
    <>
      <main className="legal-page">
        <StarBackdrop />
        <article className="legal-doc">
          <header className="legal-hero">
            <h1 className="legal-title">{title}</h1>
            {meta ? <p className="legal-updated">{meta}</p> : null}
          </header>
          {children}
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
