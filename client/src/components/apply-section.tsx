import { Reveal } from "@/components/reveal"
import { Uplink } from "@/components/uplink"
import { aboutSections } from "@/lib/about"

export function ApplySection() {
  return (
    <section className="apply-band" id="apply" aria-labelledby="apply-heading">
      <div className="apply-band-inner">
        <Reveal>
          <header className="apply-band-head">
            <p className="apply-band-kicker">DUWiT Hacks III · {aboutSections.theme.title}</p>
            <h2 id="apply-heading" className="apply-band-title">
              Apply for 2027
            </h2>
            <p className="apply-band-lead">
              Early 2027 — Exact dates TBC. Join the waitlist and we&apos;ll be in touch.
            </p>
          </header>
        </Reveal>
        <Reveal delay={120}>
          <div className="apply-band-form">
            <Uplink />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
