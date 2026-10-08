import { Reveal } from "@/components/reveal"
import { Uplink } from "@/components/uplink"
import { aboutSections } from "@/lib/about"
import { eventWhenLabel } from "@/lib/site"

export function MailingListSection() {
  return (
    <section className="mailing-list-band" id="mailinglist" aria-labelledby="mailinglist-heading">
      <div className="mailing-list-band-inner">
        <Reveal>
          <header className="mailing-list-band-head">
            <p className="mailing-list-band-kicker">DUWiT Hacks III · {aboutSections.theme.title}</p>
            <h2 id="mailinglist-heading" className="mailing-list-band-title">
              Join the mailing list
            </h2>
            <p className="mailing-list-band-lead">{eventWhenLabel}. Sign up and we&apos;ll be in touch.</p>
          </header>
        </Reveal>
        <Reveal delay={120}>
          <div className="mailing-list-band-form">
            <Uplink />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
