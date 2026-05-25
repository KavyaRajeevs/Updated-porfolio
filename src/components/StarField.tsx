import { useEffect, useRef } from 'react'

export function StarField({ count = 80 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ''
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 2 + 1
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`)
      star.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(star)
    }

    const onMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth - 0.5
      const mouseY = e.clientY / window.innerHeight - 0.5
      container.querySelectorAll('.star').forEach((star, index) => {
        const el = star as HTMLElement
        const speed = ((index % 5) + 1) * 2
        el.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [count])

  return <div ref={containerRef} className="star-field" aria-hidden="true" />
}
