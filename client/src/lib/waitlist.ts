export const WAITLIST_EMAIL_MAX = 320
export const NAME_MAX = 80

export function normalizeName(value: string): string {
  return value.trim().replace(/\s+/g, " ")
}

export function isValidName(value: string): boolean {
  return value.length > 0 && value.length <= NAME_MAX && !/[\u0000-\u001f]/.test(value)
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

export function isValidEmail(value: string): boolean {
  if (value.length === 0 || value.length > WAITLIST_EMAIL_MAX) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
