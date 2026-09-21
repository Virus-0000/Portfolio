import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Wraps any interactive element (usually an <a> or <button>) and gives
// it a subtle "magnetic" pull toward the cursor on hover. Disabled
// automatically when the user prefers reduced motion, since the
// spring physics are the animation.
export default function MagneticButton({ children, className = '', strength = 14, as = 'button', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * strength)
    y.set((relY / rect.height) * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Comp = motion[as] ?? motion.button

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  )
}
