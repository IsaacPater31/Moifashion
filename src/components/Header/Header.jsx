import { useState } from 'react'
import moilogo from '../../assets/moilogo.png'
import './Header.css'

function Header({ active, onChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const items = [
    { id: 'home',      label: 'Inicio'    },
    { id: 'about',     label: 'Nosotros'  },
    { id: 'productos', label: 'Productos' },
    { id: 'blog',      label: 'Blog'      },
    { id: 'contact',   label: 'Contacto'  },
  ]

  const handleNavClick = (id) => {
    onChange(id)
    setIsMenuOpen(false)
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
  }

  /* ── SVG icons ─────────────────────────────────────────── */
  const CartIcon = () => (
    <svg className="nav-icon-svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9"  cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )

  const UserIcon = () => (
    <svg className="nav-icon-svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )

  return (
    <>
      <header className="top-nav">
        <div className="nav-inner">

          {/* ── Logo ── */}
          <div className="brand">
            <button className="brand-button" onClick={() => handleNavClick('home')} aria-label="Ir al inicio">
              <div className="brand-logo">
                <img src={moilogo} alt="Moi Fashion Logo" />
              </div>
            </button>
          </div>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>

          {/* ── Desktop nav links (centred) ── */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    className={'nav-link' + (active === it.id ? ' active' : '')}
                    onClick={() => handleNavClick(it.id)}
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Icon buttons (right side) ── */}
          <div className="nav-icons">
            <button
              id="nav-cart-btn"
              className="nav-icon-btn"
              aria-label="Ver carrito de compras"
              title="Carrito"
            >
              <CartIcon />
            </button>

            <button
              id="nav-login-btn"
              className="nav-icon-btn"
              aria-label="Iniciar sesión"
              title="Mi cuenta"
            >
              <UserIcon />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Sidebar ── */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />

        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <button className="close-menu" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
              <span /><span />
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    className={'mobile-nav-link' + (active === it.id ? ' active' : '')}
                    onClick={() => handleNavClick(it.id)}
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icon row at the bottom of the sidebar */}
          <div className="mobile-nav-icons">
            <button id="mobile-cart-btn" className="mobile-icon-btn" aria-label="Ver carrito">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Carrito</span>
            </button>

            <button id="mobile-login-btn" className="mobile-icon-btn" aria-label="Iniciar sesión">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Mi cuenta</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
