"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArchiveExplorer } from "@/components/archive-explorer"
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
      <main className="relative z-10 flex min-h-dvh flex-col px-5 pb-8 pt-14 md:px-10 md:pb-12 md:pt-16">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
          <p className="font-mono text-[10px] tracking-[0.28em] text-space-cream/55 uppercase md:text-xs">
            Durham University Women in Tech
          </p>
          <h1 className="font-display mt-3 text-5xl leading-none tracking-wide md:mt-4 md:text-7xl lg:text-8xl">
            <span className="title-gradient">DUWiT</span>
          </h1>
          <p className="font-display mt-2 text-xl tracking-[0.38em] text-space-cream md:text-3xl">HACKS 2027</p>

          <div className="terminal-panel mt-8 w-full max-w-xl text-left">
            <p className="font-mono text-[10px] tracking-[0.3em] text-space-gold uppercase">Mission control</p>
            <p className="font-mono mt-3 text-sm leading-relaxed text-space-lime md:text-base">
              <span className="text-space-primary-light">$</span> status --website 2027
              <br />
              <span className="text-space-cream/90">coming soon_</span>
              <span className="cursor-blink" />
            </p>
          </div>

          <section className="mt-10 w-full max-w-xl" aria-labelledby="archive-heading">
            <h2
              id="archive-heading"
              className="font-mono text-[10px] tracking-[0.35em] text-space-cream/60 uppercase"
            >
              Archived websites
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {archives.map((entry) =>
                entry.kind === "snapshot" ? (
                  <button
                    key={entry.year}
                    type="button"
                    className="mission-card text-center sm:text-left"
                    onClick={() => setArchiveYear(entry.year)}
                  >
                    <span className="font-display block text-2xl text-space-cream">{entry.year}</span>
                    <span className="mt-1 block font-body text-xs text-space-cream/65">View Archived Website</span>
                  </button>
                ) : (
                  <a
                    key={entry.year}
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mission-card text-center sm:text-left"
                  >
                    <span className="font-display block text-2xl text-space-cream">{entry.year}</span>
                    <span className="mt-1 block font-body text-xs text-space-cream/65">View Archived Devpost</span>
                  </a>
                ),
              )}
            </div>
          </section>
        </div>

        <footer className="mx-auto mt-8 w-full max-w-3xl text-center">
          <p className="font-body text-[11px] text-space-cream/50">
            <a className="underline decoration-space-gold/40 underline-offset-4 hover:text-space-cream" href="mailto:hello@duwithacks.com">
              hello@duwithacks.com
            </a>
            {" · "}
            DUWiT Hacks 2027
          </p>
        </footer>
      </main>

      {archiveYear !== null && (
        <ArchiveExplorer
          year={archiveYear}
          onClose={closeArchive}
          onSelectYear={setArchiveYear}
        />
      )}
    </>
  )
}
