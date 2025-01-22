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
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '500px', marginBottom: '10px' }}>DUWIT HACKS</h1>
        <p style={{ fontSize: '100px' }}>1-2 MARCH</p>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '220px', marginBottom: '20px' }}>ABOUT</h2>
        <p style={{ fontSize: '60px', lineHeight: '1.5' }}>
          Join us this March in Durham for Durham University Women in Tech's inaugural hackathon, DUWiT Hacks.
          Running over 24-hours, DUWiT Hacks is a project creation competition, bringing together 150 members of
          underrepresented groups in tech, including women and non-binary individuals.
        </p>
      </section>

      {/* What is a Hackathon */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '220px', marginBottom: '20px' }}>WHAT IS A HACKATHON?</h2>
        <p style={{ fontSize: '60px', lineHeight: '1.5' }}>
          A hackathon, or hack-marathon, is a tech competition, where attendees engage in rapid and collaborative
          project creation to build tech projects which solve real-world problems.
        </p>
      </section>

      {/* Sponsorship */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '220px', marginBottom: '20px' }}>SPONSORSHIP</h2>
        <p style={{ fontSize: '60px', lineHeight: '1.5' }}>
          DUWiT Hacks is made possible by the incredible support of our sponsors, partners, and other funds.
        </p>
      </section>

      {/* Contact */}
      <footer>
        <h2 style={{ fontSize: '220px', marginBottom: '20px' }}>CONTACT</h2>
        <p style={{ fontSize: '60px', lineHeight: '1.5' }}>
          If you'd like to get involved or have any questions, please reach out to
          <a href="mailto:hello@duwithacks.com" style={{ color: '#FFD700' }}> hello@duwithacks.com</a>.
        </p>
      </footer>
    </div>
  )
}
