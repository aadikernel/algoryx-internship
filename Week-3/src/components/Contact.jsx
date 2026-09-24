import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (v) => {
    const next = {}
    if (!v.name.trim()) next.name = 'Enter your name.'
    if (!v.email.trim()) next.email = 'Enter your email.'
    else if (!EMAIL_RE.test(v.email.trim())) next.email = 'Enter a valid email address.'
    if (!v.message.trim()) next.message = 'Enter a message.'
    else if (v.message.trim().length < 10) next.message = 'Say a little more — at least 10 characters.'
    return next
  }

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (submitted) setErrors(validate({ ...values, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    setSubmitted(true)
    if (Object.keys(next).length === 0) {
      setValues({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted('done'), 0)
    }
  }

  const isDone = submitted === 'done'

  return (
    <section id="contact" className="py-24 md:py-32 border-t hairline">
      <div className="container-edge grid md:grid-cols-[1fr_1.2fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[2rem] sm:text-[2.4rem] text-bone max-w-[16ch]">
            Start a conversation
          </h2>
          <p className="mt-5 text-bone-dim leading-relaxed max-w-[42ch]">
            Tell us about the product you want to bring depth to. We reply within two working days.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-[0.85rem] text-bone-dim mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full bg-transparent border-b hairline focus:border-copper py-2.5 text-bone outline-none transition-colors"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-[0.82rem] text-copper">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[0.85rem] text-bone-dim mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full bg-transparent border-b hairline focus:border-copper py-2.5 text-bone outline-none transition-colors"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-[0.82rem] text-copper">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-[0.85rem] text-bone-dim mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full bg-transparent border-b hairline focus:border-copper py-2.5 text-bone outline-none transition-colors resize-none"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-[0.82rem] text-copper">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-bone text-ink px-6 py-3 text-[0.95rem] font-medium hover:bg-copper transition-colors"
          >
            Send message
          </button>

          {isDone && (
            <p role="status" className="text-[0.9rem] text-copper">
              Message sent. We&apos;ll get back to you shortly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
