import { Award, Code2, GraduationCap } from 'lucide-react'

// Very faint decorative layer for the Education + Certifications
// section — a few oversized outline icons, small gold particles, and
// two low-opacity curved lines. Everything here sits at low opacity
// and behind the content (z-0, cards render at z-10 above it) so it
// never competes with certificate titles, orgs, dates, or type.
export default function EducationFloatingAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <GraduationCap
        size={140}
        strokeWidth={1}
        className="animate-floatSlower absolute -left-10 top-4 text-bone-100/[0.035]"
      />
      <Award
        size={110}
        strokeWidth={1}
        className="animate-floatSlow absolute right-[2%] top-[38%] text-brass-400/[0.06] [animation-delay:0.8s]"
      />
      <Code2
        size={90}
        strokeWidth={1}
        className="animate-drift absolute bottom-6 left-[12%] text-bone-100/[0.035] [animation-delay:0.4s]"
      />

      <svg
        className="absolute -top-16 right-[8%] h-72 w-72 text-brass-400/[0.08]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M10 150 C 60 100, 90 40, 190 20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-[30%] h-56 w-56 text-bone-100/[0.04]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M0 40 C 70 60, 120 120, 200 140"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute left-[18%] top-[14%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300/70" />
      <span className="absolute right-[22%] top-[8%] h-1 w-1 animate-pulseGlow rounded-full bg-brass-300/60 [animation-delay:1s]" />
      <span className="absolute bottom-[18%] right-[14%] h-1 w-1 animate-pulseGlow rounded-full bg-bone-300/50 [animation-delay:0.5s]" />
      <span className="absolute bottom-[30%] left-[6%] h-1.5 w-1.5 animate-pulseGlow rounded-full bg-brass-300/50 [animation-delay:1.6s]" />
    </div>
  )
}
