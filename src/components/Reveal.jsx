import { motion } from 'framer-motion'

// Consistent fade/slide-up reveal for section content. Kept to a
// single, restrained easing curve across the site rather than a
// different animation per section.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  className = '',
  once = true,
  amount = 0.3,
}) {
  const Comp = motion[as] ?? motion.div

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
