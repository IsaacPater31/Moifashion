import './Footer.css'

function Footer({ onChange }) {
  const handleNavClick = (section) => {
    if (onChange) {
      onChange(section)
      // Hacer scroll hacia arriba después de cambiar la sección
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Left Section - Brand & Tagline */}
          <div className="footer-brand">
            <div className="footer-tagline">
              <h2>Moi Fashion Store.</h2>
              <span className="tm-symbol">TM</span>
            </div>
            <p className="footer-copyright">
              COPYRIGHT © 2025 MOI FASHION STORE® LLC. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Center Section - Navigation */}
          <div className="footer-navigation">
            <h3>Navegación</h3>
            <nav className="footer-nav-links">
              <button 
                className="footer-nav-link"
                onClick={() => handleNavClick('home')}
              >
                Inicio
              </button>
              <button 
                className="footer-nav-link"
                onClick={() => handleNavClick('about')}
              >
                Nosotros
              </button>
              <button 
                className="footer-nav-link"
                onClick={() => handleNavClick('productos')}
              >
                Productos
              </button>
              <button 
                className="footer-nav-link"
                onClick={() => handleNavClick('contact')}
              >
                Contáctanos
              </button>
            </nav>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-contact">
            <h3>Contacto</h3>
            <div className="contact-info">
              <p>📧 info@fashionstore.com</p>
              <p>📞 +34 900 123 456</p>
              <p>📍 Madrid, España</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="footer-bg-effects">
        <div className="footer-gradient-1"></div>
        <div className="footer-gradient-2"></div>
        <div className="footer-particles"></div>
      </div>
    </footer>
  )
}

export default Footer

