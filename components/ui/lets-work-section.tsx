"use client";

import { Reveal } from "@/components/stage/reveal";
import { EmailActions } from "@/components/contact/email-actions";
import { ContactFooter } from "@/components/contact/footer";
import { SocialLinks } from "@/components/contact/social-links";
import { ContactTerminal } from "@/components/contact/terminal";
import { ContactTitle } from "@/components/contact/title";
import { cn } from "@/lib/utils";

interface LetsWorkTogetherProps {
  email: string;
  description?: string;
  className?: string;
}

/**
 * Final scene of the story: giant cursor-reactive title, magnetic mailto CTA
 * with copy feedback, a self-typing terminal, hairline social rows and the
 * closing footer. Mounted inside the "contact" Scene by app/page.tsx.
 */
export function LetsWorkTogether({
  email,
  description,
  className,
}: LetsWorkTogetherProps) {
  return (
    <div className={cn("mx-auto flex w-full max-w-5xl flex-col", className)}>
      <Reveal y={24}>
        <ContactTitle line1="Let's work" line2="together" />
      </Reveal>

      <Reveal delay={0.08} className="mt-4 md:mt-6" y={20}>
        <div className="grid gap-8 md:mt-2 md:grid-cols-12 md:gap-10">
          <div className="flex flex-col gap-4 md:col-span-7">
            {description && (
              <p className="max-w-[46ch] text-sm leading-relaxed text-muted">
                {description}
              </p>
            )}
            <EmailActions email={email} />
          </div>
          <div className="md:col-span-5">
            <ContactTerminal />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.14} y={20}>
        <SocialLinks className="mt-8 md:mt-10" />
      </Reveal>

      <Reveal delay={0.2} y={16}>
        <ContactFooter />
      </Reveal>
    </div>
  );
}
