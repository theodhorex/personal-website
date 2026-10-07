"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#17171c] dark:bg-[#08080b] text-white py-8 sm:py-10 border-t border-[#2e2e38] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 font-mono text-xs text-[#93939f] text-center sm:text-left">
        {/* Left: Identity */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-white font-medium">THEODHORE</span>
          <span>•</span>
          <span>© 2026</span>
          <span>•</span>
          <span>UTC+7</span>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2 text-[#edfce9] dark:text-[#a3f3cb] text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#edfce9] dark:bg-[#a3f3cb] animate-pulse"></span>
          <span>{t("footer_status")}</span>
        </div>

        {/* Right: Socials & Top */}
        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
          <a
            href="https://github.com/theodhorex"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-underline text-[#93939f] hover:text-white transition-colors py-1"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-underline text-[#93939f] hover:text-white transition-colors py-1"
          >
            LinkedIn
          </a>
          <a
            href="mailto:theodhore.dev@gmail.com"
            className="link-hover-underline text-[#93939f] hover:text-white transition-colors py-1"
          >
            Email
          </a>
          <a
            href="#"
            className="group hover:text-white transition-colors flex items-center gap-1 py-1"
            aria-label="Back to top"
          >
            <span>{t("footer_top")}</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}
