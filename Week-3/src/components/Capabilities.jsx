import { motion } from 'framer-motion'
import { Move3d, Waves, BookOpen, Gauge } from 'lucide-react'

const CAPS = [
  {
    icon: Move3d,
    title: 'Interactive model',
    body: 'A real 3D asset the visitor can rotate and inspect, driven by user input rather than a fixed camera path.',
  },
  {
    icon: Waves,
    title: 'Motion system',
    body: 'Entrance, scroll, and hover animations built on one consistent timing system so nothing feels arbitrary.',
  },
  {
    icon: BookOpen,
    title: 'Product storytelling',
    body: 'Layout and copy are sequenced to explain what the product does before asking for a click.',
  },
  {
    icon: Gauge,
    title: 'Performance focus',
    body: 'Capped pixel ratio, lazy-loaded geometry, and a light draw call budget keep the scene fast on mid-range phones.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 border-t hairline">
      <div className="container-edge">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-[2rem] sm:text-[2.4rem] text-bone max-w-[20ch]"
        >
          What the system is built on
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPS.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="border-t-2 border-copper pt-5"
              >
                <Icon size={22} className="text-copper mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-[1.15rem] text-bone mb-2">{cap.title}</h3>
                <p className="text-bone-dim text-[0.92rem] leading-relaxed">{cap.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
