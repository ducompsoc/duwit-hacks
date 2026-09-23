import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — DUWiT Hacks 2027",
  description:
    "How Durham University Women in Tech uses and protects personal data collected for DUWiT Hacks 2027.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="warp-grain" aria-hidden="true" />
      <h1 className="legal-title">Privacy Policy</h1>
      <p className="legal-updated">23 September 2026</p>

      <p>
        This notice explains how <strong>Durham University Women in Tech (DUWiT)</strong> uses personal data for{" "}
        <strong>DUWiT Hacks 2027</strong>. We are the organisation responsible for this data. Contact us at{" "}
        <a href="mailto:hello@duwithacks.com">hello@duwithacks.com</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        When you apply, we collect your first name, last name and email address. If you contact us, we also see whatever
        you send in that message.
      </p>

      <h2>Why we collect it</h2>
      <p>
        We use these details to manage your hackathon registration and to contact you about DUWiT Hacks 2027. We do not
        add you to unrelated mailing lists.
      </p>

      <h2>Who stores it</h2>
      <p>
        We store your application in <strong>MailerLite Limited</strong> (88 Harcourt Street, Dublin 2, Ireland).
        MailerLite holds the list for us. We send any emails ourselves. Their privacy information is at{" "}
        <a href="https://www.mailerlite.com/legal/privacy-policy" rel="noreferrer">
          mailerlite.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your details until you ask us to delete them, or until we no longer need them for DUWiT Hacks 2027
        (including a short period after the event). Email{" "}
        <a href="mailto:hello@duwithacks.com">hello@duwithacks.com</a> and we will delete your information.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us for a copy of your data, to correct it, to delete it, to restrict or object to how we use it, or
        to receive it in a portable form. Email <a href="mailto:hello@duwithacks.com">hello@duwithacks.com</a>.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site can use <strong>Google Analytics</strong> (Google Ireland Limited) to understand how the site is used.
        That is a non-essential tracker. We only load it if you accept analytics cookies. If you reject them, we do not
        set analytics cookies. You can change your choice by clearing this site&apos;s stored data in your browser and
        visiting again. Applying does not set an analytics cookie.
      </p>
      <p>
        Google&apos;s privacy information is at{" "}
        <a href="https://policies.google.com/privacy" rel="noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have used your data, you can complain to the Information Commissioner&apos;s
        Office (ICO). See <a href="https://ico.org.uk/make-a-complaint/" rel="noreferrer">ico.org.uk/make-a-complaint</a>.
      </p>

      <p className="legal-back">
        <Link href="/">Home</Link>
      </p>
    </main>
  )
}
