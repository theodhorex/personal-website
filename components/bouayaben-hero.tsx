"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ParticleCanvas } from "./particle-canvas";
import { Reveal } from "./reveal";
import { useLanguage } from "./language-provider";

export function BouayabenHero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white dark:bg-[#0e0e12] pt-14 sm:pt-20 md:pt-28 pb-14 sm:pb-20 md:pb-24 border-b border-[#e5e7eb] dark:border-[#2e2e38] overflow-hidden transition-colors duration-300">
      {/* Interactive Vector Particle Field Canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Eyebrow / Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#75758a] dark:text-[#a0a0b2] bg-[#eeece7] dark:bg-[#1a1a24] px-3 py-1 rounded-[4px] border border-[#d9d9dd] dark:border-[#2e2e38] inline-flex items-center gap-1.5 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1863dc] dark:bg-[#3b82f6] flex-shrink-0"></span>
              <span>{t("hero_eyebrow_badge")}</span>
            </span>
            <span className="text-[11px] sm:text-xs text-[#93939f] dark:text-[#78788a] font-mono hidden sm:inline">
              {t("hero_eyebrow_tag")}
            </span>
          </div>

          {/* Monumental Display Headline matching bouayaben rhythm */}
          <div className="max-w-5xl">
            <h1 className="hero-display text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] text-[#17171c] dark:text-[#f4f4f7] font-normal tracking-[-0.035em] leading-[1.06] sm:leading-[1.02] break-words transition-colors">
              {t("hero_headline")}
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#616161] dark:text-[#93939f] max-w-2xl font-sans leading-relaxed transition-colors">
              {t("hero_lede")}
            </p>

            {/* Actions Bar */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              <a
                href="#work"
                className="btn-pill-interactive inline-flex items-center justify-center gap-2.5 bg-[#17171c] dark:bg-white hover:bg-black dark:hover:bg-[#e4e4e8] text-white dark:text-[#0e0e12] text-xs sm:text-sm font-medium px-6 py-3.5 sm:py-3 rounded-[32px] group transition-all"
              >
                <span>{t("hero_cta_work")}</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200" />
              </a>

              <a
                href="#about"
                className="link-hover-underline group inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-[#212121] dark:text-[#e4e4e8] hover:text-[#1863dc] dark:hover:text-[#3b82f6] transition-colors py-2 sm:py-0"
              >
                <span>{t("hero_cta_about")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Foot Stats / Invariants Bar */}
          <div className="mt-12 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-[#e5e7eb] dark:border-[#2e2e38] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 font-mono text-xs transition-colors">
            <div className="group p-4 sm:p-4 rounded-[14px] bg-[#fbfbfa] sm:bg-[#fafaf8]/80 dark:bg-[#16161f] hover:bg-white dark:hover:bg-[#1d1d28] border border-[#e5e7eb] dark:border-[#2e2e38] hover:border-[#1863dc]/40 dark:hover:border-[#3b82f6]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default">
              <div className="text-[#93939f] dark:text-[#78788a] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] text-[10px] sm:text-[11px] uppercase mb-1 transition-colors">
                {t("hero_stat_1_title")}
              </div>
              <div className="text-[#17171c] dark:text-[#f4f4f7] font-medium text-xs sm:text-[13px] leading-relaxed transition-colors">
                {t("hero_stat_1_desc")}
              </div>
            </div>
            <div className="group p-4 sm:p-4 rounded-[14px] bg-[#fbfbfa] sm:bg-[#fafaf8]/80 dark:bg-[#16161f] hover:bg-white dark:hover:bg-[#1d1d28] border border-[#e5e7eb] dark:border-[#2e2e38] hover:border-[#1863dc]/40 dark:hover:border-[#3b82f6]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default">
              <div className="text-[#93939f] dark:text-[#78788a] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] text-[10px] sm:text-[11px] uppercase mb-1 transition-colors">
                {t("hero_stat_2_title")}
              </div>
              <div className="text-[#17171c] dark:text-[#f4f4f7] font-medium text-xs sm:text-[13px] leading-relaxed transition-colors">
                {t("hero_stat_2_desc")}
              </div>
            </div>
            <div className="group p-4 sm:p-4 rounded-[14px] bg-[#fbfbfa] sm:bg-[#fafaf8]/80 dark:bg-[#16161f] hover:bg-white dark:hover:bg-[#1d1d28] border border-[#e5e7eb] dark:border-[#2e2e38] hover:border-[#1863dc]/40 dark:hover:border-[#3b82f6]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default">
              <div className="text-[#93939f] dark:text-[#78788a] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] text-[10px] sm:text-[11px] uppercase mb-1 transition-colors">
                {t("hero_stat_3_title")}
              </div>
              <div className="text-[#17171c] dark:text-[#f4f4f7] font-medium text-xs sm:text-[13px] leading-relaxed transition-colors">
                {t("hero_stat_3_desc")}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
