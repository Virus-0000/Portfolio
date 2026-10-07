import { Boxes, Layers, ServerCog } from 'lucide-react'
import AboutFloatingAccents from '../components/AboutFloatingAccents'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const focusAreas = [
  {
    icon: Layers,
    title: 'Interfaces',
    detail: 'React.js applications built around real user flows, not just static screens.',
  },
  {
    icon: ServerCog,
    title: 'Services',
    detail: 'Node.js, Express, and Spring Boot APIs — authenticated, documented, and testable.',
  },
  {
    icon: Boxes,
    title: 'Systems',
    detail: 'MongoDB and MySQL data models shaped by how the application actually queries them.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <AboutFloatingAccents />

      <div className="container-shell relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              kicker="About"
              title="A developer who ships the whole stack, not just one layer of it."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-bone-400">
                I&apos;m a Full Stack Developer working across the MERN stack and Java/Spring Boot,
                with a B.Tech in Information Technology and hands-on Java Full Stack training
                behind me. I care about applications that stay fast and readable as they grow —
                not just ones that work on day one.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-bone-400">
                Alongside product development, I&apos;m building depth in{' '}
                <span className="text-bone-200">Frappe and ERPNext</span> — customizing real
                business workflows rather than only building interfaces around them.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map(({ icon: Icon, title, detail }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.08}>
                <div className="card-premium group flex items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-600 text-brass-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brass-500/60">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-bone-100">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-bone-400">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
