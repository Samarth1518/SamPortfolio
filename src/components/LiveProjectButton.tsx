interface LiveProjectButtonProps {
  href: string
}

export default function LiveProjectButton({ href }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderRadius: '9999px',
        border: '2px solid #D7E2EA',
        color: '#D7E2EA',
        fontFamily: "'Kanit', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background 0.2s',
      }}
      className="px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10"
    >
      Live Project
    </a>
  )
}
