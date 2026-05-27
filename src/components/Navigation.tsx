"use client";

import { motion } from "framer-motion";
import { sections, type SectionId } from "@/lib/sections";

const tabMatte: Record<SectionId, string> = {
  about: "matte-yellow",
  projects: "matte-paper bg-[var(--color-note-white)]",
  interests: "matte-pink",
  "geek-out": "matte-yellow",
};

type NavigationProps = {
  active: SectionId;
  onChange: (id: SectionId) => void;
};

export function Navigation({ active, onChange }: NavigationProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {sections.map((section, i) => {
        const isActive = active === section.id;
        return (
          <motion.button
            key={section.id}
            type="button"
            onClick={() => onChange(section.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.06 }}
            className={`nav-tab relative border-2 border-[var(--color-ink)] px-4 py-2.5 font-display text-sm font-semibold sm:px-5 sm:text-base ${tabMatte[section.id]} ${
              isActive ? "nav-tab-active" : ""
            }`}
            style={{
              rotate: isActive
                ? `${(i % 2 === 0 ? 1 : -1) * 2}deg`
                : `${(i % 2 === 0 ? -1 : 1)}deg`,
            }}
          >
            {isActive && (
              <span
                className="absolute -top-2 left-1/2 z-20 h-5 w-12 -translate-x-1/2 rounded-[2px]"
                style={{
                  transform: "translateX(-50%) rotate(-3deg)",
                  backgroundColor: "var(--color-tape-pink)",
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(255,255,255,0.35) 3px, rgba(255,255,255,0.35) 6px)",
                  opacity: 0.9,
                }}
                aria-hidden
              />
            )}
            <span className="relative">{section.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
