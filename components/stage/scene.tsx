import * as React from "react";
import { cn } from "@/lib/utils";

export interface SceneProps {
  id: string;
  index?: number;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
  /** Drop the default padding (hero / pinned scenes size themselves). */
  bare?: boolean;
}

export function Scene({
  id,
  index,
  kicker,
  children,
  className,
  bare,
}: SceneProps) {
  const kickerId = `${id}-kicker`;

  return (
    <section
      id={id}
      data-scene={id}
      data-scene-index={index}
      aria-labelledby={kicker ? kickerId : undefined}
      className={cn(
        "relative min-h-[100svh] w-full bg-bg bg-dots flex flex-col justify-center",
        !bare && "px-4 py-8 sm:px-6 sm:py-12 md:px-8",
        className,
      )}
    >
      {kicker && (
        <div className="mx-auto w-full max-w-5xl mb-4">
          <span
            id={kickerId}
            className="chip text-xs uppercase tracking-widest font-mono"
          >
            {kicker}
          </span>
        </div>
      )}
      {children}
    </section>
  );
}
