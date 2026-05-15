import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className = '', style = {} }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = Math.min(start + 3 / words.length, 1)
        return (
          <AnimatedWord
            key={i}
            word={word}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </p>
  )
}

function AnimatedWord({
  word,
  scrollYProgress,
  start,
  end,
}: {
  word: string
  scrollYProgress: any
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])

  return (
    <motion.span
      style={{ opacity, display: 'inline' }}
    >
      {word}{' '}
    </motion.span>
  )
}
