const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#system', label: 'System' },
  { href: '#contact', label: 'Contact' },
]

const STACK = ['React', 'Three.js', 'React Three Fiber', 'Framer Motion', 'Tailwind CSS']

export default function Footer() {
  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t hairline py-16">
      <div className="container-edge grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-[1.3rem] text-bone">Nexora</p>
          <p className="mt-3 text-bone-dim text-[0.92rem] leading-relaxed max-w-[36ch]">
            A creative technology studio exploring how real-time 3D can make digital products feel
            tangible.
          </p>
        </div>

        <div>
          <p className="text-bone-dim text-[0.85rem] mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={scrollTo(link.href)}
                  className="text-bone hover:text-copper transition-colors text-[0.92rem]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-bone-dim text-[0.85rem] mb-4">Built with</p>
          <ul className="space-y-2.5">
            {STACK.map((item) => (
              <li key={item} className="text-bone text-[0.92rem]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-edge mt-14 pt-6 border-t hairline flex flex-col sm:flex-row justify-between gap-3 text-bone-dim text-[0.82rem]">
        <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>
        <p>Built for the Algoryx Frontend Internship.</p>
      </div>
    </footer>
  )
}
