import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import ContactFloatingAccents from '../components/ContactFloatingAccents'
import MagneticButton from '../components/MagneticButton'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your backend or a form service (e.g. Formspree,
    // Resend) — the form is fully controlled and ready to send.
    setStatus('sent')
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <ContactFloatingAccents />

      <div className="container-shell relative z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight text-bone-100 sm:text-5xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-bone-400">
              I&apos;m looking for Junior Full Stack, MERN, Java/Spring Boot, or
              Frappe/ERPNext developer roles. If that&apos;s what you&apos;re hiring for,
              I&apos;d like to hear from you.
            </p>

            <ul className="mt-9 space-y-3">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="card-premium group inline-flex items-center gap-3 px-4 py-3 text-bone-300 hover:text-bone-100"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-600 text-brass-400 transition-colors group-hover:border-brass-400">
                      <Icon size={15} />
                    </span>
                    <span className="link-underline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card-premium-static p-7 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-bone-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-bone-100 outline-none transition-colors placeholder:text-bone-500 focus:border-brass-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-bone-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-bone-100 outline-none transition-colors placeholder:text-bone-500 focus:border-brass-400"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-bone-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-bone-100 outline-none transition-colors placeholder:text-bone-500 focus:border-brass-400"
                    placeholder="What are you building?"
                  />
                </div>
              </div>

              <MagneticButton as="button" type="submit" className="btn-primary mt-6 w-full">
                {status === 'sent' ? 'Message sent' : 'Send Message'}
                {status !== 'sent' && <ArrowUpRight size={16} />}
              </MagneticButton>

              <motion.p
                initial={false}
                animate={{ opacity: status === 'sent' ? 1 : 0, height: status === 'sent' ? 'auto' : 0 }}
                className="overflow-hidden pt-3 text-center text-sm text-brass-300"
              >
                Thanks — I&apos;ll get back to you soon.
              </motion.p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
