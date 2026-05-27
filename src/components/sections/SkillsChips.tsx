"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/profile";

const flowSpring = { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.65 };

type SkillItem = { name: string; group: "lang" | "tool" };

const allSkills: SkillItem[] = [
  ...skills.languages.map((name) => ({ name, group: "lang" as const })),
  ...skills.tools.map((name) => ({ name, group: "tool" as const })),
];

export function SkillsChips() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="matte-paper border-soft-dashed p-4"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <p className="font-display text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
        Languages
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {allSkills
          .map((item, index) => ({ ...item, index }))
          .filter((item) => item.group === "lang")
          .map((item) => (
            <SkillChip
              key={item.name}
              name={item.name}
              isActive={hoveredIndex === item.index}
              onHover={() => setHoveredIndex(item.index)}
            />
          ))}
      </div>

      <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
        Tools & Technologies
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {allSkills
          .map((item, index) => ({ ...item, index }))
          .filter((item) => item.group === "tool")
          .map((item) => (
            <SkillChip
              key={item.name}
              name={item.name}
              isActive={hoveredIndex === item.index}
              onHover={() => setHoveredIndex(item.index)}
            />
          ))}
      </div>
    </div>
  );
}

function SkillChip({
  name,
  isActive,
  onHover,
}: {
  name: string;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <span
      className="relative inline-block cursor-default px-2 py-1"
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      role="presentation"
    >
      {isActive && (
        <motion.span
          layoutId="skill-bubble"
          className="absolute -inset-x-1 -inset-y-1 z-0 rounded-[var(--radius-pill)] border border-[var(--color-note-pink-deep)]/20 bg-gradient-to-b from-[#fdf0f4] via-[var(--color-note-pink)] to-[#f5b8ca] shadow-[0_2px_8px_rgba(240,176,196,0.45)]"
          transition={flowSpring}
        />
      )}
      <motion.span
        className={`relative z-10 font-hand text-xs transition-colors duration-200 ${
          isActive ? "font-semibold text-[var(--color-ink)]" : "text-[var(--color-muted)]"
        }`}
        animate={isActive ? { scale: 1.06, y: -1 } : { scale: 1, y: 0 }}
        transition={flowSpring}
      >
        {name}
      </motion.span>
    </span>
  );
}
