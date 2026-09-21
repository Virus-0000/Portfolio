import { Mail } from 'lucide-react'

// Faint background decoration for Contact — a large outline mail
// icon, a couple of floating dev-flavoured tokens, an orbit-style
// arc, and a few particles. Sits behind the copy and form (z-0).
export default function ContactFloatingAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Mail
        size={140}
        strokeWidth={1}
        className="animate-floatSlow absolute -left-10 bottom-0 text-bone-100/[0.03] hidden sm:block"
      />

      <div className="animate-floatSlower absolute right-[8%] top-[8%] hidden rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-[0.65rem] font-mono text-bone-400/70 backdrop-blur-sm md:block">
        {'</>'}
      </div>
      <div className="animate-floatSlow absolute right-[14%] bottom-[14%] hidden rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-[0.65rem] text-bone-400/70 backdrop-blur-sm [animation-delay:0.9s] md:block">
        API
      </div>

      <svg className="absolute left-[30%] top-0 h-72 w-72 text-brass-400/[0.06]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" />
      </svg>

      <span className="absolute left-[20%] top-[60%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300/50" />
      <span className="absolute right-[30%] top-[36%] h-1 w-1 animate-pulseGlow rounded-full bg-bone-300/40 [animation-delay:1s]" />
    </div>
  )
}
