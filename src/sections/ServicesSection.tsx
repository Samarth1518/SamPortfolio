import FadeIn from '../components/FadeIn'

const SKILLS = [
  {
    num: '01',
    name: 'Full Stack Development',
    desc: 'Building end-to-end web applications using React, Node.js, Express, and databases like MySQL and MongoDB — from clean frontends to robust backends.',
  },
  {
    num: '02',
    name: 'Frontend & UI Design',
    desc: 'Crafting responsive, pixel-perfect interfaces with HTML, CSS, React and Tailwind CSS — focused on performance, usability, and great user experience.',
  },
  {
    num: '03',
    name: 'Database Design',
    desc: 'Designing and managing relational and NoSQL databases using MySQL and MongoDB — with attention to schema design, queries, and data integrity.',
  },
  {
    num: '04',
    name: 'AI Integration',
    desc: 'Integrating generative AI and APIs into practical web applications — including image generation, smart interview prep tools, and AI-driven features.',
  },
  {
    num: '05',
    name: 'Tools & Deployment',
    desc: 'Shipping projects efficiently using Git, GitHub, VS Code, Vercel, and Render — with experience in project documentation, team leadership, and agile workflows.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      style={{ background: '#FFFFFF' }}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            fontSize: 'clamp(3rem, 12vw, 160px)',
            color: '#0C0C0C',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Skill Items */}
      <div className="max-w-5xl mx-auto">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.num} delay={i * 0.1} y={30}>
            <div
              style={{
                borderTop: '1px solid rgba(12,12,12,0.15)',
                ...(i === SKILLS.length - 1
                  ? { borderBottom: '1px solid rgba(12,12,12,0.15)' }
                  : {}),
              }}
              className="flex items-start gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  color: '#0C0C0C',
                  lineHeight: 0.9,
                }}
              >
                {skill.num}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col gap-2 pt-1 sm:pt-2 md:pt-3">
                <span
                  className="font-medium uppercase"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                    color: '#0C0C0C',
                  }}
                >
                  {skill.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    color: '#0C0C0C',
                    opacity: 0.6,
                  }}
                >
                  {skill.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
