import './App.css' // Imports base styles, utilities, and layouts
import { useState } from 'react'
import Header from './components/Header'
import { 
  Carousel, 
  HeroLema, 
  Testimonials, 
  CTASection, 
  Home 
} from './components/Home'
import { About } from './components/About'
import { Products } from './components/Products'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [section, setSection] = useState('home')

  return (
    <div className="shop-root">
      <Header active={section} onChange={setSection} />
      <main>
        {section === 'home' && (
          <>
            <Carousel onChange={setSection} />
            <Home />
            <HeroLema />
            <Testimonials />
            <CTASection />
          </>
        )}
        {section === 'about' && <About />}
        {section === 'productos' && <Products />}
        {section === 'blog' && <Blog />}
        {section === 'contact' && <Contact />}
      </main>
      <Footer onChange={setSection} />
    </div>
  )
}

export default App
