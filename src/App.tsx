import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <main>
          <Hero scrollToSection={scrollToSection} />
          <Services />
          <Technologies scrollToSection={scrollToSection} />
          <AboutMe />
          <Portfolio />
          <Contact />
        </main>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </ThemeProvider>
  )
}

export default App
