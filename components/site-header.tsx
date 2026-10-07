"use client";

import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0e0e12]/90 backdrop-blur-md border-b border-[#e5e7eb] dark:border-[#2e2e38] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Name & Role */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <a
            href="#"
            className="font-display font-semibold tracking-tight text-lg sm:text-xl text-[#17171c] dark:text-white hover:text-black dark:hover:text-neutral-200 transition-colors flex-shrink-0"
          >
            THEODHORE
          </a>
          <span className="text-[#93939f] text-xs hidden md:inline">/</span>
          <span className="font-mono text-xs text-[#75758a] dark:text-[#93939f] uppercase tracking-wider hidden md:inline truncate">
            {t("role_subtitle")}
          </span>
        </div>

        {/* Right Section: Navigation & Controls */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
          {/* Navigation */}
          <nav className="flex items-center gap-3 sm:gap-5 md:gap-6 text-xs font-mono uppercase tracking-wider text-[#75758a] dark:text-[#93939f] flex-shrink-0">
            <a
              href="#work"
              className="link-hover-underline hover:text-[#17171c] dark:hover:text-white transition-colors py-1.5 px-0.5 sm:px-1"
            >
              {t("nav_work")}
            </a>
            <a
              href="#about"
              className="link-hover-underline hover:text-[#17171c] dark:hover:text-white transition-colors py-1.5 px-0.5 sm:px-1"
            >
              {t("nav_about")}
            </a>
            <a
              href="#contact"
              className="link-hover-underline hover:text-[#17171c] dark:hover:text-white transition-colors py-1.5 px-0.5 sm:px-1"
            >
              {t("nav_contact")}
            </a>

            {/* Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-[30px] border border-[#d9d9dd] dark:border-[#1d4432] bg-[#edfce9] dark:bg-[#0c2a20] text-[#003c33] dark:text-[#a3f3cb] text-[11px] hover:border-[#b0f5a7] dark:hover:border-[#2f6f52] hover:bg-[#ddfbd9] transition-all duration-200 cursor-default select-none shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003c33] dark:bg-[#a3f3cb]"></span>
              </span>
              <span>{t("available_status")}</span>
            </div>
          </nav>

          {/* Controls: Language Toggle & Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 border-l border-neutral-200 dark:border-[#2e2e38] pl-2 sm:pl-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
