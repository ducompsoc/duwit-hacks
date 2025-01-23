import type { Metadata } from "next"
import Image from "next/image"
import type * as React from "react"

import { MLHBanner } from "@/components/mlh-banner"
import "@/lib/fonts"
import "@/styles/globals.css"
import "@/styles/root-layout.css"

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
      <body className="relative">
        {/* Background with gradient and image */}
        <div className="background-purple-gradient absolute top-0 size-full">
          <Image
            src="/Background.png"
            alt="Photograph of starry night sky"
            width={1440}
            height={2699}
            className="size-full object-cover opacity-50"
          />
        </div>
        {/* Header */}
        <header className="flex justify-between items-center fixed top-0 w-full px-[20px] py-[10px] z-[1000]">
          {/* Logo */}
          <div className="w-[100px] h-auto">
            <Image src="/HexLogo.svg" alt="DUWiT Hacks Logo" width={100} height={100} className="object-contain" />
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
