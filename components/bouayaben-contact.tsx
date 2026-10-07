"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function BouayabenContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("theodhore76@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-white py-14 sm:py-20 md:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Head matching bouayaben.com */}
          <div className="pb-5 sm:pb-6 border-b border-[#17171c]">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] font-semibold">
              Contact
            </h2>
          </div>

          {/* Contact Content Grid */}
          <div className="pt-8 sm:pt-12 md:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            {/* Big Editorial CTA */}
            <div className="lg:col-span-8">
              <p className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#17171c] tracking-tight leading-[1.1]">
                Let’s build something extraordinary together.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#616161] font-sans">
                Available for modern web platforms, Web3 protocols, developer tooling, and select 2026 engineering roles.
              </p>
            </div>

            {/* Links & 1-Click Copy */}
            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-start lg:items-end gap-4">
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 bg-[#17171c] hover:bg-black text-white text-xs font-medium px-5 py-3.5 sm:py-3 rounded-[32px] transition-all active:scale-95 shadow-none w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>theodhore76@gmail.com (Copied!)</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>theodhore76@gmail.com</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center sm:justify-start lg:justify-end gap-5 text-xs font-mono text-[#75758a]">
                <a
                  href="https://github.com/theodhorex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#17171c] transition-colors inline-flex items-center gap-1 py-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#17171c] transition-colors inline-flex items-center gap-1 py-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
