import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/lib/projects";

function ProjectCard({ p }: { p: CaseStudy }) {
  return (
    <article className="card flex h-full flex-col gap-3 p-4 md:p-5">
      <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
        <span>{p.year}</span>
        <span aria-hidden="true" className="h-px w-4 bg-ink/40" />
        <span className="truncate" title={p.category}>
          {p.category}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold leading-tight tracking-tight md:text-xl">
        {p.title}
      </h3>

      <p className="text-sm leading-relaxed text-muted">{p.summary}</p>

      {p.outcomes?.length > 0 && (
        <ul className="grid gap-1.5 font-mono text-xs text-muted">
          {p.outcomes.slice(0, 3).map((o) => (
            <li key={o.label} className="flex items-baseline gap-2">
              <span className="shrink-0 font-semibold text-ink">{o.value}</span>
              <span aria-hidden="true" className="min-w-2 flex-1 self-center border-b border-dotted border-ink/30" />
              <span className="text-right">{o.label}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {p.tech.map((t) => (
          <li
            key={t}
            className="chip px-2.5! py-0! text-[11px]! leading-4!"
          >
            {t}
          </li>
        ))}
      </ul>

      {(p.liveUrl || p.githubUrl) && (
        <div className="flex flex-wrap gap-2.5 pt-1">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border-[3px] border-ink bg-sun px-3 py-1 font-mono text-xs font-bold uppercase shadow-[0_3px_0_var(--ink)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_5px_0_var(--ink)] active:translate-y-0.5 active:shadow-none"
            >
              Live <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border-[3px] border-ink bg-panel px-3 py-1 font-mono text-xs font-bold uppercase shadow-[0_3px_0_var(--ink)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_5px_0_var(--ink)] active:translate-y-0.5 active:shadow-none"
            >
              Source <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function ProjectsSection({ projects }: { projects: CaseStudy[] }) {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-6 md:mb-8">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
          Selected projects
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Protocols, tools, and interfaces I&apos;ve designed and built, from
          DeFi routing to real-time systems and creative graphics.
        </p>
      </div>

      {projects.length === 0 ? (
        <div
          role="status"
          className="card mx-auto max-w-md p-6 text-center md:p-8"
        >
          <h3 className="font-display text-xl font-bold uppercase">
            Nothing to show yet
          </h3>
          <p className="mt-2 text-sm text-muted">
            Projects will appear here once they are added.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id} className="h-full">
              <ProjectCard p={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
