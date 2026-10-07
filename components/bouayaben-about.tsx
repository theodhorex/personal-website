"use client";

import { Reveal } from "./reveal";

export function BouayabenAbout() {
  const capabilities = [
    "Autonomous Multi-Agent Architectures",
    "Next.js 16 Edge Runtimes & Turbopack",
    "Vector Retrieval & pgvector",
    "Hardware-Accelerated WebGL 3D UI",
    "Systems Reliability & Distributed Tracing",
  ];

  const recognition = [
    "Architected multi-agent execution loops benchmarked across 500,000+ turns with 99.98% tool reliability.",
    "Engineered ultra-low latency headless web platform delivering sub-25ms global TTFB in 40+ edge regions.",
    "Open-source core contributor across Next.js, WebAssembly, and modern AI engineering runtimes.",
    "Based in Indonesia (UTC+7) · Available for select high-impact engineering and advisory roles in 2026.",
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Sticky Label matching bouayaben.com .about-sticky */}
            <div className="lg:col-span-3 lg:sticky lg:top-28">
              <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] font-semibold pb-4 lg:pb-0 border-b lg:border-none border-[#17171c]">
                About
              </h2>
            </div>

            {/* Right Column: Lede, Body, Capabilities, Recognition */}
            <div className="lg:col-span-9 space-y-10 sm:space-y-12">
              {/* Lede */}
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#17171c] leading-[1.2] tracking-tight">
                I’m a full-stack engineer and AI systems architect who works on complex systems:
                autonomous multi-agent pipelines, edge web engines, distributed backends.
              </p>

              {/* Body */}
              <p className="text-base sm:text-lg text-[#616161] font-sans leading-relaxed max-w-3xl">
                Operating across Indonesia (UTC+7) and collaborating with engineering teams globally.
                I focus on the hard boundary where probabilistic AI models interface with deterministic,
                fault-tolerant production software on Next.js 16.
              </p>

              {/* Capabilities List matching bouayaben.com .about-capabilities */}
              <div className="pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-4">
                  CORE CAPABILITIES
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="font-mono text-xs bg-[#eeece7] text-[#212121] px-3.5 py-1.5 rounded-[30px] border border-[#d9d9dd]"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recognition & Notes matching bouayaben.com .about-notes */}
              <div className="pt-6 border-t border-[#e5e7eb]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-4">
                  RECOGNITION &amp; INVARIANTS
                </h3>
                <ul className="space-y-3.5 text-sm sm:text-base text-[#212121] font-sans">
                  {recognition.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-[#93939f] mt-1 flex-shrink-0">
                        {"// 0" + (idx + 1)}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
