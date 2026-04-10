import { useEffect, useRef } from 'react'
import './HeroLema.css'

function HeroLema() {
  const textRef    = useRef(null)
  const rafRef     = useRef(null)
  const progressRef = useRef(0)  // last known scroll progress

  useEffect(() => {
    const element = textRef.current
    if (!element) return

    /* Paint the gradient at a given progress (0–1) */
    const paint = (progress) => {
      const pos   = progress * 130 - 15          // runs -15 → 115
      const half  = 22

      element.style.backgroundImage = `linear-gradient(90deg,
        #c8c8c8 0%,
        #c8c8c8 ${Math.max(0, pos - half)}%,
        #e8c84a ${Math.max(0, pos - half * 0.3)}%,
        #f5e170 ${pos}%,
        #e8c84a ${Math.min(100, pos + half * 0.3)}%,
        #c8c8c8 ${Math.min(100, pos + half)}%,
        #c8c8c8 100%)`
    }

    /* Lerp helper — smooth chase */
    const lerp = (a, b, t) => a + (b - a) * t

    /* Calculate raw target from scroll position */
    const getTarget = () => {
      const rect         = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const startPoint   = windowHeight * 0.75   // start a bit earlier
      const endPoint     = -rect.height * 0.5

      return Math.max(0, Math.min(1,
        (startPoint - rect.top) / (startPoint - endPoint)
      ))
    }

    let target   = getTarget()
    let current  = target          // start exactly where we are (no jump)
    let running  = false

    const tick = () => {
      current = lerp(current, target, 0.09)  // easing factor
      paint(current)

      if (Math.abs(current - target) > 0.001) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        running = false
      }
    }

    const onScroll = () => {
      target = getTarget()
      if (!running) {
        running = true
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    // Paint immediately without animation on mount
    paint(getTarget())

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="hero-lema">
      <div className="hero-lema-content">
        <h2 ref={textRef} className="hero-lema-text">
          Para quienes no siguen tendencias,<br />sino que crean su propia presencia.
        </h2>
      </div>
    </section>
  )
}

export default HeroLema
