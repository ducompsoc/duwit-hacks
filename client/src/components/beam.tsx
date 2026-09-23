import type { CSSProperties } from "react"

const DUST = Array.from({ length: 18 }, (_, i) => ({
  "--x": `${18 + ((i * 41) % 64)}%`,
  "--size": `${1.5 + (i % 3) * 0.8}px`,
  "--duration": `${4.2 + ((i * 11) % 28) / 10}s`,
  "--delay": `${-((i * 9) % 50) / 10}s`,
  "--drift": `${i % 2 === 0 ? -8 : 10}px`,
})) as CSSProperties[]

export function Beam() {
  return (
    <div className="beam" aria-hidden="true">
      <div className="beam-source" />
      <div className="beam-haze" />
      <div className="beam-cone" />
      <div className="beam-core" />
      {DUST.map((style, i) => (
        <span key={i} className="beam-dust" style={style} />
      ))}
    </div>
  )
}
