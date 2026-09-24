import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Direct interaction',
    body: 'Visitors move around the model themselves — dragging, tilting, and inspecting it from every angle — instead of scrolling past a static render.',
  },
  {
    title: 'Real-time rendering',
    body: 'Everything on screen is drawn live in the browser using WebGL, Three.js, and React Three Fiber — no pre-baked video, no image sequence.',
  },
  {
    title: 'Responsive by default',
    body: 'The scene, lighting, and layout adapt to the device it runs on, from a widescreen monitor down to a single-hand phone.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t hairline">
      <div className="container-edge">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-[2rem] sm:text-[2.4rem] text-bone max-w-[20ch]"
        >
          A 3D experience, not a 3D picture
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border hairline">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ink p-8 md:p-9"
            >
              <h3 className="font-display text-[1.3rem] text-bone mb-3">{item.title}</h3>
              <p className="text-bone-dim leading-relaxed text-[0.98rem]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
