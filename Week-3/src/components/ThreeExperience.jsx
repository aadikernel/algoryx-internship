import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import RobotScene from './3d/RobotScene'

export default function ThreeExperience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [isFallback, setIsFallback] = useState(false)

  return (
    <section id="three-experience" className="three-section" aria-label="3D Experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">3D Experience</p>
          <h2 className="section-title">Algoryx Community model</h2>
          {isFallback && (
            <p className="asset-notice">
              ⚠ Development fallback active. Place the official Algoryx Community GLB at{' '}
              <code>public/models/algoryx-community-robot.glb</code> to complete the Week 3 requirement.
              Reference: <a href="https://www.algoryx.in/3d-assets/robot/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>algoryx.in/3d-assets/robot</a>
            </p>
          )}
        </motion.div>

        <motion.div
          className="three-canvas-wrap"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="three-info-panel" aria-hidden="true">
            <p className="info-panel-label">Algoryx Community</p>
            <p className="info-panel-title">Interactive Robot</p>
            <p className="info-panel-sub">Drag to orbit · Scroll to zoom</p>
          </div>

          <RobotScene onFallback={() => setIsFallback(true)} />
          <span className="canvas-hint">Drag to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
