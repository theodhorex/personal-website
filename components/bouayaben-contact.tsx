"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "./language-provider";

export function BouayabenContact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("theodhore.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-white dark:bg-[#0e0e12] py-14 sm:py-20 md:py-28 border-b border-[#e5e7eb] dark:border-[#2e2e38] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Head matching bouayaben.com */}
          <div className="pb-5 sm:pb-6 border-b border-[#17171c] dark:border-[#2e2e38] transition-colors">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] dark:text-[#f4f4f7] font-semibold">
              {t("contact_section_title")}
            </h2>
          </div>

          {/* Contact Content Grid */}
          <div className="pt-8 sm:pt-12 md:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            {/* Big Editorial CTA */}
            <div className="lg:col-span-8">
              <p className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#17171c] dark:text-[#f4f4f7] tracking-tight leading-[1.1] transition-colors">
                {t("contact_cta")}
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#616161] dark:text-[#93939f] font-sans transition-colors">
                {t("contact_subtitle")}
              </p>
            </div>

            {/* Links & 1-Click Copy */}
            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-start lg:items-end gap-4">
              <button
                onClick={copyEmail}
                className="btn-pill-interactive inline-flex items-center justify-center gap-2.5 bg-[#17171c] dark:bg-white hover:bg-black dark:hover:bg-[#e4e4e8] text-white dark:text-[#0e0e12] text-xs font-medium px-5 py-3.5 sm:py-3 rounded-[32px] w-full sm:w-auto select-none group transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600 animate-bounce" />
                    <span className="text-emerald-300 dark:text-emerald-700">theodhore.dev@gmail.com ({t("contact_copied")})</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                    <span>theodhore.dev@gmail.com</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center sm:justify-start lg:justify-end gap-5 text-xs font-mono text-[#75758a] dark:text-[#93939f]">
                <a
                  href="https://github.com/theodhorex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:text-[#17171c] dark:hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 px-1 rounded-md"
                >
                  <GithubIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:text-[#17171c] dark:hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 px-1 rounded-md"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
