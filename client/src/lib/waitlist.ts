export const WAITLIST_EMAIL_MAX = 320
export const NAME_MAX = 80

const NAME_INPUT = /[^\p{L}\p{M} '\-]/gu
const NAME_VALUE = /^(?:[\p{L}\p{M}]+(?:[ '\-][\p{L}\p{M}]+)*)?$/u

export function sanitizeNameInput(value: string): string {
  return value.replace(NAME_INPUT, "").slice(0, NAME_MAX)
}

export function normalizeName(value: string): string {
  return value.trim().replace(/\s+/g, " ")
}

export function isValidName(value: string): boolean {
  return value.length > 0 && value.length <= NAME_MAX && NAME_VALUE.test(value)
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

export function isValidEmail(value: string): boolean {
  if (value.length === 0 || value.length > WAITLIST_EMAIL_MAX) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function emailIssue(value: string): string | null {
  const email = normalizeEmail(value)
  if (email.length === 0) return "Enter your email address."
  if (!isValidEmail(email)) return "Enter a valid email address."
  return null
}

export function nameIssue(value: string, label: "first name" | "last name"): string | null {
  const name = normalizeName(value)
  if (name.length === 0) return `Enter your ${label}.`
  if (!isValidName(name)) return `Enter a valid ${label}.`
  return null
}
