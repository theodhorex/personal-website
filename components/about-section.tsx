"use client";

import { JourneyScene } from "@/components/journey/journey-scene";

/**
 * Mounted by app/page.tsx inside the "about" Scene (px-0 py-0 justify-start):
 * the journey manages its own ~500svh height and padding. Do not set the
 * scene id here — Scene owns it.
 */
export function AboutSection() {
  return <JourneyScene />;
}
