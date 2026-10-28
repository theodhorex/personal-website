"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { usePointerVars } from "@/components/stage/use-pointer";
import { RotatingRole } from "@/components/hero/rotating-role";
import { HeroDiagram } from "@/components/hero/hero-diagram";
import { HeroTicker } from "@/components/hero/hero-ticker";
import { HeroCursor } from "@/components/hero/hero-cursor";

type IconProps = SVGProps<SVGSVGElement>;

const Github = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const Linkedin = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const socials: {
  icon: ComponentType<IconProps>;
  href: string;
  label: string;
}[] = [
  { icon: Github, href: "https://github.com/theodhorex", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/theodhore", label: "LinkedIn" },
  { icon: Mail, href: "mailto:theodhore.dev@gmail.com", label: "Email" },
];

export function HeroBlock({ projectCount }: { projectCount: number }) {
  const heroRef = useRef<HTMLDivElement>(null);
  usePointerVars(heroRef);

  return (
    <div
      ref={heroRef}
      data-hero="true"
      className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-bg text-ink select-none"
    >
      {/* 10px Hairline Cursor Follower */}
      <HeroCursor />

      {/* Top Identity & Telemetry Bar */}
      <header className="hero-stagger-1 z-10 flex shrink-0 items-center justify-between border-b border-line/70 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 [@media(max-height:720px)]:py-1.5 bg-bg pt-[calc(0.625rem+env(safe-area-inset-top,0px))]">
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
          {/* Portrait Photo in Precision Hairline Frame */}
          <div className="relative size-8 sm:size-9 shrink-0 overflow-hidden rounded-xs border border-line bg-bg-2">
            <Image
              src="https://github.com/theodhorex.png"
              alt="Theodhore portrait"
              width={36}
              height={36}
              unoptimized
              className="size-full object-cover grayscale contrast-125"
            />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs min-w-0 truncate">
            <span className="font-semibold text-ink tracking-wider shrink-0">THEODHORE</span>
            <span className="text-line shrink-0" aria-hidden="true">
              /
            </span>
            {/* Status Chip: Open to work with single accent signal */}
            <span className="inline-flex items-center gap-1.5 text-muted shrink-0">
              <span
                className="size-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>Open to work</span>
            </span>
          </div>
        </div>

        {/* Social Navigation */}
        <nav aria-label="Social profiles and contact" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="relative flex size-8 sm:size-8 items-center justify-center rounded-xs border border-line bg-panel text-muted transition-[border-color,color,transform] hover:border-ink hover:text-ink hover:-translate-y-px active:translate-y-px focus-visible:outline-2 focus-visible:outline-accent after:absolute after:-inset-1.5 sm:after:hidden touch-manipulation"
            >
              <Icon className="size-3.5 sm:size-4" />
            </a>
          ))}
        </nav>
      </header>

      {/* Main Pitch Stage (Asymmetric, Single Axis) */}
      <div className="z-10 flex flex-1 flex-col justify-between sm:justify-center px-4 sm:px-6 md:px-8 py-3.5 sm:py-3 [@media(max-height:740px)]:py-2 [@media(max-height:720px)]:py-1.5 min-h-0">
        <div className="mx-auto w-full max-w-6xl flex flex-1 flex-col justify-between sm:block sm:flex-initial min-h-0">
          {/* Single Semantic H1 with Screen Reader Announcement */}
          <h1 className="hero-stagger-2 mb-3 min-[400px]:mb-4 sm:mb-4 [@media(max-height:740px)]:mb-2 [@media(max-height:720px)]:mb-2 shrink-0">
            <span className="sr-only">
              Theodhore — Full-Stack Web Developer
            </span>

            <span
              aria-hidden="true"
              className="hero-title-responsive block font-display text-[clamp(2.75rem,15.8vw,4.35rem)] sm:text-[clamp(2.75rem,8vw,5.25rem)] lg:text-[clamp(3.5rem,7.5vw,6.5rem)] [@media(max-height:720px)]:text-[clamp(2rem,5vw,3.6rem)] [@media(max-height:640px)]:text-[clamp(1.85rem,4.5vw,3.15rem)] font-black uppercase tracking-tight leading-[0.88] sm:leading-[0.9] text-ink"
            >
              <span className="block">THEODHORE</span>
              <span className="block mt-1 sm:mt-1 text-muted/90 text-[clamp(1.05rem,4.5vw,1.35rem)] sm:text-[0.34em] font-extrabold tracking-normal">
                <RotatingRole />
              </span>
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 min-[400px]:gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center [@media(max-height:740px)]:gap-2.5 [@media(max-height:720px)]:gap-3 flex-1 flex flex-col justify-between sm:grid sm:grid-cols-1 lg:grid-cols-12 sm:flex-initial min-h-0">
            {/* Left Column: Heading, Subtitle, CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center shrink-0 w-full">
              {/* Subtitle / Intro Description (Exact preserved copy) */}
              <p className="hero-stagger-3 mb-3.5 min-[400px]:mb-4 sm:mb-4 [@media(max-height:740px)]:mb-2 [@media(max-height:720px)]:mb-2.5 max-w-xl font-sans text-[15px] min-[390px]:text-base sm:text-sm md:text-base [@media(max-height:720px)]:text-xs [@media(max-height:720px)]:leading-relaxed leading-relaxed text-muted">
                Hi, I&apos;m <span className="font-semibold text-ink">Theodhore</span>.
                I build fast, accessible web applications and developer tooling, and
                bring the same care to Web3 interfaces when a project needs it,
                with clean code and interfaces people can actually use.
              </p>

              {/* Action Buttons */}
              <div className="hero-stagger-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full">
                <Button
                  size="default"
                  className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider h-11 sm:h-10 px-4 sm:px-5 touch-manipulation [@media(max-height:720px)]:h-9"
                  asChild
                >
                  <a href="#contact" className="min-h-[44px] sm:min-h-[40px] [@media(max-height:720px)]:min-h-[36px] flex items-center justify-center">
                    <Mail className="size-3.5 sm:size-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider h-11 sm:h-10 px-4 sm:px-5 touch-manipulation [@media(max-height:720px)]:h-9"
                  asChild
                >
                  <a href="#projects" className="min-h-[44px] sm:min-h-[40px] [@media(max-height:720px)]:min-h-[36px] flex items-center justify-center">
                    View Projects
                    <ArrowUpRight className="size-3.5 sm:size-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: FIG. 01 Technical SVG Illustration */}
            <div className="hero-stagger-5 lg:col-span-5 flex items-center justify-center w-full flex-1 sm:flex-initial min-h-0">
              <HeroDiagram className="w-full sm:max-w-[420px] md:max-w-[460px] lg:max-w-none lg:[@media(max-height:720px)]:max-w-[380px] h-full sm:h-auto flex flex-col justify-end sm:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Deck: Story Scroll Prompt + Telemetry Ticker */}
      <footer className="z-10 flex shrink-0 flex-col pb-[env(safe-area-inset-bottom,0px)]">
        {/* Story Scroll Prompt */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-1.5 [@media(max-height:720px)]:py-1 font-mono text-[10px] sm:text-[11px] text-muted">
          <a
            href="#about"
            className="group inline-flex min-h-[44px] sm:min-h-0 py-1 sm:py-0 items-center gap-2 hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="text-accent" aria-hidden="true">
              [ 02 / JOURNEY ]
            </span>
            <span className="tracking-wider uppercase">Scroll to enter the story</span>
            <ArrowDown className="size-3 text-accent hero-scroll-arrow transition-transform group-hover:translate-y-0.5" />
          </a>
          <span className="hidden sm:inline text-muted">SCENE 01 / 04</span>
        </div>

        {/* Real Data Marquee Ticker */}
        <HeroTicker projectCount={projectCount} />
      </footer>

      {/* Component Styles & Hardware Accelerated Keyframes */}
      <style>{`
        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-stagger-1 { animation: heroEntrance 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.04s backwards; }
        .hero-stagger-2 { animation: heroEntrance 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.12s backwards; }
        .hero-stagger-3 { animation: heroEntrance 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.20s backwards; }
        .hero-stagger-4 { animation: heroEntrance 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.28s backwards; }
        .hero-stagger-5 { animation: heroEntrance 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.36s backwards; }

        .hero-title-responsive {
          font-variation-settings: "wdth" calc(100 + var(--px, 0) * 22);
          transform: translate3d(
            calc(var(--px, 0) * 8px),
            calc(var(--py, 0) * 4px),
            0
          );
          transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        @media (max-width: 639px) {
          .hero-title-responsive {
            font-variation-settings: "wdth" 90;
            letter-spacing: -0.03em;
            transform: none !important;
          }
        }

        @media (pointer: coarse) {
          .hero-title-responsive {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-stagger-1,
          .hero-stagger-2,
          .hero-stagger-3,
          .hero-stagger-4,
          .hero-stagger-5,
          .hero-scroll-arrow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-title-responsive {
            animation: none !important;
            font-variation-settings: "wdth" 100 !important;
            transform: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) and (max-width: 639px) {
          .hero-title-responsive {
            font-variation-settings: "wdth" 90 !important;
          }
        }
      `}</style>
    </div>
  );
}
