"use client";

import { motion } from "framer-motion";
import { LabelTag } from "@/components/scrapbook/LabelTag";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { FlowerDoodle } from "@/components/scrapbook/Doodles";

const interests = [
  { title: "Building software", detail: "Side projects & open source", color: "yellow" as const },
  { title: "Reading", detail: "Tech, fiction, essays", color: "white" as const },
  { title: "Music", detail: "Playlists, live shows, learning", color: "pink" as const },
  { title: "Photography", detail: "Street, travel, film", color: "white" as const },
  { title: "Games", detail: "Indie, puzzles, co-op", color: "yellow" as const },
  { title: "Travel", detail: "New places & local food", color: "pink" as const },
];

export function InterestsSection() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <LabelTag className="!px-5 !py-2 !text-lg">Interests</LabelTag>
        <FlowerDoodle size={40} variant="sketchy" />
      </div>

      <p className="font-hand text-sm text-[var(--color-muted)]">
        What you enjoy outside of work — personalize these little notes.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {interests.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95, rotate: i % 2 === 0 ? -2 : 2 }}
            animate={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -1 : 1 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <StickyNote color={item.color} className="!p-4" hoverWiggle>
              <h3 className="font-display font-bold">{item.title}</h3>
              <p className="mt-1 font-hand text-sm text-[var(--color-muted)]">
                {item.detail}
              </p>
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
