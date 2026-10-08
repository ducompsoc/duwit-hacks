"use client"

import { prefersReducedMotion } from "@/lib/scroll"
import { useEffect } from "react"

const SPEED_PX_PER_SEC = 800
const RELEASE_DECAY = 14
const REDUCE_STEP_RATIO = 0.9

function shouldIgnoreTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return true
  if (target.isContentEditable) return true
  const tag = target.tagName
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON") return true
  if (target.closest("[role='dialog'], [aria-modal='true']")) return true
  return false
}

function isArrow(key: string): key is "ArrowUp" | "ArrowDown" {
  return key === "ArrowUp" || key === "ArrowDown"
}

function scroller() {
  return document.scrollingElement ?? document.documentElement
}

export function KeyboardPageScroll() {
  useEffect(() => {
    let held: "ArrowUp" | "ArrowDown" | null = null
    let y = 0
    let velocity = 0
    let frame = 0
    let last = 0

    function maxY() {
      const node = scroller()
      return Math.max(0, node.scrollHeight - window.innerHeight)
    }

    function write(next: number) {
      y = Math.max(0, Math.min(maxY(), next))
      scroller().scrollTop = y
    }

    function stopLoop() {
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      last = 0
      document.documentElement.style.overflowAnchor = ""
    }

    function tick(now: number) {
      const dt = last === 0 ? 1 / 60 : Math.min(1 / 30, (now - last) / 1000)
      last = now

      if (held) {
        velocity = held === "ArrowDown" ? SPEED_PX_PER_SEC : -SPEED_PX_PER_SEC
      } else {
        velocity *= Math.exp(-RELEASE_DECAY * dt)
        if (Math.abs(velocity) < 16) {
          velocity = 0
          stopLoop()
          return
        }
      }

      write(y + velocity * dt)

      if ((y <= 0 && velocity < 0) || (y >= maxY() && velocity > 0)) {
        velocity = 0
        if (!held) {
          stopLoop()
          return
        }
      }

      frame = window.requestAnimationFrame(tick)
    }

    function startLoop() {
      if (frame) return
      document.documentElement.style.overflowAnchor = "none"
      last = 0
      frame = window.requestAnimationFrame(tick)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey) return
      if (!isArrow(event.key)) return
      if (shouldIgnoreTarget(event.target)) return

      event.preventDefault()
      if (event.repeat) return

      if (prefersReducedMotion()) {
        const step = Math.round(window.innerHeight * REDUCE_STEP_RATIO)
        y = scroller().scrollTop
        write(y + (event.key === "ArrowDown" ? step : -step))
        return
      }

      held = event.key
      y = scroller().scrollTop
      startLoop()
    }

    function onKeyUp(event: KeyboardEvent) {
      if (event.key === held) held = null
    }

    function onBlur() {
      held = null
    }

    window.addEventListener("keydown", onKeyDown, { capture: true })
    window.addEventListener("keyup", onKeyUp)
    window.addEventListener("blur", onBlur)
    return () => {
      stopLoop()
      window.removeEventListener("keydown", onKeyDown, { capture: true })
      window.removeEventListener("keyup", onKeyUp)
      window.removeEventListener("blur", onBlur)
    }
  }, [])

  return null
}
