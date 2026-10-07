"use client";

import { Reveal } from "./reveal";

export function BouayabenAbout() {
  const capabilities = [
    "Next.js 16 & Turbopack Edge Architecture",
    "Web3 dApp Engineering (Wagmi, Viem, Ethers)",
    "Smart Contract Protocols & Solidity",
    "High-Performance Developer Tooling (Rust, WASM)",
    "Interactive 3D Web & Hardware-Accelerated WebGL",
    "Type-Safe Full-Stack Systems & API Design",
  ];

  const recognition = [
    "Engineered reactive Web3 dApp interfaces achieving 99.9% swap execution reliability and zero-slippage routing.",
    "Built headless web architectures delivering sub-25ms global TTFB across 40+ edge regions on Next.js 16.",
    "Crafted client-side developer tooling in Rust and WebAssembly, enabling 100% offline smart contract simulation.",
    "Based in Indonesia (UTC+7) · Available for high-impact web engineering, Web3 protocols, and advisory roles in 2026.",
  ];

  return (
    <section id="about" className="bg-white py-14 sm:py-20 md:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* Left Column: Sticky Label matching bouayaben.com .about-sticky */}
            <div className="lg:col-span-3 lg:sticky lg:top-28">
              <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] font-semibold pb-4 lg:pb-0 border-b lg:border-none border-[#17171c]">
                About
              </h2>
            </div>

            {/* Right Column: Lede, Body, Capabilities, Recognition */}
            <div className="lg:col-span-9 space-y-8 sm:space-y-10 md:space-y-12">
              {/* Lede */}
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#17171c] leading-[1.25] tracking-tight">
                I’m a web developer and Web3 enthusiast building high-performance web applications,
                decentralized protocol frontends, and developer tooling.
              </p>

              {/* Body */}
              <p className="text-sm sm:text-base md:text-lg text-[#616161] font-sans leading-relaxed max-w-3xl">
                Operating across Indonesia (UTC+7) and collaborating with engineering teams globally.
                I focus on building resilient modern web applications, reactive Web3 interfaces with sub-second
                RPC latency, and zero-overhead developer tools that elevate engineering velocity.
              </p>

              {/* Capabilities List matching bouayaben.com .about-capabilities */}
              <div className="pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-3 sm:mb-4">
                  CORE CAPABILITIES
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="font-mono text-[11px] sm:text-xs bg-[#eeece7] hover:bg-[#17171c] hover:text-white text-[#212121] px-3.5 py-1.5 rounded-[30px] border border-[#d9d9dd] hover:border-[#17171c] hover:scale-105 active:scale-95 transition-all duration-200 cursor-default shadow-xs select-none"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recognition & Notes matching bouayaben.com .about-notes */}
              <div className="pt-5 sm:pt-6 border-t border-[#e5e7eb]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-3 sm:mb-4">
                  RECOGNITION &amp; INVARIANTS
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-base text-[#212121] font-sans">
                  {recognition.map((item, idx) => (
                    <li
                      key={idx}
                      className="group flex items-start gap-2.5 sm:gap-3 p-2 -mx-2 rounded-[10px] hover:bg-[#faf9f6] transition-all duration-200"
                    >
                      <span className="font-mono text-[11px] sm:text-xs text-[#93939f] group-hover:text-[#1863dc] mt-0.5 sm:mt-1 flex-shrink-0 transition-colors duration-200">
                        {"// 0" + (idx + 1)}
                      </span>
                      <span className="leading-relaxed group-hover:text-[#17171c] transition-colors duration-200">
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
