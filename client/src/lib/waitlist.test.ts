import { describe, expect, it } from "vitest"
import { emailIssue, nameIssue, normalizeEmail, normalizeName, sanitizeEmailInput, sanitizeNameInput } from "./waitlist"

describe("normalizeName", () => {
  it("trims and collapses spaces", () => {
    expect(normalizeName("  Ada   Lovelace  ")).toBe("Ada Lovelace")
  })
})

describe("nameIssue", () => {
  it("requires a first name", () => {
    expect(nameIssue("", "first name")).toMatch(/first name/i)
  })

  it("accepts a valid hyphenated name", () => {
    expect(nameIssue("Mary-Jane", "first name")).toBeNull()
  })
})

describe("emailIssue", () => {
  it("requires an email", () => {
    expect(emailIssue("")).toMatch(/email/i)
  })

  it("rejects invalid addresses", () => {
    expect(emailIssue("not-an-email")).toMatch(/valid email/i)
  })

  it("accepts a normal address", () => {
    expect(emailIssue("hello@duwithacks.com")).toBeNull()
  })
})

describe("sanitizeEmailInput", () => {
  it("strips disallowed characters", () => {
    expect(sanitizeEmailInput("hello!@x.com")).toBe("hello@x.com")
  })
})

describe("sanitizeNameInput", () => {
  it("strips digits from names", () => {
    expect(sanitizeNameInput("Ann3", 20)).toBe("Ann")
  })
})

describe("normalizeEmail", () => {
  it("lowercases email", () => {
    expect(normalizeEmail(" Hello@Example.COM ")).toBe("hello@example.com")
  })
})
