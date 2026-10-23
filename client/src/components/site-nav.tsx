"use client"

import { HashLink } from "@/components/hash-link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { href: "/", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#sponsors", id: "sponsors", label: "Sponsors" },
  { href: "/#mailinglist", id: "mailinglist", label: "Mailing list" },
  { href: "/#previous-hackathons", id: "previous-hackathons", label: "Previous Hackathons" },
] as const

const scrollSectionIds = ["about", "sponsors", "mailinglist", "previous-hackathons"] as const

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") {
      setActive(null)
      return
    }

    const nodes = scrollSectionIds
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
            const current = pathname === "/" && active === link.id
            return (
              <HashLink
                key={link.href}
                href={link.href}
                className="site-nav-link"
                aria-current={current ? "true" : undefined}
              >
                {link.label}
              </HashLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
