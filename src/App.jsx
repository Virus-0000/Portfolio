import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-900">
      <div className="grain-overlay" />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
