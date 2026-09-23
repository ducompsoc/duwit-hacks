"use client"

import Script from "next/script"
import { useCallback, useSyncExternalStore } from "react"
import { CONSENT_KEY, GA_MEASUREMENT_ID, type ConsentChoice } from "@/lib/consent"

const listeners = new Set<() => void>()

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  window.addEventListener("storage", onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
    window.removeEventListener("storage", onStoreChange)
  }
}

function emit() {
  for (const listener of listeners) listener()
}

function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === "accepted" || value === "rejected" ? value : null
  } catch {
    return null
  }
}

function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    /* storage can be blocked */
  }
  emit()
}

export function Analytics() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => null)
  const choose = useCallback((choice: ConsentChoice) => writeConsent(choice), [])

  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      {consent === null && (
        <div className="cookie" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-copy">
          <div className="cookie-copy">
            <p id="cookie-title" className="cookie-title">
              Analytics cookies
            </p>
            <p id="cookie-copy">
              We use Google Analytics to understand how people use this site. These cookies are optional. See our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-reject" onClick={() => choose("rejected")}>
              Reject
            </button>
            <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}

      {consent === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
    </>
  )
}
