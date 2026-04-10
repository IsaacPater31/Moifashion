import './CTASection.css'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Elegancia Importada. Disponible Ahora.</h2>
          <p className="cta-subtitle">
            Descubre prendas únicas de diseño sofisticado que crean presencia y elegancia. Exclusividad garantizada.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-button primary">
              Explorar Colección <span className="arrow">→</span>
            </button>
            <button className="cta-button secondary">
              Contactar <span className="arrow">→</span>
            </button>
          </div>
        </div>
        
        <div className="cta-background-text">
          <span className="background-word">ELEGANCIA</span>
        </div>
      </div>
    </section>
  )
}

export default CTASection

