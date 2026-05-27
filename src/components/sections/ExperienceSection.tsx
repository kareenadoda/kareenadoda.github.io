"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/profile";
import { LabelTag } from "@/components/scrapbook/LabelTag";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { SpotlightGallery } from "@/components/scrapbook/SpotlightGallery";
import { WashiTape } from "@/components/scrapbook/WashiTape";

function ExperienceCard({
  entry,
  index,
}: {
  entry: (typeof experiences)[0];
  index: number;
}) {
  const noteColor = index % 3 === 0 ? "white" : index % 3 === 1 ? "yellow" : "pink";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
    >
      <StickyNote
        color={noteColor}
        variant={entry.kind === "club" ? "dashed" : "plain"}
        tape={index % 2 === 0}
        tapeVariant={index % 2 === 0 ? "pink-dots" : "white"}
        tapePosition={index % 2 === 0 ? "top-left" : "top-right"}
        className="!p-4"
      >
        {entry.gallery && entry.gallery.length >= 2 && (
          <SpotlightGallery photos={entry.gallery} />
        )}

        {entry.image && !entry.gallery && (
          <div className="relative mb-4">
            <WashiTape
              variant="pink-stripe"
              className="absolute -top-2.5 left-4 z-20 w-14"
              rotation={-5}
            />
            <div
              className="border-soft relative overflow-hidden rounded-[var(--radius-soft-sm)] bg-white p-1.5 shadow-[1px_2px_0_rgba(0,0,0,0.05)]"
              style={{ rotate: "-1deg" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={entry.image}
                  alt={entry.imageAlt ?? entry.organization}
                  fill
                  className="object-cover object-[center_28%]"
                  sizes="(max-width: 640px) 90vw, 480px"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-base font-bold leading-tight sm:text-lg">
              {entry.organization}
            </h3>
            {entry.location && (
              <p className="font-hand text-xs text-[var(--color-muted)]">
                {entry.location}
              </p>
            )}
          </div>
          <LabelTag
            color={entry.kind === "club" ? "yellow" : "pink"}
            className="!shrink-0 !px-2 !py-0.5 !text-[10px] sm:!text-xs"
          >
            {entry.kind === "club" ? "Club" : "Work"}
          </LabelTag>
        </div>
        <p className="mt-2 font-display text-sm font-semibold">{entry.role}</p>
        <p className="font-hand text-xs text-[var(--color-muted)]">{entry.period}</p>
        <ul className="mt-3 space-y-1.5">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 40)}
              className="font-hand text-sm leading-snug text-[var(--color-muted)] before:mr-1.5 before:content-['•']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </StickyNote>
    </motion.div>
  );
}

export function ExperienceSection() {
  const work = experiences.filter((e) => e.kind === "work");
  const clubs = experiences.filter((e) => e.kind === "club");

  return (
    <div className="space-y-6">
      <LabelTag className="!px-5 !py-2 !text-lg">Experience</LabelTag>

      <div className="space-y-4">
        <LabelTag color="pink">Professional</LabelTag>
        {work.map((entry, i) => (
          <ExperienceCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>

      <div className="space-y-4">
        <LabelTag color="yellow">Clubs & Leadership</LabelTag>
        {clubs.map((entry, i) => (
          <ExperienceCard key={entry.id} entry={entry} index={i + work.length} />
        ))}
      </div>
    </div>
  );
}
