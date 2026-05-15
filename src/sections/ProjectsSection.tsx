import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

// Google Drive direct image embed — works when file is "Anyone with the link" shared
const gdrive = (id: string) =>
  `https://lh3.googleusercontent.com/d/${id}=w1000`

// Fallback gradient backgrounds per project if images fail
const PROJECT_COLORS = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #1a0533 50%, #2d1b69 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a1500 100%)',
]

const PROJECTS = [
  {
    num: '01',
    name: 'Campus Connect',
    category: 'Full Stack',
    url: 'https://campus-connect-two-pi.vercel.app/',
    color: PROJECT_COLORS[0],
    col1img1: '/projects/cc1.png',   // Student Dashboard
    col1img2: '/projects/cc2.png',   // Admin Login
    col2img:  '/projects/cc3.png',   // Admin Dashboard (main)
  },
  {
    num: '02',
    name: 'PathForge AI',
    category: 'AI + Web',
    url: 'https://path-forge-iota.vercel.app/',
    color: PROJECT_COLORS[1],
    col1img1: gdrive('1wy87HlXP0ahVEmzwxc_BgKgYdVVLR8F8'),
    col1img2: gdrive('1agkZinFT_n_5LdBFfK0GpJXmD9drg628'),
    col2img: gdrive('1bcObF0lXEwWCoCGxBMFZycZBKleVExrP'),
  },
  {
    num: '03',
    name: 'Flux Image Generator',
    category: 'Generative AI',
    url: 'https://flux-image-generator-1g01.onrender.com',
    color: PROJECT_COLORS[2],
    col1img1: gdrive('13sPBUtOPwYad7-7cl9rjpdFmRlekrb25'),
    col1img2: gdrive('1_qhIlRImLegzCv9_bIS9zJlxBXDd-y9t'),
    col2img: gdrive('1_xtdiEUmbjYm27JmgeoK_YFYvwoamDri'),
  },
]

const MORE_PROJECTS = [
  { name: 'PDF Summarizer', url: 'https://pdf-summarizer-qvzf.onrender.com', desc: 'Upload a PDF and get an AI-powered summary instantly.', tag: 'AI Tool' },
  { name: 'InterviewPulse', url: 'https://samarth1518.github.io/InterviewPulse/', desc: 'Smart interview prep platform with dynamic quizzes and score tracking.', tag: 'Ed-Tech' },
  { name: 'Vibe Check', url: 'https://vibecheck-ecru-six.vercel.app/', desc: 'A fun vibe and mood checker web app.', tag: 'Fun' },
  { name: 'AeroDash', url: 'https://aero-dash-omega.vercel.app/', desc: 'A fast-paced browser-based game with smooth controls.', tag: 'Game' },
]

const imgBorderRadius = 'clamp(18px, 3vw, 40px)'

function ProjectImage({ src, alt, style }: { src: string; alt: string; style: React.CSSProperties }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        objectFit: 'cover',
        display: 'block',
        ...style,
      }}
    />
  )
}

function ProjectCard({
  project,
  index,
  totalCards,
  containerRef,
}: {
  project: (typeof PROJECTS)[0]
  index: number
  totalCards: number
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [index / totalCards, 1], [1, targetScale])

  return (
    <div
      style={{
        height: '85vh',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'sticky',
        top: `${24 + index * 28}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          borderRadius: 'clamp(28px, 4vw, 60px)',
          border: '2px solid rgba(215,226,234,0.2)',
          background: '#0C0C0C',
          width: '100%',
          padding: 'clamp(16px, 2.5vw, 32px)',
          transformOrigin: 'top center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxHeight: '82vh',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
            <span
              className="font-black leading-none hero-heading"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)', lineHeight: 0.9 }}
            >
              {project.num}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500 }}>
                {project.category}
              </span>
              <span className="font-black uppercase" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)', color: '#D7E2EA', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        {/* Image grid — fills remaining height */}
        <div style={{ display: 'flex', gap: '10px', flex: 1, minHeight: 0 }}>
          {/* Left 40% — two stacked images */}
          <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ flex: 1, borderRadius: imgBorderRadius, overflow: 'hidden', background: 'rgba(215,226,234,0.06)' }}>
              <ProjectImage src={project.col1img1} alt={`${project.name} 1`} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ flex: 1.4, borderRadius: imgBorderRadius, overflow: 'hidden', background: 'rgba(215,226,234,0.06)' }}>
              <ProjectImage src={project.col1img2} alt={`${project.name} 2`} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          {/* Right 60% — one tall image */}
          <div style={{ flex: 1, borderRadius: imgBorderRadius, overflow: 'hidden', background: 'rgba(215,226,234,0.06)' }}>
            <ProjectImage src={project.col2img} alt={`${project.name} main`} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="projects"
      style={{ background: '#0C0C0C' }}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1, letterSpacing: '-0.02em' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            containerRef={containerRef}
          />
        ))}
      </div>

      {/* More Projects */}
      <div className="mt-28 sm:mt-36">
        <FadeIn delay={0} y={30}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(215,226,234,0.1)' }} />
            <h3 className="font-black uppercase tracking-wider whitespace-nowrap" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.2rem)', color: '#D7E2EA', opacity: 0.4 }}>
              More Projects
            </h3>
            <div style={{ flex: 1, height: '1px', background: 'rgba(215,226,234,0.1)' }} />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {MORE_PROJECTS.map((proj, i) => (
            <FadeIn key={proj.name} delay={i * 0.08} y={20}>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }} className="group">
                <div
                  style={{ border: '1px solid rgba(215,226,234,0.12)', borderRadius: '20px', padding: '28px', background: 'rgba(215,226,234,0.02)', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'border-color 0.25s, background 0.25s' }}
                  className="group-hover:border-[rgba(215,226,234,0.3)] group-hover:bg-[rgba(215,226,234,0.06)]"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                        {proj.tag}
                      </span>
                      <span className="font-black uppercase" style={{ color: '#D7E2EA', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', letterSpacing: '-0.01em' }}>
                        {proj.name}
                      </span>
                    </div>
                    <ArrowUpRight size={18} style={{ color: '#D7E2EA', opacity: 0.3, flexShrink: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-80" />
                  </div>
                  <p style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.78rem, 1.1vw, 0.86rem)', fontWeight: 300, lineHeight: 1.65 }}>
                    {proj.desc}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
