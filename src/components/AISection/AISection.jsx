import { useState, useRef, useEffect } from 'react'
import './AISection.css'

/* ─── Hardcoded AI response ─── */
const AI_RESPONSE =
  'Basándome en tu búsqueda, seleccioné tres piezas de nuestra colección que crean un look cohesionado, sofisticado y con presencia. Cada prenda fue elegida por su calidad, corte y versatilidad para la ocasión.'

/* ─── Mock products ─── */
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Blazer Estructurado Ivory',
    price: '$1,290',
    category: 'Outerwear',
    gradient: 'linear-gradient(145deg, #2a2218 0%, #3d3020 100%)',
    accentColor: '#d4af37',
  },
  {
    id: 2,
    name: 'Vestido Midi Satinado',
    price: '$980',
    category: 'Vestidos',
    gradient: 'linear-gradient(145deg, #1a1e2a 0%, #222840 100%)',
    accentColor: '#9fa8da',
  },
  {
    id: 3,
    name: 'Pantalón Wide-Leg Camel',
    price: '$750',
    category: 'Pantalones',
    gradient: 'linear-gradient(145deg, #241c10 0%, #342a18 100%)',
    accentColor: '#c4956a',
  },
]

/* ─── Suggestion chips ─── */
const CHIPS = [
  'Outfit de cena',
  'Outfit para fiesta',
  'Outfit casual',
  'Outfit de trabajo',
]

/* ─── Product Card ─── */
function ProductCard({ product, index }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div
      className="aip-card"
      style={{ '--card-delay': `${index * 0.08}s` }}
    >
      {/* Image area */}
      <div className="aip-card-image" style={{ background: product.gradient }}>
        <div className="aip-card-image-inner">
          <div
            className="aip-card-orb"
            style={{ background: product.accentColor }}
          />
          <span className="aip-card-category">{product.category}</span>
        </div>
      </div>

      {/* Info */}
      <div className="aip-card-body">
        <div className="aip-card-meta">
          <h4 className="aip-card-name">{product.name}</h4>
          <p className="aip-card-price">{product.price}</p>
        </div>
        <button
          id={`add-cart-product-${product.id}`}
          className={`aip-card-btn ${added ? 'added' : ''}`}
          onClick={handleAdd}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          {added ? (
            <>
              <span className="aip-btn-check">✓</span>
              Agregado
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  )
}

/* ─── Modal ─── */
function AIModal({ query, onClose }) {
  const modalRef = useRef(null)

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    /* Prevent body scroll */
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="aim-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="aim-title"
    >
      <div className="aim-sheet" ref={modalRef}>

        {/* Top bar */}
        <div className="aim-topbar">
          <div className="aim-topbar-left">
            <div className="aim-ai-dot" aria-hidden="true" />
            <span className="aim-label">Recomendación IA</span>
          </div>
          <button
            id="aim-close-btn"
            className="aim-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="aim-divider" aria-hidden="true" />

        {/* Hero heading */}
        <div className="aim-hero">
          <h2 id="aim-title" className="aim-title">Tu outfit perfecto</h2>
          <p className="aim-query-pill">"{query}"</p>
        </div>

        {/* AI response */}
        <div className="aim-response">
          <div className="aim-response-icon" aria-hidden="true">✦</div>
          <p className="aim-response-text">{AI_RESPONSE}</p>
        </div>

        {/* Product grid */}
        <div className="aim-products">
          {MOCK_PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Bottom hint */}
        <p className="aim-footer-hint">
          Presiona <kbd>Esc</kbd> o haz clic fuera para cerrar
        </p>
      </div>
    </div>
  )
}

/* ─── Main Section ─── */
function AISection() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [showModal, setShowModal] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    setSubmitted(query.trim())
    setShowModal(true)
  }

  const handleChip = (chip) => {
    setQuery(chip)
    inputRef.current?.focus()
  }

  return (
    <>
      <section className="ais-section" id="ai-outfit-finder" aria-label="Buscador de outfits con IA">
        {/* Background layers */}
        <div className="ais-bg-top"    aria-hidden="true" />
        <div className="ais-bg-mid"    aria-hidden="true" />
        <div className="ais-bg-bottom" aria-hidden="true" />

        <div className="ais-inner">

          {/* Eyebrow */}
          <div className="ais-eyebrow" aria-label="Funcionalidad">
            <span className="ais-eyebrow-dot" aria-hidden="true" />
            Inteligencia Artificial
          </div>

          {/* Title */}
          <h2 className="ais-title">
            Encuentra tu&nbsp;
            <span className="ais-title-accent">outfit perfecto</span>
            <span className="ais-sparkle" aria-hidden="true">✦</span>
          </h2>

          {/* Subtitle */}
          <p className="ais-subtitle">
            Describe la ocasión, el estado de ánimo o el estilo que imaginas.<br />
            Nuestra IA seleccionará piezas exclusivas de nuestra colección para ti.
          </p>

          {/* Search form */}
          <form className="ais-form" onSubmit={handleSubmit} role="search" noValidate>
            <div className="ais-field">
              <svg className="ais-field-icon" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                id="ai-outfit-input"
                className="ais-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe tu ocasión o estilo…"
                aria-label="Describe el outfit que buscas"
                maxLength={200}
                autoComplete="off"
              />
              <button
                id="ai-search-btn"
                className="ais-submit"
                type="submit"
                disabled={!query.trim()}
                aria-label="Buscar outfit"
              >
                <span className="ais-submit-label">Buscar</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Mobile separate submit (shows only on small screens) */}
            <button
              id="ai-search-btn-mobile"
              className="ais-submit-mobile"
              type="submit"
              disabled={!query.trim()}
            >
              Buscar outfit
            </button>
          </form>

          {/* Suggestion chips */}
          <div className="ais-chips" role="group" aria-label="Sugerencias de búsqueda">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                className={`ais-chip ${query === chip ? 'active' : ''}`}
                type="button"
                onClick={() => handleChip(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

        </div>
      </section>

      {showModal && (
        <AIModal query={submitted} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

export default AISection
