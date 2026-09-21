import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="container-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-semibold text-bone-100">{profile.name}</p>
          <p className="text-sm text-bone-500">{profile.role}</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-bone-400 transition-colors hover:border-brass-400 hover:text-brass-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p className="text-sm text-bone-500">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
