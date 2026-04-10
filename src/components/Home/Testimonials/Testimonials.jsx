import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: "Ana García",
      location: "Madrid, España",
      rating: 5,
      text: "La selección de prendas es excepcional. Cada pieza que he comprado refleja elegancia y sofisticación. Me encanta la exclusividad que ofrecen y cómo me ayuda a crear mi propia presencia única.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Carlos Mendoza",
      location: "Barcelona, España",
      rating: 5,
      text: "Encontré exactamente lo que buscaba: prendas de diseño sofisticado que me dan presencia y profesionalismo. La atención personalizada y la exclusividad de cada pieza son incomparables.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Laura Fernández",
      location: "Valencia, España",
      rating: 5,
      text: "La elegancia y exclusividad de sus prendas es impresionante. Cada diseño refleja profesionalismo y me ayuda a proyectar la imagen que quiero. Definitivamente mi tienda de confianza.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'active' : ''}`}
      >
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="testimonials-subtitle">
            Descubre por qué nuestros clientes confían en nosotros para crear su propia presencia y elegancia.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-quote">
                "{testimonial.text}"
              </blockquote>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

