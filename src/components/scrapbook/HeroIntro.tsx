"use client";

import { motion } from "framer-motion";
import { PinkBlob } from "./PinkBlob";
import { FlowerDoodle, StarDoodle } from "./Doodles";
import { WashiTape } from "./WashiTape";
import { LabelTag } from "./LabelTag";

const float = (delay: number, y = 8) => ({
  y: [0, -y, 0],
  transition: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export function HeroIntro() {
  return (
    <header className="relative mb-12 sm:mb-14">
      {/* Decorative doodles around hero */}
      <motion.div
        className="pointer-events-none absolute -left-2 top-6 sm:-left-8 sm:top-4"
        animate={float(0, 10)}
      >
        <FlowerDoodle size={72} variant="sketchy" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -right-1 top-2 sm:-right-6"
        animate={float(0.5, 12)}
      >
        <FlowerDoodle size={56} variant="sketchy" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[12%] top-0"
        animate={float(1, 6)}
      >
        <StarDoodle size={26} filled />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[14%] top-8"
        animate={float(1.2, 8)}
      >
        <StarDoodle size={34} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-24 left-[6%] hidden sm:block"
        animate={float(0.8, 7)}
      >
        <StarDoodle size={22} filled />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-20 right-[8%] hidden sm:block"
        animate={float(1.5, 9)}
      >
        <StarDoodle size={30} filled />
      </motion.div>

      <div className="relative mx-auto flex flex-col items-center px-2 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <LabelTag color="yellow">✿ welcome ✿</LabelTag>
        </motion.div>

        {/* Main pink blob — "Group Project" style */}
        <div className="relative w-full max-w-lg">
          <WashiTape
            variant="pink-stripe"
            className="absolute -left-2 top-6 z-30 w-20"
            rotation={-8}
          />
          <WashiTape
            variant="white"
            className="absolute -right-1 top-4 z-30 w-[4.5rem]"
            rotation={6}
          />
          <WashiTape
            variant="pink-dots"
            className="absolute bottom-8 left-1/4 z-30 hidden w-16 sm:block"
            rotation={-4}
          />

          <PinkBlob size="hero">
            <motion.span
              className="font-hand text-lg text-[var(--color-ink)]/90 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.span>
            <motion.span
              className="font-display text-4xl font-bold leading-none tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              Kareena!
            </motion.span>
          </PinkBlob>
        </div>

        {/* Taped intro note below */}
        <motion.div
          className="relative mt-10 w-full max-w-md"
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -0.5 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <WashiTape
            variant="pink-stripe"
            className="absolute -top-3 left-8 z-20 w-[4.5rem]"
            rotation={-5}
          />
          <WashiTape
            variant="white"
            className="absolute -top-3 right-10 z-20 w-14"
            rotation={4}
          />
          <div className="matte-paper relative border-2 border-[var(--color-ink)] bg-[var(--color-note-white)] px-6 py-5 text-center shadow-[3px_4px_0_rgba(0,0,0,0.1)]">
            <div className="pointer-events-none absolute inset-2 border border-dashed border-[var(--color-ink)]/20" />
            <p className="relative font-hand text-lg leading-relaxed text-[var(--color-ink)] sm:text-xl">
              A little corner of the internet —
              <br />
              <span className="font-display font-semibold">part scrapbook, part portfolio.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
