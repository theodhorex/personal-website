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
      id: "solara-dex",
      index: "01",
      title: "Solara DEX & Yield Aggregator",
      meta: "EVM · Wagmi / Viem · Solidity · Zero-Slippage Routing",
      year: "2026",
      category: "WEB3 & DEFI PROTOCOLS",
      client: "DeFi Ecosystem",
      role: "Lead Web3 Frontend & Smart Contract Engineer",
      summary:
        "A decentralized exchange interface and automated yield aggregator with multi-pool routing, real-time mempool simulation, and gas-optimized trade execution.",
      constraint: [
        "High RPC provider volatility and rate-limiting led to stale quote displays and transaction reversions during high congestion spikes.",
        "Complex approval workflows and multi-hop swaps confused non-technical users and created front-running (MEV) sandwich attack vulnerabilities.",
      ],
      decisions: [
        {
          title: "Multicall3 & Viem Optimistic State",
          body: "Batched on-chain state queries via Multicall3 with fallback RPC rotation and instant local balance reconciliation before block confirmation.",
        },
        {
          title: "Commit-Reveal Slippage Guard",
          body: "Integrated private RPC relays and slippage bounds preventing sandwich attacks while giving users 1-click permit2 execution.",
        },
      ],
      outcomes: [
        { value: "99.9%", label: "transaction success rate on high-volatility swap routes" },
        { value: "<180ms", label: "price quote generation across 12 liquidity pools" },
        { value: "38%", label: "average gas savings via optimized multicall permit approvals" },
      ],
      tech: ["Solidity", "Wagmi", "Viem", "Next.js 16", "EVM", "Tailwind v4"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "hyperion-edge",
      index: "02",
      title: "Hyperion Edge Engine",
      meta: "Next.js 16 · Turbopack · Distributed Edge Architecture",
      year: "2025",
      category: "HIGH-PERFORMANCE WEB",
      client: "Enterprise Web Platform",
      role: "Full-Stack Web Engineer",
      summary:
        "Next-generation headless web architecture powered by Next.js 16 App Router, edge streaming, and distributed cache invalidation delivering sub-25ms global TTFB.",
      constraint: [
        "Global users faced 400ms+ latency on dynamic checkout and catalog renders during peak traffic surges, causing drop-offs.",
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
      id: "kratos-indexer",
      index: "03",
      title: "Kratos On-Chain Indexer",
      meta: "Rust · EVM Event Ingestion · Parquet · GraphQL API",
      year: "2026",
      category: "ENGINEERING TOOLS & WEB3 INFRA",
      client: "Open Source Tooling",
      role: "Systems & Web3 Engineer",
      summary:
        "Ultra-fast EVM log indexer and querying engine built in Rust that parses millions of block receipts per second into parquet files for sub-second analytical queries.",
      constraint: [
        "Traditional Node.js blockchain indexers lagged 50+ blocks behind chain tip during peak gas auctions, consuming gigabytes of memory.",
        "RPC provider quotas were rapidly exhausted by repetitive block polling and uncompressed JSON payloads.",
      ],
      decisions: [
        {
          title: "Zero-Copy Binary Log Parsing",
          body: "Built an asynchronous Rust ingestion pipeline that unpacks raw EVM block logs directly into memory-mapped Apache Arrow buffers.",
        },
        {
          title: "Embedded DuckDB Columnar Store",
          body: "Streamed indexed events directly into partitioned Parquet files with an instant GraphQL and REST query layer.",
        },
      ],
      outcomes: [
        { value: "120k/s", label: "block events indexed on a single commodity core" },
        { value: "<5ms", label: "analytical query response time over 10M+ transaction logs" },
        { value: "90%", label: "reduction in external RPC calls via binary block streaming" },
      ],
      tech: ["Rust", "EVM", "DuckDB", "Apache Arrow", "GraphQL", "TypeScript"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "chainforge-playground",
      index: "04",
      title: "ChainForge Smart Contract Playground",
      meta: "In-Browser Solc · WebAssembly · EVM Simulation · TypeScript",
      year: "2026",
      category: "DEVELOPER TOOLING",
      client: "Developer Community",
      role: "Creator & Lead Engineer",
      summary:
        "A zero-install in-browser Solidity development environment and EVM sandbox with live compilation, step-through opcode debugger, and gas profiling.",
      constraint: [
        "Setting up local Hardhat or Foundry toolchains is cumbersome for rapid smart contract experimentation and audit verifications.",
        "Running smart contract tests in remote cloud servers introduces latency, security risks, and ongoing infrastructure costs.",
      ],
      decisions: [
        {
          title: "WebAssembly Solc & Client-Side EVM",
          body: "Bundled solc compiler directly into WebAssembly, running full bytecode execution inside Web Workers without any backend server dependency.",
        },
        {
          title: "Monaco Editor & Type-Safe ABI Generator",
          body: "Live AST parser providing instant linting, function signature generation, and interactive contract interaction forms.",
        },
      ],
      outcomes: [
        { value: "0ms", label: "backend dependency — 100% client-side privacy and offline capability" },
        { value: "<120ms", label: "in-browser compile and deploy time to simulated chain" },
        { value: "15k+", label: "contracts compiled and verified by developer community" },
      ],
      tech: ["TypeScript", "WebAssembly", "Solidity", "Next.js 16", "Monaco Editor"],
      githubUrl: "https://github.com/theodhorex",
    },
    {
      id: "aura-latent",
      index: "05",
      title: "Aura Latent 3D Canvas",
      meta: "Three.js · WebGL 60 FPS · WebAssembly · Interactive Web",
      year: "2025",
      category: "CREATIVE WEB & GRAPHICS",
      client: "Interactive Web Lab",
      role: "Creative Frontend Engineer",
      summary:
        "High-performance 3D canvas and particle physics simulation rendered in the browser at 60 FPS, demonstrating advanced WebGL techniques and custom shader pipelines.",
      constraint: [
        "Animating 500,000+ interactive particles on standard mobile and laptop GPUs caused dropped frames and high battery drain.",
        "Complex matrix transformations in JavaScript frequently blocked the main UI thread during navigation interactions.",
      ],
      decisions: [
        {
          title: "Instanced Buffer Geometry & Custom GLSL Shaders",
          body: "Offloaded particle physics computation to GPU vertex shaders using instanced buffers, preserving main thread responsiveness.",
        },
        {
          title: "WebAssembly Spatial Partitioning",
          body: "Implemented a SIMD-accelerated KD-tree in Rust/WASM to compute real-time cursor gravitational pull in sub-millisecond frames.",
        },
      ],
      outcomes: [
        { value: "500k", label: "particles rendered concurrently at silky smooth 60 FPS" },
        { value: "<2.5ms", label: "per-frame GPU compute budget on standard laptop hardware" },
        { value: "<140 MB", label: "total client memory footprint" },
      ],
      tech: ["Three.js", "WebGL", "GLSL", "WebAssembly", "React 19", "Tailwind v4"],
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
