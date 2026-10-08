"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { requestHomeScroll } from "@/lib/scroll"

export function MailingListRedirect() {
  const router = useRouter()

  useEffect(() => {
    requestHomeScroll("mailinglist")
    router.replace("/")
  }, [router])

  return (
    <main className="page mailing-list-redirect">
      <p className="mailing-list-redirect-text">Taking you to the mailing list…</p>
    </main>
  )
}
