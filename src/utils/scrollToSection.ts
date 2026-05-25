const NAV_OFFSET_PX = 96

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}
