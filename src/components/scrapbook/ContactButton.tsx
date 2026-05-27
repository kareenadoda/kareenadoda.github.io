"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactLinks } from "@/lib/profile";
import { WashiTape } from "./WashiTape";

/** Fan arc: each card pivots from the contact button (bottom-right). */
const fanLayout = [
  { angle: 128, radius: 92, rotate: -10, color: "bg-[var(--color-note-yellow)]" },
  { angle: 108, radius: 108, rotate: -4, color: "bg-[var(--color-note-white)]" },
  { angle: 88, radius: 96, rotate: 4, color: "bg-[var(--color-note-pink)]" },
] as const;

function fanOffset(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round(radius * Math.cos(rad)),
    y: Math.round(-radius * Math.sin(rad)),
  };
}

const spring = { type: "spring" as const, stiffness: 220, damping: 26 };

export function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/[0.06]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            aria-label="Close contact menu"
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 right-0 z-50">
        <AnimatePresence>
          {open &&
            contactLinks.map((link, i) => {
              const layout = fanLayout[i] ?? fanLayout[1];
              const { x, y } = fanOffset(layout.angle, layout.radius);

              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.id === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`border-soft absolute bottom-0 right-0 block w-[7.5rem] origin-bottom-right px-3 py-2.5 shadow-[2px_3px_0_rgba(0,0,0,0.08)] ${layout.color}`}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    x,
                    y,
                    scale: 1,
                    rotate: layout.rotate,
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0.5,
                    rotate: 0,
                    transition: { duration: 0.2, delay: (2 - i) * 0.04 },
                  }}
                  transition={{
                    ...spring,
                    delay: i * 0.07,
                  }}
                  whileHover={{
                    scale: 1.06,
                    transition: { duration: 0.15 },
                  }}
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-sm font-bold leading-tight">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block truncate font-hand text-[10px] leading-tight text-[var(--color-muted)]">
                    {link.id === "email" ? "kareenadoda5@gmail.com" : link.description}
                  </span>
                </motion.a>
              );
            })}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="nav-tab relative matte-pink z-[60] px-5 py-3 font-display text-sm font-bold shadow-[2px_3px_0_rgba(0,0,0,0.08)] sm:text-base"
          style={{ rotate: open ? "0deg" : "-2deg" }}
          animate={{ scale: open ? 1.02 : 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={spring}
          aria-expanded={open}
          aria-haspopup="true"
        >
          <WashiTape
            variant="white"
            className="absolute -top-2.5 left-1/2 z-20 w-12 -translate-x-1/2"
            rotation={-3}
          />
          <span className="relative whitespace-nowrap">
            {open ? "Close" : "Contact me ✉"}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
