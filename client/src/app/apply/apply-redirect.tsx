"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { requestHomeScroll } from "@/lib/scroll"

export function ApplyRedirect() {
  const router = useRouter()

  useEffect(() => {
    requestHomeScroll("apply")
    router.replace("/")
  }, [router])

  return (
    <main className="page apply-redirect">
      <p className="apply-redirect-text">Taking you to apply…</p>
    </main>
  )
}
