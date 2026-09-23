"use client"

import Link from "next/link"
import { type FormEvent, useState } from "react"
import { siteDescription } from "@/lib/site"
import { isValidEmail, isValidName, NAME_MAX, normalizeEmail, normalizeName } from "@/lib/waitlist"

type Status = "idle" | "submitting" | "success" | "already" | "error"
type Field = "firstName" | "lastName" | "email" | null

const FALLBACK_ERROR = "Could not submit your application. Please try again."

export function Uplink() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const [invalid, setInvalid] = useState<Field>(null)

  function clearError() {
    if (status === "error") {
      setStatus("idle")
      setError("")
      setInvalid(null)
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const honeypot = new FormData(event.currentTarget).get("company")
    const first = normalizeName(firstName)
    const last = normalizeName(lastName)
    const mail = normalizeEmail(email)

    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      setStatus("success")
      return
    }

    if (!isValidName(first)) {
      setStatus("error")
      setInvalid("firstName")
      setError("Enter your first name.")
      return
    }

    if (!isValidName(last)) {
      setStatus("error")
      setInvalid("lastName")
      setError("Enter your last name.")
      return
    }

    if (!isValidEmail(mail)) {
      setStatus("error")
      setInvalid("email")
      setError("That doesn't look like an email address.")
      return
    }

    setStatus("submitting")
    setError("")
    setInvalid(null)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: first, lastName: last, email: mail, company: honeypot }),
      })
      const payload = (await response.json()) as { ok?: boolean; alreadyRegistered?: boolean; error?: string }

      if (response.ok && payload.ok) {
        setStatus(payload.alreadyRegistered ? "already" : "success")
        return
      }

      setStatus("error")
      setError(payload.error ?? FALLBACK_ERROR)
    } catch {
      setStatus("error")
      setError(FALLBACK_ERROR)
    }
  }

  const submitting = status === "submitting"

  return (
    <div className="uplink" id="apply">
      <div className="uplink-inner">
        <div className="uplink-body">
          <h2 className="uplink-heading">Apply for 2027</h2>
          <p className="uplink-lead">{siteDescription}</p>

          {status === "success" || status === "already" ? (
            <div className="uplink-result" role="status">
              <p className="uplink-ok">
                {status === "already"
                  ? "That email is already registered. No need to apply again."
                  : "You're on the list. We'll be in touch."}
              </p>
            </div>
          ) : (
            <form className="uplink-form" onSubmit={onSubmit} noValidate>
              <label className="uplink-honeypot" htmlFor="uplink-company">
                Company
                <input id="uplink-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="uplink-names">
                <div className="uplink-field" data-invalid={invalid === "firstName"}>
                  <label className="uplink-label" htmlFor="uplink-first">
                    First name
                  </label>
                  <input
                    id="uplink-first"
                    className="uplink-input"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    spellCheck={false}
                    maxLength={NAME_MAX}
                    value={firstName}
                    onChange={(event) => {
                      setFirstName(event.target.value)
                      clearError()
                    }}
                    disabled={submitting}
                    required
                    aria-invalid={invalid === "firstName"}
                    aria-describedby={status === "error" ? "uplink-error" : "uplink-note"}
                  />
                </div>

                <div className="uplink-field" data-invalid={invalid === "lastName"}>
                  <label className="uplink-label" htmlFor="uplink-last">
                    Last name
                  </label>
                  <input
                    id="uplink-last"
                    className="uplink-input"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    spellCheck={false}
                    maxLength={NAME_MAX}
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value)
                      clearError()
                    }}
                    disabled={submitting}
                    required
                    aria-invalid={invalid === "lastName"}
                    aria-describedby={status === "error" ? "uplink-error" : "uplink-note"}
                  />
                </div>
              </div>

              <div className="uplink-actions">
                <div className="uplink-field" data-invalid={invalid === "email"}>
                  <label className="uplink-label" htmlFor="uplink-email">
                    Email
                  </label>
                  <input
                    id="uplink-email"
                    className="uplink-input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      clearError()
                    }}
                    disabled={submitting}
                    required
                    aria-invalid={invalid === "email"}
                    aria-describedby={status === "error" ? "uplink-error" : "uplink-note"}
                  />
                </div>

                <button className="uplink-send" type="submit" disabled={submitting}>
                  {submitting ? "Sending" : "Apply"}
                </button>
              </div>

              {status === "error" ? (
                <p id="uplink-error" className="uplink-error" role="alert">
                  {error}
                </p>
              ) : (
                <p id="uplink-note" className="uplink-notice">
                  We&apos;ll use your details to manage your hackathon registration and send you information about the
                  event. See our <Link href="/privacy">Privacy Policy</Link> for how we use and protect your data.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
