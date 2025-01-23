import type { Metadata } from "next"
import Image from "next/image"
import type * as React from "react"

import { MLHBanner } from "@/components/mlh-banner"
import "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "DUWiT Hacks",
  description: "Join us for Durham University Women in Tech's inaugural hackathon, DUWiT Hacks!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* Background with gradient and image */}
        <div
          id="this-is-the-background"
          className="relative t-0 size-full"
          style={{
            position: "absolute", // Ensures the background moves with the scroll
            top: 0,
            left: 0,
            width: "100%", // Stretches the image width to fit the screen
            height: "auto", // Allows the height to adjust proportionally
            background: "linear-gradient(180deg, rgba(73,9,200,1) 0%, rgba(46,56,203,1) 35%, rgba(100,134,164,1) 100%)",
          }}
        >
          <Image
            src="/Background.png"
            alt="Photograph of starry night sky"
            width={1440}
            height={2699}
            className="size-full object-cover"
            style={{
              width: "100%", // Makes the image fit the device width
              height: "auto", // Keeps the aspect ratio intact
              opacity: 0.5, // Adjust opacity to allow gradient visibility
            }}
          />
        </div>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            padding: "10px 20px",
            zIndex: 1000,
          }}
        >
          {/* Logo */}
          <div style={{ width: "100px", height: "auto" }}>
            <Image
              src="/HexLogo.svg"
              alt="DUWIT Hacks Logo"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </header>

        {/* MLH Banner */}
        <div className="fixed top-0 overflow-visible w-[100%] z-50">
          <MLHBanner variant="white" />
        </div>

        {/* Content */}
        <div className="relative z-1">{children}</div>
      </body>
    </html>
  )
}
