import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target
      setActive(Boolean(target.closest?.('a, button, [data-cursor="interactive"]')))
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.span
        animate={{ scale: active ? 2.4 : 1, opacity: active ? 0.5 : 0.9 }}
        transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
        className="block h-2.5 w-2.5 rounded-full bg-brass-400"
      />
    </motion.div>
  )
}
