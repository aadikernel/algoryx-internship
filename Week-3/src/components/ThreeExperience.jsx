import { useState } from 'react'
import { motion } from 'framer-motion'
import RobotScene from './3d/RobotScene.jsx'

export default function ThreeExperience() {
  const [source, setSource] = useState('community')

  return (
    <section id="three-d-experience" className="py-24 md:py-32 border-t hairline">
      <div className="container-edge">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-[2rem] sm:text-[2.4rem] text-bone max-w-[18ch]"
        >
          Explore the model
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-[1fr_320px] gap-8 items-stretch">
          <div className="relative h-[380px] sm:h-[460px] md:h-[560px] rounded-2xl border hairline overflow-hidden bg-surface">
            <RobotScene className="absolute inset-0" onSourceChange={setSource} />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-bone-dim text-[0.85rem] bg-ink/70 backdrop-blur px-4 py-1.5 rounded-full border hairline">
              Drag to explore
            </span>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-bone-dim leading-relaxed text-[0.98rem]">
                An interactive 3D asset integrated directly into the web experience, rendered live with
                React Three Fiber and orbit controls.
              </p>

              <div
                className={`mt-6 rounded-xl border p-4 text-[0.85rem] leading-relaxed ${
                  source === 'community'
                    ? 'border-copper/40 text-bone-dim'
                    : 'border-copper text-bone-dim'
                }`}
              >
                {source === 'community' ? (
                  <>
                    <span className="text-bone">Asset source:</span> Algoryx Community —{' '}
                    <code className="text-copper">algoryx-community-robot.glb</code>
                  </>
                ) : (
                  <>
                    <span className="text-copper">Development placeholder.</span> The official Algoryx
                    Community asset has not been added yet. Add it at{' '}
                    <code className="text-bone">public/models/algoryx-community-robot.glb</code> to
                    replace this procedural stand-in.
                  </>
                )}
              </div>
            </div>

            <p className="mt-8 text-bone-dim text-[0.85rem]">
              Works on desktop and mobile. Rotation is limited on the vertical axis so the model
              stays framed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
