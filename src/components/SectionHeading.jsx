import Reveal from './Reveal'

export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {kicker && (
        <Reveal>
          <p className="eyebrow">{kicker}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-semibold text-bone-100 sm:text-4xl md:text-[2.75rem]">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-[1.05rem] leading-relaxed text-bone-400">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
