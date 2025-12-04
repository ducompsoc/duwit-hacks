import Image from "next/image"

import "@/styles/custom.css"

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
    <section id="sponsors" className="relative w-full">
      <div className="flex items-center justify-center">
        <Image
          src="/new_assets/Track with stand.png"
          alt="Divider Waves"
          width={1000}
          height={1000}
          className="w-full"
        />
        <div className="absolute top-[-9%] left-[-1.68%] w-full flex justify-left px-4 py-2">
          <Image
            src="/new_assets/Trees.png"
            alt="Trees"
            width={470}
            height={10}
          />
        </div>
      </div>
      <div className="absolute top-[41.5%] w-full h-[7rem] flex justify-left px-4 py-2">
        <div className="w-[25%]"> 
          <h2 className="text-[3rem] text-left text-[#FFFFFF] mb-8 relative top-[5%]">Sponsors</h2>
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
        <p className="flex items-center gap-2">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Email: hello@duwithacks.com
        </p>
        <p className="flex items-center gap-2">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Instagram: @duwithacks
        </p>
        <p className="flex items-center gap-2">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Tiktok: @duwit.hacks
        </p>
        <p className="flex items-center gap-2">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          LinkedIn: DUWiT Hacks
        </p>
        <p className="flex items-center gap-2">
          <Image src="/new_assets/Flags.png" alt="Flag" width={80} height={80} />
          Sponsors please contact: sponsor@duwithacks.com
        </p>
      </div>
    </section>
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
      <SecondRoadPattern />
      <FAQSection />
      <ThirdRoadPattern />
      <ContactSection />
    </>
  )
}
