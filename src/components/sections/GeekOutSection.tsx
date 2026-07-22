"use client";

import { motion } from "framer-motion";
import { LabelTag } from "@/components/scrapbook/LabelTag";
import { WashiTape } from "@/components/scrapbook/WashiTape";
import { FeatureComments } from "@/components/sections/FeatureComments";

const changeFeatures = [
  {
    title: "Apple: Emoji keyboard disappears after one click",
    body: "If this tab stays longer, the user can spam emojis or type different ones. As of now, the keyboard just closes after one-click. Whatsapp desktop just allowed this on mac with the emoji keyboard.",
  },
  {
    title: "Gmail: Allowing us to rename attachments",
    body: "I don't need to rename the real file, just want to change it for a particular email. Imagine how much time it would save us if Gmail allowed us to rename attachments for particular emails! (I need my cute and cringey 'final final' names on my laptop but don't wanna send them out)",
  },
  {
    title: "LinkedIn: Sort experiences by preference and not chronologically",
    body: "Sometimes I want a particular experience to be highlighted, even if it isn't the most recent one. Do you think this would help or does it make organization bad? I think they could add a \"(8 months ago)\" detail but still allow us to pin it. But maybe the Featured section is for this kind of stuff 👀",
  },
] as const;

const loveFeatures = [
  {
    title: "Whatsapp: Select users for group call",
    body: "Whatsapp now lets you make group calls by selecting a few people! So I don't accidentally wake up friends who are napping hehe",
  },
  {
    title: "Apple: Motion detection cues",
    body: "I'm not sure if this is a placebo or scientifically proven (hey if Apple is doing it, I'm guessing it is👀), but it definitely works on me!",
  },
  {
    title: "Spotify: Sleep Timer",
    body: "They finally added the sleep timer for songs on Desktop Version!",
  },
] as const;

export function GeekOutSection() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <motion.div
          className="relative mx-auto w-fit max-w-full pt-3"
          style={{ rotate: "-1deg" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <WashiTape
            variant="yellow"
            className="absolute -top-1 left-1/2 z-20 w-28 -translate-x-1/2 sm:w-36"
            rotation={-2}
          />
          <div className="note-torn border-soft matte-yellow relative px-10 py-6 text-center sm:px-14 sm:py-7">
            <span className="font-display text-[1.88rem] font-bold leading-none tracking-tight text-[var(--color-ink)] sm:text-[2.24rem]">
              Features!
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand text-sm leading-relaxed text-[var(--color-muted)]"
        >
          I am obsessed with features and always love discovering them. Tell me
          if you also love any of these or have any thoughts on them in the
          comments tab below :D
        </motion.p>
      </div>

      <div className="space-y-3">
        <LabelTag color="pink" className="!px-5 !py-2 !text-lg">
          Features I’d like to change:
        </LabelTag>

        <div className="grid gap-3 sm:grid-cols-2">
          {changeFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              style={{ rotate: i % 2 === 0 ? "-0.6deg" : "0.5deg" }}
            >
              <div className="matte-paper border-soft h-full rounded-[var(--radius-soft)] bg-[var(--color-note-yellow)]/35 p-4 shadow-paper-sm transition-shadow duration-300 hover:shadow-paper-hover">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-sm font-bold">{f.title}</p>
                  <span className="shrink-0 text-base" aria-hidden>
                    💡
                  </span>
                </div>
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
          Features I recently discovered / currently love:
        </LabelTag>

        <div className="grid gap-3 sm:grid-cols-2">
          {loveFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              style={{ rotate: i % 2 === 0 ? "0.5deg" : "-0.6deg" }}
            >
              <div className="matte-paper border-soft h-full rounded-[var(--radius-soft)] bg-[var(--color-note-pink)]/30 p-4 shadow-paper-sm transition-shadow duration-300 hover:shadow-paper-hover">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-sm font-bold">{f.title}</p>
                  <span className="shrink-0 text-base" aria-hidden>
                    ✨
                  </span>
                </div>
                <p className="mt-2 font-hand text-sm leading-relaxed text-[var(--color-muted)]">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FeatureComments />
    </div>
  );
}
