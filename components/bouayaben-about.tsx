"use client";

import { Reveal } from "./reveal";
import { useLanguage } from "./language-provider";

export function BouayabenAbout() {
  const { t, language } = useLanguage();

  const capabilities = [
    "Next.js 16 & Turbopack Edge Architecture",
    "Web3 dApp Engineering (Wagmi, Viem, Ethers)",
    "Smart Contract Protocols & Solidity",
    "High-Performance Developer Tooling (Rust, WASM)",
    "Interactive 3D Web & Hardware-Accelerated WebGL",
    "Type-Safe Full-Stack Systems & API Design",
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
    <section id="about" className="bg-white dark:bg-[#0e0e12] py-14 sm:py-20 md:py-28 border-b border-[#e5e7eb] dark:border-[#2e2e38] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* Left Column: Sticky Label matching bouayaben.com .about-sticky */}
            <div className="lg:col-span-3 lg:sticky lg:top-28">
              <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] dark:text-[#f4f4f7] font-semibold pb-4 lg:pb-0 border-b lg:border-none border-[#17171c] dark:border-[#2e2e38] transition-colors">
                {t("about_section_title")}
              </h2>
            </div>

            {/* Right Column: Lede, Body, Capabilities, Recognition */}
            <div className="lg:col-span-9 space-y-8 sm:space-y-10 md:space-y-12">
              {/* Lede */}
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#17171c] dark:text-[#f4f4f7] leading-[1.25] tracking-tight transition-colors">
                {t("about_lede")}
              </p>

              {/* Body */}
              <p className="text-sm sm:text-base md:text-lg text-[#616161] dark:text-[#93939f] font-sans leading-relaxed max-w-3xl transition-colors">
                {t("about_body")}
              </p>

              {/* Capabilities List matching bouayaben.com .about-capabilities */}
              <div className="pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#75758a] dark:text-[#93939f] mb-3 sm:mb-4 transition-colors">
                  {t("about_capabilities_title")}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="font-mono text-[11px] sm:text-xs bg-[#eeece7] dark:bg-[#1a1a24] hover:bg-[#17171c] dark:hover:bg-white hover:text-white dark:hover:text-[#0e0e12] text-[#212121] dark:text-[#e4e4e8] px-3.5 py-1.5 rounded-[30px] border border-[#d9d9dd] dark:border-[#2e2e38] hover:border-[#17171c] dark:hover:border-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-default shadow-xs select-none"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recognition & Notes matching bouayaben.com .about-notes */}
              <div className="pt-5 sm:pt-6 border-t border-[#e5e7eb] dark:border-[#2e2e38] transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#75758a] dark:text-[#93939f] mb-3 sm:mb-4 transition-colors">
                  {t("about_recognition_title")}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-base text-[#212121] dark:text-[#d0d0d8] font-sans">
                  {recognition.map((item, idx) => (
                    <li
                      key={idx}
                      className="group flex items-start gap-2.5 sm:gap-3 p-2 -mx-2 rounded-[10px] hover:bg-[#faf9f6] dark:hover:bg-[#16161f] transition-all duration-200"
                    >
                      <span className="font-mono text-[11px] sm:text-xs text-[#93939f] dark:text-[#78788a] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] mt-0.5 sm:mt-1 flex-shrink-0 transition-colors duration-200">
                        {"// 0" + (idx + 1)}
                      </span>
                      <span className="leading-relaxed group-hover:text-[#17171c] dark:group-hover:text-white transition-colors duration-200">
                        {item}
                      </span>
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
