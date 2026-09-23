import { NextResponse } from "next/server"
import { clientKey, isRateLimited } from "@/lib/rate-limit"
import { isValidEmail, isValidName, normalizeEmail, normalizeName, WAITLIST_EMAIL_MAX } from "@/lib/waitlist"

const MAILERLITE_SUBSCRIBE_URL = "https://connect.mailerlite.com/api/subscribers"
const GENERIC_ERROR = "Could not submit your application. Please try again."
const UNAVAILABLE_ERROR = "Applications are temporarily unavailable."

type WaitlistBody = {
  email?: unknown
  firstName?: unknown
  lastName?: unknown
  company?: unknown
}

function readName(value: unknown): string | null {
  if (typeof value !== "string") return null
  const name = normalizeName(value)
  return isValidName(name) ? name : null
}

export async function POST(request: Request) {
  let body: WaitlistBody
  try {
    body = (await request.json()) as WaitlistBody
  } catch {
    return NextResponse.json({ ok: false, error: "Enter your first name, last name and email." }, { status: 400 })
  }

  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, { status: 429 })
  }

  const firstName = readName(body.firstName)
  const lastName = readName(body.lastName)
  if (!firstName) {
    return NextResponse.json({ ok: false, error: "Enter your first name." }, { status: 400 })
  }
  if (!lastName) {
    return NextResponse.json({ ok: false, error: "Enter your last name." }, { status: 400 })
  }

  if (typeof body.email !== "string" || body.email.length > WAITLIST_EMAIL_MAX) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 })
  }

  const email = normalizeEmail(body.email)
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 })
  }

  const token = process.env.MAILERLITE_API_TOKEN
  const groupId = process.env.MAILERLITE_GROUP_ID
  if (!token || !groupId) {
    return NextResponse.json({ ok: false, error: UNAVAILABLE_ERROR }, { status: 503 })
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
      return NextResponse.json({ ok: true, alreadyRegistered: true })
    }

    if (mailerLiteResponse.ok) {
      return NextResponse.json({ ok: true, alreadyRegistered: false })
    }

    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 502 })
  } catch {
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 502 })
  }
}
