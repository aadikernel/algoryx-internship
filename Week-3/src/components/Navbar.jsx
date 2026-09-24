import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'System', href: '#system' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <a href="#" className="navbar-brand" aria-label="NEXORA home">NEXORA.</a>

          <ul className="navbar-links" role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar-cta" onClick={e => handleLink(e, '#contact')}>
            Build with us
          </a>

          <button
            className={`navbar-hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            ))}
            <a href="#contact" className="mobile-menu-cta" onClick={e => handleLink(e, '#contact')}>
              Build with us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
