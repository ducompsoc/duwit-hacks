import { NextResponse } from "next/server"
import { applyCookie, browserKey, BROWSER_LIMITS, clientKey, isRateLimited, NETWORK_LIMITS } from "@/lib/rate-limit"
import {
  emailIssue,
  nameIssue,
  normalizeEmail,
  normalizeName,
  WAITLIST_BODY_MAX,
} from "@/lib/waitlist"

const MAILERLITE_SUBSCRIBE_URL = "https://connect.mailerlite.com/api/subscribers"
const GENERIC_ERROR = "Could not submit your application. Please try again."
const UNAVAILABLE_ERROR = "Applications are temporarily unavailable."
const TOO_LONG_ERROR = "That application is too long."

type WaitlistBody = {
  email?: unknown
  firstName?: unknown
  lastName?: unknown
  company?: unknown
}

export async function POST(request: Request) {
  const raw = await readBody(request, WAITLIST_BODY_MAX)
  if (raw === null) {
    return reply(request, { ok: false, error: TOO_LONG_ERROR }, 413)
  }

  const browser = browserKey(request)
  if (browser && isRateLimited(`browser:${browser}`, BROWSER_LIMITS)) {
    return reply(request, { ok: false, error: "Too many attempts from this browser. Please wait and try again." }, 429)
  }
  if (isRateLimited(`ip:${clientKey(request)}`, NETWORK_LIMITS)) {
    return reply(
      request,
      { ok: false, error: "Too many people are applying from this network right now. Please wait and try again." },
      429,
    )
  }

  let body: WaitlistBody
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return reply(request, { ok: false, error: "Enter your first name, last name and email." }, 400)
    }
    body = parsed as WaitlistBody
  } catch {
    return reply(request, { ok: false, error: "Enter your first name, last name and email." }, 400)
  }

  if (typeof body.company === "string" && body.company.trim() !== "") {
    return reply(request, { ok: true })
  }

  if (typeof body.firstName !== "string") {
    return reply(request, { ok: false, error: "Enter your first name." }, 400)
  }
  if (typeof body.lastName !== "string") {
    return reply(request, { ok: false, error: "Enter your last name." }, 400)
  }

  const firstName = normalizeName(body.firstName)
  const lastName = normalizeName(body.lastName)
  const firstIssue = nameIssue(firstName, "first name")
  if (firstIssue) {
    return reply(request, { ok: false, error: firstIssue }, 400)
  }
  const lastIssue = nameIssue(lastName, "last name")
  if (lastIssue) {
    return reply(request, { ok: false, error: lastIssue }, 400)
  }

  if (typeof body.email !== "string") {
    return reply(request, { ok: false, error: "Enter a valid email address." }, 400)
  }

  const email = normalizeEmail(body.email)
  const mailIssue = emailIssue(email)
  if (mailIssue) {
    return reply(request, { ok: false, error: mailIssue }, 400)
  }

  const token = process.env.MAILERLITE_API_TOKEN
  const groupId = process.env.MAILERLITE_GROUP_ID
  if (!token || !groupId) {
    return reply(request, { ok: false, error: UNAVAILABLE_ERROR }, 503)
  }

  try {
    const mailerLiteResponse = await fetch(MAILERLITE_SUBSCRIBE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name: firstName,
          last_name: lastName,
        },
        groups: [groupId],
        status: "active",
      }),
      signal: AbortSignal.timeout(8000),
    })

    if (mailerLiteResponse.status === 409) {
      return reply(request, { ok: true, alreadyRegistered: true })
    }

    if (mailerLiteResponse.ok) {
      return reply(request, { ok: true, alreadyRegistered: false })
    }

    return reply(request, { ok: false, error: GENERIC_ERROR }, 502)
  } catch {
    return reply(request, { ok: false, error: GENERIC_ERROR }, 502)
  }
}

function reply(request: Request, body: { ok: boolean; error?: string; alreadyRegistered?: boolean }, status = 200) {
  const response = NextResponse.json(body, { status })
  if (!browserKey(request)) {
    response.headers.append("Set-Cookie", applyCookie(crypto.randomUUID()))
  }
  return response
}

async function readBody(request: Request, max: number): Promise<string | null> {
  const declared = Number(request.headers.get("content-length"))
  if (Number.isFinite(declared) && declared > max) return null
  if (!request.body) return ""

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let total = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (!value) continue
      total += value.byteLength
      if (total > max) {
        await reader.cancel()
        return null
      }
      chunks.push(value)
    }
  } catch {
    return null
  }

  const body = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }
  return new TextDecoder().decode(body)
}
