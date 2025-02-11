import Image from "next/image"
import type * as React from "react"

import { kodeMono, silkscreen } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import "@/styles/home.css"

function Section({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("mb-[100px]", className)} {...props}>
      {children}
    </section>
  )
}

function ChonkyHeading({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-3xl md:text-8xl mb-[20px] uppercase", silkscreen.className, className)} {...props}>
      {children}
    </h2>
  )
}

function Paragraph({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-3xl px-[20%]", kodeMono.className, className)} {...props}>
      {children}
    </p>
  )
}

function Header() {
  return (
    <header className="mb-[50px]">
      <h1 className="main-title">DUWiT Hacks</h1>
      <p className="date-callout">
        1st-2nd March 2025
      </p>
    </header>
  )
}

function Tagline() {
  return (
    <Section>
      <Paragraph className="text-4xl">
        Join us for Durham University Women in Tech's inaugural hackathon, DUWiT Hacks!
      </Paragraph>
    </Section>
  )
}

function SignUp() {
  return (
    <Section>
      <Paragraph className="flex justify-center">
        <a href="https://form.typeform.com/to/ZRb48NqE" target="_blank" rel="noreferrer">
          <img src="/sign_up_unpressed.svg" alt="" />
        </a>
      </Paragraph>
    </Section>
  )
}

function About() {
  return (
    <Section>
      <Paragraph>
        Running over 24-hours, DUWiT Hacks is&nbsp;a project creation competition, bringing together 150 students from
        underrepresented groups to collaborate and use tech to solve real world problems.
      </Paragraph>
    </Section>
  )
}

function ComingSoon() {
  return (
    <Section>
      <ChonkyHeading className="text-4xl">More details coming soon...</ChonkyHeading>
    </Section>
  )
}

function Sponsorship() {
  return (
    <Section className="text-center">
      <ChonkyHeading>Sponsorship</ChonkyHeading>
      <Paragraph>
        DUWiT Hacks is made possible by the incredible support of our sponsors, partners, and other funds.
      </Paragraph>

      {/* Sponsor Logos */}
      <div className="flex flex-wrap mt-[50px] justify-center items-center gap-16">
        {/* Sponsor 1 */}
        <img className="w-[200px] h-auto" src="/Durham.svg" alt="DU logo" width={240} height={99} />

        {/* Sponsor 2 */}
        <Image className="w-[200px] h-auto" src="/rewriting-the-code.svg" alt="RTC Logo" width={3001} height={2712} />

        {/* MLH Logo */}
        <Image
          className="w-[200px] h-auto"
          src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg" // MLH Logo SVG
          alt="MLH Logo"
          width={310.59}
          height={130.78}
        />
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <footer>
      <ChonkyHeading>Contact</ChonkyHeading>
      <Paragraph className="text-xl md:text-3xl">
        If you'd like to get involved or have any questions, please reach out to{" "}
        <a href="mailto:hello@duwithacks.com" className="text-[#FFD700]">
          hello@duwithacks.com
        </a>
        .
      </Paragraph>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="p-5 min-h-[200vh]">
      <Header />
      <Tagline />
      <SignUp />
      <About />
      <ComingSoon />
      <Sponsorship />
      <Contact />
    </div>
  )
}
