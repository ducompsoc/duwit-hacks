import type { ArchiveEntry } from "@/lib/archives"

export function MissionLog({ entries, onOpen }: { entries: ArchiveEntry[]; onOpen: (year: number) => void }) {
  return (
    <section className="log" aria-labelledby="log-heading">
      <header className="log-head">
        <h2 id="log-heading" className="log-title">
          Previous events
        </h2>
      </header>

      <ol className="log-list">
        {entries.map((entry) => {
          const body = (
            <>
              <span className="log-year" data-year={entry.year}>
                {entry.year}
              </span>
              <span className="log-meta">
                <span className="log-kind">{entry.kind === "snapshot" ? "Archived website" : "Devpost"}</span>
                <span className="log-summary">{entry.summary}</span>
              </span>
              <span className="log-arrow" aria-hidden="true">
                →
              </span>
            </>
          )

          return (
            <li key={entry.year}>
              {entry.kind === "snapshot" ? (
                <button type="button" className="log-entry" onClick={() => onOpen(entry.year)}>
                  {body}
                </button>
              ) : (
                <a className="log-entry" href={entry.href} target="_blank" rel="noreferrer">
                  {body}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
