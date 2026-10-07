"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./reveal";

export function SelectedWorks() {
  const projects = [
    {
      id: "nexus",
      title: "Nexus Agent Runtime",
      tagline: "Autonomous multi-agent execution framework",
      category: "AI & DISTRIBUTED SYSTEMS",
      surface: "soft-stone",
      description:
        "A high-speed runtime for coordinating autonomous LLM agents with deterministic tool sandboxes, sub-35ms dispatch latency, and zero hallucinated schema calls.",
      highlights: [
        "Sub-35ms tool invocation latency",
        "Deterministic Zod / Pydantic validation",
        "99.98% execution reliability on 500k turns",
      ],
      tech: ["Python", "Next.js 16", "Redis Edge", "pgvector"],
      status: "FEATURED WORK",
      demoLink: "#",
      githubLink: "https://github.com/theodhorex",
    },
    {
      id: "hyperion",
      title: "Hyperion Edge Engine",
      tagline: "Ultra-low latency web platform",
      category: "NEXT.JS 16 & EDGE CLOUD",
      surface: "soft-stone",
      description:
        "Headless web architecture built on Next.js 16 App Router and Cloudflare Workers, achieving sub-25ms global TTFB with real-time state synchronization.",
      highlights: [
        "<25ms global Time-To-First-Byte",
        "Zero cold-start edge SSR streaming",
        "99.2% CDN edge cache hit ratio",
      ],
      tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Cloudflare"],
      status: "PRODUCTION",
      demoLink: "#",
      githubLink: "https://github.com/theodhorex",
    },
    {
      id: "aura",
      title: "Aura Latent 3D",
      tagline: "Interactive WebGL embedding visualizer",
      category: "CREATIVE ENGINEERING & WEBGL",
      surface: "canvas",
      description:
        "An in-browser 3D workbench rendering 500,000+ high-dimensional token embeddings and vector clusters at a sustained 60 FPS using instanced buffers and WebAssembly.",
      highlights: [
        "500k vector points rendered at 60 FPS",
        "Sub-8ms in-browser cosine similarity",
        "Interactive t-SNE / UMAP transforms",
      ],
      tech: ["Three.js", "WebGL", "WebAssembly", "React 19"],
      status: "OPEN SOURCE",
      demoLink: "#",
      githubLink: "https://github.com/theodhorex",
    },
  ];

  return (
    <section id="work" className="bg-white py-20 sm:py-24 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#e5e7eb]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-2.5 py-1 rounded-[4px] border border-[#d9d9dd] inline-block mb-3">
                SELECTED PROJECTS
              </span>
              <h2 className="section-display text-3xl sm:text-5xl font-normal text-[#17171c]">
                Featured Work
              </h2>
            </div>

            <p className="text-sm text-[#616161] font-sans max-w-md">
              A curated selection of software systems, AI runtimes, and web platforms I’ve engineered.
            </p>
          </div>
        </Reveal>

        {/* 3-Column / Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 120} className="h-full">
              <div
                className={`rounded-[22px] p-7 sm:p-8 flex flex-col justify-between h-full transition-all group cohere-card-lift ${
                  project.surface === "soft-stone"
                    ? "bg-[#eeece7] border border-[#d9d9dd] hover:border-[#17171c]/50"
                    : "bg-white border border-[#d9d9dd] hover:border-[#17171c]/50"
                }`}
              >
                <div>
                  {/* Meta Tag & Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#d9d9dd]/70">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#75758a]">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#17171c] font-medium bg-white/90 px-2 py-0.5 rounded-[4px] border border-[#d9d9dd]">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="pt-5">
                    <h3 className="font-display text-2xl font-normal text-[#17171c] tracking-tight group-hover:text-black">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#1863dc] mt-1">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-[#616161] font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlight Bullets */}
                  <div className="mt-5 pt-4 border-t border-[#d9d9dd]/60 space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#212121]">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#17171c] text-white flex items-center justify-center flex-shrink-0">
                          <Check className="w-2 h-2" />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Stack & Actions */}
                <div className="mt-6 pt-5 border-t border-[#d9d9dd]/60">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] bg-white text-[#616161] px-2 py-0.5 rounded-[4px] border border-[#d9d9dd]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.demoLink}
                      className="inline-flex items-center gap-1.5 bg-[#17171c] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-[32px] transition-all active:scale-95 shadow-xs"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#616161] hover:text-black underline underline-offset-2 transition-colors"
                    >
                      Source Code ↗
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
