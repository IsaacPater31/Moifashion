import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h2>Prendas Importadas de Diseño Sofisticado</h2>
          <p className="lead">Seleccionamos los mejores diseños importados para crear tu propia presencia. Traemos exclusividad, elegancia y profesionalismo directamente a tu guardarropa.</p>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn primary">Explorar Colección</button>
          </div>
        </div>
      </div>

      <section className="info-grid">
        <div className="info-card">
          <h3>Selección Exclusiva</h3>
          <p>Seleccionamos meticulosamente cada pieza para ofrecerte diseños sofisticados que reflejen elegancia y profesionalismo.</p>
        </div>
        <div className="info-card">
          <h3>Prendas Importadas</h3>
          <p>Cada artículo es único y limitado. Diseños americanos de alta calidad que no encontrarás en otras tiendas locales.</p>
        </div>
        <div className="info-card">
          <h3>Exclusividad Garantizada</h3>
          <p>Entregamos exclusividad a nuestros clientes a través de prendas cuidadosamente seleccionadas que crean presencia y distinción.</p>
        </div>
      </section>
    </section>
  )
}

export default Home

