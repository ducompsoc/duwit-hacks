export const FIRST_NAME_MAX = 20
export const LAST_NAME_MAX = 25
export const WAITLIST_EMAIL_MAX = 254
export const WAITLIST_BODY_MAX = 2_048

const CONTROL = /[\u0000-\u001F\u007F]/
const NAME_INPUT = /[^\p{L}\p{M} '\-]/gu
const NAME_VALUE = /^(?:[\p{L}\p{M}]+(?:[ '\-][\p{L}\p{M}]+)*)?$/u
const EMAIL_INPUT = /[^A-Za-z0-9._%+\-@]/g
const EMAIL_VALUE =
  /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i

export function sanitizeNameInput(value: string, max: number): string {
  return value.replace(NAME_INPUT, "").slice(0, max)
}

export function sanitizeEmailInput(value: string): string {
  return value.replace(EMAIL_INPUT, "").slice(0, WAITLIST_EMAIL_MAX)
}

export function normalizeName(value: string): string {
  return value.trim().replace(/\s+/g, " ")
}

export function isValidName(value: string, max: number): boolean {
  return value.length > 0 && value.length <= max && !CONTROL.test(value) && NAME_VALUE.test(value)
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

export function isValidEmail(value: string): boolean {
  if (value.length === 0 || value.length > WAITLIST_EMAIL_MAX) return false
  if (CONTROL.test(value)) return false
  return EMAIL_VALUE.test(value)
}

export function emailIssue(value: string): string | null {
  const email = normalizeEmail(value)
  if (email.length === 0) return "Enter your email address."
  if (email.length > WAITLIST_EMAIL_MAX) return `Email must be ${WAITLIST_EMAIL_MAX} characters or fewer.`
  if (!isValidEmail(email)) return "Enter a valid email address."
  return null
}

export function nameIssue(value: string, label: "first name" | "last name"): string | null {
  const name = normalizeName(value)
  const max = label === "first name" ? FIRST_NAME_MAX : LAST_NAME_MAX
  const title = label === "first name" ? "First name" : "Last name"
  if (name.length === 0) return `Enter your ${label}.`
  if (name.length > max) return `${title} must be ${max} characters or fewer.`
  if (!isValidName(name, max)) return `Enter a valid ${label}.`
  return null
}
