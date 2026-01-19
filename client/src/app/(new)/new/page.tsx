"use client"

import Image from "next/image"

import "@/styles/custom.css"

import { zenDots } from "@/lib/fonts"

interface HeaderButtonsProps {
  text: string
  onClick?: () => void
}

function HeaderButtons({ text, onClick }: HeaderButtonsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#003049] w-full md:w-[22rem] h-auto md:h-[6rem] text-lg md:text-[1.9rem] text-white py-4 md:py-2 px-6 md:px-4 rounded-full md:rounded-[60px] ring-2 md:ring-4"
    >
      {text}
    </button>
  )
}

function Header() {
  return (
    <header className="text-[#780000] mt-12 md:mt-24 mb-16 md:mb-24 px-4 text-center">
      <h1 className="text-4xl md:text-[6rem] [-webkit-text-stroke:1px_#003049] md:[-webkit-text-stroke:5px_#003049] font-bold md:mb-8">
        DUWiT Hacks
      </h1>
      <div className="text-2xl md:text-[60px] relative md:mt-12">
        <p className="md:mb-8">7 - 8th March 2025</p>
        <p className="">Durham University</p>
        <Image
          src="/new_assets/Flags.png"
          alt="Hero Image"
          width={150}
          height={150}
          className="absolute left-0 -top-5 md:-top-16 -z-10 w-[80px] md:w-[350px]"
        />
        <Image
          src="/new_assets/Flags.png"
          alt="Hero Image"
          width={150}
          height={150}
          className="absolute right-0 -top-5 md:-top-16 -z-10 scale-x-[-1] w-[80px] md:w-[350px]"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-12 md:mt-20 px-4 md:px-0">
        <HeaderButtons text="Sign Up Now" />
        <HeaderButtons text="Submit Your CV" onClick={() => alert("Unavailable at the moment")} />
      </div>
    </header>
  )
}

function FirstDivider() {
  return (
    <div className="w-full h-auto bg-[#666666] flex flex-col md:flex-row justify-center items-center py-0.5 md:py-1 px-4 overflow-hidden max-h-[3%]">
      <div className="w-full bg-[#760000] py-1 md:py-2 text-white text-sm md:text-[1.5rem] text-center md:text-left rounded-lg md:rounded-none shadow-lg md:min-h-[100px] flex items-center">
        <p className="w-full [-webkit-text-stroke:0.8px_#003049] md:[-webkit-text-stroke:2px_#003049] font-bold uppercase tracking-wider px-4 md:text-[1.75rem]">
          Innovation Starts Here, Diversity Leads the Way
        </p>
      </div>
      <Image
        src="/new_assets/bw car.png"
        alt=""
        width={80}
        height={80}
        className="w-[80px] md:w-[250px] md:h-auto -ms-4 md:-ms-7 overflow-hidden"
      />
    </div>
  )
}

function AboutSection() {
  return (
    <section id="About" className="relative w-full min-h-[300px]">
      <div className="w-full h-full">
        <Image
          src="/new_assets/Background.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full min-h-[300px] object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-[10%]">
        <h2 className="text-3xl md:text-[3.5rem] text-left text-[#FFFFFF] mb-2 md:mb-8 [-webkit-text-stroke:1px_#780000] md:[-webkit-text-stroke:3px_#780000] font-bold">
          About
        </h2>
        <p className="text-sm md:text-[1.75rem] md:leading-8 text-[#000000] max-w-4xl md:translate-x-[10%]">
          Running over 24-hours, DUWiT Hacks is a project creation competition, bringing together 150 students from
          underrepresented groups to collaborate and use tech to solve real world problems.
        </p>
      </div>
    </section>
  )
}
function FirstRoadPattern() {
  return <div className="road-pattern w-full" />
}

function Sponsorship() {
  return (
    <section id="Sponsorship" className="flex flex-col w-full py-10 px-4 gap-8 md:gap-12 md:px-[10%]">
      <div id="sponsors" className="flex justify-center md:justify-start py-2">
        <h2 className="text-3xl md:text-[3.5rem] text-left text-[#FFFFFF] [-webkit-text-stroke:1px_#003049] md:[-webkit-text-stroke:3px_#003049] font-bold">
          Sponsors
        </h2>
      </div>
      <div className="px-4 md:px-[10%]">
        <div className="flex items-center gap-4 mb-4 md:mb-8">
          <h3 className="text-xl md:text-[1.5rem] text-left text-[#000000] tracking-[.15em]">Champion</h3>
          <Image src="/new_assets/Trophy.png" alt="" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          <Image
            src="/new_assets/Neptune North.png"
            alt=""
            width={80}
            height={80}
            className="md:w-[120px] md:h-[120px]"
          />
          <Image src="/new_assets/Accenture.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
        </div>
      </div>
      <div className="px-4 md:px-[10%]">
        <div className="flex items-center gap-4 mb-4 md:mb-8">
          <h3 className="text-xl md:text-[1.5rem] text-left text-[#000000] tracking-[.15em]">Podium Finisher</h3>
          <Image src="/new_assets/Silver Medal.png" alt="" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
        </div>
      </div>
      <div className="px-4 md:px-[10%]">
        <div className="flex items-center gap-4 mb-4 md:mb-8">
          <h3 className="text-xl md:text-[1.5rem] text-left text-[#000000] tracking-[.15em]">Pit Crew</h3>
          <Image src="/new_assets/Wrench.png" alt="" width={40} height={40} className="md:w-[60px] md:h-[60px]" />
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          <Image src="/new_assets/RTC.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          <Image src="/new_assets/_ block.png" alt="" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section id="partners" className="relative w-full min-h-[150px] md:min-h-[400px]">
      <Image
        src="/new_assets/Sponsorship-Section.png"
        alt="Sponsorship Section"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center px-6 md:px-[10%]">
        <div className="w-full flex flex-row items-center justify-between gap-4 transform translate-y-3 md:translate-y-8">
          <h2 className="text-3xl md:text-[3.5rem] text-left text-[#FFFFFF] [-webkit-text-stroke:1px_#780000] md:[-webkit-text-stroke:3px_#780000] font-bold">
            Partners
          </h2>
          <div id="sponsor-logos" className="flex flex-row flex-wrap justify-end items-center gap-2 md:gap-4">
            <Image
              src="/new_assets/Group 619.png"
              alt=""
              width={60}
              height={60}
              className="w-[30px] h-[30px] md:w-[80px] md:h-[80px] translate-x-[-2px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SecondRoadPattern() {
  return (
    <div className="road-pattern relative flex items-center justify-start overflow-hidden">
      <Image
        src="/new_assets/red car.png"
        alt="car"
        width={150}
        height={150}
        className="rotate-90 absolute left-[10%] md:left-[17%] md:w-[290px]"
      />
      <Image
        src="/new_assets/red blue white car.png"
        alt="car"
        width={150}
        height={150}
        className="rotate-90 absolute right-[5%] md:w-[290px]"
      />
    </div>
  )
}

function FAQSection() {
  return (
    <section id="FAQs" className="relative z-10 py-10 px-6 md:px-[10%]">
      <h2 className="text-3xl md:text-[3.5rem] text-left text-[#FFFFFF] mb-8 [-webkit-text-stroke:1px_#780000] md:[-webkit-text-stroke:3px_#780000] font-bold">
        FAQs
      </h2>
      <div className="flex flex-col gap-4 text-[#000000] justify-left">
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">
            Where is the event taking place?
          </summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            Mathematical Sciences &amp; Computer Science Building, Durham University, Upper Mountjoy Campus, Stockton
            Road, DH1 3LE
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">
            What time does the event begin?
          </summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            Registration opens at 9:30 on Saturday 7th March, and the closing ceremony finishes around 17:00 on Sunday
            8th March.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">
            Can I attend if I have no coding experience?
          </summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            Of course! DUWiT Hacks is for participants of all levels. We provide HackPacks: tutorials and examples of
            specific skills you can use in your projects.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">Is food being provided?</summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            Meals, snacks, and drinks will be provided. Please inform us of any dietary restrictions and avoid bringing
            nuts or peanuts.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">What do I need to bring?</summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            A valid student ID (or other legal ID), your laptop and charger, and anything else you need for comfort.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">
            I don’t attend Durham University. Can I still attend?
          </summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            Yes! Anyone who is a student or graduated within the last year may attend.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">
            I am a man but I want to be involved. What are my options?
          </summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            You can volunteer or mentor. See our Instagram @duwithacks or email hello@duwithacks.com for details.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">How large can teams be?</summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">Teams can be up to four people.</p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">What if I don’t have a team?</summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            We’ll host team‑building events before and during the hackathon; feel free to arrive solo.
          </p>
        </details>
        <details className="mb-2">
          <summary className="text-lg md:text-[1.5rem] font-bold cursor-pointer">I have another question.</summary>
          <p className="mt-2 text-sm md:text-[1.2rem]">
            Reach out via email at{" "}
            <a href="mailto:hello@duwithacks.com" className="text-[#003049] underline text-sm md:text-base">
              hello@duwithacks.com
            </a>
            .
          </p>
        </details>
      </div>
    </section>
  )
}

function ThirdRoadPattern() {
  return (
    <div className="road-pattern relative flex items-center overflow-hidden">
      <Image
        src="/new_assets/red white car.png"
        alt="car"
        width={150}
        height={150}
        className="rotate-90 absolute left-[10%] md:left-[500px] md:w-[290px]"
      />
    </div>
  )
}

function ContactSection() {
  return (
    <section id="Contact Us" className="py-10 px-6 md:px-[10%]">
      <h2 className="text-3xl md:text-[3.5rem] text-left text-[#FFFFFF] mb-8 font-bold [-webkit-text-stroke:1px_#003049] md:[-webkit-text-stroke:3px_#003049]">
        Contact Us
      </h2>
      <div id="contact-info" className="space-y-4 md:space-y-2 text-base md:text-[2rem]">
        <p className="flex items-center gap-4 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={40} height={40} className="md:w-[80px] md:h-[80px]" />
          <span>
            Email:{" "}
            <a href="mailto:hello@duwithacks.com" className="text-[#003049] underline break-all">
              hello@duwithacks.com
            </a>
          </span>
        </p>
        <p className="flex items-center gap-4 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={40} height={40} className="md:w-[80px] md:h-[80px]" />
          <span>
            Instagram:{" "}
            <a href="https://www.instagram.com/duwithacks/" className="text-[#003049] underline">
              @duwithacks
            </a>
          </span>
        </p>
        <p className="flex items-center gap-4 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={40} height={40} className="md:w-[80px] md:h-[80px]" />
          <span>
            Tiktok:{" "}
            <a href="https://www.tiktok.com/@duwit.hacks" className="text-[#003049] underline">
              @duwit.hacks
            </a>
          </span>
        </p>
        <p className="flex items-center gap-4 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={40} height={40} className="md:w-[80px] md:h-[80px]" />
          <span>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/company/duwit-hacks/" className="text-[#003049] underline">
              DUWiT Hacks
            </a>
          </span>
        </p>
        <p className="flex items-center gap-4 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={40} height={40} className="md:w-[80px] md:h-[80px]" />
          <span>
            Sponsors:{" "}
            <a href="mailto:sponsor@duwithacks.com" className="text-[#003049] underline break-all">
              sponsor@duwithacks.com
            </a>
          </span>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="footer-block">
        <p className="text-[0.5rem] md:text-[1rem] md:text-base text-[#FFFFFF] text-center p-4 max-w-4xl w-full">
          DUWiT Hacks follows the{" "}
          <a href="https://mlh.io/code-of-conduct" className="underline">
            MLH Code of Conduct
          </a>
          . DUWiT is an event hosted by Durham University Computing Society (
          <a href="https://compsoc.tech" className="underline">
            compsoc.tech
          </a>
          ), which is a student society affiliated with Durham Students' Union (
          <a href="https://durhamsu.com" className="underline">
            durhamsu.com
          </a>
          ). Durham Students' Union is registered in England as a company limited by guarantee (07689815) and a charity
          (1145400), with VAT number 119733690 and registered office Dunelm House, New Elvet, Durham DH1 3AN.
        </p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <FirstDivider />
      <AboutSection />
      <FirstRoadPattern />
      <Sponsorship />
      <Partners />
      <SecondRoadPattern />
      <FAQSection />
      <ThirdRoadPattern />
      <ContactSection />
      <Footer />
    </>
  )
}
