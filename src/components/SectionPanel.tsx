"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { SectionId } from "@/lib/sections";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PersonalLifeSection } from "@/components/sections/PersonalLifeSection";
import { GeekOutSection } from "@/components/sections/GeekOutSection";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { WashiTape } from "@/components/scrapbook/WashiTape";

const sectionComponents: Record<SectionId, React.ComponentType> = {
  about: AboutSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  "personal-life": PersonalLifeSection,
  "geek-out": GeekOutSection,
};

const sectionNoteColor: Record<SectionId, "white" | "yellow" | "pink"> = {
  about: "yellow",
  experience: "pink",
  projects: "white",
  "personal-life": "white",
  "geek-out": "yellow",
};

type SectionPanelProps = {
  active: SectionId;
};

export function SectionPanel({ active }: SectionPanelProps) {
  const Component = sectionComponents[active];
  const isPinterest = active === "personal-life";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20, rotate: isPinterest ? 0 : -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: -12, rotate: isPinterest ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {isPinterest ? (
          <div className="pin-board-shell relative z-10">
            <Component />
          </div>
        ) : (
          <>
            <WashiTape
              variant="pink-stripe"
              className="absolute -top-3 left-12 z-30 w-[4.5rem]"
              rotation={-6}
            />
            <WashiTape
              variant="white"
              className="absolute -top-3 right-14 z-30 w-14"
              rotation={5}
            />
            <StickyNote
              color={sectionNoteColor[active]}
              variant={active === "geek-out" ? "dashed" : "plain"}
              tape={false}
              className="relative z-10"
            >
              <Component />
            </StickyNote>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
