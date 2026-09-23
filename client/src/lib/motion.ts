export function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

export function progress(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start))
}

export function bump(value: number, center: number, radius: number) {
  const distance = Math.abs(value - center) / radius
  return distance >= 1 ? 0 : 0.5 + 0.5 * Math.cos(distance * Math.PI)
}

export const ease = {
  inQuart: (t: number) => t * t * t * t,
  outCubic: (t: number) => 1 - (1 - t) ** 3,
  inOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2),
}
