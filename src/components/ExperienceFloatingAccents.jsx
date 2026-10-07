import { Braces, Briefcase } from 'lucide-react'

// Faint background decoration for Experience — a large outline
// briefcase, a code-symbol accent, a soft line, and a few particles.
// Sits behind the timeline (z-0) so entry titles and tags stay fully
// readable.
export default function ExperienceFloatingAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Briefcase
        size={130}
        strokeWidth={1}
        className="animate-floatSlower absolute -right-6 top-10 text-bone-100/[0.03] hidden sm:block"
      />
      <Braces
        size={80}
        strokeWidth={1}
        className="animate-drift absolute bottom-10 right-[16%] text-brass-400/[0.05] [animation-delay:0.7s] hidden md:block"
      />

      <svg className="absolute right-[2%] bottom-0 h-56 w-56 text-brass-400/[0.06]" viewBox="0 0 200 200" fill="none">
        <path d="M20 20 C 90 40, 60 140, 180 170" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <span className="absolute right-[24%] top-[18%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300/50" />
      <span className="absolute right-[8%] top-[50%] h-1 w-1 animate-pulseGlow rounded-full bg-bone-300/40 [animation-delay:1.2s]" />
    </div>
  )
}
