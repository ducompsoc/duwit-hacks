"use client"

import { mailingListDescription } from "@/lib/site"
import {
  FIRST_NAME_MAX,
  LAST_NAME_MAX,
  WAITLIST_EMAIL_MAX,
  emailIssue,
  nameIssue,
  normalizeEmail,
  normalizeName,
  sanitizeEmailInput,
  sanitizeNameInput,
} from "@/lib/waitlist"
import Link from "next/link"
import { type FormEvent, useEffect, useRef, useState } from "react"

type Status = "idle" | "submitting" | "success" | "already" | "error"
type Field = "firstName" | "lastName" | "email" | null

const FALLBACK_ERROR = "Could not add you to the mailing list. Please try again."

export function Uplink() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const [invalid, setInvalid] = useState<Field>(null)
  const errorRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (status !== "error" || !error) return
    errorRef.current?.focus()
  }, [status, error])

  function resolveField(field: Field, value: string) {
    if (invalid !== field) return
    const issue =
      field === "email" ? emailIssue(value) : nameIssue(value, field === "firstName" ? "first name" : "last name")
    if (issue) {
      setError(issue)
      return
    }
    setInvalid(null)
    setError("")
    if (status === "error") setStatus("idle")
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

    const firstIssue = nameIssue(first, "first name")
    if (firstIssue) {
      setStatus("error")
      setInvalid("firstName")
      setError(firstIssue)
      return
    }

    const lastIssue = nameIssue(last, "last name")
    if (lastIssue) {
      setStatus("error")
      setInvalid("lastName")
      setError(lastIssue)
      return
    }

    const mailIssue = emailIssue(mail)
    if (mailIssue) {
      setStatus("error")
      setInvalid("email")
      setError(mailIssue)
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
    <div className="uplink">
      <div className="uplink-inner">
        <div className="uplink-body">
          <p className="uplink-lead">{mailingListDescription}</p>

          {status === "success" || status === "already" ? (
            <div className="uplink-result" role="status">
              <p className="uplink-ok">
                {status === "already"
                  ? "That email is already on the list. No need to sign up again."
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
                    maxLength={FIRST_NAME_MAX}
                    value={firstName}
                    onChange={(event) => {
                      const next = sanitizeNameInput(event.target.value, FIRST_NAME_MAX)
                      setFirstName(next)
                      resolveField("firstName", next)
                    }}
                    disabled={submitting}
                    required
                    aria-invalid={invalid === "firstName"}
                    aria-describedby={error ? "uplink-error uplink-note" : "uplink-note"}
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
                    maxLength={LAST_NAME_MAX}
                    value={lastName}
                    onChange={(event) => {
                      const next = sanitizeNameInput(event.target.value, LAST_NAME_MAX)
                      setLastName(next)
                      resolveField("lastName", next)
                    }}
                    disabled={submitting}
                    required
                    aria-invalid={invalid === "lastName"}
                    aria-describedby={error ? "uplink-error uplink-note" : "uplink-note"}
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
                    maxLength={WAITLIST_EMAIL_MAX}
                    value={email}
                    onChange={(event) => {
                      const next = sanitizeEmailInput(event.target.value)
                      setEmail(next)
                      resolveField("email", next)
                    }}
                    disabled={submitting}
                    required
                    aria-invalid={invalid === "email"}
                    aria-describedby={error ? "uplink-error uplink-note" : "uplink-note"}
                  />
                </div>

                <button className="uplink-send" type="submit" disabled={submitting}>
                  {submitting ? "Sending" : "Join"}
                </button>
              </div>

              {error ? (
                <p id="uplink-error" ref={errorRef} className="uplink-error" role="alert" tabIndex={-1}>
                  {error}
                </p>
              ) : null}
              <p id="uplink-note" className="uplink-notice">
                We&apos;ll use your details to send you updates about the event and manage registration when
                applications open. See our <Link href="/privacy">Privacy Policy</Link> for how we use and protect your
                data.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
