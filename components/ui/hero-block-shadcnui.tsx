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

export function HeroBlock() {
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
      <header className="hero-stagger-1 z-10 flex shrink-0 items-center justify-between border-b border-line/70 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-bg">
        <div className="flex items-center gap-3 sm:gap-4">
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

          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs">
            <span className="font-semibold text-ink tracking-wider">THEODHORE</span>
            <span className="text-line" aria-hidden="true">
              /
            </span>
            {/* Status Chip: Open to work with single accent signal */}
            <span className="inline-flex items-center gap-1.5 text-muted">
              <span
                className="size-1.5 rounded-full bg-accent animate-pulse"
                aria-hidden="true"
              />
              <span>Open to work</span>
            </span>
          </div>
        </div>

        {/* Social Navigation */}
        <nav aria-label="Social profiles and contact" className="flex items-center gap-1.5 sm:gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex size-7 sm:size-8 items-center justify-center rounded-xs border border-line bg-panel text-muted transition-[border-color,color,transform] hover:border-ink hover:text-ink hover:-translate-y-px active:translate-y-px focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Icon className="size-3.5 sm:size-4" />
            </a>
          ))}
        </nav>
      </header>

      {/* Main Pitch Stage (Asymmetric, Single Axis) */}
      <div className="z-10 flex flex-1 flex-col justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-4">
        <div className="mx-auto w-full max-w-6xl">
              {/* Single Semantic H1 with Screen Reader Announcement */}
              <h1 className="hero-stagger-2 mb-3 sm:mb-5">
                <span className="sr-only">
                  Theodhore — Web Developer &amp; Web3 Engineer
                </span>

                <div
                  aria-hidden="true"
                  className="hero-title-responsive font-display text-[min(12vw,20svh)] sm:text-[min(9.5vw,20svh)] font-black uppercase tracking-tight leading-[0.9] text-ink"
                >
                  <span className="block">THEODHORE</span>
                  <span className="block mt-0.5 sm:mt-1 text-muted/90 text-[0.34em] font-extrabold tracking-normal">
                    <RotatingRole />
                  </span>
                </div>
              </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, CTAs */}
            <div className="md:col-span-7 flex flex-col justify-center">
              {/* Subtitle / Intro Description (Exact preserved copy) */}
              <p className="hero-stagger-3 mb-4 sm:mb-5 max-w-xl font-sans text-xs sm:text-sm md:text-base leading-relaxed text-muted">
                Hi, I&apos;m <span className="font-semibold text-ink">Theodhore</span>.
                I build high-performance web applications, decentralized protocols,
                and developer tooling with clean code and exceptional user
                experiences.
              </p>

              {/* Action Buttons */}
              <div className="hero-stagger-4 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <Button
                  size="default"
                  className="font-mono text-xs uppercase tracking-wider h-9 sm:h-10 px-4 sm:px-5"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="size-3.5 sm:size-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  className="font-mono text-xs uppercase tracking-wider h-9 sm:h-10 px-4 sm:px-5"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                    <ArrowUpRight className="size-3.5 sm:size-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: FIG. 01 Technical SVG Illustration */}
            <div className="hero-stagger-5 md:col-span-5 flex items-center justify-center">
              <HeroDiagram className="max-w-[420px] md:max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Deck: Story Scroll Prompt + Telemetry Ticker */}
      <footer className="z-10 flex shrink-0 flex-col">
        {/* Story Scroll Prompt */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-1.5 font-mono text-[10px] sm:text-[11px] text-muted">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="text-accent" aria-hidden="true">
              [ 02 / JOURNEY ]
            </span>
            <span className="tracking-wider uppercase">Scroll to enter the story</span>
            <ArrowDown className="size-3 text-accent hero-scroll-arrow transition-transform group-hover:translate-y-0.5" />
          </a>
          <span className="hidden sm:inline text-muted/60">SCENE 01 / 04</span>
        </div>

        {/* Real Data Marquee Ticker */}
        <HeroTicker />
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
        @keyframes heroArrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        @keyframes heroWdthPulse {
          0%, 100% { font-variation-settings: "wdth" 95; }
          50% { font-variation-settings: "wdth" 125; }
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

        .hero-scroll-arrow {
          animation: heroArrowBounce 1.8s ease-in-out infinite;
        }

        @media (pointer: coarse) {
          .hero-title-responsive {
            animation: heroWdthPulse 5s ease-in-out infinite;
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
      `}</style>
    </div>
  );
}
