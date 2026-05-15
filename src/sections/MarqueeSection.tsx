import { useEffect, useRef, useState } from 'react'
import FadeIn from '../components/FadeIn'

const TECH_STACK = [
  'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'MySQL',
  'Tailwind CSS', 'Python', 'Git', 'Vercel', 'Framer Motion', 'REST APIs',
  'HTML5', 'CSS3', 'JavaScript', 'GitHub', 'Render', 'VS Code',
  'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'MySQL',
  'Tailwind CSS', 'Python', 'Git', 'Vercel', 'Framer Motion', 'REST APIs',
]

const STATS = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years Coding' },
  { value: '50+', label: 'Club Members Led' },
  { value: '5+', label: 'Tech Stacks' },
]

export default function TechStackSection() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame: number
    let pos = 0
    const speed = 0.6

    const animate = () => {
      pos += speed
      // Reset when we've scrolled one full set
      if (tickerRef.current) {
        const halfWidth = tickerRef.current.scrollWidth / 2
        if (pos >= halfWidth) pos = 0
        setOffset(pos)
      }
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      style={{ background: '#0C0C0C', borderTop: '1px solid rgba(215,226,234,0.08)' }}
      className="pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Stats Row */}
      <div className="px-6 sm:px-10 mb-16 sm:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-5xl mx-auto"
          style={{ border: '1px solid rgba(215,226,234,0.1)', borderRadius: '24px', overflow: 'hidden' }}
        >
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} y={20}>
              <div
                style={{
                  background: 'rgba(215,226,234,0.03)',
                  padding: 'clamp(24px, 4vw, 48px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  borderRight: i < 3 ? '1px solid rgba(215,226,234,0.08)' : 'none',
                }}
              >
                <span
                  className="font-black"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: '#D7E2EA',
                    opacity: 0.45,
                    fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Section label */}
      <FadeIn delay={0} y={15}>
        <p
          style={{
            color: '#D7E2EA',
            opacity: 0.3,
            textAlign: 'center',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: 500,
            marginBottom: '24px',
          }}
        >
          Tech I work with
        </p>
      </FadeIn>

      {/* Ticker */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          ref={tickerRef}
          style={{
            display: 'flex',
            gap: '0',
            transform: `translateX(-${offset}px)`,
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {TECH_STACK.map((tech, i) => (
            <span
              key={i}
              style={{
                color: '#D7E2EA',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0 clamp(20px, 3vw, 40px)',
                whiteSpace: 'nowrap',
                opacity: i % 2 === 0 ? 0.8 : 0.25,
                borderRight: '1px solid rgba(215,226,234,0.1)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
