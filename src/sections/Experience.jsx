import { motion } from 'framer-motion'
import ExperienceFloatingAccents from '../components/ExperienceFloatingAccents'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden border-y border-ink-800/70 bg-ink-850/40">
      <ExperienceFloatingAccents />

      <div className="container-shell relative z-10">
        <SectionHeading kicker="Experience" title="Training, and everything that follows it." />

        <div className="relative mt-16 max-w-2xl">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-700" aria-hidden="true" />

          <ul className="space-y-12">
            {timeline.map((entry, i) => (
              <Reveal key={entry.id} as="li" delay={i * 0.08} className="relative pl-10">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-brass-400 bg-ink-900"
                />
                <p className="text-sm text-bone-500">
                  {entry.period}
                  {entry.location ? ` · ${entry.location}` : ''}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-bone-100">{entry.title}</h3>
                <p className="text-sm text-bone-400">{entry.org}</p>
                <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-bone-400">
                  {entry.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-ink-700 px-3 py-1 text-xs text-bone-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal as="li" delay={timeline.length * 0.08} className="relative pl-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-dashed border-ink-600 bg-ink-900" />
              <p className="text-sm text-bone-500">Next</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-bone-500">
                Open to internships & full-time roles
              </h3>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  )
}
