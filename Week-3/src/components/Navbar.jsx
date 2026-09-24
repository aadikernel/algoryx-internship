import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#system', label: 'System' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-edge flex items-center justify-between h-[72px]">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            handleNav('#top')
          }}
          className="font-display text-[1.35rem] tracking-tight text-bone"
        >
          Nexora
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className="text-[0.95rem] text-bone-dim hover:text-bone transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:inline-flex items-center rounded-full border border-line px-5 py-2 text-[0.9rem] text-bone hover:border-copper hover:text-copper transition-colors"
        >
          Build with us
        </button>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-bone p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink">
          <ul className="container-edge py-4 flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.href)
                  }}
                  className="block text-bone-dim hover:text-bone text-[1.05rem] py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 w-full rounded-full border border-line px-5 py-2.5 text-bone text-left"
              >
                Build with us
              </button>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}
