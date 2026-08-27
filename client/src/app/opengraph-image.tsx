import { ImageResponse } from "next/og"

export const alt = "DUWiT Hacks 2027 — Durham University Women in Tech"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFont(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to load font from ${url}: ${response.status}`)
  }

  return response.arrayBuffer()
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2f79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Star = {
  left: string
  top: string
  size: number
  opacity: number
  color: string
  glow: boolean
}

function makeStars(
  count: number,
  seed: number,
  minOpacity: number,
  maxOpacity: number,
): Star[] {
  const rand = mulberry32(seed)

  return Array.from({ length: count }, () => {
    const size = rand() < 0.12 ? 2.5 : rand() < 0.45 ? 1.75 : 1.2

    return {
      left: `${(rand() * 100).toFixed(2)}%`,
      top: `${(rand() * 100).toFixed(2)}%`,
      size,
      opacity: minOpacity + rand() * (maxOpacity - minOpacity),
      color: size >= 2.5 ? "255, 231, 169" : "255, 255, 255",
      glow: size >= 2.5,
    }
  })
}

const farStars = makeStars(70, 1969, 0.20, 0.45)
const midStars = makeStars(65, 2027, 0.28, 0.58)
const nearStars = makeStars(45, 42, 0.38, 0.72)

const stars = [...farStars, ...midStars, ...nearStars]

export default async function Image() {
  const [orbitron, shareTechMono] = await Promise.all([
    loadFont(
      "https://fonts.gstatic.com/s/orbitron/v35/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1ny_Cmxpg.ttf",
    ),
    loadFont(
      "https://fonts.gstatic.com/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFc7pA.ttf",
    ),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "#07051a",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 110%, rgb(41 35 152 / 0.45), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 0%, rgb(174 75 126 / 0.22), transparent 50%), #07051a",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "42%",
            height: "75%",
            left: "-8%",
            top: "18%",
            borderRadius: "999px",
            background: "rgba(95, 76, 155, 0.30)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "36%",
            height: "60%",
            right: "-10%",
            top: "-8%",
            borderRadius: "999px",
            background: "rgba(174, 75, 126, 0.26)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "28%",
            height: "48%",
            right: "18%",
            bottom: "-6%",
            borderRadius: "999px",
            background: "rgba(255, 170, 22, 0.09)",
            filter: "blur(65px)",
          }}
        />

        {stars.map((star, i) => {
          const dotStyle: Record<string, string | number> = {
            position: "absolute",
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            borderRadius: "999px",
            background: `rgba(${star.color}, ${star.opacity})`,
          }

          if (star.glow) {
            dotStyle.boxShadow = `0 0 8px rgba(${star.color}, ${Math.min(
              star.opacity * 0.85,
              0.7,
            )})`
          }

          return <div key={i} style={dotStyle} />
        })}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(to bottom, transparent 0, transparent 3px, rgba(0, 0, 0, 0.08) 3px, rgba(0, 0, 0, 0.08) 4px)",
            opacity: 0.3,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "72%",
            maxWidth: 860,
            padding: "0 48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Orbitron",
              fontSize: 100,
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "0.04em",
              background:
                "linear-gradient(135deg, #ffe7a9 0%, #ffbf38 28%, #cf83ce 62%, #ae4b7e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            DUWiT
          </p>

          <p
            style={{
              margin: "14px 0 0",
              fontFamily: "Orbitron",
              fontSize: 60,
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "0.21em",
              color: "rgba(255, 231, 169, 0.82)",
            }}
          >
            HACKS 2027
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Orbitron",
          data: orbitron,
          style: "normal",
          weight: 300,
        },
        {
          name: "Share Tech Mono",
          data: shareTechMono,
          style: "normal",
          weight: 400,
        },
      ],
    },
  )
}