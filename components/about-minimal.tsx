"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function AboutMinimal() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("theodhore76@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stack = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind v4",
    "Python",
    "Rust",
    "pgvector",
    "Three.js / WebGL",
    "Redis Edge",
    "Docker",
    "Zod",
    "Turbopack",
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-20 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Bio */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-2.5 py-1 rounded-[4px] border border-[#d9d9dd] inline-block mb-1">
                ABOUT &amp; BACKGROUND
              </span>

              <h2 className="section-display text-2xl sm:text-4xl font-normal text-[#17171c]">
                Crafting software from first principles with raw speed and clean aesthetics.
              </h2>

              <p className="text-sm sm:text-base text-[#616161] font-sans leading-relaxed">
                I’m Theodore (Theo) — a full-stack engineer and AI systems builder based in Indonesia (UTC+7).
                I build end-to-end: from interactive client interfaces with custom WebGL shaders to
                autonomous multi-agent loops and streaming edge backends.
              </p>

              <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#003c33]">
                <span className="w-2 h-2 rounded-full bg-[#003c33] animate-pulse"></span>
                <span>Open for select engineering roles &amp; advisory in 2026</span>
              </div>
            </div>

            {/* Right: Stack & Direct Connect */}
            <div className="lg:col-span-6 space-y-6">
              {/* Stack */}
              <div className="p-6 rounded-[22px] bg-[#eeece7] border border-[#d9d9dd]">
                <div className="font-mono text-xs uppercase tracking-wider text-[#75758a] mb-3">
                  PRIMARY STACK &amp; TOOLS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs bg-white text-[#212121] px-2.5 py-1 rounded-[6px] border border-[#d9d9dd] shadow-2xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Connect Actions */}
              <div id="contact" className="p-6 rounded-[22px] bg-[#17171c] text-white border border-[#2e2e38] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs text-[#edfce9] uppercase tracking-wider mb-1">
                    LET&apos;S CONNECT
                  </div>
                  <div className="text-sm text-zinc-300">
                    Have a project or want to collaborate?
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 bg-white text-[#17171c] hover:bg-zinc-200 text-xs font-medium px-4 py-2 rounded-[32px] transition-all active:scale-95 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email Me</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://github.com/theodhorex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
