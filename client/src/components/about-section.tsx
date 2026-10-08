"use client"

import { type CSSProperties, useEffect, useState } from "react"
import { HashLink } from "@/components/hash-link"
import { Reveal } from "@/components/reveal"
import {
  homeAboutBody,
  homeAboutEligibility,
  homeAboutLead,
  manifestoQuote,
  societyPillars,
} from "@/lib/about"
import { clamp } from "@/lib/motion"

function useAboutBorn() {
  const [born, setBorn] = useState(1)

  useEffect(() => {
    const launch = document.querySelector<HTMLElement>(".launch")
    if (!launch || launch.dataset.static === "true") {
      setBorn(1)
      return
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBorn(1)
      return
    }

    let frame = 0
    const tick = () => {
      const rect = launch.getBoundingClientRect()
      const distance = rect.height - window.innerHeight
      const warp = distance > 0 ? clamp(-rect.top / distance, 0, 1) : 1
      setBorn(clamp((warp - 0.9) / 0.1, 0, 1))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return born
}

export function AboutSection() {
  const born = useAboutBorn()

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div
        className="about-inner about-birth"
        style={{ "--about-born": born } as CSSProperties}
      >
        <header className="about-head">
          <p className="about-kicker">New here?</p>
          <h2 id="about-heading" className="about-title">
            About DUWiT
          </h2>
          <p className="about-lead">{homeAboutLead}</p>
          <p className="about-intro">{homeAboutBody}</p>
          <p className="about-eligibility">{homeAboutEligibility}</p>
        </header>

        <Reveal delay={80}>
          <blockquote className="about-quote">
            <p>{manifestoQuote}</p>
          </blockquote>
        </Reveal>

        <ul className="about-pillars">
          {societyPillars.map((pillar, index) => (
            <li key={pillar.title}>
              <Reveal delay={120 + index * 90}>
                <h3 className="about-pillar-title">{pillar.title}</h3>
                <p>{pillar.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={160}>
          <div className="about-actions">
            <HashLink className="about-cta about-cta--primary" href="#mailinglist">
              Join the mailing list
            </HashLink>
            <HashLink className="about-cta" href="/about">
              Read the full story
            </HashLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
