import { Braces, Code2 } from 'lucide-react'

// Very faint decorative layer for About — a large outline icon, a
// couple of floating dev-flavoured tokens, and a soft curved line.
// Sits at z-0 behind the content (which renders at z-10) so it never
// competes with the copy or the focus-area cards.
export default function AboutFloatingAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Code2
        size={160}
        strokeWidth={1}
        className="animate-floatSlower absolute -right-12 top-8 text-bone-100/[0.03] hidden sm:block"
      />
      <Braces
        size={90}
        strokeWidth={1}
        className="animate-floatSlow absolute bottom-4 left-[4%] text-brass-400/[0.05] [animation-delay:0.6s] hidden sm:block"
      />

      <div className="animate-floatSlow absolute left-[52%] top-[10%] hidden rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-[0.65rem] font-mono text-bone-400/70 backdrop-blur-sm md:block">
        {'</>'}
      </div>
      <div className="animate-floatSlower absolute left-[58%] top-[62%] hidden rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-[0.65rem] text-bone-400/70 backdrop-blur-sm [animation-delay:1s] md:block">
        API
      </div>

      <svg className="absolute -bottom-10 right-[6%] h-64 w-64 text-brass-400/[0.07]" viewBox="0 0 200 200" fill="none">
        <path d="M0 100 C 60 60, 140 140, 200 90" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <span className="absolute left-[46%] top-[20%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300/60" />
      <span className="absolute right-[10%] top-[54%] h-1 w-1 animate-pulseGlow rounded-full bg-bone-300/50 [animation-delay:0.8s]" />
      <span className="absolute bottom-[12%] left-[40%] h-1 w-1 animate-pulseGlow rounded-full bg-brass-300/50 [animation-delay:1.4s]" />
    </div>
  )
}
