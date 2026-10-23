"use client"

import { requestHomeScroll } from "@/lib/scroll"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function AboutRedirect() {
  const router = useRouter()

  useEffect(() => {
    requestHomeScroll("about")
    router.replace("/")
  }, [router])

  return (
    <main className="page lost">
      <p className="lost-copy">Taking you to our story…</p>
    </main>
  )
}
