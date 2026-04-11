const WA_LINK = 'https://wa.me/573005682191?text=Hola%2C%20vi%20su%20tienda%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n'

function WhatsAppSection() {
  return (
    <section className="whatsapp-section" id="whatsapp-cta">
      <div className="whatsapp-section__inner">
        <div className="whatsapp-section__badge">
          <span className="whatsapp-section__dot" />
          Online ahora
        </div>
        <div className="whatsapp-section__text">
          <h2>¿Necesitas ayuda inmediata?</h2>
          <p>Respondemos en menos de 30 minutos en horario de atención</p>
        </div>
        <a
          id="whatsapp-cta-btn"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <svg className="whatsapp-btn__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.001-3.176-1.24-6.161-3.48-8.45zm-8.475 18.3h-.004c-1.774 0-3.513-.474-5.03-1.37l-.36-.214-3.742.976.999-3.648-.235-.374a9.86 9.86 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.881 9.884zm5.421-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  )
}

export default WhatsAppSection
