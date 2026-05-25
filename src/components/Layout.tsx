import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({
  children,
  activePage,
}: {
  children: ReactNode
  activePage: 'home' | 'projects' | 'experience' | 'about'
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
