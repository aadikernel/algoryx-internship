const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'System', href: '#system' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-brand">NEXORA.</p>
            <p className="footer-desc">
              A creative technology studio building interactive 3D web experiences that make digital products feel tangible.
            </p>
          </div>
          <div>
            <p className="footer-nav-label">Navigation</p>
            <ul className="footer-nav-links" role="list">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} NEXORA. All rights reserved.</p>
          <p className="footer-made">Built with React Three Fiber &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
