"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { SectionId } from "@/lib/sections";
import type { TabId } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PersonalLifeSection } from "@/components/sections/PersonalLifeSection";
import { GeekOutSection } from "@/components/sections/GeekOutSection";
import { StickyNote } from "@/components/scrapbook/StickyNote";

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
  active: TabId;
  /** Content for the recruiter-only company tab. */
  companySection?: React.ReactNode;
};

export function SectionPanel({ active, companySection }: SectionPanelProps) {
  const isPinterest = active === "personal-life";
  const Component = active === "company" ? null : sectionComponents[active];

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 14, rotate: isPinterest ? 0 : -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: -10, rotate: isPinterest ? 0 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {!Component ? (
          <StickyNote color="pink" variant="plain" className="relative z-10">
            {companySection}
          </StickyNote>
        ) : isPinterest ? (
          <div
            className="pin-board-shell matte-paper border-soft shadow-paper-sm relative z-10 bg-[var(--color-note-white)]"
            data-lenis-prevent
          >
            <Component />
          </div>
        ) : (
          <StickyNote
            color={sectionNoteColor[active as SectionId]}
            variant="plain"
            tape={active === "geek-out"}
            tapeVariant="yellow"
            hoverWiggle={active !== "geek-out"}
            className="relative z-10"
          >
            <Component />
          </StickyNote>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
