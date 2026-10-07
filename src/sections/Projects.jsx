import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import BrowserMock from '../components/BrowserMock'
import FloatingTechBadges from '../components/FloatingTechBadges'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

function ProjectLinks({ github, demo, status }) {
  const hasLinks = Boolean(github) || Boolean(demo)

  return (
    <div className="flex flex-wrap items-center gap-3">
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="btn-secondary !px-5 !py-2.5 text-sm">
          <Github size={16} />
          GitHub
          <ArrowUpRight size={14} />
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2.5 text-sm">
          Live Demo
          <ArrowUpRight size={15} />
        </a>
      )}
      {!demo && status && <span className="text-sm text-bone-500">{status}</span>}
      {!hasLinks && !status && <span className="text-sm text-bone-500">Details on request</span>}
    </div>
  )
}

function FeaturedProject({ project, number }) {
  return (
    <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
      <div>
        <p className="eyebrow">
          {number} · Featured project · {project.year}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-bone-100 sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-bone-500">{project.category}</p>
        <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-bone-400">
          {project.description}
        </p>

        <ul className="mt-6 space-y-2.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-bone-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-400" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-ink-700 px-3 py-1 text-xs text-bone-400">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <ProjectLinks github={project.github} demo={project.demo} status={project.status} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <FloatingTechBadges items={project.badges} />
        <BrowserMock label={`${project.id}.app`} variant={project.preview} />
      </motion.div>
    </Reveal>
  )
}

function SecondaryProject({ project, number, reversed }) {
  return (
    <Reveal className="grid grid-cols-1 gap-8 border-t border-ink-800 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className={reversed ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
        <p className="eyebrow">{number}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-bone-100">{project.name}</h3>
        <p className="mt-1 text-sm text-bone-500">{project.category}</p>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-bone-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-ink-700 px-3 py-1 text-xs text-bone-400">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <ProjectLinks github={project.github} demo={project.demo} status={project.status} />
        </div>
      </div>
      <div className={`relative ${reversed ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
        <FloatingTechBadges items={project.badges} />
        <BrowserMock
          label={`${project.name.toLowerCase().replace(/\s+/g, '-')}.app`}
          variant={project.preview}
        />
      </div>
    </Reveal>
  )
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          kicker="Selected work"
          title="Real applications, built end to end."
          description="From data model to deployed interface — the projects below cover the full stack, not just the frontend."
        />

        <div className="mt-16">
          {featured && <FeaturedProject project={featured} number={pad(projects.indexOf(featured) + 1)} />}
        </div>

        {rest.length > 0 && (
          <div className="mt-20 space-y-16">
            {rest.map((project, i) => (
              <SecondaryProject
                key={project.id}
                project={project}
                number={pad(projects.indexOf(project) + 1)}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
