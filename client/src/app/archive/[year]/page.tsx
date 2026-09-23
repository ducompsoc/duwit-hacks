import { notFound } from "next/navigation"
import { ComingSoon } from "@/components/coming-soon"
import { getArchive } from "@/lib/archives"

export default async function ArchiveYearPage({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params
  const parsed = Number(year)
  const entry = getArchive(parsed)

  if (!entry || entry.kind !== "snapshot") {
    notFound()
  }

  return <ComingSoon initialArchiveYear={parsed} />
}
