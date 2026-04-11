import { useEffect, useRef } from 'react'

function ContactHero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty('--mx', `${x}%`)
      hero.style.setProperty('--my', `${y}%`)
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="contact-hero" ref={heroRef}>
      <div className="contact-hero__noise" />
      <div className="contact-hero__spotlight" />

      <div className="contact-hero__content">
        <span className="contact-hero__eyebrow">MOI FASHION — CARTAGENA</span>
        <h1 className="contact-hero__title">
          ¿Tienes algo<br />
          <span className="contact-hero__title--gold">en mente?</span><br />
          Hablemos.
        </h1>
        <p className="contact-hero__subtitle">
          Estamos aquí para ayudarte. Cuéntanos qué necesitas.
        </p>
        <div className="contact-hero__scroll-hint">
          <span />
        </div>
      </div>
    </section>
  )
}

export default ContactHero
