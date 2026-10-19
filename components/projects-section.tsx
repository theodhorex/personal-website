import { ArrowUpRight } from "lucide-react";

import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import type { CaseStudy } from "@/lib/projects";

function ProjectEntry({ p }: { p: CaseStudy }) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        <span>{p.year}</span>
        <span className="h-px w-6 bg-border" />
        <span>{p.category}</span>
      </div>
      <h4 className="text-xl font-medium text-foreground md:text-2xl">
        {p.title}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {p.summary}
      </p>

      {p.outcomes?.length > 0 && (
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {p.outcomes.slice(0, 3).map((o) => (
            <li
              key={o.label}
              className="rounded-xl border border-border bg-secondary/50 p-4"
            >
              <p className="text-xl font-medium text-foreground">{o.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{o.label}</p>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      {(p.liveUrl || p.githubUrl) && (
        <div className="mt-6 flex gap-5 text-sm font-medium">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-muted-foreground"
            >
              Live <ArrowUpRight className="size-4" />
            </a>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-muted-foreground"
            >
              Source <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function ProjectsSection({ projects }: { projects: CaseStudy[] }) {
  const data: TimelineEntry[] = projects.map((p) => ({
    title: p.title.split(" ")[0],
    content: <ProjectEntry p={p} />,
  }));

  return (
    <section id="projects">
      <Timeline
        data={data}
        heading="Selected projects"
        description="Protocols, tools, and interfaces I've designed and built, from DeFi routing to real-time systems and creative graphics."
      />
    </section>
  );
}
