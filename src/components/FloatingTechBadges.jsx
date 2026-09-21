import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { usePointerParallax } from '../hooks/usePointerParallax'

// Corner-anchored positions so badges frame the browser mock without
// ever drifting over its content. Each has its own depth/duration so
// the float never reads as a single synced group.
const positions = [
  { top: '-6%', left: '-4%', depth: 10, duration: 8, delay: 0 },
  { top: '10%', right: '-7%', depth: 14, duration: 10, delay: 0.5 },
  { bottom: '14%', left: '-8%', depth: 12, duration: 9, delay: 1 },
  { bottom: '-5%', right: '-3%', depth: 16, duration: 11, delay: 0.3 },
  { top: '46%', right: '-9%', depth: 9, duration: 12, delay: 0.8 },
]

// A single badge is its own component so its useTransform calls stay
// at the top level of a function component (satisfies rules-of-hooks)
// even though the parent renders a variable-length list of them.
function Badge({ label, pos, x, y }) {
  return (
    <motion.div
      style={{
        top: pos.top,
        left: pos.left,
        right: pos.right,
        bottom: pos.bottom,
        x: useTransform(x, (v) => v * pos.depth),
        y: useTransform(y, (v) => v * pos.depth),
      }}
      className="absolute rounded-full border border-ink-600 bg-ink-800/80 px-3.5 py-1.5 text-[0.7rem] font-medium text-bone-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm"
    >
      <span
        style={{ animationDuration: `${pos.duration}s`, animationDelay: `${pos.delay}s` }}
        className="animate-floatSlow inline-block"
      >
        {label}
      </span>
    </motion.div>
  )
}

// Subtle floating technology badges orbiting a project preview.
// Reuses the same parallax hook and float animation as FloatingField
// so the accent feels part of the same premium system, but scoped to
// a single project card and hidden below `lg` to avoid any overflow
// on smaller browser-mock widths.
export default function FloatingTechBadges({ items = [] }) {
  const containerRef = useRef(null)
  const { x, y } = usePointerParallax(containerRef)

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      aria-hidden="true"
    >
      {items.slice(0, positions.length).map((label, i) => (
        <Badge key={label} label={label} pos={positions[i % positions.length]} x={x} y={y} />
      ))}
    </div>
  )
}
