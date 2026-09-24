import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Capabilities from './components/Capabilities.jsx'
import SystemSection from './components/SystemSection.jsx'
import ThreeExperience from './components/ThreeExperience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Capabilities />
        <SystemSection />
        <ThreeExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
