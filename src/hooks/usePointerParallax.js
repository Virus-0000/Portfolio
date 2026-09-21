import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

// Tracks pointer position within a container, normalized to roughly
// [-0.5, 0.5] on each axis. Returns spring-smoothed motion values so
// consumers can map them to small translateX/Y offsets for a subtle
// parallax feel. Falls back to the viewport when no ref is given.
export function usePointerParallax(containerRef) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 40, damping: 14, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 40, damping: 14, mass: 0.6 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const handleMove = (e) => {
      const el = containerRef?.current
      const rect = el ? el.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      rawX.set(nx)
      rawY.set(ny)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [containerRef, rawX, rawY])

  return { x, y }
}
