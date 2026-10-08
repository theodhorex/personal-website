"use client";

import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";

export function EnchantressAbout() {
  const { t, language } = useLanguage();

  const capabilities = [
    "Next.js 16 App Router & Turbopack",
    "Web3 dApp Engineering (Wagmi, Viem, Ethers)",
    "Solidity Smart Contracts & EVM Optimization",
    "High-Performance Developer Tooling (Rust, WASM)",
    "Interactive 3D Web & Hardware-Accelerated Canvas",
    "Type-Safe Systems Architecture & API Design",
  ];

  const recognitionEn = [
    "Engineered reactive Web3 dApp interfaces achieving 99.9% swap execution reliability and zero-slippage routing.",
    "Built headless web architectures delivering sub-25ms global TTFB across 40+ edge regions on Next.js 16.",
    "Crafted client-side developer tooling in Rust and WebAssembly, enabling 100% offline smart contract simulation.",
    "Based in Indonesia (UTC+7) · Available for high-impact web engineering, Web3 protocols, and advisory roles in 2026.",
  ];

  const recognitionId = [
    "Merancang antarmuka Web3 dApp responsif dengan tingkat keandalan eksekusi 99.9% dan zero-slippage routing.",
    "Mengembangkan arsitektur headless web dengan latensi global sub-25ms TTFB pada 40+ edge region berbasis Next.js 16.",
    "Membangun client-side developer tooling menggunakan Rust dan WebAssembly untuk simulasi smart contract secara offline.",
    "Berbasis di Indonesia (UTC+7) · Terbuka untuk modern web engineering, protokol Web3, dan advisory roles di 2026.",
  ];

  const recognition = language === "id" ? recognitionId : recognitionEn;

  return (
    <section id="about" className="landing-section">
      <Reveal delay={60} distance={18}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="font-mono text-xs uppercase tracking-wider text-amber-500 font-semibold">
              {"// BACKGROUND & VALUES"}
            </span>
            <h2 className="section-heading mt-1">{t("about_section_title")}</h2>
          </div>

          {/* Right Detailed Narrative */}
          <div className="lg:col-span-8 space-y-8">
            {/* Lede & Body */}
            <p className="font-display text-xl sm:text-2xl font-light text-zinc-900 dark:text-zinc-100 leading-snug">
              {t("about_lede")}
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t("about_body")}
            </p>

            {/* Core Capabilities */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-4">
                {t("about_capabilities_title")}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 hover:border-amber-500/50 transition-colors shadow-2xs"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recognition & Technical Invariants */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-4">
                {t("about_recognition_title")}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                {recognition.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 transition-all hover:border-amber-500/40"
                  >
                    <span className="font-mono text-xs text-amber-500 font-semibold mt-0.5 shrink-0">
                      0{idx + 1} //
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
