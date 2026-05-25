import { tools } from '../data/tools'

function BrandLogo({ hex, path }: { hex: string; path: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 md:w-12 md:h-12"
    >
      <path d={path} fill={`#${hex}`} />
    </svg>
  )
}

export function ToolsSection() {
  return (
    <section id="tools" className="mt-section-gap">
      <h2 className="font-[family-name:var(--font-label-mono)] text-[13px] text-primary tracking-widest uppercase mb-12 text-center">
        Tools &amp; Workflow
      </h2>
      <div className="border-y border-border-subtle py-10 md:py-14 bg-bg-secondary/50">
        <ul className="grid grid-cols-3 sm:grid-cols-5 place-items-center gap-x-8 gap-y-6 md:gap-x-12 max-w-4xl mx-auto px-4 list-none justify-center">
  {tools.map((tool) => (
    <li key={tool.id} className="flex justify-center items-center">
      <div
        className="group w-[72px] h-[72px] md:w-20 md:h-20 flex items-center justify-center rounded-lg border border-border-subtle bg-bg-surface hover:border-primary/50 hover:shadow-[0_0_24px_rgba(196,168,130,0.08)] transition-all duration-300"
        title={tool.name}
      >
        <span className="sr-only">{tool.name}</span>
        {tool.path && tool.hex ? (
          <BrandLogo hex={tool.hex} path={tool.path} />
        ) : tool.Logo ? (
          <tool.Logo className="w-10 h-10 md:w-12 md:h-12" />
        ) : null}
      </div>
       </li>
       ))}
      </ul>
      </div>
    </section>
  )
}
