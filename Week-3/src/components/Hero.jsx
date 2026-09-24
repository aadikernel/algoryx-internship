import { motion } from 'framer-motion'
import RobotScene from './3d/RobotScene'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-content">
          <motion.p className="hero-label" {...fadeUp(0.1)}>
            Creative Technology Studio
          </motion.p>
          <motion.h1 className="hero-heading" {...fadeUp(0.2)}>
            Interfaces<br /><em>with depth.</em>
          </motion.h1>
          <motion.p className="hero-sub" {...fadeUp(0.35)}>
            Real-time 3D experiences designed to make digital products feel tangible.
          </motion.p>
          <motion.div className="hero-actions" {...fadeUp(0.45)}>
            <button
              className="btn-primary"
              onClick={() => scrollTo('#three-experience')}
              aria-label="Explore 3D experience"
            >
              Explore experience
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollTo('#capabilities')}
              aria-label="See capabilities"
            >
              See capabilities
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-canvas-wrap"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <RobotScene compact />
          <span className="canvas-hint">Drag to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
