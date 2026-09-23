import Link from "next/link"

export default function NotFound() {
  return (
    <main className="lost">
      <div className="warp-grain" aria-hidden="true" />
      <p className="lost-code" aria-hidden="true">
        404
      </p>
      <h1 className="lost-title">This page isn&apos;t on the map</h1>
      <p className="lost-copy">The address doesn&apos;t exist. The 2027 site is still here.</p>
      <Link className="lost-home" href="/">
        Back to DUWiT Hacks
      </Link>
    </main>
  )
}
