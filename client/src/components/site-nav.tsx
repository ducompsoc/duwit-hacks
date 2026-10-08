"use client"

import { HashLink } from "@/components/hash-link"
import { mailingListNavLabel } from "@/lib/site"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { href: "/", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#mailinglist", id: "mailinglist", label: mailingListNavLabel },
  { href: "/#previous-hackathons", id: "previous-hackathons", label: "Previous", full: "Previous Hackathons" },
  { href: "/about", id: "story", label: "Our story" },
] as const

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname === "/about" ? "story" : null)
      return
    }

    const nodes = ["about", "mailinglist", "previous-hackathons"]
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    const atHero = () => window.scrollY < window.innerHeight * 0.45

    const observer = new IntersectionObserver(
      (entries) => {
        if (atHero()) {
          setActive("home")
          return
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0.08, 0.2, 0.4, 0.7] },
    )

    const onScroll = () => {
      if (atHero()) setActive("home")
    }

    for (const node of nodes) observer.observe(node)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [pathname])

  const storyCurrent = pathname === "/about"

  return (
    <header className={`site-nav${open ? " is-open" : ""}`}>
      <div className="site-nav-bar">
        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="site-nav-toggle-bars" aria-hidden="true" />
        </button>

        <nav
          id="site-nav-menu"
          className={`site-nav-links${open ? " is-open" : ""}`}
          aria-label="Primary"
          onClick={() => setOpen(false)}
        >
          {links.map((link) => {
            const current = link.id === "story" ? storyCurrent : pathname === "/" && active === link.id
            return (
              <HashLink
                key={link.href}
                href={link.href}
                className="site-nav-link"
                aria-current={current ? (link.id === "story" ? "page" : "true") : undefined}
              >
                {"full" in link ? (
                  <>
                    <span className="site-nav-link-full">{link.full}</span>
                    <span className="site-nav-link-short">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </HashLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
