import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms — DUWiT Hacks 2027",
  description: "Terms for applying to and taking part in DUWiT Hacks 2027.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <main className="legal">
      <div className="warp-grain" aria-hidden="true" />
      <h1 className="legal-title">Terms</h1>
      <p className="legal-updated">23 September 2026</p>

      <p>
        These terms cover applications and participation in <strong>DUWiT Hacks 2027</strong>, organised by Durham
        University Women in Tech. Dates, venue and detailed rules will be confirmed closer to the event. If anything
        here conflicts with later official rules we publish, those later rules apply.
      </p>

      <h2>Eligibility</h2>
      <p>
        The event is aimed at students. We will publish any extra eligibility rules (for example age or team size)
        before the event. Applying does not guarantee a place.
      </p>

      <h2>Registration</h2>
      <p>
        Apply with your real first name, last name and email. Keep your details accurate. We may close applications,
        run a waitlist, or refuse a place if information is false or if we are oversubscribed.
      </p>

      <h2>Participation</h2>
      <p>
        If you attend, follow the instructions we send, the venue rules, and the{" "}
        <a href="https://mlh.io/code-of-conduct" rel="noreferrer">
          Major League Hacking Code of Conduct
        </a>
        . We can remove anyone who breaks those rules or makes the event unsafe.
      </p>

      <h2>Cancellation</h2>
      <p>
        We may change, postpone or cancel the event if we have to (for example venue, weather, or safety). We will tell
        applicants as soon as we reasonably can.
      </p>

      <h2>Contact</h2>
      <p>
        Questions: <a href="mailto:hello@duwithacks.com">hello@duwithacks.com</a>. See also our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <p className="legal-back">
        <Link href="/">Home</Link>
      </p>
    </main>
  )
}
