"use client"

import Link from "next/link"

export function BlogNav({ active }: { active?: "blog" }) {
  return (
    <header className="site-nav">
      <Link className="site-nav-brand" href="/">
        DUWiT
      </Link>
      <nav className="site-nav-links" aria-label="Site">
        <Link href="/">Home</Link>
        <Link href="/blog" aria-current={active === "blog" ? "page" : undefined}>
          Blog
        </Link>
      </nav>
    </header>
  )
}
