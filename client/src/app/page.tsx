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
    <p className={cn("text-3xl sm:px-[20%]", kodeMono.className, className)} {...props}>
      {children}
    </p>
  )
}

function Header() {
  return (
    <header className="mb-[50px]">
      <h1 className="main-title">DUWiT Hacks</h1>
      <p className="date-callout">1st-2nd March 2025</p>
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
        <a href="https://forms.gle/ngDdviKZJ6RfBvHZ8" target="_blank" rel="noreferrer">
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
        <Image className="w-[200px] h-auto" src="/Durham.svg" alt="DU logo" width={240} height={99} />

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

function FAQ() {
  return (
    <Section>
      <ChonkyHeading>FAQ</ChonkyHeading>
      <Paragraph className="text-2xl">
        <strong>Who can partake in this event?</strong>
        <br />
        If you identify as part of an underrepresented group in tech, such as women or non-binary individuals, we'd love to have you join as a hacker!
        <br />
        If you don't identify as part of an underrepresented group in tech, we'd still love to have you at our event as a volunteer or mentor
      </Paragraph>
      <br />
      <Paragraph className="text-2xl">
        <strong>Where is the event taking place?</strong>
        <br />
        Mathematical Sciences & Computer Science Building
        <br />
        Durham University
        <br />
        Upper Mountjoy Campus
        <br />
        Stockton Road
        <br />
        DH1 3LE
      </Paragraph>
      <br />
      <Paragraph className="text-2xl">
        <strong>What time is the event taking place</strong>
        <br />
        Registration will open at 9:30 am on Saturday and we aim to end the event by 4pm on Sunday 2nd March
      </Paragraph>
      <br />
      {/* <Paragraph>
        <strong>I'm not from Durham, can I get travel re-imbursed</strong>
        <br />
        You will be able to get your travel partially re-imbursed. More details on this to come soon.
      </Paragraph> */}
      <Paragraph className="text-2xl">
        <strong>I've never coded before - can I still join</strong>
        <br />
        Yes! This is an entirely beginner friendly event, and you'll have support from mentors and your peers to learn some new skills and build a project you're proud of. Enthusiasm is half the job!
      </Paragraph>
    </Section>
  )
} 

export default function Home() {
  return (
    <div className="p-5 min-h-[200vh]">
      <Header />
      <Tagline />
      {/* <SignUp /> */}
      <About />
      <FAQ />
      {/* <ComingSoon /> */}
      <Sponsorship />
      <Contact />
    </div>
  )
}
