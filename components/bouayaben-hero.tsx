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
              <span>THEO DHORE // INDONESIA (UTC+7)</span>
            </span>
            <span className="text-xs text-[#93939f] font-mono hidden sm:inline">
              {"// DISTRIBUTED & EDGE SOFTWARE"}
            </span>
          </div>

          {/* Monumental Display Headline matching bouayaben rhythm */}
          <div className="max-w-5xl">
            <h1 className="hero-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#17171c] font-normal tracking-[-0.035em] leading-[1.02]">
              I build software used in high-concurrency environments — distributed multi-agent runtimes,
              edge-first web platforms, and deterministic AI infrastructure.
            </h1>

            <p className="mt-8 text-base sm:text-lg text-[#616161] max-w-2xl font-sans leading-relaxed">
              Operating across Indonesia and collaborating with teams worldwide. Turning non-deterministic
              foundation models into fast, observable, production-grade applications on Next.js 16.
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
              <div className="text-[#93939f] text-[11px] uppercase mb-1">01 // RELIABILITY INVARIANT</div>
              <div className="text-[#17171c] font-medium">99.98% tool schema pass rate across 500k turns</div>
            </div>
            <div>
              <div className="text-[#93939f] text-[11px] uppercase mb-1">02 // EDGE SPEED</div>
              <div className="text-[#17171c] font-medium">&lt;25ms global TTFB edge streaming</div>
            </div>
            <div>
              <div className="text-[#93939f] text-[11px] uppercase mb-1">03 // GRAPHICS PERFORMANCE</div>
              <div className="text-[#17171c] font-medium">500k-vector WebGL 3D rendering at 60 FPS</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
