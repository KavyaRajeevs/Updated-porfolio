import { useMemo, useState } from 'react'
import { Layout } from '../components/Layout'
import { useReveal } from '../hooks/useReveal'
import { projects, type ProjectCategory } from '../data/projects'

type Filter = 'All' | ProjectCategory | 'Personal'

const filters: Filter[] = ['All', 'Full Stack', 'AI / ML', 'Personal']

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const isPrimary = project.accent === 'primary'
  const borderColor = isPrimary ? 'border-primary-container' : 'border-tertiary'
  const tagColor = isPrimary ? 'text-primary' : 'text-tertiary'
  const tagBg = isPrimary ? 'bg-tertiary-container/60' : 'bg-tertiary-container/40'
  const hoverTitle = isPrimary ? 'group-hover:text-primary' : 'group-hover:text-tertiary'
  const linkColor = isPrimary ? 'text-primary' : 'text-tertiary'
  const tagHover = isPrimary ? 'group-hover:border-primary-container/40' : 'group-hover:border-tertiary/40'

  return (
    <div
      className={`reveal active group relative flex flex-col bg-bg-secondary border-t-2 ${borderColor} p-5 transition-all duration-500 hover:bg-bg-surface overflow-hidden`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-25 transition-opacity">
        <span className="material-symbols-outlined text-4xl">{project.icon}</span>
      </div>
      <div className="mb-4 overflow-hidden aspect-video bg-surface-container-lowest">
        <img
          alt={project.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.image}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`font-[family-name:var(--font-label-mono)] text-[9px] uppercase tracking-tighter ${tagColor} ${tagBg} px-1.5 py-0.5`}>
          {project.category}
        </span>
      </div>
      <h3 className={`font-[family-name:var(--font-headline-md)] text-[22px] font-bold mb-2 text-on-surface ${hoverTitle} transition-colors leading-tight`}>
        {project.title}
      </h3>
      <p className="text-[13px] leading-[1.6] text-on-surface-variant mb-4 flex-grow line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`font-[family-name:var(--font-label-mono)] text-[10px] border border-outline-variant px-2 py-0.5 text-on-surface-variant ${tagHover} transition-colors`}
          >
            {tag}
          </span>
        ))}
      </div>
      <a className={`inline-flex items-center gap-1.5 ${linkColor} font-[family-name:var(--font-label-mono)] text-[12px] group/link`} href={project.href ?? '#'}>
        View Project <span className="transition-transform group-hover/link:translate-x-1">→</span>
      </a>
    </div>
  )
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    if (filter === 'Personal') return []
    return projects.filter((p) => p.category === filter)
  }, [filter])

  useReveal([filter, filtered.length])

  return (
    <Layout activePage="projects">
      <main className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-margin-desktop pt-40 pb-section-gap page-dot-bg">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary">✦</span>
            <span className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary uppercase tracking-widest">
              Portfolio Selection
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display-hero)] text-[72px] font-black leading-none">PROJECTS</h1>
        </header>

        <div className="relative z-20 flex flex-wrap gap-8 mb-24 border-b border-border-subtle pb-6">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                filter === f
                  ? 'cursor-pointer font-[family-name:var(--font-label-mono)] text-[13px] text-primary border-b-2 border-primary pb-6 -mb-[26px]'
                  : 'cursor-pointer font-[family-name:var(--font-label-mono)] text-[13px] text-on-surface-variant hover:text-primary transition-all pb-6 -mb-[26px]'
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filter === 'Personal' && (
            <div className="reveal active group relative flex flex-col items-center justify-center bg-transparent border-2 border-dashed border-outline-variant p-5 min-h-[280px] opacity-60">
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block animate-float">
                  nights_stay
                </span>
                <p className="font-[family-name:var(--font-headline-md)] text-[22px] font-bold mb-1 italic">
                  Something is brewing...
                </p>
                <p className="font-[family-name:var(--font-label-mono)] text-[11px] text-on-surface-variant tracking-widest">
                  EST. 2024
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}