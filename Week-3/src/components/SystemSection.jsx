import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Design',
    desc: 'Editorial layout, typographic hierarchy, and restrained color palette establish the visual language before a single component is built.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'React components are structured for reuse and clarity. Each section is isolated, testable, and easy to extend.',
  },
  {
    num: '03',
    title: 'Integrate',
    desc: 'React Three Fiber bridges the gap between the DOM and WebGL. Three.js scenes live inside React\'s component tree naturally.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Framer Motion handles animation with hardware acceleration. DPR limits, Suspense boundaries, and lazy loading keep performance tight.',
  },
]

const techStack = [
  { name: 'React', role: 'UI component layer' },
  { name: 'Three.js', role: '3D rendering engine' },
  { name: 'React Three Fiber', role: 'React renderer for Three.js' },
  { name: 'Framer Motion', role: 'Animation system' },
  { name: 'Vite', role: 'Build tooling' },
]

export default function SystemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="system" className="system-section" aria-label="System and process">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">System</p>
          <h2 className="section-title">How it comes together</h2>
        </motion.div>
        <div className="system-grid">
          <div className="system-steps">
            {steps.map((step, i) => (
              <StepItem key={step.num} step={step} index={i} />
            ))}
          </div>
          <TechPanel />
        </div>
      </div>
    </section>
  )
}

function StepItem({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="system-step"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <span className="step-num">{step.num}</span>
      <div className="step-content">
        <h3 className="step-title">{step.title}</h3>
        <p className="step-desc">{step.desc}</p>
      </div>
    </motion.div>
  )
}

function TechPanel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="system-tech"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="tech-label">Technology stack</p>
      <div className="tech-stack">
        {techStack.map(t => (
          <div key={t.name} className="tech-item">
            <span className="tech-name">{t.name}</span>
            <span className="tech-role">{t.role}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
