"use client"

import { Reveal } from "@/components/reveal"
import { storyChapters } from "@/lib/about"
import { clamp } from "@/lib/motion"
import { type CSSProperties, useEffect, useState } from "react"

function useStoryBorn() {
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

export function StorySections() {
  const born = useStoryBorn()

  return (
    <section className="page-band page-band--about" id="about" aria-labelledby="about-heading">
      <div
        className="page-band-inner page-band-inner--wide about-birth"
        style={{ "--about-born": born } as CSSProperties}
      >
        <header className="page-band-head">
          <h2 id="about-heading" className="page-band-title">
            About DUWiT Hacks
          </h2>
        </header>

        <div className="story-panels">
          {storyChapters.map((chapter, index) => (
            <article key={chapter.id} className="story-panel" aria-labelledby={`${chapter.id}-heading`}>
              <Reveal delay={index * 50}>
                <h3 id={`${chapter.id}-heading`} className="story-panel-title">
                  {chapter.title}
                </h3>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="story-paragraph">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
