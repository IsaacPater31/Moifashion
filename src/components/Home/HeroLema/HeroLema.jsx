import { useEffect, useRef } from 'react'
import './HeroLema.css'

function HeroLema() {
  const textRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = textRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calcular el progreso del scroll cuando el elemento entra en la pantalla
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // El efecto comienza cuando el elemento está a la mitad de la pantalla
      const startPoint = windowHeight * 0.5
      const endPoint = -elementHeight
      
      // Calcular el progreso (0 a 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (startPoint - elementTop) / (startPoint - endPoint)
      ))
      
      // Crear el efecto de ola que recorre de izquierda a derecha
      const wavePosition = scrollProgress * 100
      const waveWidth = 30 // Ancho de la ola dorada
      
      // Crear gradiente que simula una ola dorada recorriendo el texto
      element.style.background = `linear-gradient(90deg, 
        #ffffff 0%, 
        #ffffff ${Math.max(0, wavePosition - waveWidth)}%, 
        #b8860b ${Math.max(0, wavePosition - waveWidth/2)}%, 
        #b8860b ${Math.min(100, wavePosition + waveWidth/2)}%, 
        #ffffff ${Math.min(100, wavePosition + waveWidth)}%, 
        #ffffff 100%)`
      element.style.webkitBackgroundClip = 'text'
      element.style.backgroundClip = 'text'
      element.style.webkitTextFillColor = 'transparent'
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar al cargar

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-lema">
      <div className="hero-lema-content">
        <h1 ref={textRef} className="hero-lema-text">
          Para quienes no siguen tendencias, sino que crean su propia presencia.
        </h1>
      </div>
    </section>
  )
}

export default HeroLema

