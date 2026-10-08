"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 750,
  threshold = 0.1,
  distance = 24,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Check if already in viewport on mount / page reload
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 40);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
      }}
      className={`transition-all ${
        isVisible
          ? "opacity-100 blur-0"
          : "opacity-0 blur-[3px] pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
