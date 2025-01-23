import { Kode_Mono, Silkscreen, Unica_One } from "next/font/google"
import localFont from "next/font/local"

const silkscreen = Silkscreen({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-silkscreen",
})

const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unicaone",
})

const kodeMono = Kode_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kodemono",
})

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
