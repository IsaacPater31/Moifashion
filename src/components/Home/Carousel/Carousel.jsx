import { useState, useEffect } from 'react'
import './Carousel.css'

/* ─── Carousel images — swap files in src/assets/images/carousel/ ─── */
import slide1 from '../../../assets/images/carousel/slide-1.png'
import slide2 from '../../../assets/images/carousel/slide-2.png'
import slide3 from '../../../assets/images/carousel/slide-3.png'
import slide4 from '../../../assets/images/carousel/slide-4.png'

function Carousel({ onChange }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 'about',
      title: 'Nuestra Historia',
      subtitle: 'Selección Exclusiva',
      description: 'Nos especializamos en seleccionar los mejores diseños importados para crear presencia y elegancia. Cada pieza es cuidadosamente elegida para ofrecerte exclusividad y profesionalismo.',
      image: slide1,
      buttonText: 'Conoce Nuestra Historia',
      buttonAction: () => onChange('about')
    },
    {
      id: 'productos',
      title: 'Nuestra Colección',
      subtitle: 'Diseños Sofisticados',
      description: 'Explora nuestra colección de prendas importadas de diseño sofisticado. Seleccionamos meticulosamente cada pieza para entregarte exclusividad y crear tu propia presencia única.',
      image: slide2,
      buttonText: 'VER COLECCIÓN',
      buttonAction: () => onChange('productos')
    },
    {
      id: 'blog',
      title: 'Blog MOI Fashion',
      subtitle: 'Estilo y Presencia',
      description: 'Descubre consejos de estilo, tendencias de diseño y cómo crear tu propia presencia a través de la moda. Mantente actualizado con contenido exclusivo sobre elegancia y profesionalismo.',
      image: slide3,
      buttonText: 'Leer Blog',
      buttonAction: () => onChange('blog')
    },
    {
      id: 'contact',
      title: 'Contáctanos',
      subtitle: 'Estamos Aquí Para Ti',
      description: '¿Tienes preguntas sobre nuestra selección exclusiva o quieres hacer una consulta personalizada sobre estilo y presencia? Nuestro equipo está listo para ayudarte.',
      image: slide4,
      buttonText: 'Hablemos',
      buttonAction: () => onChange('contact')
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 12000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <div className="carousel-text">
                  <h2 className="carousel-title">{slide.title}</h2>
                  <h3 className="carousel-subtitle">{slide.subtitle}</h3>
                  <p className="carousel-description">{slide.description}</p>
                  <button className="btn primary carousel-btn" onClick={slide.buttonAction}>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-arrow carousel-arrow-prev" onClick={goToPrev} aria-label="Slide anterior">
          <span>‹</span>
        </button>
        <button className="carousel-arrow carousel-arrow-next" onClick={goToNext} aria-label="Siguiente slide">
          <span>›</span>
        </button>
      </div>
    </section>
  )
}

export default Carousel
