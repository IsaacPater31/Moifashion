import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>Contáctanos</h2>
      <p>¿Tienes preguntas? Déjanos un mensaje.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre
          <input type="text" name="name" />
        </label>
        <label>
          Correo
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows="4" />
        </label>
        <div>
          <button className="btn primary" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default Contact

