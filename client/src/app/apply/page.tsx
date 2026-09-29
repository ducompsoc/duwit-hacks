import type { Metadata } from "next"
import { ApplyRedirect } from "@/app/apply/apply-redirect"

export const metadata: Metadata = {
  title: "Apply for 2027",
  description: "Apply for DUWiT Hacks 2027.",
  alternates: { canonical: "/#apply" },
  robots: { index: true, follow: true },
}

export default function ApplyPage() {
  return <ApplyRedirect />
}
