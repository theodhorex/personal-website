"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const Timeline = ({
  data,
  heading,
  description,
  className,
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const reduce = useReducedMotion();

  // Keep the track in sync with the content height as it reflows.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : height],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full font-sans text-ink md:px-10", className)}
      ref={containerRef}
    >
      {(heading || description) && (
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          {heading && (
            <h2 className="mb-4 max-w-4xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="max-w-md text-sm text-muted md:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 lg:gap-10 lg:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start lg:w-full lg:max-w-sm lg:flex-row">
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-bg md:left-3">
                <div className="h-4 w-4 rounded-full border-[3px] border-ink bg-tint-sun" />
              </div>
              <h3 className="hidden font-display text-5xl font-extrabold uppercase text-muted lg:block lg:pl-20">
                {item.title}
              </h3>
            </div>

            <motion.div
              className="relative w-full pl-14 pr-4 md:pl-20 lg:pl-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="mb-4 block text-left font-display text-2xl font-extrabold uppercase text-muted md:text-3xl lg:hidden">
                {item.title}
              </h3>
              {item.content}
            </motion.div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[19px] top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,transparent,var(--border)_10%,var(--border)_90%,transparent)] md:left-8"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-transparent via-ink to-ink"
          />
        </div>
      </div>
    </div>
  );
};
