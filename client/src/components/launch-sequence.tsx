"use client"

import { type CSSProperties, useEffect, useRef } from "react"
import { Beam } from "@/components/beam"
import { Uplink } from "@/components/uplink"
import { WarpField, type WarpSignal } from "@/components/warp-field"
import { bump, clamp, ease, progress } from "@/lib/motion"

const TITLE = ["D", "U", "W", "i", "T"]
const LIVE_AT = 0.84

function Orbit({ id, className }: { id: string; className: string }) {
  return (
    <div className={className}>
      <div className="orbit-plane">
        <svg className="orbit-svg" viewBox="0 0 200 200">
          <defs>
            <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff4d6" />
              <stop offset="0.32" stopColor="#ffbf38" />
              <stop offset="0.58" stopColor="#9c6b1f" />
              <stop offset="0.8" stopColor="#ffd97a" />
              <stop offset="1" stopColor="#fff4d6" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="97"
            fill="none"
            stroke="#ffe7a9"
            strokeOpacity="0.35"
            strokeWidth="0.35"
            strokeDasharray="0.6 3.4"
          />
          <circle
            className="orbit-draw"
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={`url(#${id}-gold)`}
            strokeWidth="2.2"
            pathLength={100}
          />
          <circle
            className="orbit-draw"
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#fff8e6"
            strokeOpacity="0.75"
            strokeWidth="0.5"
            pathLength={100}
          />
          <circle cx="100" cy="100" r="84" fill="none" stroke="#cf83ce" strokeOpacity="0.45" strokeWidth="0.4" />
          <circle
            className="orbit-sats"
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#fff4d6"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeDasharray="0.01 33.32"
            pathLength={100}
          />
        </svg>
      </div>
    </div>
  )
}

export function LaunchSequence() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const signal = useRef<WarpSignal>({ speed: 0 })
  const liveRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    if (!section || !stage) return

    const paint = (p: number) => {
      const warp = ease.inOutCubic(progress(p, 0.02, 0.5))
      const zoom = ease.inQuart(progress(p, 0.04, 0.48))
      const drop = progress(p, 0.5, 0.64)
      const reveal = ease.inOutCubic(progress(p, 0.6, 0.76))
      const speed = warp * (1 - drop)

      const vars: Record<string, string | number> = {
        "--p": p,
        "--title-scale": 1 + zoom * 8,
        "--title-alpha": 1 - progress(p, 0.2, 0.44),
        "--ghost": progress(p, 0.04, 0.26) * (1 - progress(p, 0.36, 0.46)),
        "--ring-scale": 1 + warp * 3.4,
        "--ring-tilt": `${68 + warp * 18}deg`,
        "--ring-alpha": 1 - progress(p, 0.28, 0.48),
        "--flash": bump(p, 0.5, 0.07),
        "--arrive": ease.outCubic(progress(p, 0.5, 0.7)),
        "--lockup": ease.outCubic(progress(p, 0.56, 0.72)),
        "--reveal": reveal,
        "--scan": Math.sin(reveal * Math.PI),
        "--output": progress(p, 0.78, 0.86),
      }
      for (const key in vars) stage.style.setProperty(key, String(vars[key]))

      signal.current.speed = speed

      stage.dataset.moved = String(p > 0.004)
      const live = p >= LIVE_AT
      stage.dataset.live = String(live)
      liveRef.current = live
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.static = "true"
      paint(1)
      return
    }

    const targetProgress = () => {
      const rect = section.getBoundingClientRect()
      const distance = rect.height - window.innerHeight
      return distance > 0 ? clamp(-rect.top / distance) : 1
    }

    let shown = -1
    let painted = -1
    let last = 0
    let frameId = 0

    const frame = (now: number) => {
      const dt = last ? Math.min(64, now - last) : 16.67
      last = now
      const target = targetProgress()

      if (shown < 0) shown = target
      else shown += (target - shown) * (1 - 0.84 ** (dt / 16.67))
      if (Math.abs(target - shown) < 0.0004) shown = target

      if (shown !== painted) {
        paint(shown)
        painted = shown
      }
      frameId = requestAnimationFrame(frame)
    }

    frameId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(frameId)
  }, [])

  function jumpToEnd(behavior: ScrollBehavior) {
    const section = sectionRef.current
    if (!section) return
    const rect = section.getBoundingClientRect()
    window.scrollTo({ top: window.scrollY + rect.top + rect.height - window.innerHeight, behavior })
  }

  function skip() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    jumpToEnd(reduce ? "auto" : "smooth")
  }

  return (
    <>
      <WarpField signal={signal} />
      <div className="warp-grain" aria-hidden="true" />

      <section ref={sectionRef} className="launch" aria-labelledby="launch-title">
        <div ref={stageRef} className="launch-stage" data-moved="false" data-live="false">
          <h1 id="launch-title" className="sr-only">
            DUWiT Hacks 2027 — Durham University Women in Tech
          </h1>

          <div className="rig" aria-hidden="true">
            <div className="rig-inner">
              <div className="rig-core">
                <Orbit id="orbit-back" className="orbit orbit-back" />
                <div className="title-lock">
                  <p className="title" data-text="DUWiT">
                    {TITLE.map((letter, i) => (
                      <span key={i} className="title-letter" style={{ "--i": i } as CSSProperties}>
                        {letter}
                      </span>
                    ))}
                  </p>
                  <p className="title-sub">HACKS 2027</p>
                </div>
                <Orbit id="orbit-front" className="orbit orbit-front" />
                <p className="title-tag">Durham University Women in Tech</p>
              </div>
            </div>
          </div>

          <div className="launch-flash" aria-hidden="true" />
          <Beam />

          <div className="launch-hint">
            <div className="launch-hint-inner">
              <button type="button" className="launch-skip" onClick={skip}>
                Scroll to Apply
              </button>
            </div>
          </div>

          <div className="arrival">
            <div
              className="uplink-dock"
              onFocus={() => {
                if (!liveRef.current) jumpToEnd("auto")
              }}
            >
              <div className="uplink-reveal">
                <Uplink />
              </div>
              <span className="uplink-scan" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
