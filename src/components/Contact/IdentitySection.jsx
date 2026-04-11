function IdentitySection() {
  return (
    <section className="identity-section" id="identity">
      {/* Layered background: dark overlay + gradient */}
      <div className="identity-section__overlay" />
      <div className="identity-section__content">
        <span className="identity-section__wave">🌊</span>
        <h2 className="identity-section__title">
          Somos de<br />
          <span className="identity-section__city">Cartagena</span>
        </h2>
        <p className="identity-section__desc">
          Nacimos en la ciudad más hermosa de Colombia para traerte moda masculina<br />
          que combina elegancia contemporánea con el espíritu caribeño.
        </p>
        <div className="identity-section__pillars">
          <div className="identity-pillar">
            <span className="identity-pillar__icon">🇨🇴</span>
            <span className="identity-pillar__label">Orgullo colombiano</span>
          </div>
          <div className="identity-pillar">
            <span className="identity-pillar__icon">✦</span>
            <span className="identity-pillar__label">Moda de calidad</span>
          </div>
          <div className="identity-pillar">
            <span className="identity-pillar__icon">🌊</span>
            <span className="identity-pillar__label">Estilo caribeño</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdentitySection
