import { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  // Pass this ref to Magnet so movement is scoped to the hero section only
  const heroRef = useRef<HTMLElement>(null)

  const handleNavClick = (label: string) => {
    const id = label.toLowerCase()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (label === 'Contact') {
      window.location.href = 'mailto:ngsamarth2004@gmail.com'
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="h-screen flex flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C', position: 'relative' }}
    >
      {/* Navbar — z-index above portrait */}
      <FadeIn delay={0} y={-20} className="w-full flex-shrink-0" style={{ position: 'relative', zIndex: 20 }}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              id={`nav-${link.toLowerCase()}`}
              onClick={() => handleNavClick(link)}
              style={{
                color: '#D7E2EA',
                fontFamily: "'Kanit', sans-serif",
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                position: 'relative',
                zIndex: 20,
              }}
              className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70"
            >
              {link}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Main area: SAMARTH text + portrait overlay */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* SAMARTH — centered, fills full width */}
        <FadeIn delay={0.15} y={40} className="w-full text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{
              fontSize: 'clamp(16vw, 20vw, 22vw)',
              letterSpacing: '-0.02em',
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Samarth
          </h1>
        </FadeIn>

        {/* Portrait — absolutely centered over text, magnetic but non-blocking */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            pointerEvents: 'none', // NEVER block any clicks beneath
          }}
        >
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3.5}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              containerRef={heroRef}
            >
              <img
                src="/animate.png"
                alt="Samarth portrait"
                style={{
                  width: 'clamp(200px, 26vw, 400px)',
                  objectFit: 'contain',
                  display: 'block',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar — z-index above portrait */}
      <div
        className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 flex-shrink-0"
        style={{ position: 'relative', zIndex: 20 }}
      >
        <FadeIn delay={0.35} y={20}>
          <p
            style={{
              color: '#D7E2EA',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: 1.35,
              fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
            }}
            className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          >
            a developer driven by crafting clean, functional, and impactful web experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
