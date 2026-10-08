"use client"

import { WarpField, type WarpSignal } from "@/components/warp-field"
import { scrollPageTop } from "@/lib/scroll"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export function StarBackdrop() {
  const pathname = usePathname()
  const signal = useRef<WarpSignal>({ speed: 0 })

  useEffect(() => {
    scrollPageTop()
  }, [pathname])

  return (
    <>
      <WarpField signal={signal} />
      <div className="warp-grain" aria-hidden="true" />
    </>
  )
}
