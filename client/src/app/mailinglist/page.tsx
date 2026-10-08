import type { Metadata } from "next"
import { MailingListRedirect } from "@/app/mailinglist/mailing-list-redirect"

export const metadata: Metadata = {
  title: "Mailing list — DUWiT Hacks 2027",
  description: "Join the DUWiT Hacks 2027 mailing list for updates about the event.",
  alternates: { canonical: "/#mailinglist" },
  robots: { index: true, follow: true },
}

export default function MailingListPage() {
  return <MailingListRedirect />
}
