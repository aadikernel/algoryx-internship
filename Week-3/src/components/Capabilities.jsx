import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Box, Zap, BookOpen, Gauge } from 'lucide-react'

const caps = [
  {
    Icon: Box,
    title: 'Interactive Model',
    desc: 'Full orbit, zoom, and inspect controls. Users explore every angle of a product or concept in real time.',
  },
  {
    Icon: Zap,
    title: 'Motion System',
    desc: 'Framer Motion drives entrance animations, scroll reveals, and micro-interactions with precise timing control.',
  },
  {
    Icon: BookOpen,
    title: 'Product Storytelling',
    desc: 'Combine 3D visuals with editorial typography to guide users through a narrative that converts.',
  },
  {
    Icon: Gauge,
    title: 'Performance Focus',
    desc: 'Optimized DPR, lazy-loaded assets, and minimal draw calls keep frame rates high on any device.',
  },
]

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="capabilities" className="capabilities-section" aria-label="Capabilities">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Built for real products</h2>
        </motion.div>
        <div className="capabilities-grid">
          {caps.map((cap, i) => (
            <CapCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapCard({ cap, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Icon } = cap

  return (
    <motion.div
      ref={ref}
      className="capability-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Icon className="cap-icon" aria-hidden="true" />
      <h3 className="cap-title">{cap.title}</h3>
      <p className="cap-desc">{cap.desc}</p>
    </motion.div>
  )
}
