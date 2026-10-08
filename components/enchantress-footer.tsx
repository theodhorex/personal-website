"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "./language-provider";

export function EnchantressFooter() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="landing-footer">
      <div className="footer-top">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="#" className="nav-logo group">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold shadow-2xs">
              TH
            </span>
            <span className="font-display tracking-tight text-zinc-900 dark:text-zinc-100">
              THEODHORE
            </span>
          </a>
          <p>{t("hero_lede")}</p>
        </div>

        {/* Navigation Column */}
        <div className="footer-column">
          <p className="footer-title">{t("nav_work")}</p>
          <ul>
            <li>
              <a href="#work">{t("nav_work")}</a>
            </li>
            <li>
              <a href="#architecture">{t("nav_architecture")}</a>
            </li>
            <li>
              <a href="#about">{t("nav_about")}</a>
            </li>
            <li>
              <a href="#contact">{t("nav_contact")}</a>
            </li>
          </ul>
        </div>

        {/* Built With Column */}
        <div className="footer-column">
          <p className="footer-title">Engineered With</p>
          <ul>
            <li>
              <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                Next.js 16 & Turbopack
              </a>
            </li>
            <li>
              <a href="https://monad.xyz" target="_blank" rel="noreferrer">
                Monad EVM
              </a>
            </li>
            <li>
              <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
                TypeScript
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
                Tailwind CSS v4
              </a>
            </li>
            <li>
              <a href="https://sanity.io" target="_blank" rel="noreferrer">
                Sanity CMS
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="flex items-center gap-3">
          <span>© 2026 Theodhore</span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-emerald-500 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("footer_status")}</span>
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-mono text-xs"
        >
          <span>{t("footer_top")}</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
