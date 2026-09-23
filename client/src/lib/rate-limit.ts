type Limit = { max: number; windowMs: number }

export const BROWSER_LIMITS: Limit[] = [{ max: 5, windowMs: 60 * 60_000 }]
export const NETWORK_LIMITS: Limit[] = [{ max: 200, windowMs: 10 * 60_000 }]

const APPLY_COOKIE = "duwit_apply"
const BROWSER_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const LONGEST_WINDOW_MS = 60 * 60_000
const hits = new Map<string, number[]>()

export function isRateLimited(key: string, limits: Limit[]) {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((time) => now - time < LONGEST_WINDOW_MS)
  const limited = limits.some(
    ({ max, windowMs }) => recent.filter((time) => now - time < windowMs).length >= max,
  )
  if (!limited) recent.push(now)
  if (recent.length === 0) hits.delete(key)
  else hits.set(key, recent)
  prune(now)
  return limited
}

export function clientKey(request: Request) {
  const candidates = [
    request.headers.get("x-nf-client-connection-ip"),
    request.headers.get("cf-connecting-ip"),
    request.headers.get("x-real-ip"),
    request.headers.get("x-forwarded-for"),
  ]
  for (const candidate of candidates) {
    const ip = normalizeIp(candidate)
    if (ip) return ip
  }
  return "unknown"
}

export function browserKey(request: Request) {
  const header = request.headers.get("cookie")
  if (!header) return null
  for (const part of header.split(";")) {
    const [name, ...rest] = part.trim().split("=")
    if (name !== APPLY_COOKIE) continue
    let value = rest.join("=")
    try {
      value = decodeURIComponent(value)
    } catch {
      return null
    }
    return BROWSER_ID.test(value) ? value.toLowerCase() : null
  }
  return null
}

export function applyCookie(id: string) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : ""
  return `${APPLY_COOKIE}=${id}; Path=/; Max-Age=86400; HttpOnly; SameSite=Lax${secure}`
}

function normalizeIp(value: string | null) {
  if (!value) return null
  const ip = value.split(",")[0]?.trim() ?? ""
  if (ip.length === 0 || ip.length > 64) return null
  if (!/^[A-Fa-f0-9:.]+$/.test(ip)) return null
  return ip.toLowerCase()
}

function prune(now: number) {
  if (hits.size < 2_000) return
  for (const [key, times] of hits) {
    const recent = times.filter((time) => now - time < LONGEST_WINDOW_MS)
    if (recent.length === 0) hits.delete(key)
    else hits.set(key, recent)
  }
}
