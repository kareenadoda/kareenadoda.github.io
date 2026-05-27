"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { StarDoodle } from "@/components/scrapbook/Doodles";
import { LabelTag } from "@/components/scrapbook/LabelTag";

const projects = [
  {
    title: "Project One",
    description: "A brief description of what you built and why it matters.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "Another highlight — tools used, problem solved, outcome.",
    tags: ["Python", "API"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "Add links to GitHub, live demos, or write-ups when ready.",
    tags: ["Design", "Web"],
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <LabelTag className="!px-5 !py-2 !text-lg">Projects</LabelTag>
        <StarDoodle size={32} filled />
      </div>

      <p className="font-hand text-sm text-[var(--color-muted)]">
        A curated selection of work — swap in your real projects anytime.
      </p>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            initial={{ opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="block"
            style={{ rotate: i % 2 === 0 ? "-0.5deg" : "0.5deg" }}
          >
            <StickyNote
              color={i % 2 === 0 ? "white" : "yellow"}
              tape
              tapeVariant={i % 2 === 0 ? "pink-stripe" : "white"}
              tapePosition={i % 2 === 0 ? "top-left" : "top-right"}
              className="!p-4"
            >
              <h3 className="font-display text-lg font-bold">{project.title}</h3>
              <p className="mt-1 font-hand text-sm text-[var(--color-muted)]">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <LabelTag key={tag} color="pink" className="!px-2 !py-0.5 !text-xs">
                    {tag}
                  </LabelTag>
                ))}
              </div>
            </StickyNote>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
