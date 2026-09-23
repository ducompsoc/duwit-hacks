"use client"

import { type RefObject, useEffect, useRef } from "react"
import { clamp } from "@/lib/motion"

export type WarpSignal = { speed: number }

type Rgb = [number, number, number]
type Star = {
  x: number
  y: number
  z: number
  tint: number
  weight: number
  phase: number
  rate: number
  jitter: number
}

const STAR_RGB: Rgb[] = [
  [255, 244, 214],
  [255, 255, 255],
  [255, 191, 56],
  [207, 131, 206],
]
const STAR_HEX = ["#fff4d6", "#ffffff", "#ffbf38", "#cf83ce"]

const LOGO_SPARKLES = [
  { x: 0.18, y: 0.22, unit: 3, phase: 0.4 },
  { x: 0.78, y: 0.28, unit: 4, phase: 1.8 },
  { x: 0.88, y: 0.58, unit: 3, phase: 3.1 },
  { x: 0.14, y: 0.68, unit: 2, phase: 4.6 },
  { x: 0.42, y: 0.12, unit: 2, phase: 2.2 },
  { x: 0.62, y: 0.82, unit: 3, phase: 5.1 },
  { x: 0.08, y: 0.4, unit: 2, phase: 1.1 },
  { x: 0.92, y: 0.16, unit: 2, phase: 0.7 },
  { x: 0.7, y: 0.44, unit: 2, phase: 3.8 },
  { x: 0.3, y: 0.86, unit: 3, phase: 2.9 },
]

const NEBULAE = [
  { x: 0.16, y: 0.42, radius: 0.55, rgb: "95, 76, 155", alpha: 0.5 },
  { x: 0.86, y: 0.12, radius: 0.42, rgb: "174, 75, 126", alpha: 0.42 },
  { x: 0.64, y: 0.94, radius: 0.34, rgb: "255, 170, 22", alpha: 0.13 },
  { x: 0.5, y: 1.12, radius: 0.72, rgb: "41, 35, 152", alpha: 0.45 },
]

const SPRITE_PX = 128
const TWINKLE = 0.55
const GLOW = 5.2

function seeded(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function paintSprite(sprite: HTMLCanvasElement, color: Rgb) {
  const context = sprite.getContext("2d")
  if (!context) return
  const [r, g, b] = color
  const center = SPRITE_PX / 2
  const gradient = context.createRadialGradient(center, center, 0, center, center, center)
  gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`)
  gradient.addColorStop(0.06, `rgba(${r}, ${g}, ${b}, 0.95)`)
  gradient.addColorStop(0.14, `rgba(${r}, ${g}, ${b}, 0.5)`)
  gradient.addColorStop(0.28, `rgba(${r}, ${g}, ${b}, 0.16)`)
  gradient.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, 0.04)`)
  gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
  context.fillStyle = gradient
  context.fillRect(0, 0, SPRITE_PX, SPRITE_PX)
}

function paintLogoSparkle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  unit: number,
  alpha: number,
  color: string,
) {
  if (alpha <= 0.02) return
  const px = Math.round(x)
  const py = Math.round(y)
  const u = Math.max(1, Math.round(unit))
  const arm = u * 3
  ctx.globalAlpha = alpha
  ctx.fillStyle = color
  ctx.fillRect(px - arm, py, arm * 2 + u, u)
  ctx.fillRect(px, py - arm, u, arm * 2 + u)
  if (u >= 3) {
    const tick = Math.max(1, Math.round(u * 0.7))
    const inset = arm - u
    ctx.globalAlpha = alpha * 0.7
    ctx.fillRect(px - inset, py - inset, tick, tick)
    ctx.fillRect(px + inset, py - inset, tick, tick)
    ctx.fillRect(px - inset, py + inset, tick, tick)
    ctx.fillRect(px + inset, py + inset, tick, tick)
  }
}

function createSprites() {
  return STAR_RGB.map((color) => {
    const sprite = document.createElement("canvas")
    sprite.width = SPRITE_PX
    sprite.height = SPRITE_PX
    paintSprite(sprite, color)
    return sprite
  })
}

export function WarpField({ signal }: { signal: RefObject<WarpSignal> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const element = canvasRef.current
    const context = element?.getContext("2d", { alpha: false, desynchronized: true })
    if (!element || !context) return
    const canvas = element
    const ctx = context

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const random = seeded(2027)
    const sprites = createSprites()
    const stars: Star[] = []
    const streaks: number[][] = STAR_RGB.map(() => [])
    let nebula: HTMLCanvasElement | null = null
    let tunnel: HTMLCanvasElement | null = null
    let width = 0
    let height = 0
    let focal = 1
    let speed = 0
    let time = 0
    let last = 0
    let pending = 0
    let frameId = 0

    const place = (star: Star, z: number) => {
      const spanX = width / 2 / focal
      const spanY = height / 2 / focal
      star.x = (random() * 2 - 1) * spanX * z * 1.05
      star.y = (random() * 2 - 1) * spanY * z * 1.05
      star.z = z
      star.tint = Math.floor(random() * STAR_RGB.length)
      star.weight = random() < 0.22 ? 1.45 : 0.85 + random() * 0.4
      star.phase = random() * Math.PI * 2
      star.rate = 0.0011 + random() * 0.0016
      star.jitter = 0.75 + random() * 0.5
    }

    const paintLayer = (painter: (g: CanvasRenderingContext2D, w: number, h: number) => void) => {
      const layer = document.createElement("canvas")
      const w = Math.max(1, Math.ceil(width / 4))
      const h = Math.max(1, Math.ceil(height / 4))
      layer.width = w
      layer.height = h
      const g = layer.getContext("2d")
      if (!g) return null
      painter(g, w, h)
      return layer
    }

    const paintBackdrop = () => {
      nebula = paintLayer((g, w, h) => {
        for (const cloud of NEBULAE) {
          const r = cloud.radius * Math.max(w, h)
          const gradient = g.createRadialGradient(cloud.x * w, cloud.y * h, 0, cloud.x * w, cloud.y * h, r)
          gradient.addColorStop(0, `rgba(${cloud.rgb}, ${cloud.alpha})`)
          gradient.addColorStop(1, `rgba(${cloud.rgb}, 0)`)
          g.fillStyle = gradient
          g.fillRect(0, 0, w, h)
        }
      })

      tunnel = paintLayer((g, w, h) => {
        const glow = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.55)
        glow.addColorStop(0, "rgba(207, 131, 206, 0.62)")
        glow.addColorStop(0.45, "rgba(95, 76, 155, 0.34)")
        glow.addColorStop(1, "rgba(7, 5, 26, 0)")
        g.fillStyle = glow
        g.fillRect(0, 0, w, h)
      })
    }

    const project = (star: Star, cx: number, cy: number, z = star.z) => ({
      x: cx + (star.x * focal) / z,
      y: cy + (star.y * focal) / z,
    })

    const draw = (dt: number) => {
      time += dt
      const target = reduceMotion ? 0 : clamp(signal.current?.speed ?? 0)
      speed += (target - speed) * (1 - 0.88 ** (dt / 16.67))

      const cx = width / 2
      const cy = height / 2

      ctx.globalCompositeOperation = "source-over"
      ctx.globalAlpha = 1
      ctx.fillStyle = "#07051a"
      ctx.fillRect(0, 0, width, height)

      if (nebula) {
        const zoom = 1 + speed * 0.35
        ctx.globalAlpha = 0.92
        ctx.drawImage(nebula, cx - (width * zoom) / 2, cy - (height * zoom) / 2, width * zoom, height * zoom)
      }

      if (tunnel && speed > 0.02) {
        ctx.globalAlpha = speed * 0.78
        ctx.globalCompositeOperation = "lighter"
        ctx.drawImage(tunnel, 0, 0, width, height)
        ctx.globalCompositeOperation = "source-over"
      }

      const dz = (0.000022 + speed * speed * 0.0019) * dt
      const streak = speed > 0.04
      const tailScale = 1 + speed * 0.42
      for (const bucket of streaks) bucket.length = 0

      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = "lighter"

      for (const star of stars) {
        star.z -= dz
        if (star.z <= 0.03) {
          place(star, 1)
          continue
        }

        const screen = project(star, cx, cy)
        if (screen.x < -80 || screen.x > width + 80 || screen.y < -80 || screen.y > height + 80) {
          place(star, 1)
          continue
        }

        const depth = 1 - star.z
        const wave = 0.55 + 0.45 * Math.sin(time * star.rate + star.phase)
        const alpha = clamp((0.28 + depth * 0.72) * (1 - TWINKLE * 0.45 * (1 - wave)), 0, 1)
        const core = (0.7 + star.weight * 0.9 + depth * 1.6) * star.jitter * (1 + speed * 0.35)
        const halo = core * GLOW * (0.7 + depth * 0.5)
        ctx.globalAlpha = alpha
        ctx.drawImage(sprites[star.tint], screen.x - halo, screen.y - halo, halo * 2, halo * 2)

        if (streak) {
          const tail = project(star, cx, cy, star.z * tailScale)
          streaks[star.tint].push(tail.x, tail.y, screen.x, screen.y)
        }
      }

      if (speed < 0.35) {
        const sparkleFade = 1 - speed * 2.8
        for (const sparkle of LOGO_SPARKLES) {
          const pulse = 0.55 + 0.45 * Math.sin(time * 0.0015 + sparkle.phase)
          paintLogoSparkle(
            ctx,
            sparkle.x * width,
            sparkle.y * height,
            sparkle.unit,
            sparkleFade * pulse,
            STAR_HEX[sparkle.unit >= 3 ? 0 : 1],
          )
        }
      }

      if (streak) {
        ctx.lineWidth = 1.4
        ctx.globalAlpha = clamp((speed - 0.04) / 0.2)
        for (let i = 0; i < streaks.length; i++) {
          const bucket = streaks[i]
          if (bucket.length === 0) continue
          const [r, g, b] = STAR_RGB[i]
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.85)`
          ctx.beginPath()
          for (let p = 0; p < bucket.length; p += 4) {
            ctx.moveTo(bucket[p], bucket[p + 1])
            ctx.lineTo(bucket[p + 2], bucket[p + 3])
          }
          ctx.stroke()
        }
      }

      ctx.globalCompositeOperation = "source-over"
      ctx.globalAlpha = 1
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      focal = Math.max(width, height) * 0.55
      canvas.width = width
      canvas.height = height
      ctx.setTransform(1, 0, 0, 1, 0, 0)

      const count = Math.round(clamp((width * height) / 7800, 180, 340))
      if (stars.length > count) stars.length = count
      while (stars.length < count) {
        const star: Star = {
          x: 0,
          y: 0,
          z: 1,
          tint: 0,
          weight: 1,
          phase: 0,
          rate: 1,
          jitter: 1,
        }
        place(star, 0.04 + random() * 0.96)
        stars.push(star)
      }

      paintBackdrop()
      draw(0)
    }

    const loop = (now: number) => {
      const dt = last ? Math.min(50, now - last) : 16.67
      last = now
      pending += dt
      const target = signal.current?.speed ?? 0
      const idle = target < 0.01 && speed < 0.01
      if (!idle || pending >= 40) {
        draw(pending)
        pending = 0
      }
      frameId = requestAnimationFrame(loop)
    }

    const onVisibility = () => {
      cancelAnimationFrame(frameId)
      last = 0
      pending = 0
      if (!document.hidden) frameId = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener("resize", resize)

    if (!reduceMotion) {
      frameId = requestAnimationFrame(loop)
      document.addEventListener("visibilitychange", onVisibility)
    }

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [signal])

  return <canvas ref={canvasRef} className="warp-field" aria-hidden="true" />
}
