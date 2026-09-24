import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Capabilities from './components/Capabilities'
import SystemSection from './components/SystemSection'
import ThreeExperience from './components/ThreeExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
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
    </>
  )
}
