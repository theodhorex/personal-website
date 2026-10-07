"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon } from "./icons";

import { type CaseStudy, defaultProjects } from "@/lib/projects";

interface BouayabenWorkProps {
  projects?: CaseStudy[];
}

export function BouayabenWork({ projects = defaultProjects }: BouayabenWorkProps) {
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);
  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="work" className="bg-white py-20 sm:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Head matching bouayaben.com: Label Left, Count Right */}
          <div className="flex items-center justify-between pb-6 border-b border-[#17171c]">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] font-semibold">
              Selected Work
            </h2>
            <p className="font-mono text-xs text-[#75758a]" aria-hidden="true">
              ({String(displayProjects.length).padStart(2, "0")})
            </p>
          </div>

          {/* Work List matching bouayaben.com .work-list */}
          <ul className="divide-y divide-[#d9d9dd]">
            {displayProjects.map((project) => (
              <li key={project.id} className="group">
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full text-left py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:text-[#1863dc] focus:outline-none"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    {/* Work Index */}
                    <span className="font-mono text-xs text-[#93939f] w-6 flex-shrink-0">
                      {project.index}
                    </span>

                    {/* Work Title & Meta */}
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#17171c] group-hover:text-[#1863dc] transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#75758a] mt-1.5 group-hover:text-[#616161]">
                        {project.meta}
                      </p>
                    </div>
                  </div>

                  {/* Year & Arrow */}
                  <div className="flex items-center gap-6 sm:gap-10 pl-10 sm:pl-0 flex-shrink-0">
                    <span className="font-mono text-xs text-[#93939f]">
                      {project.year}
                    </span>
                    <span className="font-mono text-lg text-[#17171c] group-hover:text-[#1863dc] group-hover:translate-x-1.5 transition-all">
                      →
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Slide-over Case Study Drawer matching bouayaben.com depth */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in"
          ></div>

          {/* Drawer Panel */}
          <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl z-10 overflow-y-auto flex flex-col justify-between p-6 sm:p-10 border-l border-[#d9d9dd] animate-fade-in">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#e5e7eb]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#ff7759] font-medium uppercase">
                    CASE STUDY // {activeProject.index}
                  </span>
                  <span className="text-[#93939f] text-xs">•</span>
                  <span className="font-mono text-xs text-[#75758a]">
                    {activeProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 rounded-full hover:bg-[#eeece7] text-[#17171c] transition-colors"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Summary */}
              <div className="pt-8">
                <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#17171c] tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="mt-4 text-base text-[#616161] font-sans leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Meta Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-[16px] bg-[#eeece7] border border-[#d9d9dd] font-mono text-xs">
                <div>
                  <div className="text-[#75758a] text-[10px] uppercase mb-0.5">CONTEXT</div>
                  <div className="text-[#17171c] font-medium">{activeProject.client}</div>
                </div>
                <div>
                  <div className="text-[#75758a] text-[10px] uppercase mb-0.5">ROLE</div>
                  <div className="text-[#17171c] font-medium">{activeProject.role}</div>
                </div>
                <div>
                  <div className="text-[#75758a] text-[10px] uppercase mb-0.5">TIMELINE</div>
                  <div className="text-[#17171c] font-medium">{activeProject.year}</div>
                </div>
              </div>

              {/* The Constraint */}
              <div className="mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-3">
                  THE CONSTRAINT &amp; CHALLENGE
                </h4>
                <div className="space-y-2.5 text-sm text-[#212121] leading-relaxed">
                  {activeProject.constraint.map((c, i) => (
                    <p key={i} className="p-3.5 rounded-[12px] bg-zinc-50 border border-[#e5e7eb]">
                      {c}
                    </p>
                  ))}
                </div>
              </div>

              {/* Architectural Decisions */}
              <div className="mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#003c33] font-medium mb-3">
                  ARCHITECTURAL DECISIONS
                </h4>
                <div className="space-y-4">
                  {activeProject.decisions.map((d, i) => (
                    <div key={i} className="border-l-2 border-[#003c33] pl-4 py-1">
                      <div className="font-display text-base font-medium text-[#17171c]">
                        {d.title}
                      </div>
                      <p className="mt-1 text-sm text-[#616161] leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Outcomes */}
              <div className="mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-3">
                  VERIFIED OUTCOMES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeProject.outcomes.map((o, i) => (
                    <div key={i} className="p-4 rounded-[12px] bg-[#eeece7] border border-[#d9d9dd] text-center">
                      <div className="font-display text-2xl font-medium text-[#17171c]">
                        {o.value}
                      </div>
                      <div className="font-mono text-[10px] text-[#75758a] mt-1 leading-tight">
                        {o.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Pills */}
              <div className="mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-2">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs bg-white text-[#212121] px-2.5 py-1 rounded-[6px] border border-[#d9d9dd]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="mt-12 pt-6 border-t border-[#e5e7eb] flex items-center justify-between gap-4">
              <a
                href={activeProject.githubUrl || "https://github.com/theodhorex"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#17171c] hover:bg-black text-white text-xs font-medium px-5 py-2.5 rounded-[32px] transition-all shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="text-xs font-mono text-[#75758a] hover:text-[#17171c] transition-colors"
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
