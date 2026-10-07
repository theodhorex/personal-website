"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon } from "./icons";

interface CaseStudy {
  id: string;
  index: string;
  title: string;
  meta: string;
  year: string;
  category: string;
  client: string;
  role: string;
  summary: string;
  constraint: string[];
  decisions: { title: string; body: string }[];
  outcomes: { value: string; label: string }[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function BouayabenWork() {
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);

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

  const projects: CaseStudy[] = [
    {
      id: "nexus-runtime",
      index: "01",
      title: "Nexus Agent Runtime",
      meta: "Autonomous Systems · Multi-Agent Orchestration",
      year: "2026",
      category: "AI INFRASTRUCTURE",
      client: "Open Source Core",
      role: "Lead Systems Architect",
      summary:
        "A distributed runtime for coordinating multi-agent loops with deterministic tool sandboxes, sub-35ms dispatch latency, and zero hallucinated schema calls.",
      constraint: [
        "LLMs frequently generate invalid arguments or hallucinate tool schemas during multi-turn workflows, causing uncaught exceptions and uncontrolled state mutation.",
        "When an agent tool call fails in production, recovering without halting the entire session requires an isolated reflection sandbox.",
      ],
      decisions: [
        {
          title: "Deterministic Validation Barriers",
          body: "Enforced strict Zod/Pydantic validation schemas prior to any IO mutation. If an argument drifts, an internal self-repair reflection loop triggers automatically without user-facing errors.",
        },
        {
          title: "Atomic Transaction Rollbacks",
          body: "Every side-effecting tool action is staged in reversible transaction logs. If any step in a multi-agent DAG fails, state rolls back cleanly to the last verified invariant checkpoint.",
        },
      ],
      outcomes: [
        { value: "99.98%", label: "tool execution reliability on 500k recorded turns" },
        { value: "<35ms", label: "internal tool invocation latency on edge nodes" },
        { value: "100%", label: "type-safe schema enforcement across all dispatches" },
      ],
      tech: ["Python", "Next.js 16", "Redis Edge", "pgvector", "Docker"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "hyperion-edge",
      index: "02",
      title: "Hyperion Edge Engine",
      meta: "Next.js 16 · Distributed Edge Web Platform",
      year: "2025",
      category: "HIGH-THROUGHPUT WEB",
      client: "Enterprise Commerce",
      role: "Full-Stack Engineer",
      summary:
        "Headless web architecture built on Next.js 16 App Router and Cloudflare Workers, achieving sub-25ms global TTFB with real-time state synchronization.",
      constraint: [
        "Global buyers faced 400ms+ latency on dynamic checkout and catalog renders during peak traffic surges, causing checkout abandonment.",
        "Monolithic SSR servers suffered cold starts and inconsistent cache invalidation across distributed geographic regions.",
      ],
      decisions: [
        {
          title: "Edge Streaming with Turbopack",
          body: "Decoupled regional data stores using Cloudflare Workers and Next.js 16 incremental static regeneration with optimistic client UI updates.",
        },
        {
          title: "Decoupled Real-Time Cache Sync",
          body: "Implemented distributed WebSocket channels for instant inventory state sync without bypassing edge HTTP cache layers.",
        },
      ],
      outcomes: [
        { value: "<25ms", label: "global Time-to-First-Byte in 40+ edge regions" },
        { value: "99.2%", label: "CDN edge cache hit ratio" },
        { value: "<48 KB", label: "initial JavaScript bundle size over the wire" },
      ],
      tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Cloudflare Workers", "Redis"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "aura-latent",
      index: "03",
      title: "Aura Latent 3D",
      meta: "WebGL · In-Browser Neural Embedding Workbench",
      year: "2025",
      category: "CREATIVE & SCIENTIFIC UI",
      client: "Research Prototype",
      role: "Graphics & UI Engineer",
      summary:
        "Interactive browser workbench for navigating high-dimensional token embeddings, semantic attention maps, and vector clusters at a sustained 60 FPS.",
      constraint: [
        "Visualizing 500,000+ vector points previously froze DOM trees or required expensive cloud GPU streaming with high latency.",
        "Researchers needed real-time cosine similarity search and spatial clustering directly in the browser without server roundtrips.",
      ],
      decisions: [
        {
          title: "Instanced Buffer Geometry in WebGL",
          body: "Offloaded point rendering to custom GPU shaders using instanced buffers, enabling smooth 60 FPS panning across half a million points.",
        },
        {
          title: "WebAssembly SIMD Cosine Search",
          body: "Compiled vector similarity kernels to WebAssembly SIMD, performing 1,024-dimensional similarity queries in under 8ms in-browser.",
        },
      ],
      outcomes: [
        { value: "500k", label: "vector points rendered concurrently at 60 FPS" },
        { value: "6.8ms", label: "in-browser cosine similarity query time" },
        { value: "<140 MB", label: "total client memory footprint" },
      ],
      tech: ["Three.js", "WebGL", "WebAssembly", "React 19", "PyTorch"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "kratos-telemetry",
      index: "04",
      title: "Kratos Telemetry Hub",
      meta: "Distributed Tracing · Embedded Columnar Analytics",
      year: "2026",
      category: "SYSTEMS OBSERVABILITY",
      client: "Infrastructure Backbone",
      role: "Systems Engineer",
      summary:
        "High-density tracing pipeline for LLM inference workloads. Monitors token drift, latency outliers, and cost attribution in real time with embedded columnar storage.",
      constraint: [
        "Third-party observability SDKs added 80ms overhead to API routes and sent confidential prompt data across unverified endpoints.",
      ],
      decisions: [
        {
          title: "In-Process DuckDB Columnar Daemon",
          body: "Built a lock-free ring buffer in Rust and Go that flushes traces directly to local parquet partitions with sub-1ms overhead.",
        },
      ],
      outcomes: [
        { value: "<1ms", label: "telemetry collection latency overhead" },
        { value: "85k/s", label: "trace span ingestion rate on single core" },
        { value: "14x", label: "data compression ratio via zstd parquet" },
      ],
      tech: ["Rust", "Go", "DuckDB", "OpenTelemetry", "Next.js"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "command-r-guard",
      index: "05",
      title: "Cohere Command-R Invariant Sandbox",
      meta: "Enterprise AI · Deterministic Execution Guard",
      year: "2026",
      category: "ENTERPRISE RUNTIMES",
      client: "AI Systems Research",
      role: "Architecture Lead",
      summary:
        "Production harness implementing strict schema verification and speculative decoding layers atop Cohere Command-R enterprise models.",
      constraint: [
        "Enterprise workflows require absolute guarantees that AI responses adhere to banking-grade schemas without runtime divergence.",
      ],
      decisions: [
        {
          title: "Dual-Engine Verifier",
          body: "Pairs fast speculative decoding with an asynchronous deterministic verifier that cancels rogue operations before commit.",
        },
      ],
      outcomes: [
        { value: "100%", label: "RFC-7807 compliant error contracts" },
        { value: "42ms", label: "median end-to-end audit cycle" },
        { value: "Zero", label: "unhandled schema divergence in production" },
      ],
      tech: ["Cohere API", "Python", "TypeScript", "Zod", "Docker"],
      githubUrl: "https://github.com/theodhorex",
    },
  ];

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
              ({String(projects.length).padStart(2, "0")})
            </p>
          </div>

          {/* Work List matching bouayaben.com .work-list */}
          <ul className="divide-y divide-[#d9d9dd]">
            {projects.map((project) => (
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
