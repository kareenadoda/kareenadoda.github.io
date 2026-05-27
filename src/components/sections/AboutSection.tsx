"use client";

import { motion } from "framer-motion";
import { LabelTag } from "@/components/scrapbook/LabelTag";
import { FlowerDoodle } from "@/components/scrapbook/Doodles";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <LabelTag className="!px-5 !py-2 !text-lg">About Me</LabelTag>
        <FlowerDoodle size={44} variant="sketchy" className="hidden sm:block" />
      </div>

      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-display text-lg font-semibold"
      >
        Your Name · builder, learner, curious human
      </motion.p>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-xl font-hand text-base leading-relaxed text-[var(--color-muted)]"
      >
        Welcome! This is your space to introduce yourself — your background,
        what you&apos;re working on, and what you care about. Replace this with
        your own story.
      </motion.p>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-2"
      >
        {[
          { label: "Location", value: "City, Country" },
          { label: "Focus", value: "What you do best" },
          { label: "Currently", value: "Learning / building / exploring" },
          { label: "Reach me", value: "email@example.com" },
        ].map((item) => (
          <div
            key={item.label}
            className="matte-paper relative border-2 border-dashed border-[var(--color-ink)]/35 px-4 py-3"
          >
            <LabelTag color="pink" className="!px-2 !py-0.5 !text-xs">
              {item.label}
            </LabelTag>
            <p className="mt-2 font-hand text-base font-medium">{item.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
