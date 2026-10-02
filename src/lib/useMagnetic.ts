"use client";

import { useCallback, useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type UseMagneticOptions = {
  /** Fraction of the pointer's offset from center applied as translation. */
  strength?: number;
  /** Max translation in px along each axis. */
  max?: number;
  /** Constant y offset applied while hovered (e.g. a "lift"), added on top of the pull. */
  lift?: number;
};

/**
 * Pulls an element gently toward the cursor as it moves within its bounds,
 * then springs back to rest on leave. Disabled under prefers-reduced-motion.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>({
  strength = 0.15,
  max = 8,
  lift = 0,
}: UseMagneticOptions = {}) {
  const ref = useRef<T>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 250, damping: 18, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(Math.max(-max, Math.min(max, relX * strength)));
      y.set(lift + Math.max(-max, Math.min(max, relY * strength)));
    },
    [strength, max, lift, prefersReducedMotion, x, y]
  );

  const onMouseEnter = useCallback(() => {
    if (prefersReducedMotion) return;
    if (lift) y.set(lift);
  }, [lift, prefersReducedMotion, y]);

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x: springX, y: springY, onMouseMove, onMouseEnter, onMouseLeave };
}
