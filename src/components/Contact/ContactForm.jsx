import { useState } from 'react'

const CONTACT_OPTIONS = [
  {
    id: 'product-info',
    label: 'Quiero info de un producto',
    icon: '🛍️',
    fields: ['name', 'email', 'product', 'message'],
  },
  {
    id: 'order-problem',
    label: 'Tengo un problema con mi pedido',
    icon: '📦',
    fields: ['name', 'email', 'order', 'message'],
  },
  {
    id: 'bulk-purchase',
    label: 'Quiero hacer una compra grande',
    icon: '🤝',
    fields: ['name', 'email', 'phone', 'quantity', 'message'],
  },
  {
    id: 'other',
    label: 'Otro',
    icon: '💬',
    fields: ['name', 'email', 'message'],
  },
]

const FIELD_CONFIG = {
  name: { label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo' },
  email: { label: 'Correo electrónico', type: 'email', placeholder: 'tu@correo.com' },
  phone: { label: 'Teléfono / WhatsApp', type: 'tel', placeholder: '+57 300 000 0000' },
  product: { label: 'Producto de interés', type: 'text', placeholder: 'Ej: Camisa Oxford azul, referencia...' },
  order: { label: 'Número / descripción del pedido', type: 'text', placeholder: 'Ej: #2412, compra del 5 de abril...' },
  quantity: { label: 'Cantidad estimada', type: 'number', placeholder: 'Ej: 10 unidades' },
  message: { label: 'Mensaje', type: 'textarea', placeholder: 'Cuéntanos más sobre lo que necesitas...' },
}

function ContactForm() {
  const [selected, setSelected] = useState(null)
  const [values, setValues] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const currentOption = CONTACT_OPTIONS.find((o) => o.id === selected)

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!selected) { setError('Por favor elige un motivo de contacto.'); return }
    const empty = currentOption.fields.find((f) => !values[f]?.trim())
    if (empty) { setError(`El campo "${FIELD_CONFIG[empty].label}" es obligatorio.`); return }
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setSelected(null)
    setValues({})
    setError('')
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✓</div>
        <h3>¡Mensaje enviado!</h3>
        <p>Te contactaremos muy pronto. Revisamos mensajes constantemente.</p>
        <button className="cform-btn cform-btn--gold" onClick={handleReset}>
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-section__inner">
        <div className="contact-form-section__header">
          <span className="section-eyebrow">FORMULARIO</span>
          <h2>¿En qué te podemos ayudar?</h2>
          <p>Selecciona una opción y llena el formulario. Te respondemos rápido.</p>
        </div>

        {/* Option selector */}
        <div className="cform-options">
          {CONTACT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              id={`cform-option-${opt.id}`}
              className={`cform-option${selected === opt.id ? ' cform-option--active' : ''}`}
              onClick={() => { setSelected(opt.id); setValues({}) }}
              type="button"
            >
              <span className="cform-option__icon">{opt.icon}</span>
              <span className="cform-option__label">{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic form */}
        {currentOption && (
          <form
            className="cform"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="cform__fields">
              {currentOption.fields.map((field) => {
                const cfg = FIELD_CONFIG[field]
                return (
                  <div className="cform__group" key={field}>
                    <label htmlFor={`cform-${field}`} className="cform__label">
                      {cfg.label}
                    </label>
                    {cfg.type === 'textarea' ? (
                      <textarea
                        id={`cform-${field}`}
                        className="cform__input cform__textarea"
                        placeholder={cfg.placeholder}
                        rows={4}
                        value={values[field] || ''}
                        onChange={(e) => handleChange(field, e.target.value)}
                      />
                    ) : (
                      <input
                        id={`cform-${field}`}
                        className="cform__input"
                        type={cfg.type}
                        placeholder={cfg.placeholder}
                        value={values[field] || ''}
                        onChange={(e) => handleChange(field, e.target.value)}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {error && <p className="cform__error">{error}</p>}

            <button id="cform-submit" className="cform-btn cform-btn--gold" type="submit">
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm
