import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SkillsFloatingAccents from '../components/SkillsFloatingAccents'
import { skillGroups } from '../data/skills'

function SkillTag({ label }) {
  return (
    <motion.span
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="inline-flex cursor-default items-center rounded-full border border-ink-600 bg-ink-800/50 px-4 py-2 text-sm text-bone-200 transition-colors duration-300 hover:border-brass-400/70 hover:bg-ink-800 hover:text-brass-200"
    >
      {label}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden border-y border-ink-800/70 bg-ink-850/40">
      <SkillsFloatingAccents />

      <div className="container-shell relative z-10">
        <SectionHeading
          kicker="Skills"
          title="The stack I build with, grouped by what it's for."
          description="Not a list of everything I've touched — the tools I reach for by default."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <div className="card-premium h-full p-7">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-bone-100">{group.label}</h3>
                  <span className="text-xs text-bone-500">{group.note}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
