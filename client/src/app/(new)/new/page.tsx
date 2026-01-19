import Image from "next/image"

import "@/styles/custom.css"

import { zenDots } from "@/lib/fonts"

interface HeaderButtonsProps {
  text: string
}

function HeaderButtons({ text }: HeaderButtonsProps) {
  return (
    <button
      type="button"
      className="bg-[#003049] w-[22rem] h-[6rem] text-[1.9rem] text-white py-2 px-4 rounded-[60px] ring-4"
    >
      {text}
    </button>
  )
}

function Header() {
  return (
    <header className="text-[#780000] mb-10">
      <h1 className="text-[6rem] [-webkit-text-stroke:5px_#003049] font-bold">DUWiT Hacks</h1>
      <div className="text-[60px] relative">
        <p className="">7 - 8th March 2025</p>
        <p className="">Durham University</p>
        <Image
          src="/new_assets/Flags.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="absolute left-0 -top-10 -z-10"
        />
        <Image
          src="/new_assets/Flags.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="absolute right-0 -top-10 -z-10 scale-x-[-1]"
        />
      </div>
      <div className="flex gap-4 items-center justify-center mt-8">
        <HeaderButtons text="Sign Up Now" />
        <HeaderButtons text="Submit Your CV" />
      </div>
    </header>
  )
}

function FirstDivider() {
  return (
    <div className="w-full h-[5rem] bg-[#666666] flex justify-center py-2">
      <div className="w-full bg-[#760000] py-4 text-white text-[1.5rem]">
        <p className="[-webkit-text-stroke:1px_#003049] font-bold">Innovation Starts Here, Diversity Leads the Way</p>
      </div>
      <Image
        src="/new_assets/Car Blue White.png"
        alt="Divider Waves"
        width={290}
        height={230}
        className="right-0 top-50 object-cover -ms-7"
      />
    </div>
  )
}

function AboutSection() {
  return (
    <section id="About" className="relative">
      <div className="flex flex-col gap-4">
        <Image src="/new_assets/Background.png" alt="" width={300} height={300} className="w-full" />
      </div>
      <div className="absolute top-[10%] w-full h-[7rem] flex justify-left px-4 py-2">
        <h2 className="text-[3.5rem] text-left text-[#FFFFFF] mb-8 [-webkit-text-stroke:3px_#780000] font-bold">
          About
        </h2>
      </div>
      <div className="absolute top-[40%] w-full h-[7rem] flex justify-left px-4 py-2">
        <p className="text-[1.5rem] text-[#000000] max-w-4xl mx-auto">
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
    <section id="Sponsorship" className="flex flex-col w-full py-10 px-4 gap-12">
      <div id="sponsors" className="flex justify-left py-2">
        <h2 className="text-[3.5rem] text-left text-[#FFFFFF] [-webkit-text-stroke:3px_#003049] font-bold">Sponsors</h2>
      </div>
      <div className="px-[10%]">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-[1.5rem] text-left text-[#000000] tracking-[.15em]">Champion</h3>
          <Image src="/new_assets/Trophy.png" alt="" width={60} height={60} />
        </div>
        <div className="flex items-center gap-8 justify-center">
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/Neptune North.png" alt="" width={120} height={120} />
          <Image src="/new_assets/Accenture.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
        </div>
      </div>
      <div className="px-[10%]">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-[1.5rem] text-left text-[#000000] tracking-[.15em]">Podium Finisher</h3>
          <Image src="/new_assets/Silver Medal.png" alt="" width={60} height={60} />
        </div>
        <div className="flex items-center gap-8 justify-center">
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
        </div>
      </div>
      <div className="px-[10%]">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-[1.5rem] text-left text-[#000000] tracking-[.15em]">Pit Crew</h3>
          <Image src="/new_assets/Wrench.png" alt="" width={60} height={60} />
        </div>
        <div className="flex items-center gap-8 justify-center">
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/RTC.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section id="partners" className="flex relative justify-left">
      <Image
        src="/new_assets/Sponsorship-Section.png"
        alt="Sponsorship Section"
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="absolute top-[41.5%] w-full h-[7rem] flex justify-left px-4 py-2">
        <div className="w-[25%]">
          <h2 className="text-[3.5rem] text-left text-[#FFFFFF] mb-8 relative top-[30%] [-webkit-text-stroke:3px_#780000] font-bold">
            Partners
          </h2>
        </div>
        <div id="sponsor-logos" className="flex flex-row w-[75%] justify-end">
          {/* Add sponsor logos here */}
        </div>
      </div>
    </section>
  )
}

function SecondRoadPattern() {
  return (
    <div className="road-pattern flex items-center justify-start">
      <Image
        src="/new_assets/red car.png"
        alt="car"
        width={290}
        height={290}
        className="rotate-90 absolute left-[17%]"
      />
      <Image
        src="/new_assets/red blue white car.png"
        alt="car"
        width={290}
        height={290}
        className="rotate-90 absolute right-[5%]"
      />
    </div>
  )
}

function FAQSection() {
  return (
    <section id="FAQs" className="relative z-10 py-10 px-4">
      <h2 className="text-[3.5rem] text-left text-[#FFFFFF] mb-8 [-webkit-text-stroke:3px_#780000] font-bold">FAQs</h2>
      {/* FAQ items */}
      <div className="flex flex-col gap-4 text-[#000000] justify-left">
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">Where is the event taking place?</summary>
          <p className="mt-2 text-[1.2rem]">
            Mathematical Sciences &amp; Computer Science Building, Durham University, Upper Mountjoy Campus, Stockton
            Road, DH1 3LE
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">What time does the event begin?</summary>
          <p className="mt-2 text-[1.2rem]">
            Registration opens at 9:30 on Saturday 7th March, and the closing ceremony finishes around 17:00 on Sunday
            8th March.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">
            Can I attend if I have no coding experience?
          </summary>
          <p className="mt-2 text-[1.2rem]">
            Of course! DUWiT Hacks is for participants of all levels. We provide HackPacks: tutorials and examples of
            specific skills you can use in your projects.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">Is food being provided?</summary>
          <p className="mt-2 text-[1.2rem]">
            Meals, snacks, and drinks will be provided. Please inform us of any dietary restrictions and avoid bringing
            nuts or peanuts.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">What do I need to bring?</summary>
          <p className="mt-2 text-[1.2rem]">
            A valid student ID (or other legal ID), your laptop and charger, and anything else you need for comfort.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">
            I don’t attend Durham University. Can I still attend?
          </summary>
          <p className="mt-2 text-[1.2rem]">
            Yes! Anyone who is a student or graduated within the last year may attend.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">
            I am a man but I want to be involved. What are my options?
          </summary>
          <p className="mt-2 text-[1.2rem]">
            You can volunteer or mentor. See our Instagram @duwithacks or email hello@duwithacks.com for details.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">How large can teams be?</summary>
          <p className="mt-2 text-[1.2rem]">Teams can be up to four people.</p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">What if I don’t have a team?</summary>
          <p className="mt-2 text-[1.2rem]">
            We’ll host team‑building events before and during the hackathon; feel free to arrive solo.
          </p>
        </details>
        <details className="mb-4">
          <summary className="text-[1.5rem] font-bold cursor-pointer">I have another question.</summary>
          <p className="mt-2 text-[1.2rem]">
            Reach out via email at{" "}
            <a href="mailto:hello@duwithacks.com" className="text-[#003049]">
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
    <div className="road-pattern flex items-center">
      <Image
        src="/new_assets/red white car.png"
        alt="car"
        width={290}
        height={290}
        className="rotate-90 absolute left-[500px]"
      />
    </div>
  )
}

function ContactSection() {
  return (
    <section id="Contact Us" className="py-10 px-4">
      <h2 className="text-[3.5rem] text-left text-[#FFFFFF] mb-8 font-bold [-webkit-text-stroke:3px_#003049]">
        Contact Us
      </h2>
      <div id="contact-info" className="space-y-2 text-[2rem]">
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Email:{" "}
          <a href="mailto:hello@duwithacks.com" className="text-[#003049] underline">
            hello@duwithacks.com
          </a>
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Instagram:{" "}
          <a href="https://www.instagram.com/duwithacks/" className="text-[#003049] underline">
            @duwithacks
          </a>
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Tiktok:{" "}
          <a href="https://www.tiktok.com/@duwit.hacks" className="text-[#003049] underline">
            @duwit.hacks
          </a>
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/company/duwit-hacks/" className="text-[#003049] underline">
            DUWiT Hacks
          </a>
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Sponsors please contact:{" "}
          <a href="mailto:sponsor@duwithacks.com" className="text-[#003049] underline">
            sponsor@duwithacks.com
          </a>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="footer-block">
        <p className="text-[1rem] text-[#FFFFFF] text-center p-4">
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
