"use client";

import { motion } from "framer-motion";
import { FeatureComments } from "@/components/sections/FeatureComments";

type FeatureNote = {
  brand: string;
  platform?: string;
  title: string;
  body: string;
};

const rethinkFeatures: FeatureNote[] = [
  {
    brand: "Apple",
    platform: "macOS",
    title: "Keep the emoji picker open",
    body: "I want to add a few emojis without reopening the picker after every click. A tiny change that would make typing more effortless - the WhatsApp desktop keyboard enabled this a while ago!",
  },
  {
    brand: "Gmail",
    title: "Rename an attachment, not the original",
    body: "Give an attachment a cleaner name just for the email. My laptop can keep “final-final”—the person receiving it doesn’t need to see that!!",
  },
  {
    brand: "LinkedIn",
    title: "Let the most relevant experience come first",
    body: "Sometimes the experience I want to highlight isn’t my latest one. Let me pin it, while keeping the dates visible for context. (Or maybe that’s what the Featured section is for 👀)",
  },
];

const loveFeatures: FeatureNote[] = [
  {
    brand: "WhatsApp",
    title: "Call just a few people from a group",
    body: "Start a group call with only the people you pick—so friends who are napping don’t get woken up : )",
  },
  {
    brand: "Apple",
    title: "Motion cues",
    body: "Not sure if it’s placebo or science (if Apple shipped it, I’m guessing science 👀), but it definitely works on my roommate and me.",
  },
  {
    brand: "Spotify",
    platform: "Desktop",
    title: "Sleep timer, finally on desktop",
    body: "The sleep timer finally made it to the desktop app. Small, but I've been waiting for this one for a while.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function NoteList({ label, notes }: { label: string; notes: FeatureNote[] }) {
  return (
    <section className="space-y-2">
      <span className="inline-block rounded-[var(--radius-pill)] bg-[var(--color-note-pink)]/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-rose-ink)]">
        {label} · {String(notes.length).padStart(2, "0")} notes
      </span>

      <ol className="divide-y divide-[var(--color-border-soft)]">
        {notes.map((note, i) => (
          <motion.li
            key={note.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35, ease }}
            className="py-6"
          >
            <p className="text-sm font-bold text-[var(--color-rose-ink)]">
              {String(i + 1).padStart(2, "0")} / {note.brand.toUpperCase()}
              {note.platform && ` · ${note.platform}`}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold leading-snug text-[var(--color-ink)] sm:text-2xl">
              {note.title}
            </h3>
            <p className="mt-2 leading-relaxed text-[var(--color-muted)]/85">
              {note.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export function GeekOutSection() {
  return (
    <div className="px-1 py-4 sm:px-6 sm:py-8">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
        className="mb-10"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-rose-ink)]">
          The product notebook
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Features I've noticed!
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--color-muted)]/85">
          Little product details I love - and a few I’d rethink. Tell me your
          thoughts in the comments below :D
        </p>
      </motion.header>

      <div className="space-y-8">
        <NoteList label="I’d rethink" notes={rethinkFeatures} />
        <NoteList label="Currently loving" notes={loveFeatures} />
      </div>

      <p className="mt-4 border-t border-[var(--color-border-soft)] pt-6 text-[var(--color-muted)]/85">
        Small details. Surprisingly big feelings.
      </p>

      <div className="mt-10">
        <FeatureComments />
      </div>
    </div>
  );
}
