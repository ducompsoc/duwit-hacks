export const editionThemeTitle = "One Giant Leap"

export const socialLinks = [
  {
    label: "Instagram",
    handle: "@duwithacks",
    href: "https://www.instagram.com/duwithacks",
  },
  {
    label: "TikTok",
    handle: "@duwithacks",
    href: "https://www.tiktok.com/@duwithacks",
  },
  {
    label: "LinkedIn",
    handle: "DUWiT Hacks",
    href: "https://www.linkedin.com/company/duwit-hacks",
  },
] as const

/** Mirrors the “Website Copy” sections in manifesto.md */
export type StoryChapter = {
  id: string
  title: string
  paragraphs: readonly string[]
}

export const storyChapters: readonly StoryChapter[] = [
  {
    id: "about",
    title: "About / Why we exist",
    paragraphs: [
      "We're not chasing equal headcount in every room. Women-dominated fields exist and work just fine without a headcount campaign — that's not what this is. DUWiT Hacks exists because too many of us were told tech feels like a boys' job, and told we could do it anyway, like that was the whole conversation. We want it to stop feeling like a boys' job and just be a job — one where the ordinary medical realities of being a working-age woman aren't an inconvenient exception, and parental leave is just leave, shared, no gender attached.",
      'We\'re not here to relitigate old arguments about whether women belong in tech. We\'re here because the idea that gets waved off in a meeting still tends to land the second a man says it, and because "decisive" and "difficult" still describe the same behaviour depending on who\'s doing it.',
      "We're also here because the room keeps getting smaller. Mixed classroom, then the subject where you're the only girl who picked it, then a degree course that's around one in four women nationally (and fewer than that at plenty of universities), then an office where hardly any of the women left are the ones in technical or leadership seats. Some of the best friendships in this industry start as work friendships — and when there's no one else left who looks like you, that stops happening, quietly, long before anyone calls it a problem. DUWiT Hacks is a room built to catch that early, while you're still a student — by women, for women, with mentors and sponsors who are actually hiring.",
    ],
  },
  {
    id: "theme",
    title: "The theme: One Giant Leap",
    paragraphs: [
      "Edition III takes its name from the moon landing — and from Margaret Hamilton, the woman whose code, as Director of the Software Engineering Division at MIT's Instrumentation Laboratory, ran the guidance system that got Apollo to the moon and back. She's remembered today for a photo of her standing next to a stack of code taller than she was. At the time, \"software engineer\" wasn't even a job title yet — she more or less invented it on the way to the moon.",
      "That's the story we're building this year's hackathon around: brilliant, foundational work, done by a woman, that the world took decades to credit properly. We're not telling that story to be angry about it — we're telling it because it's genuinely one of the best stories in the history of engineering, and because the same skillset that got a spacecraft to the moon in 1969 is the one every attendee in this room is building right now.",
      "We called 2024 Launch. This year, we land.",
    ],
  },
  {
    id: "expect",
    title: "What to expect",
    paragraphs: [
      "Two days (dates TBC, early March 2027), one mission control. Expect team-based hackathon tracks, career workshops run by women actually working in the roles you're aiming for, 1:1s with sponsor engineers and recruiters, and — a DUWiT Hacks tradition now — a midnight donut run and bracelet making to get everyone through the small hours. Whether you're writing your first line of code or your fiftieth project, you'll leave with something built, a portfolio piece worth showing, and a network that didn't exist forty-eight hours earlier.",
    ],
  },
  {
    id: "track-record",
    title: "Our track record",
    paragraphs: [
      "We launched in 2024 with a single question: could this even get off the ground? Edition II answered it — attendance jumped to 180 students, a massive leap on our founding year, alongside a bigger sponsor roster, more career workshops than ever, and a mentorship programme attendees told us actually changed their job search.",
      "One of our proudest moments: one of our founding organisers came back to sponsor Edition II from her own seat at GitHub — proof that DUWiT Hacks isn't just a weekend event, it's a pipeline, and the women who build it are the same women it puts into the industry.",
      "Edition III is the biggest mission yet. We launched in 2024. This year, we land.",
    ],
  },
] as const

export const forSponsors = {
  id: "sponsors",
  title: "For sponsors",
  body: "Sponsoring DUWiT Hacks means putting your company in front of the next generation of women in tech before your competitors even know their names. Past sponsors have run workshops, sat on mentorship panels, and hired straight out of our attendee pool — including one of our own founders, now sponsoring us from inside the industry she helped shape. Edition III is our biggest mission yet. Join the crew.",
} as const

export const forAttendees = {
  id: "attendees",
  title: "For attendees",
  body: "No matter your experience level, DUWiT Hacks is built for you to show up, build something real, and leave with a foothold in the industry — mentors, sponsors, workshops, and a room full of women who've got your back. Early March 2027. Applications open soon — join our mailing list to be first to know.",
} as const
