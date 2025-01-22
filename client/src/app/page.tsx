import * as React from 'react'

export default function Home() {
  return (
    <div
      style={{
        padding: '20px',
        minHeight: '200vh', // Ensure the content's height is larger than the viewport
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 10vw, 200px)",
            marginBottom: "10px",
            fontFamily: "var(--font-silkscreen)",
            background: "radial-gradient(circle,rgb(235, 209, 234) 30%, rgb(230, 199, 241) 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          DUWIT HACKS
        </h1>
        <p
          style={{
            fontSize: "clamp(1.5rem, 8vw, 70px)",
            fontFamily: "var(--font-unicaone)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            background: "radial-gradient(circle,rgb(194, 171, 204) 30%, rgb(245, 198, 245) 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            textOverflow: "ellipsis",
          }}
        >
          1-2 MARCH 2025
        </p>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: "100px" }}>
        <p
          style={{
            fontSize: "40px",
            lineHeight: "1.5",
            fontFamily: "var(--font-kodemono)",
            padding: "0 20%",
          }}
        >
          Join us for Durham University Women in Tech's inaugural hackathon, DUWiT Hacks!
        </p>
      </section>

      <section style={{ marginBottom: "100px" }}>
      <p
          style={{
            fontSize: "30px",
            lineHeight: "1.5",
            fontFamily: "var(--font-kodemono)",
            padding: "0 20%",
          }}
        >
          Running over 24-hours, DUWiT Hacks is a project creation competition,
          bringing together 150 students from underrepresented groups to collaborate
          and use tech to solve real world problems.
        </p>
        </section>

      {/* More info coming soon */}
      <section style={{ marginBottom: "100px" }}>
        <h2
          style={{
            fontSize: "100px",
            marginBottom: "20px",
            fontFamily: "var(--font-silkscreen)",
            padding: "0 20%",
          }}
        >
          MORE DETAILS
          COMING SOON...

        </h2>
      </section>

      {/* Sponsors */}

      <section style={{ marginBottom: "100px", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "clamp(2rem, 10vw, 100px)",
          marginBottom: "20px",
          fontFamily: "var(--font-silkscreen)",
        }}
      >
        SPONSORSHIP
      </h2>
      <p
        style={{
          fontSize: "clamp(1rem, 5vw, 30px)",
          fontFamily: "var(--font-kodemono)",
          lineHeight: "1.5",
          padding: "0 20%",
        }}
      >
        DUWiT Hacks is made possible by the incredible support of our sponsors,
        partners, and other funds.
      </p>

      {/* Sponsor Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {/* Sponsor 1 */}
        <img
          src="/Durham.svg"
          alt="DU logo"
          style={{
            width: "200px",
            height: "auto",
          }}
        />

        {/* Sponsor 2 */}
        <img
          src="/RTC.png"
          alt="RTC Logo"
          style={{
            width: "200px",
            height: "auto",
          }}
        />

        {/* MLH Logo */}
        <img
          src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg" // MLH Logo SVG
          alt="MLH Logo"
          style={{
            width: "200px",
            height: "auto",
          }}
        />
      </div>
    </section>



      {/* Contact */}
      <footer>
        <h2
          style={{
            fontSize: "clamp(2rem, 12vw, 100px)",
            marginBottom: "20px",
            fontFamily: "var(--font-silkscreen)",
          }}
        >
          CONTACT
        </h2>
        <p
          style={{
            fontSize: "clamp(0.75rem, 4vw, 30px)",
            lineHeight: "1.5",
            fontFamily: "var(--font-kodemono)",
            padding: "0 20%",
          }}
        >
          If you'd like to get involved or have any questions, please reach out
          to
          <a
            href="mailto:hello@duwithacks.com"
            style={{ color: "#FFD700", fontFamily: "var(--font-kodemono)" }}
          >
            {" "}
            hello@duwithacks.com
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
