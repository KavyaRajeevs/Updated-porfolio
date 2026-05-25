import { NavLink } from 'react-router-dom'
import { ContactNavLink } from './ContactNavLink'

const inactive =
  'text-on-surface-variant font-label-mono text-[13px] tracking-[0.05em] hover:text-primary transition-colors duration-300'

const active =
  "text-primary relative font-label-mono text-[13px] tracking-[0.05em] after:content-['✦'] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:text-[10px]"

export function Navbar({ activePage }: { activePage: 'home' | 'projects' | 'experience' | 'about' }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-margin-desktop py-6 max-w-[1200px] mx-auto left-1/2 -translate-x-1/2 backdrop-blur-md bg-background/80">
      <NavLink to="/" className="font-[family-name:var(--font-headline-md)] text-[32px] font-bold text-on-surface">
        ക
      </NavLink>
      <div className="hidden md:flex items-center gap-10">
        <NavLink
          to="/projects"
          className={activePage === 'home' || activePage === 'projects' ? active : inactive}
        >
          Work
        </NavLink>
        <NavLink to="/experience" className={activePage === 'experience' ? active : inactive}>
          Experience
        </NavLink>
        <NavLink to="/about" className={activePage === 'about' ? active : inactive}>
          About
        </NavLink>
        <ContactNavLink />
        
      </div>
    </nav>
  )
}
