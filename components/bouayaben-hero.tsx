"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ParticleCanvas } from "./particle-canvas";
import { Reveal } from "./reveal";

export function BouayabenHero() {
  return (
    <section className="relative bg-white pt-16 sm:pt-28 pb-16 sm:pb-24 border-b border-[#e5e7eb] overflow-hidden">
      {/* Interactive Vector Particle Field Canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Eyebrow / Meta */}
          <div className="flex items-center gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-3 py-1 rounded-[4px] border border-[#d9d9dd] inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1863dc]"></span>
              <span>THEODHORE // INDONESIA (UTC+7)</span>
            </span>
            <span className="text-xs text-[#93939f] font-mono hidden sm:inline">
              {"// WEB DEV & WEB3 ENTHUSIAST"}
            </span>
          </div>

          {/* Monumental Display Headline matching bouayaben rhythm */}
          <div className="max-w-5xl">
            <h1 className="hero-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#17171c] font-normal tracking-[-0.035em] leading-[1.02]">
              I build high-performance web applications, decentralized protocols,
              and developer tooling.
            </h1>

            <p className="mt-8 text-base sm:text-lg text-[#616161] max-w-2xl font-sans leading-relaxed">
              Operating across Indonesia and collaborating with teams globally. Focused on modern web engineering,
              reactive Web3 dApps, and high-leverage developer tools built on Next.js 16, TypeScript, and EVM.
            </p>

            {/* Actions Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#17171c] hover:bg-black text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-[32px] transition-all active:scale-95 shadow-none group"
              >
                <span>Selected Work (05)</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#212121] hover:text-[#1863dc] underline underline-offset-4 transition-colors"
              >
                <span>About &amp; Principles</span>
                <ArrowUpRight className="w-3.5 h-3.5 inline" />
              </a>
            </div>
          </div>

          {/* Foot Stats / Invariants Bar */}
          <div className="mt-16 sm:mt-24 pt-8 border-t border-[#e5e7eb] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <div className="text-[#93939f] text-[11px] uppercase mb-1">01 // WEB3 ARCHITECTURE</div>
              <div className="text-[#17171c] font-medium">Sub-second RPC latency &amp; verified smart contract state</div>
            </div>
            <div>
              <div className="text-[#93939f] text-[11px] uppercase mb-1">02 // EDGE WEB PERFORMANCE</div>
              <div className="text-[#17171c] font-medium">&lt;25ms global TTFB edge streaming on Next.js 16</div>
            </div>
            <div>
              <div className="text-[#93939f] text-[11px] uppercase mb-1">03 // DEV TOOLING RELIABILITY</div>
              <div className="text-[#17171c] font-medium">Zero-config developer workflows &amp; type-safe toolchains</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
