import { useEffect } from 'react'

export function useReveal(deps: readonly unknown[] = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => {
      el.classList.remove('active')
      observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-bind when filter/list changes
  }, deps)
}
