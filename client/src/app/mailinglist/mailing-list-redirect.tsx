"use client"

import { requestHomeScroll } from "@/lib/scroll"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function MailingListRedirect() {
  const router = useRouter()

  useEffect(() => {
    requestHomeScroll("mailinglist")
    router.replace("/")
  }, [router])

  return (
    <main className="page lost">
      <p className="lost-copy">Taking you to the mailing list…</p>
    </main>
  )
}
