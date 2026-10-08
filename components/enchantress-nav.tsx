"use client";

import { useState } from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useTheme } from "./theme-provider";
import { LanguageToggle } from "./language-toggle";

export function EnchantressNav() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="landing-nav" aria-label="Main navigation">
      {/* Brand Logo & Monogram */}
      <a href="#" className="nav-logo group">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold transition-transform group-hover:scale-105 shadow-xs">
          TH
        </span>
        <span className="font-display tracking-tight text-[#18181b] dark:text-[#f0f0f5]">
          THEODHORE
        </span>
      </a>

      {/* Desktop Nav Links */}
      <ul className="nav-links hidden md:flex">
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

      {/* Right Actions: Theme Toggle, Language Toggle, CTA */}
      <div className="nav-actions">
        {/* Language Switcher */}
        <LanguageToggle />

        {/* Enchantress Sun/Moon Toggle Button */}
        <button
          type="button"
          onClick={(e) => toggleTheme(e)}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="flex h-8 w-15 shrink-0 cursor-pointer rounded-full p-1 transition-all duration-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#14141e] hover:border-zinc-300 dark:hover:border-zinc-700"
        >
          <span className="flex w-full items-center justify-between relative">
            <span
              className={`flex size-6 items-center justify-center rounded-full transition-transform duration-300 ${
                theme === "dark"
                  ? "translate-x-7 bg-zinc-800 text-amber-300"
                  : "translate-x-0 bg-zinc-200 text-zinc-800"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="size-3.5" />
              ) : (
                <Sun className="size-3.5" />
              )}
            </span>
          </span>
        </button>

        {/* CTA Launch/Contact Button */}
        <a href="#contact" className="btn-signup hidden sm:inline-flex">
          <span>{t("nav_contact")}</span>
          <span className="btn-arrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`menu-toggle md:hidden ${mobileOpen ? "active" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 p-6 md:hidden">
          <ul className="flex flex-col items-center gap-6 text-xl font-medium">
            <li>
              <a
                href="#work"
                onClick={() => setMobileOpen(false)}
                className="hover:text-amber-500 transition-colors"
              >
                {t("nav_work")}
              </a>
            </li>
            <li>
              <a
                href="#architecture"
                onClick={() => setMobileOpen(false)}
                className="hover:text-amber-500 transition-colors"
              >
                {t("nav_architecture")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="hover:text-amber-500 transition-colors"
              >
                {t("nav_about")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="hover:text-amber-500 transition-colors"
              >
                {t("nav_contact")}
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-4 w-full max-w-xs pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-signup w-full justify-center"
            >
              <span>{t("nav_contact")}</span>
              <span className="btn-arrow" aria-hidden="true">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
