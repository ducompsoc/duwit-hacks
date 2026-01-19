import { Kode_Mono, Silkscreen, Unica_One } from "next/font/google"
import localFont from "next/font/local"

import { Zen_Dots } from "next/font/google"

export const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-dots",
})

export const silkscreen = Silkscreen({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-silkscreen",
})

export const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unicaone",
})

export const kodeMono = Kode_Mono({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kodemono",
})

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})
