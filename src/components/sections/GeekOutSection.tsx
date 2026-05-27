"use client";

import { motion } from "framer-motion";
import { PinkBlob } from "@/components/scrapbook/PinkBlob";
import { LabelTag } from "@/components/scrapbook/LabelTag";

const changeFeatures = [
  {
    title: "Apple Emojis Keyboard on MacBook",
    body: "Disappears after one click. It should stay longer so people can spam/try more — WhatsApp already does this on desktop.",
  },
  {
    title: "Email: rename attachment (per email)",
    body: "I don’t need to rename the real file—just the name for that one email. Imagine if they allowed it while sending.",
  },
  {
    title: "LinkedIn: experiences by preference",
    body: "Could LinkedIn let us display experiences based on our preferences (not strictly chronological)? What do you think?",
  },
] as const;

const loveFeatures = [
  {
    title: "Apple motion detection cues",
    body: "Those subtle “something moved” cues. Love how they make the experience feel aware without being distracting.",
  },
] as const;

export function GeekOutSection() {
  return (
    <div className="space-y-5">
      <div className="relative mx-auto w-full max-w-[820px]">
        <PinkBlob size="hero-xl">
          <span className="font-display text-[2.35rem] font-bold leading-none tracking-tight text-[var(--color-ink)] sm:text-[2.8rem]">
            Features!
          </span>
        </PinkBlob>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="font-hand text-sm leading-relaxed text-[var(--color-muted)]"
      >
        Below: I am obsessed with features and always love discovering them,
        tell me if u also love any of these or have any thoughts on these : D
      </motion.p>

      <div className="space-y-3">
        <LabelTag color="pink" className="!px-5 !py-2 !text-lg">
          Features I’d like to change
        </LabelTag>

        <div className="grid gap-3 sm:grid-cols-2">
          {changeFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              <div
                className={`matte-paper border-soft rounded-[var(--radius-soft)] p-4 shadow-[2px_3px_0_rgba(0,0,0,0.05)] ${
                  i % 2 === 0
                    ? "bg-[var(--color-note-white)]/75"
                    : "bg-[var(--color-note-yellow)]/60"
                }`}
              >
                <p className="font-display text-sm font-bold">{f.title}</p>
                <p className="mt-2 font-hand text-sm leading-relaxed text-[var(--color-muted)]">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <LabelTag color="yellow" className="!px-5 !py-2 !text-lg">
          Features I recently discovered / currently love
        </LabelTag>

        <div className="grid gap-3">
          {loveFeatures.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="matte-paper border-soft rounded-[var(--radius-soft)] p-4 shadow-[2px_3px_0_rgba(0,0,0,0.05)] bg-[var(--color-note-pink)]/25">
                <p className="font-display text-sm font-bold">{f.title}</p>
                <p className="mt-2 font-hand text-sm leading-relaxed text-[var(--color-muted)]">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
