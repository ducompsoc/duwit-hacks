"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArchiveExplorer } from "@/components/archive-explorer"
import { LaunchSequence } from "@/components/launch-sequence"
import { MissionLog } from "@/components/mission-log"
import { archives } from "@/lib/archives"

export function ComingSoon({ initialArchiveYear = null }: { initialArchiveYear?: number | null }) {
  const [archiveYear, setArchiveYear] = useState<number | null>(initialArchiveYear)
  const pathname = usePathname()
  const router = useRouter()

  function closeArchive() {
    setArchiveYear(null)
    if (pathname.startsWith("/archive/")) router.push("/")
  }

  return (
    <>
      <main className="page">
        <LaunchSequence />
        <MissionLog entries={archives} onOpen={setArchiveYear} />

        <footer className="colophon">
          <p className="colophon-mark" aria-hidden="true">
            DUWiT
          </p>
          <div className="colophon-row">
            <a href="mailto:hello@duwithacks.com">hello@duwithacks.com</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
            <span>Durham University Women in Tech</span>
          </div>
        </footer>
      </main>

      {archiveYear !== null && (
        <ArchiveExplorer year={archiveYear} onClose={closeArchive} onSelectYear={setArchiveYear} />
      )}
    </>
  )
}
