import { socialLinks } from '../data/links'

const linkClass =
  'text-on-surface-variant font-label-mono text-label-mono hover:text-primary-fixed transition-all duration-200 hover:-translate-y-0.5'

export function Footer() {
  return (
    <footer className="w-full py-section-gap px-6 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto border-t border-outline-variant bg-bg-deep">
      <div className="font-body-md text-body-md text-on-surface-variant font-label-mono text-label-mono mb-8 md:mb-0">
        © Kavya R — Crafted with precision
      </div>
      <div className="flex gap-8 md:gap-margin-desktop">
        <a className={linkClass} href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className={linkClass} href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className={linkClass} href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  )
}
