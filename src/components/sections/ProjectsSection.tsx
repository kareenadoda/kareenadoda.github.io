"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/profile";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { LabelTag } from "@/components/scrapbook/LabelTag";

export function ProjectsSection() {
  return (
    <div className="space-y-5">
      <LabelTag className="!px-5 !py-2 !text-lg">Projects</LabelTag>

      <p className="font-hand text-sm text-[var(--color-muted)]">
        Hackathon builds & side projects — links coming soon.
      </p>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{ rotate: i % 2 === 0 ? "-0.5deg" : "0.5deg" }}
          >
            <StickyNote
              color={i % 2 === 0 ? "white" : "yellow"}
              tape
              tapeVariant={i % 2 === 0 ? "pink-stripe" : "white"}
              tapePosition={i % 2 === 0 ? "top-left" : "top-right"}
              className="!p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <span className="font-hand text-xs text-[var(--color-muted)]">
                  {project.period}
                </span>
              </div>
              {project.award && (
                <LabelTag color="pink" className="mt-2 !text-xs">
                  {project.award}
                </LabelTag>
              )}
              <ul className="mt-3 space-y-1.5">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="font-hand text-sm leading-snug text-[var(--color-muted)] before:mr-1.5 before:content-['•']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <LabelTag key={tag} color="yellow" className="!px-2 !py-0.5 !text-xs">
                    {tag}
                  </LabelTag>
                ))}
              </div>
              {project.href && project.href !== "#" && (
                <a
                  href={project.href}
                  className="mt-3 inline-block font-display text-sm font-semibold underline"
                >
                  View project →
                </a>
              )}
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
