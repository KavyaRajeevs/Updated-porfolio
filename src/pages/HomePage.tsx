import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { StarField } from '../components/StarField'
import { siteLinks, socialLinks } from '../data/links'
import { scrollToSection } from '../utils/scrollToSection'

const profileImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAV9N2aaxsSxJ8yXbttX87jHI2Vtoo9OrZtkklsxY4gkCiUFecMusPdYnsVW8UquP0tg2VhDxAGluJsuiWYkTifUiHLf4ViJb6hXG5NlabOrHBNVHL1kqT_J_xl_1g4a0vWtqbc-1NXNIeF01j32sVK_rq71HVdtAvU7HTlzURcSo5LKJw6pQ9yw7TKT8ey2QY4cn1ndb5-ydm7b7fGUBjpGDpBKcewI1-C8pqLTC6cRU18OjuTw4vn5cUxoY7XhGFkyNsf1z9Lckk'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const shouldScroll =
      location.hash === '#contact' ||
      (location.state as { scrollTo?: string } | null)?.scrollTo === 'contact'

    if (!shouldScroll) return

    const timer = window.setTimeout(() => scrollToSection('contact'), 100)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash, location.state])

  return (
    <Layout activePage="home">
      <StarField count={100} />
      <main className="relative z-10">
        <section className="min-h-screen flex items-center pt-24 px-6 md:px-20 max-w-[1200px] mx-auto">
          <div className="absolute top-1/2 right-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(196,168,130,0.1)_0%,transparent_70%)] blur-[60px] pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
            <div className="md:col-span-7 z-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span className="font-[family-name:var(--font-label-mono)] text-[13px] tracking-widest text-primary-container">
                  SOFTWARE ENGINEER · AI EXPLORER · DANCER
                </span>
              </div>
              <h1 className="font-[family-name:var(--font-display-hero)] text-[36px] md:text-[72px] font-black leading-[1.1] mb-8 text-on-surface">
                Hi, I&apos;m <span className="text-primary italic">Kavya.</span>
              </h1>
              <p className="text-[18px] leading-[1.7] font-light text-on-surface-variant max-w-xl mb-12">
                I build full-stack apps and chase ideas at the intersection of code, intelligence, and design.
                Crafting digital experiences with architectural precision and a storyteller&apos;s soul.
              </p>
              <div className="flex flex-wrap gap-6 mb-16">
                <Link
                  to="/projects"
                  className="px-8 py-4 border border-primary-container text-primary-container font-[family-name:var(--font-label-mono)] text-[13px] rounded-lg transition-all duration-400 hover:bg-primary-container/10 hover:shadow-[0_0_20px_rgba(196,168,130,0.15)] flex items-center gap-2 group"
                >
                  VIEW PROJECTS
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <a
                  href={siteLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-on-surface-variant font-[family-name:var(--font-label-mono)] text-[13px] transition-all duration-400 hover:text-primary flex items-center gap-2 group relative"
                >
                  RESUME
                </a>
              </div>
              <div className="flex items-center gap-8">
                {(['GITHUB', 'LINKEDIN', 'INSTAGRAM'] as const).map((label) => (
                  <a
                    key={label}
                    href={
                      label === 'GITHUB'
                        ? socialLinks.github
                        : label === 'LINKEDIN'
                          ? socialLinks.linkedin
                          : socialLinks.instagram
                    }
                    className="text-on-surface-variant hover:text-primary transition-all duration-400 flex items-center gap-2 group"
                  >
                    <span className="font-[family-name:var(--font-label-mono)] text-[13px]">{label}</span>
                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-all">
                      north_east
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 relative z-10 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 rounded-full border border-primary-container/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-4 rounded-full border border-primary-container/10 animate-[spin_30s_linear_infinite_reverse]" />
                <div className="relative rounded-full overflow-hidden w-full h-full border-4 border-bg-surface p-2 shadow-2xl">
                  <img
                    alt="Kavya R — Software Engineer and AI Explorer"
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                    src={profileImage}
                  />
                </div>
                <div className="absolute top-10 right-0 text-primary-container/40 text-2xl">✦</div>
                <div className="absolute bottom-20 left-0 text-primary-container/20 text-xl">✦</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-20 max-w-[1200px] mx-auto border-t border-border-subtle">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {[
              ['9.50', 'CGPA'],
              ['4+', 'Projects'],
              ['2', 'Hackathon Wins'],
              ['∞', 'Lines of Code'],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-[family-name:var(--font-headline-md)] text-[32px] font-bold text-primary mb-1">
                  {value}
                </span>
                <span className="font-[family-name:var(--font-label-mono)] text-[10px] tracking-widest text-on-surface-variant uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-section-gap px-6 md:px-20 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-bg-secondary p-card-padding border border-border-subtle rounded-xl flex flex-col justify-between group hover:border-primary-container/40 transition-all duration-400">
              <div>
                <h3 className="font-[family-name:var(--font-headline-md)] text-[32px] font-bold text-on-surface mb-4">
                  Latest Project
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  FaceSketcher — turn natural language into stylized portrait sketches with generative AI.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high rounded text-[11px] font-[family-name:var(--font-label-mono)] text-tertiary">
                    PYTHON
                  </span>
                  <span className="px-3 py-1 bg-surface-container-high rounded text-[11px] font-[family-name:var(--font-label-mono)] text-tertiary">
                    PYTORCH
                  </span>
                </div>
                <Link to="/projects" className="material-symbols-outlined text-primary-container group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </Link>
              </div>
            </div>
            <div className="bg-bg-secondary p-card-padding border border-border-subtle rounded-xl flex flex-col items-center justify-center text-center group hover:border-primary-container/40 transition-all duration-400">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-container text-3xl">terminal</span>
              </div>
              <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold text-on-surface mb-2">
                Technical Skills
              </h3>
              <p className="text-on-surface-variant text-sm font-[family-name:var(--font-label-mono)]">
                Full-Stack · ML/AI · Cloud
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-section-gap px-6 md:px-20 max-w-[1200px] mx-auto border-t border-border-subtle relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="font-[family-name:var(--font-display-hero)] text-[36px] md:text-[48px] font-bold text-on-surface mb-6 uppercase">
                SAY HELLO <span className="text-primary italic">✦</span>
              </h2>
              <p className="text-[18px] leading-[1.7] font-light text-on-surface-variant max-w-sm mb-8">
                Interested in collaborating or just want to talk about AI and design? Drop a message.
              </p>
              <div className="flex flex-col gap-4 font-[family-name:var(--font-label-mono)] text-[13px]">
                <a href={socialLinks.email} className="text-primary hover:underline">
                  kavyarajeevs090@gmail.com
                </a>
                <span className="text-on-surface-variant">Based in Kerala, India</span>
              </div>
            </div>
            <div className="md:col-span-7">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-[family-name:var(--font-label-mono)] text-[10px] tracking-widest text-primary-container uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-label-mono)] text-[10px] tracking-widest text-primary-container uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-label-mono)] text-[10px] tracking-widest text-primary-container uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface resize-none outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-12 py-4 border border-primary-container text-primary-container font-[family-name:var(--font-label-mono)] text-[13px] rounded-lg transition-all duration-400 hover:bg-primary-container/10 flex items-center gap-2 group"
                >
                  SEND MESSAGE
                  <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-1 transition-transform">
                    north_east
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
