"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArchiveExplorer } from "@/components/archive-explorer"
import { LaunchSequence } from "@/components/launch-sequence"
import { AboutSection } from "@/components/about-section"
import { ApplySection } from "@/components/apply-section"
import { MissionLog } from "@/components/mission-log"
import { SiteFooter } from "@/components/site-footer"
import { archives } from "@/lib/archives"
import { beginProgrammaticScroll, clearHomeScroll, endProgrammaticScroll, peekHomeScroll, scrollToId } from "@/lib/scroll"

export function ComingSoon({ initialArchiveYear = null }: { initialArchiveYear?: number | null }) {
  const [archiveYear, setArchiveYear] = useState<number | null>(initialArchiveYear)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const id = peekHomeScroll()
    if (!id) return
    beginProgrammaticScroll()
    let cancelled = false
    let attempts = 0
    let timer = 0
    const go = () => {
      if (cancelled) return
      if (scrollToId(id)) {
        clearHomeScroll()
        return
      }
      if (attempts++ > 24) {
        clearHomeScroll()
        endProgrammaticScroll()
        return
      }
      timer = window.setTimeout(go, 50)
    }
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(go)
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [])

  function closeArchive() {
    setArchiveYear(null)
    if (pathname.startsWith("/archive/")) router.push("/")
  }

  return (
    <>
      <main className="page">
        <LaunchSequence />
        <AboutSection />
        <ApplySection />
        <MissionLog entries={archives} onOpen={setArchiveYear} />
        <SiteFooter />
      </main>

      {archiveYear !== null && (
        <ArchiveExplorer year={archiveYear} onClose={closeArchive} onSelectYear={setArchiveYear} />
      )}
    </>
  )
}
