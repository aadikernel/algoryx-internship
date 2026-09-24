import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Design', body: 'Layout, type scale, and motion timing are set before a line of 3D code is written.' },
  { n: '02', title: 'Build', body: 'React components, one section each, keep UI and rendering logic separate.' },
  { n: '03', title: 'Integrate', body: 'The Algoryx Community asset is loaded through React Three Fiber and placed inside the page flow.' },
  { n: '04', title: 'Optimize', body: 'Draw calls, texture size, and pixel ratio are tuned until the scene holds 60fps.' },
]

const STACK = ['React', 'Three.js', 'React Three Fiber', 'Framer Motion']

export default function SystemSection() {
  return (
    <section id="system" className="py-24 md:py-32 border-t hairline">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-[2rem] sm:text-[2.4rem] text-bone max-w-[18ch]"
          >
            How the experience comes together
          </motion.h2>
          <p className="text-bone-dim text-[0.92rem]">
            {STACK.join(' · ')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-0 border hairline rounded-2xl overflow-hidden">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-8 ${i !== 0 ? 'border-t md:border-t-0 md:border-l hairline' : ''}`}
            >
              <span className="font-display text-copper text-[1.1rem]">{step.n}</span>
              <h3 className="font-display text-[1.2rem] text-bone mt-3 mb-2">{step.title}</h3>
              <p className="text-bone-dim text-[0.9rem] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
