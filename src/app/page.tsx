"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Background } from "@/components/Background";
import { Navigation } from "@/components/Navigation";
import { SectionPanel } from "@/components/SectionPanel";
import { HeroIntro } from "@/components/scrapbook/HeroIntro";
import { ContactButton } from "@/components/scrapbook/ContactButton";
import { sections, type SectionId } from "@/lib/sections";

export default function Home() {
  const [active, setActive] = useState<SectionId>("about");
  const current = sections.find((s) => s.id === active)!;

  return (
    <>
      <Background />
      <ContactButton />
      <main
        className={`relative mx-auto min-h-screen px-5 py-8 pb-24 sm:px-8 sm:py-12 sm:pb-28 ${
          active === "personal-life" ? "max-w-5xl" : "max-w-4xl"
        }`}
      >
        <HeroIntro />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <Navigation active={active} onChange={setActive} />
        </motion.div>

        <motion.p
          key={current.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-5 text-center font-hand text-base text-[var(--color-muted)]"
        >
          🌻 {current.subtitle} 💫
        </motion.p>

        <SectionPanel active={active} />

        <footer className="mt-14 text-center font-hand text-sm text-[var(--color-muted)]">
          Kareena Vijay Doda · {new Date().getFullYear()}
        </footer>
      </main>
    </>
  );
}
