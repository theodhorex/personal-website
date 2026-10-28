import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export interface CaseStudy {
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

export const defaultProjects: CaseStudy[] = [
  {
    id: "solara-dex",
    index: "01",
    title: "Solara DEX & Yield Aligator",
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
    title: "Kratos Event Pipeline & Query Engine",
    meta: "Rust · Systems Engineering · Parquet · GraphQL API",
    year: "2026",
    category: "SYSTEMS & EVENT PIPELINES",
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

export async function getProjects(): Promise<CaseStudy[]> {
  if (!client) {
    return defaultProjects;
  }

  try {
    const data = await client.fetch<CaseStudy[]>(
      projectsQuery,
      {},
      { next: { revalidate: 60 } }
    );

    if (Array.isArray(data) && data.length > 0) {
      const sanitized = data
        .map((p) => {
          let title = p.title;
          let category = p.category;
          if (
            title.includes("Mario Kart") ||
            title.includes("Wowkowkwowow") ||
            title === "Kratos On-Chain Indexer"
          ) {
            title = "Kratos Event Pipeline & Query Engine";
            category = "SYSTEMS & EVENT PIPELINES";
          }
          // CMS documents are not validated: keep list fields iterable.
          return { ...p, title, category, tech: p.tech ?? [], decisions: p.decisions ?? [] };
        })
        .filter((p, idx, arr) => arr.findIndex((x) => x.title === p.title) === idx)
        .map((p, idx) => ({ ...p, index: String(idx + 1).padStart(2, "0") }));

      return sanitized;
    }
  } catch (error) {
    console.warn("Unable to fetch projects from Sanity, falling back to default projects:", error);
  }

  return defaultProjects;
}
