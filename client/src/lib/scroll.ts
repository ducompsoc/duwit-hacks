export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

const SCROLL_TO_KEY = "duwit-scroll-to"

export const NAV_LOCK_EVENT = "duwit-nav-lock"
export const NAV_UNLOCK_EVENT = "duwit-nav-unlock"

let programmatic = false
let finishGeneration = 0
let finishTimer = 0
let scrollFrame = 0
let pendingHomeScroll: string | null = null

export function isProgrammaticScroll() {
  return programmatic
}

export function beginProgrammaticScroll() {
  programmatic = true
  finishGeneration += 1
  window.cancelAnimationFrame(scrollFrame)
  window.clearTimeout(finishTimer)
  window.dispatchEvent(new Event(NAV_LOCK_EVENT))
}

function finishProgrammatic(generation: number) {
  if (generation !== finishGeneration) return
  window.cancelAnimationFrame(scrollFrame)
  window.clearTimeout(finishTimer)
  programmatic = false
  window.dispatchEvent(new Event(NAV_UNLOCK_EVENT))
}

export function endProgrammaticScroll() {
  finishProgrammatic(finishGeneration)
}

function scrollPaddingTop() {
  const value = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)
  return Number.isFinite(value) ? value : 0
}

function animateScrollTo(top: number) {
  const target = Math.max(0, top)
  beginProgrammaticScroll()
  const generation = finishGeneration
  const reduce = prefersReducedMotion()
  const start = window.scrollY
  const dist = target - start

  if (reduce || Math.abs(dist) < 2) {
    window.scrollTo(0, target)
    finishProgrammatic(generation)
    return
  }

  const duration = Math.min(1500, Math.max(700, Math.abs(dist) * 0.5))
  let startTime = 0

  const step = (now: number) => {
    if (generation !== finishGeneration) return
    if (!startTime) startTime = now
    const t = Math.min(1, (now - startTime) / duration)
    const eased = 1 - (1 - t) ** 3
    window.scrollTo(0, start + dist * eased)
    if (t < 1) {
      scrollFrame = window.requestAnimationFrame(step)
      return
    }
    finishProgrammatic(generation)
  }

  scrollFrame = window.requestAnimationFrame(step)
  finishTimer = window.setTimeout(() => finishProgrammatic(generation), duration + 250)
}

export function requestHomeScroll(id: string) {
  pendingHomeScroll = id
  try {
    sessionStorage.setItem(SCROLL_TO_KEY, id)
  } catch {
    /* storage can be blocked */
  }
}

export function peekHomeScroll() {
  if (pendingHomeScroll) return pendingHomeScroll
  try {
    return sessionStorage.getItem(SCROLL_TO_KEY)
  } catch {
    return null
  }
}

export function clearHomeScroll() {
  pendingHomeScroll = null
  try {
    sessionStorage.removeItem(SCROLL_TO_KEY)
  } catch {
    /* storage can be blocked */
  }
}

export function scrollToId(id: string) {
  const node = document.getElementById(id)
  if (!node) return false
  animateScrollTo(window.scrollY + node.getBoundingClientRect().top - scrollPaddingTop())
  return true
}

export function scrollHomeTop() {
  animateScrollTo(0)
}

export function scrollPageTop() {
  window.scrollTo({ top: 0, behavior: "auto" })
}
