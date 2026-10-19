"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

import { cn } from "@/lib/utils";

interface LetsWorkTogetherProps {
  email: string;
  status?: string;
  description?: string;
  className?: string;
}

export function LetsWorkTogether({
  email,
  status = "Available for projects",
  description = "Have a project in mind? I'd love to hear about it. Let's create something exceptional together.",
  className,
}: LetsWorkTogetherProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const headingId = useId();
  const panelId = useId();
  const reduce = useReducedMotion();
  const mailto = `mailto:${email}`;

  // Reveal the call to action once the heading has animated away.
  useEffect(() => {
    if (!isClicked) return;
    const id = window.setTimeout(() => setShowSuccess(true), 500);
    return () => window.clearTimeout(id);
  }, [isClicked]);

  // The trigger disappears on click, so hand focus to the revealed link.
  useEffect(() => {
    if (showSuccess) ctaRef.current?.focus({ preventScroll: true });
  }, [showSuccess]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24 motion-reduce:**:animate-none motion-reduce:**:transition-none",
        className,
      )}
    >
      <h2 id={headingId} className="sr-only">
        Get in touch
      </h2>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />

      <motion.div
        className="relative flex flex-col items-center gap-12"
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          id={panelId}
          inert={!showSuccess}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Perfect
            </span>
            <h3
              className="text-3xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-4xl"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let&apos;s talk
            </h3>
          </div>

          <a
            ref={ctaRef}
            href={mailto}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onFocus={(e) => {
              if (e.currentTarget.matches(":focus-visible")) {
                setIsButtonHovered(true);
              }
            }}
            onBlur={() => setIsButtonHovered(false)}
            className="group relative flex cursor-pointer items-center gap-4 outline-none transition-all duration-500"
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            <span
              className="block h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />

            <span
              className="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50 sm:px-8 sm:py-4"
              style={{
                borderColor: isButtonHovered
                  ? "var(--foreground)"
                  : "var(--border)",
                backgroundColor: isButtonHovered
                  ? "var(--foreground)"
                  : "transparent",
                boxShadow: isButtonHovered
                  ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)"
                  : "none",
              }}
            >
              <Mail
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered
                    ? "var(--background)"
                    : "var(--foreground)",
                }}
              />
              <span
                className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base"
                style={{
                  color: isButtonHovered
                    ? "var(--background)"
                    : "var(--foreground)",
                }}
              >
                Send an email
              </span>
              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered
                    ? "var(--background)"
                    : "var(--foreground)",
                  transform: isButtonHovered
                    ? "translate(3px, -3px) scale(1.1)"
                    : "translate(0, 0) scale(1)",
                }}
              />
            </span>

            <span
              className="block h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />
          </a>

          <span
            className="text-xs tracking-widest text-muted-foreground/60 transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            {email}
          </span>
        </div>

        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {status}
          </span>
        </div>

        <button
          type="button"
          aria-expanded={isClicked}
          aria-controls={panelId}
          inert={isClicked}
          onClick={() => setIsClicked(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={(e) => {
            if (e.currentTarget.matches(":focus-visible")) setIsHovered(true);
          }}
          onBlur={() => setIsHovered(false)}
          className="group relative cursor-pointer outline-none"
          style={{ pointerEvents: isClicked ? "none" : "auto" }}
        >
          <span className="flex flex-col items-center gap-6">
            <span
              className="relative block text-center text-5xl font-light tracking-tight text-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked
                  ? "translateY(-40px) scale(0.95)"
                  : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform:
                      isHovered && !isClicked
                        ? "translateY(-8%)"
                        : "translateY(0)",
                  }}
                >
                  Let&apos;s work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform delay-75 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform:
                      isHovered && !isClicked
                        ? "translateY(-8%)"
                        : "translateY(0)",
                  }}
                >
                  <span className="text-muted-foreground/60">together</span>
                </span>
              </span>
            </span>

            <span className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <span
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50"
                style={{
                  borderColor:
                    isClicked || isHovered
                      ? "var(--foreground)"
                      : "var(--border)",
                  backgroundColor:
                    !isClicked && isHovered
                      ? "var(--foreground)"
                      : "transparent",
                  transform: isClicked
                    ? "scale(3)"
                    : isHovered
                      ? "scale(1.1)"
                      : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color:
                    isHovered && !isClicked
                      ? "var(--background)"
                      : "var(--foreground)",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </span>
          </span>

          <span className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <span
              className="block h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked
                  ? "scaleX(0) translateX(-20px)"
                  : isHovered
                    ? "scaleX(1.5)"
                    : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </span>
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <span
              className="block h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked
                  ? "scaleX(0) translateX(20px)"
                  : isHovered
                    ? "scaleX(1.5)"
                    : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </span>
        </button>

        <div
          inert={isClicked}
          className="mt-8 flex flex-col items-center gap-4 text-center transition-all delay-100 duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <a
            href={mailto}
            className="text-xs tracking-widest text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            {email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
