import Image from "next/image"
import type * as React from "react"

import "@/styles/new_globals.css"
import "@/styles/root-layout.css"

interface NavButtonProps {
  section: string
}

function NavButton({ section }: NavButtonProps) {
  return (
    <div className="border-white">
      <div className="border border-[#780000] text-[1.3rem] border-8 p-3 w-[11rem] h-[4.5rem] flex justify-center items-center bg-white rounded-[60px]">
        <a href={`#${section}`} className="text-black mx-4">
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
    <html lang="en">
      <body className="block background-cream-gradient min-h-screen">
        <div className="w-full bg-[#003049] h-[9rem] text-white flex items-center px-4 gap-4">
          <Image src="/new_assets/logo.png" alt="DUWiT Hacks Logo" width={100} height={100} className="" />
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
