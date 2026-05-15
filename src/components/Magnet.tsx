import { useRef, useEffect } from 'react'

interface MagnetProps {
  children: React.ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  /** Optional: restrict tracking to within this container ref */
  containerRef?: React.RefObject<HTMLElement | null>
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  containerRef,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      // If a container is provided, only activate when mouse is inside it
      if (containerRef?.current) {
        const cRect = containerRef.current.getBoundingClientRect()
        const insideContainer =
          e.clientX >= cRect.left &&
          e.clientX <= cRect.right &&
          e.clientY >= cRect.top &&
          e.clientY <= cRect.bottom
        if (!insideContainer) {
          el.style.transform = 'translate3d(0, 0, 0)'
          el.style.transition = inactiveTransition
          return
        }
      }

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY

      const inZone =
        Math.abs(distX) < rect.width / 2 + padding &&
        Math.abs(distY) < rect.height / 2 + padding

      if (inZone) {
        el.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`
        el.style.transition = activeTransition
      } else {
        el.style.transform = 'translate3d(0, 0, 0)'
        el.style.transition = inactiveTransition
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength, activeTransition, inactiveTransition, containerRef])

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', display: 'inline-block', pointerEvents: 'none' }}
    >
      {children}
    </div>
  )
}
