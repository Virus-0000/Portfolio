import { Database, GitBranch, Terminal } from 'lucide-react'

// Faint background decoration for Skills — large outline icons for
// the general categories (code, database, tooling) plus a couple of
// particles. Kept behind the skill-group cards (z-0) and hidden on
// small screens to avoid crowding the grid on mobile.
export default function SkillsFloatingAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Terminal
        size={130}
        strokeWidth={1}
        className="animate-floatSlow absolute -left-8 bottom-10 text-bone-100/[0.03] hidden sm:block"
      />
      <Database
        size={110}
        strokeWidth={1}
        className="animate-floatSlower absolute right-[4%] top-6 text-brass-400/[0.05] [animation-delay:0.5s] hidden sm:block"
      />
      <GitBranch
        size={80}
        strokeWidth={1}
        className="animate-drift absolute bottom-8 right-[18%] text-bone-100/[0.03] [animation-delay:1s] hidden md:block"
      />

      <span className="absolute left-[24%] top-[16%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300/50" />
      <span className="absolute right-[30%] top-[70%] h-1 w-1 animate-pulseGlow rounded-full bg-bone-300/40 [animation-delay:1.1s]" />
      <span className="absolute bottom-[22%] left-[8%] h-1 w-1 animate-pulseGlow rounded-full bg-brass-300/50 [animation-delay:0.4s]" />
    </div>
  )
}
