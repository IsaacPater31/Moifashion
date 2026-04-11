import './Contact.css'
import ContactHero from './ContactHero'
import ContactCards from './ContactCards'
import ContactForm from './ContactForm'
import WhatsAppSection from './WhatsAppSection'
import ScheduleSection from './ScheduleSection'
import IdentitySection from './IdentitySection'

function Contact() {
  return (
    <div className="contact-page">
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Contact Cards: Instagram, WhatsApp, Ubicación */}
      <ContactCards />

      {/* 3. WhatsApp CTA destacada */}
      <WhatsAppSection />

      {/* 4. Smart Form */}
      <ContactForm />

      {/* 5. Schedule */}
      <ScheduleSection />

      {/* 6. Identity / Cartagena */}
      <IdentitySection />
    </div>
  )
}

export default Contact
