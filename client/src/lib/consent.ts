export const CONSENT_KEY = "duwit-analytics-consent"
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""

export type ConsentChoice = "accepted" | "rejected"
