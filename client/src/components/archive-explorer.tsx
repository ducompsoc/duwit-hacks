"use client"

import { useEffect, useState } from "react"
import { archives, getArchive, type ArchiveEntry } from "@/lib/archives"

type ArchiveExplorerProps = {
  year: number
  onClose: () => void
  onSelectYear: (year: number) => void
}

export function ArchiveExplorer({ year, onClose, onSelectYear }: ArchiveExplorerProps) {
  const entry = getArchive(year) ?? archives[0]
  const [snapshotState, setSnapshotState] = useState<"checking" | "ready" | "missing">("checking")

  useEffect(() => {
    if (entry.kind !== "snapshot") {
      setSnapshotState("ready")
      return
    }

    const controller = new AbortController()
    setSnapshotState("checking")

    fetch(entry.href, { method: "GET", signal: controller.signal })
      .then((res) => setSnapshotState(res.ok ? "ready" : "missing"))
      .catch(() => {
        if (!controller.signal.aborted) setSnapshotState("missing")
      })

    return () => controller.abort()
  }, [entry.href, entry.kind])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div className="archive-shell" role="dialog" aria-modal="true" aria-label={`Archive: ${entry.title}`}>
      <div className="archive-toolbar">
        <button type="button" className="archive-back" onClick={onClose}>
          ← Return to 2027
        </button>
        <p className="archive-toolbar-title">Archived websites</p>
        <div className="archive-toolbar-actions">
          {entry.kind === "snapshot" && snapshotState === "ready" && (
            <a href={entry.href} target="_blank" rel="noreferrer" className="archive-open-tab">
              Open in new tab
            </a>
          )}
          <nav className="archive-years" aria-label="Previous websites">
            {archives.map((item) => (
              <ArchiveYearButton
                key={item.year}
                entry={item}
                active={item.year === entry.year}
                onSelect={onSelectYear}
              />
            ))}
          </nav>
        </div>
      </div>

      <div className="archive-stage">
        {entry.kind === "external" ? (
          <ExternalArchive entry={entry} />
        ) : snapshotState === "ready" ? (
          <iframe
            title={entry.title}
            src={entry.href}
            className="archive-frame"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        ) : snapshotState === "checking" ? (
          <ArchiveMessage title="Establishing uplink…" body="Loading the archived website." />
        ) : (
          <MissingSnapshot entry={entry} />
        )}
      </div>
    </div>
  )
}

function ArchiveYearButton({
  entry,
  active,
  onSelect,
}: {
  entry: ArchiveEntry
  active: boolean
  onSelect: (year: number) => void
}) {
  if (entry.kind === "external") {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noreferrer"
        className={`archive-year-btn ${active ? "is-active" : ""}`}
      >
        {entry.year}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`archive-year-btn ${active ? "is-active" : ""}`}
      onClick={() => onSelect(entry.year)}
      aria-current={active ? "true" : undefined}
    >
      {entry.year}
    </button>
  )
}

function ExternalArchive({ entry }: { entry: ArchiveEntry }) {
  return (
    <div className="archive-fallback">
      <p className="font-mono text-[10px] tracking-[0.35em] text-space-gold uppercase">External archive</p>
      <h2 className="font-display mt-3 text-3xl text-space-cream">{entry.title}</h2>
      <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-space-cream/80">{entry.summary}</p>
      <a href={entry.href} target="_blank" rel="noreferrer" className="btn-archive mt-8">
        Open {entry.year} site
      </a>
    </div>
  )
}

function MissingSnapshot({ entry }: { entry: ArchiveEntry }) {
  return (
    <ArchiveMessage
      title={`${entry.year} archive is offline`}
      body="We couldn't load the archived website just now. Please try again in a moment."
    />
  )
}

function ArchiveMessage({ title, body }: { title: string; body: string }) {
  return (
    <div className="archive-fallback">
      <p className="font-mono text-[10px] tracking-[0.35em] text-space-gold uppercase">Archive</p>
      <h2 className="font-display mt-3 text-3xl text-space-cream">{title}</h2>
      <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-space-cream/80">{body}</p>
    </div>
  )
}
