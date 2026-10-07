"use client";

import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

export function ResearchTable() {
  const [selectedTag, setSelectedTag] = useState("All Notes");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Notes",
    "Autonomous Agents",
    "Distributed Systems",
    "Frontend Architecture",
    "Machine Learning",
  ];

  const publications = [
    {
      id: "pub-1",
      title: "Deterministic Tool Execution Loops in Production LLM Agents",
      category: "Autonomous Agents",
      readTime: "8 min read",
      date: "Feb 2026",
      type: "Research Paper",
      summary:
        "Analyzing failure modes in generative tool calling and detailing self-repair mechanisms using runtime JSON schemas and transactional rollbacks.",
    },
    {
      id: "pub-2",
      title: "Zero-Cold-Start Micro-Frontends on Next.js 16 Edge Runtimes",
      category: "Frontend Architecture",
      readTime: "6 min read",
      date: "Jan 2026",
      type: "Systems Memo",
      summary:
        "Leveraging Turbopack, App Router edge streaming, and distributed edge memory to maintain sub-30ms TTFB across multi-region deployments.",
    },
    {
      id: "pub-3",
      title: "Quantization Tradeoffs: FP8 vs INT4 in Distributed Retrieval Pipelines",
      category: "Machine Learning",
      readTime: "11 min read",
      date: "Nov 2025",
      type: "Benchmark Study",
      summary:
        "Benchmarking cosine similarity fidelity, memory reduction, and SIMD hardware acceleration across multi-billion token vector indices.",
    },
    {
      id: "pub-4",
      title: "Why Editorial Restraint Beats Saturated UI in Technical Platforms",
      category: "Frontend Architecture",
      readTime: "5 min read",
      date: "Oct 2025",
      type: "Design Essay",
      summary:
        "How monochrome typography, mineral surfaces, and generous whitespace convey enterprise trust far better than decorative gradients.",
    },
    {
      id: "pub-5",
      title: "Managing Long-Context State Drift in Multi-Day Agent Tasks",
      category: "Autonomous Agents",
      readTime: "9 min read",
      date: "Aug 2025",
      type: "Technical Whitepaper",
      summary:
        "Architecting episodic vs semantic memory partitioning to prevent catastrophic forgetting and hallucinations during protracted tasks.",
    },
    {
      id: "pub-6",
      title: "Columnar DuckDB Analytics for Edge LLM Trace Ingestion",
      category: "Distributed Systems",
      readTime: "7 min read",
      date: "Jun 2025",
      type: "Infrastructure Guide",
      summary:
        "Using embedded columnar engines inside telemetry daemons to aggregate millions of prompt token metrics with sub-second OLAP queries.",
    },
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesTag = selectedTag === "All Notes" || pub.category === selectedTag;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="notes" className="bg-white py-20 sm:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-10 border-b border-[#d9d9dd]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#ff7759] bg-[#ff7759]/10 px-2.5 py-1 rounded-[4px] border border-[#ffad9b] inline-block mb-3 font-medium">
            PUBLICATIONS &amp; RESEARCH MEMOS
          </span>
          <h2 className="section-display text-3xl sm:text-5xl font-normal text-[#17171c]">
            Writing, Papers &amp; System Notes
          </h2>
          <p className="text-base text-[#616161] mt-3 font-sans max-w-2xl">
            Detailed dissections of distributed systems, AI agent sandboxes, performance engineering, and product interface design.
          </p>

          {/* Search & Coral Taxonomy Filter Chips */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Coral Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                const isActive = selectedTag === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedTag(category)}
                    className={`px-3.5 py-1.5 rounded-[8px] text-xs font-mono transition-all border ${
                      isActive
                        ? "bg-[#ff7759] text-white border-[#ff7759] font-medium shadow-sm"
                        : "bg-transparent text-[#212121] border-[#d9d9dd] hover:border-[#ff7759] hover:text-[#ff7759]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Quick Search Field */}
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-[#93939f] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search research topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-[8px] border border-[#d9d9dd] text-xs font-sans text-[#212121] placeholder-[#93939f] focus:outline-none focus:border-[#9b60aa] bg-white"
              />
            </div>
          </div>
        </div>

        {/* Rule-Separated Research Table */}
        <div className="divide-y divide-[#d9d9dd]">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="py-7 group hover:bg-[#eeece7]/40 transition-colors px-2 rounded-[8px] flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer"
            >
              {/* Left Column: Title & Summary */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[11px] text-[#ff7759] font-medium uppercase">
                    {pub.type}
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span className="font-mono text-[11px] text-[#75758a]">
                    {pub.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-[#17171c] font-normal group-hover:text-[#1863dc] transition-colors">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#616161] font-sans leading-relaxed">
                  {pub.summary}
                </p>
              </div>

              {/* Center & Right Column: Topic Pill, Date & Action */}
              <div className="flex items-center justify-between lg:justify-end gap-6 flex-shrink-0 pt-2 lg:pt-0">
                <span className="font-mono text-xs text-[#212121] px-3 py-1 rounded-[30px] border border-[#d9d9dd] bg-white">
                  {pub.category}
                </span>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#93939f]">
                    {pub.date}
                  </span>

                  <div className="w-8 h-8 rounded-full border border-[#d9d9dd] bg-white flex items-center justify-center text-[#212121] group-hover:bg-[#1863dc] group-hover:text-white group-hover:border-[#1863dc] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="py-12 text-center text-sm font-mono text-[#93939f]">
              No publications found matching &quot;{searchQuery}&quot; in {selectedTag}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
