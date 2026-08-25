export type ArchiveEntry = {
  year: number
  title: string
  summary: string
  kind: "snapshot" | "external"
  href: string
}

export const archives: ArchiveEntry[] = [
  {
    year: 2026,
    title: "DUWiT Hacks 2026",
    summary: "The 2026 hackathon website.",
    kind: "snapshot",
    href: "/snapshots/2026",
  },
  {
    year: 2025,
    title: "DUWiT Hacks 2025",
    summary: "The Devpost DUWiT Hacks - 1–2 March 2025 at Durham University.",
    kind: "external",
    href: "https://duwit-hacks.devpost.com/",
  },
]

export function getArchive(year: number): ArchiveEntry | undefined {
  return archives.find((entry) => entry.year === year)
}
