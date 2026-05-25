import type { MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

const className =
  'text-on-surface-variant font-label-mono text-[13px] tracking-[0.05em] hover:text-primary transition-colors duration-300'

export function ContactNavLink() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (location.pathname === '/') {
      scrollToSection('contact')
      window.history.replaceState(null, '', '/#contact')
      return
    }

    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <a href="/#contact" onClick={handleClick} className={className}>
      Contact
    </a>
  )
}
