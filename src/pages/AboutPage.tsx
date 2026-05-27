import { Layout } from '../components/Layout'
import { StarField } from '../components/StarField'

const interests = {
  passion: ['Classical Dance',  'Wellness'],
  tech: ['AI / LLMs', 'Agents', 'Full Stack', 'Design']
}

export function AboutPage() {
  return (
    <Layout activePage="about">
      <StarField count={100} />
      <main className="relative pt-32 max-w-[1200px] mx-auto px-6 md:px-20 z-10">
        <header className="mb-20">
          <p className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary tracking-widest mb-4">
            03 / IDENTITY
          </p>
          <h1 className="font-[family-name:var(--font-headline-md)] text-[48px] md:text-[64px] font-bold tracking-[0.2em] uppercase border-b border-border-subtle pb-8">
            ABOUT ME
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-section-gap items-start">
          <div className="md:col-span-7 space-y-12">
            {[
              {
                title: 'The Foundation',
                body: (
                  <>
                    As a Computer Science graduate, my journey is rooted in the
                    meticulous logic of software engineering. I find beauty in clean code and the quiet hum of a
                    perfectly architected system.
                  </>
                ),
              },
              {
                title: 'Get to know me',
                body: (
                  <>
                    Beyond the screen, my life revolves around dance, fitness and social wellbeing. I enjoy exploring new technologies and learning new skills. 
                  </>
                ),
              },
              {
                title: 'The Horizon',
                body: (
                  <>
                    Currently, I am deep-diving into the world of{' '}
                    <span className="text-tertiary">Large Language Models</span> and autonomous AI agents. I believe the
                    future of technology lies in tools that don&apos;t just process data, but understand the nuance of
                    human intent, blending technical precision with creative intuition.
                  </>
                ),
              },
            ].map((section) => (
              <section key={section.title}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-primary">✦</span>
                  <h2 className="font-[family-name:var(--font-label-mono)] text-[13px] uppercase tracking-widest text-text-muted">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[18px] leading-relaxed text-on-surface italic">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="md:col-span-5 relative">
            <div className="sticky top-40 bg-bg-secondary p-card-padding border border-border-subtle rounded-xl overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-700" />
              <h3 className="font-[family-name:var(--font-label-mono)] text-[13px] mb-12 text-center text-text-muted">
                INTELLECTUAL ECOSYSTEM
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {interests.passion.map((tag, i) => (
                  <div
                    key={tag}
                    className={`px-6 py-2 rounded-full border border-primary text-primary font-[family-name:var(--font-label-mono)] text-[13px] hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-default ${i === 0 ? 'scale-110' : ''}`}
                  >
                    {tag}
                  </div>
                ))}
                {interests.tech.map((tag, i) => (
                  <div
                    key={tag}
                    className={`px-5 py-2 rounded-full border border-tertiary/60 text-tertiary font-[family-name:var(--font-label-mono)] text-[13px] hover:bg-tertiary hover:text-on-primary transition-all duration-300 cursor-default ${i === 0 ? 'py-3 px-8 -rotate-2' : ''}`}
                  >
                    {tag}
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>

        <section className="mb-section-gap">
          <h2 className="font-[family-name:var(--font-label-mono)] text-[13px] text-text-muted mb-8 tracking-widest">
            FUTURE MILESTONES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['rocket_launch', 'UST GLOBAL JOURNEY'],
              ['psychology_alt', 'AI AGENT RESEARCH'],
              ['architecture', 'SYSTEM DESIGN'],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="p-card-padding border border-dashed border-border-subtle bg-transparent rounded-lg flex flex-col justify-center items-center h-48 opacity-40"
              >
                <span className="material-symbols-outlined text-4xl mb-4">{icon}</span>
                <p className="font-[family-name:var(--font-label-mono)] text-[13px]">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
