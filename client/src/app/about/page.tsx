import { DocLayout } from "@/components/doc-layout"
import { HashLink } from "@/components/hash-link"
import { aboutSections, manifestoQuote } from "@/lib/about"
import { contactEmail } from "@/lib/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our story — DUWiT Hacks",
  description: "Who we are, why DUWiT Hacks exists, who can take part, and how to get involved.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our story — DUWiT Hacks",
    description: "Durham's women-in-tech hackathon for women and non-binary people. Beginners welcome.",
    url: "https://duwithacks.com/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <DocLayout title="Our story" meta="DUWiT Hacks">
      <p>Why DUWiT Hacks exists, what we&apos;re building toward, and who belongs in the room.</p>

      <blockquote className="about-quote">
        <p>{manifestoQuote}</p>
      </blockquote>

      <h2>{aboutSections.why.title}</h2>
      {aboutSections.why.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>{aboutSections.theme.title}</h2>
      {aboutSections.theme.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>{aboutSections.expect.title}</h2>
      <p>{aboutSections.expect.body}</p>

      <h2>{aboutSections.track.title}</h2>
      {aboutSections.track.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>Who can take part</h2>
      <p>
        <strong>Hackathon participants</strong> must be women or non-binary people. <strong>Volunteers</strong> who help
        organise and run the event can be anyone — email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> if
        you&apos;d like to help.
      </p>

      <p className="legal-back">
        <HashLink href="/#mailinglist">Join the mailing list</HashLink>
        <span aria-hidden="true"> · </span>
        <HashLink href="/">Home</HashLink>
      </p>
    </DocLayout>
  )
}
