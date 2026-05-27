"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { StarDoodle } from "@/components/scrapbook/Doodles";
import { LabelTag } from "@/components/scrapbook/LabelTag";

const features = [
  {
    title: "Dev environment",
    description: "Editor setup, themes, extensions, and workflow tweaks you swear by.",
  },
  {
    title: "Stack & tools",
    description: "Frameworks, CLIs, and services you reach for when building.",
  },
  {
    title: "Cool discoveries",
    description: "Libraries, APIs, or hacks worth sharing with fellow builders.",
  },
  {
    title: "Hot takes",
    description: "Opinions on tech trends, productivity, or how you like to work.",
  },
];

export function GeekOutSection() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <LabelTag className="!px-5 !py-2 !text-lg">Geek Out ★</LabelTag>
        <StarDoodle size={36} filled />
        <StarDoodle size={24} className="mt-2" />
      </div>

      <p className="font-hand text-sm text-[var(--color-muted)]">
        Features, tools, and rabbit holes — the fun technical stuff.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
          >
            <StickyNote
              color={i % 2 === 0 ? "white" : "yellow"}
              variant="dashed"
              className="!p-4"
            >
              <LabelTag color="pink" className="mb-2 !text-xs">
                {feature.title}
              </LabelTag>
              <p className="font-hand text-sm leading-relaxed text-[var(--color-muted)]">
                {feature.description}
              </p>
            </StickyNote>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="matte-paper relative border-2 border-dashed border-[var(--color-ink)] px-5 py-4"
      >
        <StarDoodle className="absolute -right-2 -top-3" size={28} filled />
        <p className="font-hand text-sm font-medium text-[var(--color-muted)]">
          Your turn: dotfiles, favorite repos, or a &quot;uses&quot; list →
        </p>
      </motion.div>
    </div>
  );
}
