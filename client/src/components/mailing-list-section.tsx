import { Reveal } from "@/components/reveal"
import { Uplink } from "@/components/uplink"
import { editionThemeTitle, forAttendees } from "@/lib/about"

export function MailingListSection() {
  return (
    <section className="page-band mailing-list-band" id="mailinglist" aria-labelledby="mailinglist-heading">
      <div className="mailing-list-band-inner">
        <Reveal>
          <header className="mailing-list-band-head">
            <p className="mailing-list-band-kicker">DUWiT Hacks III · {editionThemeTitle}</p>
            <h2 id="mailinglist-heading" className="page-band-title mailing-list-band-title">
              Mailing list
            </h2>
            <p className="page-band-lead mailing-list-band-lead">{forAttendees.body}</p>
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
