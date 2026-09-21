import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import FloatingField from '../components/FloatingField'
import MagneticButton from '../components/MagneticButton'
import { profile } from '../data/profile'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <FloatingField />

      <div className="container-shell relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/60 px-4 py-1.5 text-xs text-bone-300 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.p variants={item} className="font-display text-lg font-medium text-bone-300 sm:text-xl">
            {profile.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-[3rem] font-semibold leading-[0.98] tracking-tight text-bone-100 sm:text-[4.25rem] md:text-[5.25rem]"
          >
            Full Stack
            <br />
            Developer<span className="text-brass-400">.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-bone-400">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton as="a" href="#projects" className="btn-primary">
              View Projects
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-14 flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-bone-300 transition-colors duration-300 hover:border-brass-400 hover:text-brass-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-bone-500 transition-colors hover:text-bone-200"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
