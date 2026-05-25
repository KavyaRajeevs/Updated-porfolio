import { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { ToolsSection } from '../components/ToolsSection'

const certifications = [
  { icon: 'cloud_done', title: 'Oracle OCI', subtitle: 'CERTIFIED FOUNDATIONS' },
  { icon: 'api', title: 'Postman Expert', subtitle: 'API DEVELOPMENT' },
  { icon: 'neurology', title: 'NPTEL Deep Learning', subtitle: 'ELITE CERTIFICATION' },
]

export function ExperiencePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.skill-group').forEach((group) => {
      const el = group as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Layout activePage="experience">
      <main className="max-w-[1200px] mx-auto pt-[160px] pb-section-gap px-4 md:px-margin-desktop">
        <section className="mb-section-gap" id="experience">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary tracking-widest uppercase mb-4">
              Experience
            </h2>
            <p className="font-[family-name:var(--font-headline-md)] text-[48px] font-bold mb-8 star-glow">
              ✦ Starting my journey at UST Global soon.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px timeline-line" />
            <div className="relative mb-16">
              <div className="absolute -left-[37px] top-1 w-4 h-4 bg-background border border-primary rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </div>
              <div className="bg-bg-secondary p-card-padding border border-border-subtle rounded-lg hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="font-[family-name:var(--font-headline-md)] text-[32px] font-bold">NeST Digital</h3>
                  <span className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary px-3 py-1 border border-primary/20 rounded-full">
                    Developer Intern
                  </span>
                </div>
                <p className="text-on-surface-variant mb-6 text-[18px] leading-[1.7] font-light">
                  Specializing in Angular for robust enterprise web applications, ensuring technical precision and clean
                  architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ANGULAR', 'TYPESCRIPT', 'RXJS'].map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-label-mono)] text-[11px] bg-surface-container-highest px-2 py-1 rounded text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 bg-background border border-outline-variant rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-outline-variant rounded-full" />
              </div>
              <div className="bg-bg-secondary p-card-padding border border-border-subtle border-dashed rounded-lg grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="font-[family-name:var(--font-headline-md)] text-[32px] font-bold">Skolar Ltd.</h3>
                  <span className="font-[family-name:var(--font-label-mono)] text-[13px] text-on-surface-variant px-3 py-1 border border-outline-variant rounded-full">
                    MERN Stack Intern
                  </span>
                </div>
                <p className="text-on-surface-variant mb-6 text-[18px] leading-[1.7] font-light">
                  Full-stack exploration across the MERN ecosystem, building scalable and responsive digital products.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MONGODB', 'EXPRESS', 'REACT', 'NODE.JS'].map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-label-mono)] text-[11px] bg-surface-container-highest px-2 py-1 rounded text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-section-gap" id="skills">
          <h2 className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary tracking-widest uppercase mb-12 text-center">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="skill-group border border-border-subtle p-card-padding rounded-lg">
              <SkillBlock icon="code" title="Languages" tags={['Python', 'JavaScript', 'Java']} />
              <SkillBlock icon="web" title="Frontend" tags={['Angular', 'React', 'Tailwind CSS']} className="mt-10" />
            </div>
            <div className="skill-group border border-border-subtle p-card-padding rounded-lg">
              <SkillBlock icon="dns" title="Backend" tags={['Node.js', 'Express', 'PostgreSQL', 'MongoDB']} />
              <SkillBlock icon="psychology" title="AI / ML" tags={['PyTorch', 'TensorFlow', 'Scikit-learn']} className="mt-10" />
            </div>
            <div className="skill-group border border-border-subtle p-card-padding rounded-lg">
              <SkillBlock icon="cloud" title="Cloud" tags={['GCP', 'Oracle OCI', 'Firebase']} />
              <SkillBlock icon="construction" title="Tools" tags={['Git / GitHub', 'Postman', 'Docker', 'Figma']} className="mt-10" />
            </div>
          </div>
        </section>

        <ToolsSection />

        <section id="certifications">
          <h2 className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary tracking-widest uppercase mb-12 text-center">
            Recognition & Certifications
          </h2>
          <div className="overflow-hidden border-y border-border-subtle py-10 bg-bg-secondary/50">
            <div className="flex gap-8 marquee-content min-w-full">
              {[...certifications, ...certifications].map((cert, i) => (
                <div key={`${cert.title}-${i}`} className="flex items-center gap-6 group shrink-0">
                  <div className="w-16 h-16 bg-bg-surface flex items-center justify-center rounded-lg border border-border-subtle group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl">{cert.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-[family-name:var(--font-headline-md)] text-[18px] font-bold">{cert.title}</h5>
                    <p className="font-[family-name:var(--font-label-mono)] text-[11px] text-text-muted">{cert.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

function SkillBlock({
  icon,
  title,
  tags,
  className = '',
}: {
  icon: string
  title: string
  tags: string[]
  className?: string
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-primary">{icon}</span>
        <h4 className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-[family-name:var(--font-label-mono)] text-[13px] px-3 py-1 border border-outline-variant rounded hover:border-primary hover:text-primary transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
