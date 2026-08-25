import type { Metadata } from "next"
import { Orbitron, Outfit, Share_Tech_Mono } from "next/font/google"
import { MLHBanner } from "@/components/mlh-banner"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
})

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "DUWiT Hacks 2027",
  description:"Durham University Women in Tech Hackathon. The 2027 website is in production. Browse previous missions while you wait.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${outfit.variable} ${shareTechMono.variable} h-full`}>
      <body className="relative min-h-full font-body antialiased">
        <div className="mlh-banner-slot fixed top-0 z-50 w-full overflow-visible">
          <MLHBanner season={2027} variant="white" region="eu" />
        </div>
        {children}
      </body>
    </html>
  )
}
