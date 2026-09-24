import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    num: '01',
    title: 'Direct interaction',
    desc: 'Users engage with 3D models in real time — rotating, inspecting, and exploring every surface without leaving the page.',
  },
  {
    num: '02',
    title: 'Real-time rendering',
    desc: 'WebGL-powered rendering delivers cinematic quality at 60fps, with physically-based materials and dynamic lighting.',
  },
  {
    num: '03',
    title: 'Responsive by default',
    desc: 'Every scene adapts to the viewport — from large desktop monitors to compact mobile screens — without compromise.',
  },
]

function Item({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="experience-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
    >
      <p className="exp-number">{item.num}</p>
      <h3 className="exp-title">{item.title}</h3>
      <p className="exp-desc">{item.desc}</p>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="experience-section" aria-label="Experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">What makes it different</h2>
        </motion.div>
        <div className="experience-grid">
          {items.map((item, i) => <Item key={item.num} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
