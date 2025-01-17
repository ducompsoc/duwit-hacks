import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{
        // Apply the gradient first, then the background image
        background: `linear-gradient(180deg, rgba(73,9,200,1) 0%, rgba(46,56,203,1) 35%, rgba(100,134,164,1) 100%)`,
        // backgroundImage: "url('/Background.png')",
        backgroundSize: 'cover', // Ensure the image covers the entire viewport
        backgroundPosition: 'center top', // Ensure proper positioning
        backgroundRepeat: 'no-repeat', // Prevent image from repeating
        minHeight: '100vh', // Ensure it fills the viewport
        color: '#ffffff', // Text color for readability
      }}
    >
    {children}
    </body>
    </html>
  )
}
