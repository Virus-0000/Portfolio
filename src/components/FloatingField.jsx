import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { heroBadges } from '../data/skills'
import { usePointerParallax } from '../hooks/usePointerParallax'

const badgePositions = [
  { top: '14%', left: '68%', depth: 22, duration: 9, delay: 0 },
  { top: '6%', left: '46%', depth: 14, duration: 11, delay: 0.6 },
  { top: '38%', left: '86%', depth: 30, duration: 8, delay: 0.2 },
  { top: '64%', left: '78%', depth: 18, duration: 12, delay: 1.1 },
  { top: '80%', left: '54%', depth: 12, duration: 10, delay: 0.4 },
  { top: '50%', left: '58%', depth: 26, duration: 13, delay: 0.9 },
]

export default function FloatingField() {
  const containerRef = useRef(null)
  const { x, y } = usePointerParallax(containerRef)

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gradient orbs */}
      <motion.div
        style={{
          x: useTransform(x, (v) => v * -30),
          y: useTransform(y, (v) => v * -20),
        }}
        className="absolute -top-24 left-[8%] h-[26rem] w-[26rem] rounded-full bg-brass-500/[0.14] blur-[110px]"
      />
      <motion.div
        style={{
          x: useTransform(x, (v) => v * 24),
          y: useTransform(y, (v) => v * 18),
        }}
        className="absolute top-[20%] right-[4%] h-[22rem] w-[22rem] rounded-full bg-bone-300/[0.06] blur-[100px]"
      />
      <motion.div
        style={{
          x: useTransform(x, (v) => v * -14),
          y: useTransform(y, (v) => v * 16),
        }}
        className="absolute bottom-[-6rem] left-[32%] h-[20rem] w-[20rem] rounded-full bg-brass-400/[0.09] blur-[100px]"
      />

      {/* Floating tech badges */}
      <div className="hidden md:block">
        {heroBadges.map((label, i) => {
          const pos = badgePositions[i % badgePositions.length]
          return (
            <motion.div
              key={label}
              style={{
                top: pos.top,
                left: pos.left,
                x: useTransform(x, (v) => v * pos.depth),
                y: useTransform(y, (v) => v * pos.depth),
              }}
              className="absolute rounded-full border border-ink-600 bg-ink-800/70 px-4 py-2 text-xs font-medium text-bone-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <span
                style={{ animationDuration: `${pos.duration}s`, animationDelay: `${pos.delay}s` }}
                className="animate-floatSlow inline-block"
              >
                {label}
              </span>
            </motion.div>
          )
        })}
      </div>

      {/* Floating code snippet */}
      <motion.div
        style={{
          x: useTransform(x, (v) => v * 10),
          y: useTransform(y, (v) => v * 10),
        }}
        className="absolute bottom-[10%] right-[6%] hidden w-[15.5rem] md:block"
      >
        <div className="animate-floatSlower -rotate-3 rounded-xl border border-ink-600 bg-ink-800/80 p-4 font-mono text-[0.68rem] leading-relaxed text-bone-300 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <p className="text-brass-400">router.post(<span className="text-bone-200">&apos;/api/auth&apos;</span>)</p>
          <p className="pl-3 text-bone-400">verify(token)</p>
          <p className="pl-3 text-bone-400">return res.json(user)</p>
        </div>
      </motion.div>

      {/* Small glowing particles */}
      <span className="absolute left-[20%] top-[70%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300" />
      <span className="absolute left-[80%] top-[16%] h-1 w-1 animate-pulseGlow rounded-full bg-brass-300 [animation-delay:1.2s]" />
      <span className="absolute left-[62%] top-[46%] h-1 w-1 animate-pulseGlow rounded-full bg-bone-300 [animation-delay:0.6s]" />
    </div>
  )
}
