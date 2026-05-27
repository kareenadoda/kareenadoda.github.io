"use client";

import { motion } from "framer-motion";
import { education, profile } from "@/lib/profile";
import { LabelTag } from "@/components/scrapbook/LabelTag";
import { SkillsChips } from "@/components/sections/SkillsChips";
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
      <LabelTag className="!px-5 !py-2 !text-lg">About Me</LabelTag>

      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
        <p className="font-display text-lg font-semibold">{profile.name}</p>
        <p className="mt-1 font-hand text-base leading-relaxed text-[var(--color-muted)]">
          {profile.tagline}
        </p>
      </motion.div>

      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="matte-paper border-soft p-4"
      >
        <LabelTag color="pink" className="mb-3">
          Education
        </LabelTag>
        <p className="font-display font-bold">{education.school}</p>
        <p className="mt-1 font-hand text-sm">{education.degree}</p>
        <p className="font-hand text-sm text-[var(--color-muted)]">
          {education.minor}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <LabelTag color="yellow" className="!text-xs">
            {education.graduation}
          </LabelTag>
          <LabelTag color="yellow" className="!text-xs">
            GPA {education.gpa}
          </LabelTag>
        </div>
      </motion.div>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        <LabelTag color="pink">Skills</LabelTag>
        <SkillsChips />
      </motion.div>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-2"
      >
        {[
          { label: "Based in", value: "New Jersey" },
          { label: "Focus", value: "Full-stack · AI · Product" },
          { label: "Currently", value: "Rutgers CS '27" },
          { label: "Phone", value: profile.phone },
        ].map((item) => (
          <div
            key={item.label}
            className="matte-paper border-soft-dashed px-4 py-3"
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
