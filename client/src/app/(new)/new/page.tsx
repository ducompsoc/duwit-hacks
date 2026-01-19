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
      <h1 className="text-[6rem]">DUWiT Hacks</h1>
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
        <p>Innovation Starts Here, Diversity Leads the Way</p>
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
    <section id="about" className="py-10 px-4">
      <h2 className="text-[3rem] text-left text-[#000000] mb-8">About</h2>
      <p className="text-[1.5rem] text-[#000000] max-w-4xl mx-auto">
        Running over 24-hours, DUWiT Hacks is a project creation competition, bringing together 150 students from
        underrepresented groups to collaborate and use tech to solve real world problems.
      </p>
    </section>
  )
}
function FirstRoadPattern() {
  return <div className="road-pattern w-full" />
}

function Sponsorship() {
  return (
    <section id="sponsorship" className="relative flex w-full h-[1000px]">
      <div id="sponsors" className="flex justify-left px-4 py-2">
        <h2 className="text-[3rem] text-left text-[#000000]">Sponsors</h2>
      </div>
      <div className="absolute top-[10%] left-[10%]">
        <h3 className="text-[1.5rem] text-left text-[#000000] mb-8">Champion</h3>
        <div className="flex items-center gap-8">
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/Neptune North.png" alt="" width={120} height={120} />
          <Image src="/new_assets/Accenture.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
        </div>
      </div>
      <div className="absolute top-[30%] left-[10%]">
        <h3 className="text-[1.5rem] text-left text-[#000000] mb-8">Podium Finisher</h3>
        <div className="flex items-center gap-8">
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
          <Image src="/new_assets/_ block.png" alt="" width={120} height={120} />
        </div>
      </div>
      <div className="absolute top-[50%] left-[10%]">
        <h3 className="text-[1.5rem] text-left text-[#000000] mb-8">Pit Crew</h3>
        <div className="flex items-center gap-8">
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
          <h2 className="text-[3rem] text-left text-[#FFFFFF] mb-8 relative top-[30%]">Partners</h2>
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
    <section id="faq" className="py-10 px-4">
      <h2 className="text-[3rem] text-left text-[#000000] mb-8">FAQs</h2>
      {/* Add FAQ content here */}
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
    <section id="contact" className="py-10 px-4">
      <h2 className="text-[3rem] text-left text-[#000000] mb-8">Contact Us</h2>
      <div id="contact-info" className="space-y-2">
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Email: hello@duwithacks.com
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Instagram: @duwithacks
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Tiktok: @duwit.hacks
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          LinkedIn: DUWiT Hacks
        </p>
        <p className="flex items-center gap-2 text-[#000000]">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Sponsors please contact: sponsor@duwithacks.com
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
          DUWiT Hacks follows the MLH Code of Conduct. DUWiT is an event hosted by Durham University Computing Society
          (compsoc.tech), which is a student society affiliated with Durham Students' Union (durhamsu.com). Durham
          Students' Union is registered in England as a company limited by guarantee (07689815) and a charity (1145400),
          with VAT number 119733690 and registered office Dunelm House, New Elvet, Durham DH1 3AN.
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
