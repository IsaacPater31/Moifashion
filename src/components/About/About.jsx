import { useEffect, useRef, useState } from 'react'
import './About.css'

/* ─── Scroll reveal hook ─── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

/* ─── Hero — animated letter-by-letter ─── */
const HERO_LINE1 = 'Elegancia que'
const HERO_LINE2 = 'habla por sí sola.'

function HeroWord({ word, baseDelay }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <span
          key={i}
          className="about-hero-char"
          style={{ '--char-delay': `${baseDelay + i * 0.04}s` }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )
}

function AboutHero() {
  return (
    <section className="about-hero" aria-label="Quiénes somos hero">
      {/* Ambient layers */}
      <div className="about-hero-bg-glow" aria-hidden="true" />
      <div className="about-hero-bg-shimmer" aria-hidden="true" />

      <div className="about-hero-inner">
        {/* Eyebrow */}
        <div className="about-eyebrow" aria-label="Sección">
          <span className="about-eyebrow-dot" aria-hidden="true" />
          Nuestra Historia
        </div>

        {/* Animated headline */}
        <h1 className="about-hero-title" aria-label={`${HERO_LINE1} ${HERO_LINE2}`}>
          <span className="about-hero-line">
            <HeroWord word={HERO_LINE1} baseDelay={0.3} />
          </span>
          <span className="about-hero-line about-hero-line--gold">
            <HeroWord word={HERO_LINE2} baseDelay={0.9} />
          </span>
        </h1>

        {/* Sub */}
        <p className="about-hero-sub">
          Moifashion nació de una obsesión: traer prendas importadas que
          creen presencia, distinción y elegancia atemporal a quienes
          se niegan a pasar desapercibidos.
        </p>

        {/* Scroll cue */}
        <div className="about-scroll-cue" aria-hidden="true">
          <span className="about-scroll-line" />
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2 — Sobre Nosotros ─── */
function AboutStory() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      className={`about-story ${visible ? 'about-visible' : ''}`}
      aria-label="Sobre nosotros"
    >
      {/* Parallax bg text */}
      <span className="about-story-bg-text" aria-hidden="true">MOI</span>

      <div className="about-story-inner">
        <div className="about-story-text">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dot" aria-hidden="true" />
            Sobre Nosotros
          </div>
          <h2 className="about-story-title">
            Cada prenda,<br />
            <span className="about-gold-text">una declaración.</span>
          </h2>
          <p className="about-story-body">
            Somos una marca de moda de lujo enfocada en seleccionar y traer
            diseños importados de alta calidad que no encontrarás en ninguna
            otra tienda local. Cada pieza pasa por un riguroso proceso de
            curación estética antes de llegar a ti.
          </p>
          <p className="about-story-body">
            Creemos que la ropa no es solo tela — es arquitectura del yo.
            Por eso, cada artículo que ofrecemos fue elegido para que quien
            lo vista proyecte seguridad, sofisticación y presencia genuina.
          </p>
        </div>

        <div className="about-story-visual">
          <div className="about-story-card">
            <div className="about-story-card-inner">
              <span className="about-story-card-symbol" aria-hidden="true">✦</span>
              <p className="about-story-card-quote">
                "La elegancia no es ser notado,<br />es ser recordado."
              </p>
              <p className="about-story-card-attr">— Giorgio Armani</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3 — Diferenciadores ─── */
const DIFFERENTIATORS = [
  {
    id: 'diff-exclusividad',
    number: '01',
    title: 'Selección Exclusiva',
    body: 'Curación meticulosa de cada pieza. Solo entra lo que supera nuestro estándar de diseño, calidad y distinción.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'diff-importadas',
    number: '02',
    title: 'Prendas Importadas',
    body: 'Diseños americanos únicos y de edición limitada. Lo que llevas no lo encontrará nadie más en tu ciudad.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'diff-presencia',
    number: '03',
    title: 'Presencia Garantizada',
    body: 'No vendemos ropa. Creamos la versión más poderosa de tu imagen. Elegancia que se percibe antes de que hables.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 'diff-calidad',
    number: '04',
    title: 'Calidad Premium',
    body: 'Cada hilo, cada corte, cada acabado refleja el más alto estándar. Prendas que envejecen con elegancia, como tú.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

function AboutDifferentiators() {
  const [ref, visible] = useScrollReveal(0.08)

  return (
    <section
      ref={ref}
      className={`about-diff ${visible ? 'about-visible' : ''}`}
      aria-label="¿Por qué Moifashion?"
    >
      <div className="about-diff-inner">
        <div className="about-section-header">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dot" aria-hidden="true" />
            ¿Por Qué Moifashion?
          </div>
          <h2 className="about-section-title">
            Lo que nos hace<br />
            <span className="about-gold-text">diferentes.</span>
          </h2>
        </div>

        <div className="about-diff-grid">
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={item.id}
              id={item.id}
              className="about-diff-card"
              style={{ '--card-cascade': `${i * 0.12}s` }}
            >
              <div className="about-diff-card-top">
                <div className="about-diff-icon">{item.icon}</div>
                <span className="about-diff-number">{item.number}</span>
              </div>
              <h3 className="about-diff-title">{item.title}</h3>
              <p className="about-diff-body">{item.body}</p>
              <div className="about-diff-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4 — ADN / Floating Words ─── */
const DNA_WORDS = [
  { word: 'Distinción', size: 'lg', delay: '0s', x: '8%', y: '18%' },
  { word: 'Lujo', size: 'xl', delay: '0.4s', x: '52%', y: '8%' },
  { word: 'Autenticidad', size: 'md', delay: '0.8s', x: '72%', y: '30%' },
  { word: 'Exclusividad', size: 'lg', delay: '0.2s', x: '20%', y: '58%' },
  { word: 'Elegancia', size: 'xl', delay: '1.1s', x: '55%', y: '62%' },
  { word: 'Presencia', size: 'md', delay: '0.6s', x: '5%', y: '82%' },
  { word: 'Sofisticación', size: 'sm', delay: '1.4s', x: '68%', y: '82%' },
]

function AboutDNA() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      className={`about-dna ${visible ? 'about-visible' : ''}`}
      aria-label="Nuestro ADN"
    >
      <div className="about-dna-inner">
        <div className="about-section-header about-section-header--center">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dot" aria-hidden="true" />
            Nuestro ADN
          </div>
          <h2 className="about-section-title">
            Las palabras que<br />
            <span className="about-gold-text">nos definen.</span>
          </h2>
        </div>

        <div className="about-dna-canvas" aria-label="Palabras que definen a Moifashion">
          {DNA_WORDS.map(({ word, size, delay, x, y }) => (
            <span
              key={word}
              className={`about-dna-word about-dna-word--${size}`}
              style={{
                '--dna-delay': delay,
                '--dna-x': x,
                '--dna-y': y,
              }}
              aria-label={word}
            >
              {word}
            </span>
          ))}
          {/* Center gold symbol */}
          <span className="about-dna-center" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5 — Testimonial destacado ─── */
function AboutTestimonial() {
  const [ref, visible] = useScrollReveal(0.15)

  return (
    <section
      ref={ref}
      className={`about-testimonial ${visible ? 'about-visible' : ''}`}
      aria-label="Testimonio destacado"
    >
      <div className="about-testimonial-inner">
        <div className="about-testimonial-quote-mark" aria-hidden="true">"</div>
        <blockquote className="about-testimonial-text">
          Desde que descubrí Moifashion, mi forma de vestir cambió por completo.
          No es solo ropa — es la seguridad de entrar a un lugar y saber que lo
          que llevas no lo tiene nadie más. Eso no tiene precio.
        </blockquote>
        <div className="about-testimonial-author">
          <div className="about-testimonial-avatar" aria-hidden="true">
            <span>V</span>
          </div>
          <div>
            <p className="about-testimonial-name">Valentina Ríos</p>
            <p className="about-testimonial-role">Clienta fiel desde 2023 · Bogotá, Colombia</p>
          </div>
        </div>
        <div className="about-testimonial-stars" aria-label="5 estrellas">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="about-star" aria-hidden="true">★</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6 — Dual CTA ─── */
function AboutCTA({ onChange }) {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <section
      ref={ref}
      className={`about-cta ${visible ? 'about-visible' : ''}`}
      aria-label="Llamada a la acción"
    >
      <div className="about-cta-inner">
        <p className="about-cta-eyebrow" aria-hidden="true">✦</p>
        <h2 className="about-cta-title">
          Moi Fashion.<br />
          <span className="about-gold-text">Diseñado para quienes eligen destacar.</span>
        </h2>
        <p className="about-cta-sub">
          Únete a quienes ya visten diferente.
        </p>
        <div className="about-cta-actions">
          <button
            id="about-cta-coleccion"
            className="about-btn about-btn--primary"
            onClick={() => onChange?.('productos')}
          >
            Ver Colección
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button
            id="about-cta-contacto"
            className="about-btn about-btn--ghost"
            onClick={() => onChange?.('contact')}
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─── Main export ─── */
function About({ onChange }) {
  return (
    <div className="about-page" id="quienes-somos">
      <AboutHero />
      <AboutStory />
      <AboutDifferentiators />
      <AboutDNA />
      <AboutTestimonial />
      <AboutCTA onChange={onChange} />
    </div>
  )
}

export default About
