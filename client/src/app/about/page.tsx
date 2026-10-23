import { AboutRedirect } from "@/app/about/about-redirect"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our story — DUWiT Hacks",
  description: "Why DUWiT Hacks exists, what to expect at Edition III, and how to get involved.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
}

export default function AboutPage() {
  return <AboutRedirect />
}
