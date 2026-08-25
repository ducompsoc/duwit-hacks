function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Star = {
  left: string
  top: string
  size: string
  delay: string
  duration: string
  opacity: string
}

function makeStars(count: number, seed: number): Star[] {
  const rand = mulberry32(seed)
  return Array.from({ length: count }, () => {
    const size = 1 + rand() * 2.2
    return {
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      size: `${size}px`,
      delay: `${rand() * 8}s`,
      duration: `${2.8 + rand() * 4.5}s`,
      opacity: `${0.35 + rand() * 0.65}`,
    }
  })
}

const nearStars = makeStars(70, 42)
const midStars = makeStars(110, 2027)
const farStars = makeStars(160, 1969)

export function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />
      {farStars.map((star, i) => (
        <span
          key={`f-${i}`}
          className="star star-far"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
      {midStars.map((star, i) => (
        <span
          key={`m-${i}`}
          className="star star-mid"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
      {nearStars.map((star, i) => (
        <span
          key={`n-${i}`}
          className="star star-near"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  )
}
