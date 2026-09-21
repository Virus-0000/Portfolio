import { Award, CalendarDays, GraduationCap } from 'lucide-react'
import EducationFloatingAccents from '../components/EducationFloatingAccents'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { certifications, education } from '../data/experience'

function CertificationCard({ cert, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col rounded-2xl border border-ink-700 bg-ink-850/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brass-500/40 hover:shadow-[0_25px_60px_-15px_rgba(217,171,95,0.25)]">
        <div className="mb-5 flex items-start justify-between gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-600 text-brass-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-brass-500/60">
            <Award size={18} />
          </span>
          <span className="rounded-full border border-brass-500/30 bg-brass-500/[0.08] px-2.5 py-1 text-right text-[0.63rem] font-medium uppercase leading-tight tracking-wide text-brass-300">
            {cert.type}
          </span>
        </div>

        <h3 className="font-display text-base font-semibold leading-snug text-bone-100">{cert.title}</h3>
        <p className="mt-1.5 text-sm text-bone-400">{cert.org}</p>

        <div className="mt-4 flex items-center gap-1.5 text-sm text-bone-500">
          <CalendarDays size={13} className="shrink-0 text-bone-600" />
          <span>{cert.period}</span>
        </div>
        {cert.issued && <p className="mt-1 pl-[1.35rem] text-xs text-bone-600">Issued {cert.issued}</p>}
      </div>
    </Reveal>
  )
}

export default function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden">
      <EducationFloatingAccents />

      <div className="container-shell relative z-10">
        <SectionHeading kicker="Education" title="Foundation." />

        <div className="mt-12">
          <Reveal>
            <div className="flex max-w-xl items-start gap-4 rounded-2xl border border-ink-700 bg-ink-850/60 p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-600 text-brass-400">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-bone-100">{education.degree}</h3>
                <p className="mt-1 text-sm text-bone-400">{education.institution}</p>
                <p className="text-sm text-bone-500">
                  {education.period}
                  {education.location ? ` · ${education.location}` : ''}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-ink-600 text-brass-400">
                <Award size={16} />
              </span>
              <h3 className="font-display text-xl font-semibold text-bone-100">Certifications</h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.id} cert={cert} delay={0.08 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
