import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-ink-700/80 bg-ink-900/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-shell flex h-[72px] items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-[1.05rem] font-semibold tracking-tight text-bone-100"
        >
          {profile.name.split(' ')[0]}
          <span className="text-brass-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[0.9rem] text-bone-300 transition-colors hover:text-bone-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-secondary !px-6 !py-2.5 text-sm">
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center justify-center rounded-full border border-ink-600 p-2.5 text-bone-100 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden border-b border-ink-700 bg-ink-900/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-shell flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-[1rem] text-bone-200 transition-colors hover:bg-ink-800 hover:text-bone-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
