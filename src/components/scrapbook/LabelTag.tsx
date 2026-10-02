"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/lib/useMagnetic";

type LabelTagProps = {
  children: React.ReactNode;
  color?: "pink" | "yellow";
  className?: string;
};

export function LabelTag({
  children,
  color = "pink",
  className = "",
}: LabelTagProps) {
  const bg =
    color === "pink"
      ? "bg-[var(--color-note-pink)] matte-pink"
      : "bg-[var(--color-note-yellow)] matte-yellow";
  const magnetic = useMagnetic<HTMLSpanElement>({ strength: 0.12, max: 5 });

  return (
    <motion.span
      ref={magnetic.ref}
      className={`border-soft relative inline-block rounded-[var(--radius-soft-sm)] px-4 py-1.5 font-display text-sm font-bold shadow-paper-sm ${bg} ${className}`}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
    >
      <span
        className="pointer-events-none absolute inset-1 rounded-[0.65rem] border border-dashed border-white/50"
        aria-hidden
      />
      <span className="relative">{children}</span>
    </motion.span>
  );
}
