import { HashLink } from "@/components/hash-link"
import { socialLinks } from "@/lib/about"
import { contactEmail, eventVenue, eventWhenLabel } from "@/lib/site"

const pageLinks = [
  { href: "/#about", label: "About" },
  { href: "/#apply", label: "Apply" },
  { href: "/#previous-hackathons", label: "Previous Hackathons" },
] as const

const societyLinks = [{ href: "/about", label: "Our story" }] as const

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
] as const

export function SiteFooter() {
  return (
    <footer className="colophon">
      <div className="colophon-inner">
        <div className="colophon-brand">
          <p className="colophon-brand-mark">DUWiT Hacks</p>
          <p className="colophon-brand-copy">
            Durham University Women in Tech · Edition III · {eventWhenLabel}
          </p>
          <p className="colophon-venue">
            <span>{eventVenue.departments}</span>
            <span>{eventVenue.university}</span>
            <span>{eventVenue.campus}</span>
          </p>
          <p className="colophon-contact">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>

        <div className="colophon-grid">
          <section className="colophon-group" aria-labelledby="footer-pages">
            <h2 id="footer-pages">Pages</h2>
            <ul>
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <HashLink href={link.href}>{link.label}</HashLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="colophon-group" aria-labelledby="footer-society">
            <h2 id="footer-society">Society</h2>
            <ul>
              {societyLinks.map((link) => (
                <li key={link.href}>
                  <HashLink href={link.href}>{link.label}</HashLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="colophon-group" aria-labelledby="footer-connect">
            <h2 id="footer-connect">Connect</h2>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="colophon-group" aria-labelledby="footer-legal">
            <h2 id="footer-legal">Legal</h2>
            <ul>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  )
}
