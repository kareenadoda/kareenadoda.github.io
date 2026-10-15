"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/profile";
import { useMagnetic } from "@/lib/useMagnetic";

const flowSpring = { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.65 };

export function SkillsChips() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="matte-paper border-soft-dashed p-4"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex flex-wrap gap-2">
        {skills.map((name, index) => (
          <SkillChip
            key={name}
            name={name}
            isActive={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
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
  const magnetic = useMagnetic<HTMLSpanElement>({ strength: 0.12, max: 5 });

  return (
    <motion.span
      ref={magnetic.ref}
      className="relative inline-block cursor-default px-2 py-1"
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseEnter={onHover}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
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
        className="relative z-10 inline-grid font-hand text-xs"
        animate={isActive ? { scale: 1.06, y: -1 } : { scale: 1, y: 0 }}
        transition={flowSpring}
      >
        {/* Invisible bold copy reserves the hover width so chips don't reflow */}
        <span className="invisible col-start-1 row-start-1 font-semibold" aria-hidden>
          {name}
        </span>
        <span
          className={`col-start-1 row-start-1 text-center transition-colors duration-200 ${
            isActive ? "font-semibold text-[var(--color-ink)]" : "text-[var(--color-muted)]"
          }`}
        >
          {name}
        </span>
      </motion.span>
    </motion.span>
  );
}
