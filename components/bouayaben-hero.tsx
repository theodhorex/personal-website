"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ParticleCanvas } from "./particle-canvas";
import { Reveal } from "./reveal";

export function BouayabenHero() {
  return (
    <section className="relative bg-white pt-14 sm:pt-20 md:pt-28 pb-14 sm:pb-20 md:pb-24 border-b border-[#e5e7eb] overflow-hidden">
      {/* Interactive Vector Particle Field Canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Eyebrow / Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-3 py-1 rounded-[4px] border border-[#d9d9dd] inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1863dc] flex-shrink-0"></span>
              <span>THEODHORE // INDONESIA (UTC+7)</span>
            </span>
            <span className="text-[11px] sm:text-xs text-[#93939f] font-mono hidden sm:inline">
              {"// WEB DEV & WEB3 ENTHUSIAST"}
            </span>
          </div>

          {/* Monumental Display Headline matching bouayaben rhythm */}
          <div className="max-w-5xl">
            <h1 className="hero-display text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] text-[#17171c] font-normal tracking-[-0.035em] leading-[1.06] sm:leading-[1.02] break-words">
              I build high-performance web applications, decentralized protocols,
              and developer tooling.
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#616161] max-w-2xl font-sans leading-relaxed">
              Operating across Indonesia and collaborating with teams globally. Focused on modern web engineering,
              reactive Web3 dApps, and high-leverage developer tools built on Next.js 16, TypeScript, and EVM.
            </p>

            {/* Actions Bar */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              <a
                href="#work"
                className="btn-pill-interactive inline-flex items-center justify-center gap-2.5 bg-[#17171c] hover:bg-black text-white text-xs sm:text-sm font-medium px-6 py-3.5 sm:py-3 rounded-[32px] group"
              >
                <span>Selected Work (05)</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200" />
              </a>

              <a
                href="#about"
                className="link-hover-underline group inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-[#212121] hover:text-[#1863dc] transition-colors py-2 sm:py-0"
              >
                <span>About &amp; Principles</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Foot Stats / Invariants Bar */}
          <div className="mt-12 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-[#e5e7eb] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 font-mono text-xs">
            <div className="group p-4 sm:p-4 rounded-[14px] bg-[#fbfbfa] sm:bg-[#fafaf8]/80 hover:bg-white border border-[#e5e7eb] hover:border-[#1863dc]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default">
              <div className="text-[#93939f] group-hover:text-[#1863dc] text-[10px] sm:text-[11px] uppercase mb-1 transition-colors">01 // WEB3 ARCHITECTURE</div>
              <div className="text-[#17171c] font-medium text-xs sm:text-[13px] leading-relaxed">Sub-second RPC latency &amp; verified smart contract state</div>
            </div>
            <div className="group p-4 sm:p-4 rounded-[14px] bg-[#fbfbfa] sm:bg-[#fafaf8]/80 hover:bg-white border border-[#e5e7eb] hover:border-[#1863dc]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default">
              <div className="text-[#93939f] group-hover:text-[#1863dc] text-[10px] sm:text-[11px] uppercase mb-1 transition-colors">02 // EDGE WEB PERFORMANCE</div>
              <div className="text-[#17171c] font-medium text-xs sm:text-[13px] leading-relaxed">&lt;25ms global TTFB edge streaming on Next.js 16</div>
            </div>
            <div className="group p-4 sm:p-4 rounded-[14px] bg-[#fbfbfa] sm:bg-[#fafaf8]/80 hover:bg-white border border-[#e5e7eb] hover:border-[#1863dc]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default">
              <div className="text-[#93939f] group-hover:text-[#1863dc] text-[10px] sm:text-[11px] uppercase mb-1 transition-colors">03 // DEV TOOLING RELIABILITY</div>
              <div className="text-[#17171c] font-medium text-xs sm:text-[13px] leading-relaxed">Zero-config developer workflows &amp; type-safe toolchains</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
