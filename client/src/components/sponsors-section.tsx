import { Reveal } from "@/components/reveal"
import { forSponsors } from "@/lib/about"
import { contactEmail } from "@/lib/site"

export function SponsorsSection() {
  const sponsorMail = `mailto:${contactEmail}?subject=${encodeURIComponent("DUWiT Hacks sponsorship")}`

  return (
    <section className="page-band page-band--sponsors" id="sponsors" aria-labelledby="sponsors-heading">
      <div className="page-band-inner page-band-inner--wide">
        <Reveal>
          <header className="page-band-head">
            <h2 id="sponsors-heading" className="page-band-title">
              {forSponsors.title}
            </h2>
          </header>
          <p className="page-band-lead">{forSponsors.body}</p>
          <div className="about-actions">
            <a className="about-cta about-cta--primary" href={sponsorMail}>
              Email {contactEmail}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
