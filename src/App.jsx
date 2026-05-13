import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Topics from './sections/Topics'
import About from './sections/About'
import Benefits from './sections/Benefits'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Topics />
        <About />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
