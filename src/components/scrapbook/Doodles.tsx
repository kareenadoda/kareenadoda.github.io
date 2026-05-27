"use client";

import { motion } from "framer-motion";

const float = (delay: number, y = 6) => ({
  y: [0, -y, 0],
  transition: { duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const decorations = [
  { emoji: "🌻", className: "left-[6%] top-[14%] text-3xl sm:text-4xl", delay: 0 },
  { emoji: "💗", className: "right-[8%] top-[20%] text-2xl sm:text-3xl", delay: 0.6 },
  { emoji: "💫", className: "left-[10%] bottom-[22%] text-2xl sm:text-3xl", delay: 1.2 },
] as const;

export function FloatingEmojis() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {decorations.map(({ emoji, className, delay }) => (
        <motion.span
          key={emoji}
          className={`absolute select-none ${className}`}
          animate={float(delay, 8)}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
}
