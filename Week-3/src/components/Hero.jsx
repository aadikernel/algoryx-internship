import { motion } from 'framer-motion'
import RobotScene from './3d/RobotScene.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative pt-[72px] min-h-[92vh] flex items-center overflow-hidden">
      <div className="container-edge grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center py-16 md:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[0.9rem] text-copper mb-5"
          >
            Real-time 3D for the web
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.6rem] sm:leading-[1.03] text-bone max-w-[13ch]"
          >
            Interfaces with depth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-[1.1rem] text-bone-dim max-w-[46ch] leading-relaxed"
          >
            Real-time 3D experiences designed to make digital products feel tangible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#three-d-experience"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#three-d-experience')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center rounded-full bg-bone text-ink px-6 py-3 text-[0.95rem] font-medium hover:bg-copper transition-colors"
            >
              Explore experience
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center text-bone-dim hover:text-bone px-2 py-3 text-[0.95rem] transition-colors"
            >
              See capabilities
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[340px] sm:h-[420px] md:h-[520px]"
        >
          <RobotScene className="absolute inset-0" />
        </motion.div>
      </div>
    </section>
  )
}
