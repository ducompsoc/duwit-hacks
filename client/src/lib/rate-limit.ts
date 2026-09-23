const WINDOW_MS = 60_000
const MAX_HITS = 8

const hits = new Map<string, number[]>()

export function isRateLimited(key: string) {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS)
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent)
    return true
  }
  recent.push(now)
  hits.set(key, recent)
  return false
}

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown"
  return request.headers.get("x-nf-client-connection-ip") ?? request.headers.get("x-real-ip") ?? "unknown"
}
