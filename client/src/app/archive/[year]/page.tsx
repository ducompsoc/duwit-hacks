import { HomePage } from "@/components/home-page"
import { getArchive } from "@/lib/archives"
import { notFound } from "next/navigation"

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

  return <HomePage initialArchiveYear={parsed} />
}
