"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { useLanguage } from "./language-provider";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./reveal";

export function EnchantressClosing() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("theodhore.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="closing-scene" aria-labelledby="closing-heading">
      {/* Background God Rays and Atmospheric Vignette */}
      <div className="closing-backdrop" aria-hidden="true">
        <div className="closing-rays" aria-hidden="true" />
        <div className="closing-vignette" aria-hidden="true" />
      </div>

      <div className="closing-content">
        <Reveal delay={60} distance={18}>
          {/* Glowing Brand Mark */}
          <span className="closing-mark">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold shadow-xs">
              TH
            </span>
            <span className="font-display tracking-tight text-white dark:text-white">
              THEODHORE
            </span>
          </span>
        </Reveal>

        {/* Monumental Closing Heading */}
        <Reveal delay={160} distance={22}>
          <h2 id="closing-heading" className="closing-heading">
            {t("closing_heading_start")}{" "}
            <strong>{t("closing_heading_accent")}</strong>
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={240} distance={18}>
          <p className="closing-sub">{t("contact_subtitle")}</p>
        </Reveal>

        {/* Closing Actions: 1-Click Copy & Social Links */}
        <Reveal delay={320} distance={16}>
          <div className="closing-actions">
            <button
              type="button"
              onClick={copyEmail}
              className="btn-cta group cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                  <span>theodhore.dev@gmail.com ({t("contact_copied")})</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>theodhore.dev@gmail.com</span>
                  <span className="btn-arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </>
              )}
            </button>

            <a
              href="https://github.com/theodhorex"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-login group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-login group"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={400} distance={14}>
          <p className="closing-foot">{t("closing_foot")}</p>
        </Reveal>
      </div>
    </section>
  );
}
