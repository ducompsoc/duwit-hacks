import type { Metadata } from "next"
import { Orbitron, Outfit, Share_Tech_Mono } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { MLHBanner } from "@/components/mlh-banner"
import { SiteNav } from "@/components/site-nav"
import { siteDescription } from "@/lib/site"
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
  metadataBase: new URL("https://duwithacks.com"),
  title: "DUWiT Hacks 2027",
  description: siteDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "DUWiT Hacks 2027",
    description: siteDescription,
    url: "https://duwithacks.com",
    siteName: "DUWiT Hacks",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUWiT Hacks 2027",
    description: siteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${outfit.variable} ${shareTechMono.variable} h-full`}>
      <body className="relative min-h-full font-body antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if("scrollRestoration"in history)history.scrollRestoration="manual";if(location.hash){history.replaceState(null,"",location.pathname+location.search);window.scrollTo(0,0);}}catch(e){}})();`,
          }}
        />
        <div className="mlh-banner-slot fixed top-0 z-[10002] w-full overflow-visible pointer-events-none">
          <MLHBanner season={2027} variant="white" region="eu" />
        </div>
        <SiteNav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
