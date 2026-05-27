"use client";

import { motion } from "framer-motion";
import { PinkBlob } from "./PinkBlob";
import { WashiTape } from "./WashiTape";
import { PhotoPolaroid } from "./PhotoPolaroid";
import { profile, images } from "@/lib/profile";

export function HeroIntro() {
  return (
    <header className="relative mb-12 sm:mb-14">
      <div className="relative mx-auto w-full max-w-4xl px-1 pt-2">
        <div className="hero-matched-row grid items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative w-full">
              <WashiTape
                variant="white"
                className="absolute -right-1 top-5 z-30 w-[4.5rem]"
                rotation={6}
              />
              <PinkBlob size="hero-xl">
                <motion.span
                  className="font-hand text-2xl text-[var(--color-ink)]/90 sm:text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  Hello, I&apos;m
                </motion.span>
                <motion.span
                  className="font-display text-5xl font-bold leading-none tracking-tight text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-8xl"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
                >
                  Kareena!
                </motion.span>
              </PinkBlob>
            </div>
          </div>

          <div className="flex min-h-[12rem] items-stretch justify-center gap-1.5 sm:min-h-[13rem] sm:gap-2 md:min-h-0 md:justify-end">
            <PhotoPolaroid
              src={images.heroLaughing}
              alt="Kareena laughing"
              rotation={-4}
              className="z-10 w-[40%] max-w-[10.5rem] md:h-full md:max-h-none md:w-[42%] md:max-w-[8.75rem] lg:max-w-[9.5rem]"
              tapeVariant="pink-stripe"
              priority
              aspect="portrait"
              imageScale={0.92}
              objectPosition="center 40%"
              matchRowHeight
            />
            <PhotoPolaroid
              src={images.heroOutdoor}
              alt="Kareena outdoors at Rutgers"
              rotation={5}
              className="w-[40%] max-w-[10.5rem] md:h-full md:max-h-none md:w-[42%] md:max-w-[8.75rem] lg:max-w-[9.5rem]"
              tapeVariant="white"
              priority
              aspect="portrait"
              imageScale={1.38}
              objectPosition="center 22%"
              matchRowHeight
            />
          </div>
        </div>

        <motion.div
          className="relative mx-auto mt-9 w-full max-w-2xl sm:mt-10"
          initial={{ opacity: 0, y: 16, rotate: -0.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <WashiTape
            variant="pink-stripe"
            className="absolute -top-3 left-10 z-20 w-[4.5rem]"
            rotation={-5}
          />
          <WashiTape
            variant="white"
            className="absolute -top-3 right-10 z-20 w-14"
            rotation={4}
          />
          <div className="matte-paper border-soft relative bg-[var(--color-note-white)] px-6 py-5 text-center shadow-[2px_3px_0_rgba(0,0,0,0.05)] sm:px-8 sm:py-6">
            <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-soft)-4px)] border border-dashed border-[var(--color-border-soft)]" />
            <p className="relative font-display text-lg font-bold text-[var(--color-ink)] sm:text-xl">
              {profile.tagline}
            </p>
            <p className="relative mt-3 font-hand text-base leading-relaxed text-[var(--color-ink)] sm:text-lg">
              {profile.introSubline}
              <br />
              <span className="font-display font-semibold">{profile.introHighlight}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
