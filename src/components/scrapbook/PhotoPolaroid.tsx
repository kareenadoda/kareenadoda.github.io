"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { WashiTape } from "./WashiTape";

type Aspect = "portrait" | "landscape" | "square";

type PhotoPolaroidProps = {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  caption?: string;
  priority?: boolean;
  tapeVariant?: "white" | "pink-stripe" | "pink-dots";
  aspect?: Aspect;
  imageScale?: number;
  objectPosition?: string;
  matchRowHeight?: boolean;
};

const aspectClass: Record<Aspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function PhotoPolaroid({
  src,
  alt,
  className = "",
  rotation = -2,
  caption,
  priority = false,
  tapeVariant = "white",
  aspect = "portrait",
  imageScale = 1,
  objectPosition = "center",
  matchRowHeight = false,
}: PhotoPolaroidProps) {
  const cardRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 22, mass: 0.6 };
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [7, -7]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-7, 7]),
    springConfig
  );

  function handlePointerMove(e: React.MouseEvent<HTMLElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.figure
      ref={cardRef}
      className={`group relative shrink-0 ${matchRowHeight ? "flex h-full flex-col" : ""} ${className}`}
      style={{
        rotate: rotation,
        rotateX,
        rotateY,
        transformPerspective: 700,
      }}
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      whileHover={{ scale: 1.03, rotate: rotation + 1 }}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <WashiTape
        variant={tapeVariant}
        className="absolute -top-2.5 left-1/2 z-20 w-12 -translate-x-1/2"
        rotation={-4}
      />
      <div
        className={`matte-paper border-soft flex flex-col overflow-hidden rounded-[var(--radius-soft)] bg-white p-2 pb-3 shadow-paper-sm transition-shadow duration-300 group-hover:shadow-paper-hover ${
          matchRowHeight ? "h-full min-h-0 flex-1" : ""
        }`}
      >
        <div
          className={`relative w-full overflow-hidden rounded-[var(--radius-soft-sm)] bg-[var(--color-stripe-cream)] ${
            matchRowHeight ? "min-h-[11rem] flex-1 sm:min-h-[13rem] md:min-h-0 md:h-full" : aspectClass[aspect]
          }`}
        >
          <div
            className="absolute inset-0"
            style={imageScale !== 1 ? { transform: `scale(${imageScale})` } : undefined}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              style={{ objectPosition }}
              sizes="(max-width: 640px) 42vw, 220px"
              priority={priority}
            />
          </div>
        </div>
        {caption && (
          <figcaption className="mt-2 text-center font-hand text-xs text-[var(--color-muted)]">
            {caption}
          </figcaption>
        )}
      </div>
    </motion.figure>
  );
}
