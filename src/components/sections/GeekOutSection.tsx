"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    brand: "CLI tools",
    platform: "Terminal",
    title: "CLI tools feel more like text boxes",
    body: "More and more CLI tools handle mouse clicks themselves, so I can just click where I want to edit. This is perfect because I hated holding Option to move my cursor. SO SO HAPPY that this works now!",
  },
  {
    brand: "WhatsApp",
    title: "Call selected people from a group",
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
  {
    brand: "ChatGPT",
    title: "Edit the response right where it is",
    body: "I love editing my emails directly in the response box ChatGPT generates. No copying it somewhere else just to tweak a line - I can fix it right there and send it off!",
  },
];

// Tech I've actually used — brand = product/tool, platform = category (e.g. "AI tool").
const triedTech: FeatureNote[] = [
  {
    brand: "Spotify Labs",
    platform: "Kit",
    title: "Asked Kit for a getting-ready playlist",
    body: `My prompt was pretty simple: make me a getting-ready playlist I can sing along to (I should already have one, but I’m too lazy to make it 🙈). I asked for it to be pop-focused, with some Ariana and Tate and a bunch of classics thrown in.

It made a 20-song playlist that was pretty spot on - some Beyoncé and Rihanna in there, the rest pop with Tate and Ariana. Then it asked whether I wanted any Bollywood in it or wanted to keep it English. Honestly a very bang-on question - I listen to a lot of Bollywood and my prompt didn’t say either way. It asked exactly what I was already thinking about, so big plus there.

Next, I asked it to stretch the playlist to 50 songs, and it extended it pretty well, leaning more into pop.

That’s all I’ve tried so far - pretty good as of yet! I’m going to actually play the playlist soon and see how it holds up, and maybe give it more complicated tasks around my listening <3`,
  },
];

// Tech I've read/learned about but haven't necessarily used yet.
const learnedTech: FeatureNote[] = [];

type TabId = "features" | "tried" | "learned";

const tabs: {
  id: TabId;
  label: string;
  kicker: string;
  heading: string;
  blurb: string;
}[] = [
  {
    id: "features",
    label: "Feature obsession",
    kicker: "The product notebook",
    heading: "Features I've noticed!",
    blurb:
      "Little product details I love - and a few I’d rethink. Tell me your thoughts in the comments below :D",
  },
  {
    id: "tried",
    label: "Tech I've tried",
    kicker: "Hands-on",
    heading: "Tech I've tried recently",
    blurb:
      "These are just my thoughts on whatever tools I’m trying. I don’t want to fully criticize them since I’d want to understand them more first - so this is a brief-experience section, unless something really stands out!",
  },
  {
    id: "learned",
    label: "Tech I've learned about",
    kicker: "Rabbit holes",
    heading: "Tech I've learned about recently",
    blurb: "Things I’ve been reading up on and can’t stop thinking about.",
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
            <p className="mt-2 whitespace-pre-line leading-relaxed text-[var(--color-muted)]/85">
              {note.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

function EmptyNotes() {
  return (
    <p className="rounded-[var(--radius-pill)] border border-dashed border-[var(--color-border-soft)] px-5 py-6 text-center text-[var(--color-muted)]/85">
      Notes coming soon - I’m still mid-experiment 🧪
    </p>
  );
}

function TabContent({ tab }: { tab: TabId }) {
  if (tab === "features") {
    return (
      <div className="space-y-8">
        <NoteList label="I’d rethink" notes={rethinkFeatures} />
        <NoteList label="Currently loving" notes={loveFeatures} />
      </div>
    );
  }
  const notes = tab === "tried" ? triedTech : learnedTech;
  return notes.length ? (
    <NoteList label={tab === "tried" ? "Tried it" : "Learned it"} notes={notes} />
  ) : (
    <EmptyNotes />
  );
}

export function GeekOutSection() {
  const [active, setActive] = useState<TabId>("features");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <div className="px-1 py-4 sm:px-6 sm:py-8">
      <div
        role="tablist"
        aria-label="Geek Out sections"
        className="mb-8 flex flex-wrap gap-2"
      >
        {tabs.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.id)}
              className={`rounded-[var(--radius-pill)] px-4 py-2 text-sm font-bold transition-colors ${
                selected
                  ? "bg-[var(--color-rose-ink)] text-white"
                  : "bg-[var(--color-note-pink)]/60 text-[var(--color-rose-ink)] hover:bg-[var(--color-note-pink)]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease }}
        >
          <header className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-rose-ink)]">
              {tab.kicker}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {tab.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]/85">
              {tab.blurb}
            </p>
          </header>

          <TabContent tab={active} />
        </motion.div>
      </AnimatePresence>

      <p className="mt-4 border-t border-[var(--color-border-soft)] pt-6 text-[var(--color-muted)]/85">
        Small details. Surprisingly big feelings.
      </p>

      <div className="mt-10">
        <FeatureComments />
      </div>
    </div>
  );
}
