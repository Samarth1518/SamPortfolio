import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer
      id="contact"
      style={{ background: '#0C0C0C', borderTop: '1px solid rgba(215,226,234,0.1)' }}
      className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 flex flex-col items-center gap-8 text-center"
    >
      {/* Name */}
      <span
        className="font-black uppercase tracking-tight"
        style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', color: '#D7E2EA' }}
      >
        Samarth N Gwageri
      </span>

      {/* Contact info */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <a
          href="mailto:ngsamarth2004@gmail.com"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ color: '#D7E2EA', textDecoration: 'none', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
        >
          <Mail size={18} />
          ngsamarth2004@gmail.com
        </a>

        <span
          style={{ color: '#D7E2EA', opacity: 0.3, display: 'none' }}
          className="sm:inline-block"
        >
          |
        </span>

        <span
          className="flex items-center gap-2"
          style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
        >
          <MapPin size={18} />
          Mandya, Karnataka
        </span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/samarthngwageri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ color: '#D7E2EA', textDecoration: 'none', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
        >
          <Linkedin size={22} />
          <span className="font-medium uppercase tracking-wider">LinkedIn</span>
        </a>

        <span style={{ color: '#D7E2EA', opacity: 0.3 }}>|</span>

        <a
          href="https://github.com/Samarth1518"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ color: '#D7E2EA', textDecoration: 'none', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
        >
          <Github size={22} />
          <span className="font-medium uppercase tracking-wider">GitHub</span>
        </a>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', maxWidth: '400px', height: '1px', background: 'rgba(215,226,234,0.1)' }} />

      {/* Copyright */}
      <div className="flex flex-col items-center gap-2">
        <span style={{ color: '#D7E2EA', opacity: 0.4, fontSize: '0.85rem' }}>
          © 2025 Samarth N Gwageri. All rights reserved.
        </span>
        <span style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '0.8rem' }}>
          Built with React &amp; ❤️
        </span>
      </div>
    </footer>
  )
}
