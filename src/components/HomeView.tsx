"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Background } from "@/components/Background";
import { Navigation, type TabId } from "@/components/Navigation";
import { SectionPanel } from "@/components/SectionPanel";
import { HeroIntro } from "@/components/scrapbook/HeroIntro";
import { ContactButton } from "@/components/scrapbook/ContactButton";
import { CompanySection } from "@/components/recruiter/CompanySection";
import { sections } from "@/lib/sections";
import type { RecruiterPage } from "@/lib/recruiter-pages";

type HomeViewProps = {
  /** Set on private recruiter pages to add the "Kareena at <company>" tab. */
  company?: RecruiterPage;
};

export function HomeView({ company }: HomeViewProps) {
  const [active, setActive] = useState<TabId>("about");
  const subtitle =
    active === "company" && company
      ? `Skills, fit & what I've learned about ${company.company}`
      : sections.find((s) => s.id === active)!.subtitle;

  return (
    <>
      <Background />
      <ContactButton />
      <main
        className={`relative mx-auto min-h-screen px-5 py-8 pb-24 sm:px-8 sm:py-12 sm:pb-28 ${
          active === "personal-life" ? "max-w-5xl" : "max-w-4xl"
        }`}
      >
        {/* Keep the header the same width when Life widens <main> for its board */}
        <div className="mx-auto max-w-[52rem]">
          <HeroIntro eyebrow={company ? `Hi ${company.company}, I'm` : undefined} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8"
          >
            <Navigation
              active={active}
              onChange={setActive}
              companyLabel={company && `Kareena at ${company.company}`}
            />
          </motion.div>

          <motion.p
            key={subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-5 text-center font-hand text-base text-[var(--color-muted)]"
          >
            🌻 {subtitle} 💫
          </motion.p>
        </div>

        <SectionPanel
          active={active}
          companySection={company && <CompanySection page={company} />}
        />

        <footer className="mt-14 text-center font-hand text-sm text-[var(--color-muted)]">
          Kareena Vijay Doda · {new Date().getFullYear()}
        </footer>
      </main>
    </>
  );
}
