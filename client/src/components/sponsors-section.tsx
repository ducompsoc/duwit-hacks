import { Reveal } from "@/components/reveal"
import { forSponsors } from "@/lib/about"

export function SponsorsSection() {
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
        </Reveal>
      </div>
    </section>
  )
}
