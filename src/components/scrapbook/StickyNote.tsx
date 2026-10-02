"use client";

import { motion } from "framer-motion";
import { WashiTape } from "./WashiTape";
import { PinkBlob } from "./PinkBlob";
import { useMagnetic } from "@/lib/useMagnetic";

type NoteColor = "white" | "yellow" | "pink";
type NoteStyle = "plain" | "torn" | "dashed";
type TapeVariant = "pink-dots" | "pink-stripe" | "yellow" | "white";

type StickyNoteProps = {
  children: React.ReactNode;
  color?: NoteColor;
  variant?: NoteStyle;
  tape?: boolean;
  tapeVariant?: TapeVariant;
  tapePosition?: "top-left" | "top-center" | "top-right";
  className?: string;
  hoverWiggle?: boolean;
};

const matteClasses: Record<NoteColor, string> = {
  white: "matte-paper bg-[var(--color-note-white)]",
  yellow: "matte-yellow",
  pink: "matte-pink",
};

const tapePositions: Record<string, string> = {
  "top-left": "-top-3 left-6",
  "top-center": "-top-3 left-1/2 -translate-x-1/2",
  "top-right": "-top-3 right-6",
};

export function StickyNote({
  children,
  color = "white",
  variant = "plain",
  tape = false,
  tapeVariant = "pink-dots",
  tapePosition = "top-center",
  className = "",
  hoverWiggle = true,
}: StickyNoteProps) {
  const variantClass =
    variant === "torn"
      ? "note-torn"
      : variant === "dashed"
        ? "note-dashed"
        : "shadow-paper-sm transition-shadow duration-300";

  const hoverShadowClass =
    variant === "plain" ? "hover:shadow-paper-hover" : "";

  const magnetic = useMagnetic<HTMLDivElement>({
    strength: 0.1,
    max: 8,
    lift: hoverWiggle ? -4 : 0,
  });

  return (
    <motion.div
      ref={magnetic.ref}
      className={`note-stitched border-soft relative p-5 sm:p-6 ${matteClasses[color]} ${variantClass} ${hoverShadowClass} ${className}`}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.onMouseMove}
      onMouseEnter={magnetic.onMouseEnter}
      onMouseLeave={magnetic.onMouseLeave}
    >
      {tape && (
        <WashiTape
          variant={tapeVariant}
          className={tapePositions[tapePosition]}
          rotation={tapePosition === "top-right" ? 5 : -5}
        />
      )}
      {children}
    </motion.div>
  );
}

/** Smaller pink blob for section titles */
export function ScallopedBubble({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <PinkBlob className={className} size="default">
      <span className="font-display text-xl font-bold sm:text-2xl">{children}</span>
    </PinkBlob>
  );
}
