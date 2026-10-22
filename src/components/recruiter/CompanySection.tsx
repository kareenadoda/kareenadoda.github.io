"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StickyNote } from "@/components/scrapbook/StickyNote";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type {
  HandwrittenNotes as HandwrittenNotesData,
  RecruiterPage,
} from "@/lib/recruiter-pages";

/** Recruiter-only tab, styled after the Projects section: one sticky note per subsection. */
export function CompanySection({ page }: { page: RecruiterPage }) {
  const notes: {
    title: string;
    /** A short paragraph instead of bullets (used for the spotlight note). */
    paragraph?: string;
    items: { lead: string; meta?: string; body: string; notes?: HandwrittenNotesData }[];
  }[] = [
    {
      title: "Skills I'd bring",
      items: page.skills.map((s) => ({
        lead: s.skill,
        // "on a side project" keeps its own preposition; otherwise "learned at …"
        meta: /^(on|in|at|from|during) /.test(s.learnedAt)
          ? `learned ${s.learnedAt}`
          : `learned at ${s.learnedAt}`,
        body: s.howItApplies,
      })),
    },
    ...(page.spotlight
      ? [{ title: page.spotlight.title, paragraph: page.spotlight.body, items: [] }]
      : []),
    {
      title: `Why I'd be a good fit at ${page.company}`,
      items: (page.fit ?? []).map((f) => ({ lead: f.title, body: f.body })),
    },
    {
      title: `What I've learned about ${page.company}`,
      items: page.learned.map((l) => ({ lead: l.title, body: l.body, notes: l.notes })),
    },
  ].filter((note) => note.paragraph || note.items.length > 0); // skip empty sections

  return (
    <div className="space-y-5">
      <SectionHeading>Kareena at {page.company}</SectionHeading>

      <p className="font-hand text-sm leading-relaxed text-[var(--color-muted)]">
        {page.intro ?? `A little page just for the ${page.company} team. Thanks for stopping by!`}
      </p>

      <div className="space-y-4">
        {notes.map((note, i) => (
          <motion.div
            key={note.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{ rotate: i % 2 === 0 ? "-0.5deg" : "0.5deg" }}
          >
            <StickyNote color={i % 2 === 0 ? "white" : "yellow"} className="!p-4">
              <h3 className="font-display text-lg font-bold">{note.title}</h3>
              {note.paragraph && (
                <p className="mt-2 font-hand text-sm leading-relaxed text-[var(--color-muted)]">
                  {note.paragraph}
                </p>
              )}
              <ul className="mt-3 space-y-2.5 empty:hidden">
                {note.items.map((item) => (
                  <li
                    key={item.lead}
                    className="font-hand text-sm leading-snug text-[var(--color-muted)] before:mr-1.5 before:content-['•']"
                  >
                    <span className="font-display font-bold text-[var(--color-ink)]">
                      {item.lead}
                    </span>
                    {item.meta && (
                      <span className="text-xs"> · {item.meta}</span>
                    )}
                    <span className="block pl-3.5">{item.body}</span>
                    {item.notes && <HandwrittenNotes notes={item.notes} />}
                  </li>
                ))}
              </ul>
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Expandable stack of handwritten note pages, like flipping through a notebook. */
function HandwrittenNotes({ notes }: { notes: HandwrittenNotesData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 pl-3.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-2 text-left"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="font-display text-sm"
          aria-hidden
        >
          ▸
        </motion.span>
        <span className="font-display text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-tape-pink)] decoration-2 underline-offset-4">
          {notes.title}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 px-1 pb-2 pt-4 sm:px-4">
              {notes.pages.map((src, i) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ rotate: i % 2 === 0 ? "-0.6deg" : "0.6deg" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${notes.title}, page ${i + 1}`}
                    loading="lazy"
                    className="border-soft w-full bg-[var(--color-note-white)] shadow-paper-sm"
                  />
                </a>
              ))}
              <p className="text-center font-hand text-xs text-[var(--color-muted)]">
                Tap a page to open it full size
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
