import Image from "next/image"
import type * as React from "react"

import "@/styles/new_globals.css"
import "@/styles/root-layout.css"
import { zenDots } from "@/lib/fonts"

interface NavButtonProps {
  section: string
}

function NavButton({ section }: NavButtonProps) {
  return (
    <div className="border-white">
      <div className="border border-[#780000] text-sm md:text-[1.3rem] border-4 md:border-8 p-2 md:p-3 w-auto md:w-[11.7rem] h-auto md:h-[4.5rem] flex justify-center items-center bg-white rounded-full md:rounded-[60px]">
        <a href={`#${section}`} className="text-black mx-2 md:mx-4 whitespace-nowrap">
          {section}
        </a>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={zenDots.variable}>
      <body className="block background-cream-gradient min-h-screen">
        <div className="w-full bg-[#003049] min-h-[5rem] md:min-h-[9rem] text-white flex flex-wrap items-center justify-center md:justify-start px-4 py-4 md:py-0 gap-2 md:gap-4">
          <Image
            src="/new_assets/logo.png"
            alt="DUWiT Hacks Logo"
            width={60}
            height={60}
            className="md:w-[100px] md:h-[100px]"
          />
          <NavButton section="About" />
          <NavButton section="Sponsorship" />
          <NavButton section="FAQs" />
          <NavButton section="Contact us" />
        </div>
        {children}
      </body>
    </html>
  )
}
