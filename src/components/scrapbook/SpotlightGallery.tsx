"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ExperienceImage } from "@/lib/profile";
import { WashiTape } from "./WashiTape";

const spring = { type: "spring" as const, stiffness: 180, damping: 24 };

type SpotlightGalleryProps = {
  photos: ExperienceImage[];
};

function PolaroidFrame({
  photo,
  isSpotlight,
  onSelect,
}: {
  photo: ExperienceImage;
  isSpotlight: boolean;
  onSelect?: () => void;
}) {
  const aspect =
    photo.aspect === "landscape"
      ? "aspect-[4/3]"
      : "aspect-[3/4]";

  const frame = (
    <>
      <WashiTape
        variant={photo.tapeVariant ?? "white"}
        className={`absolute z-20 -translate-x-1/2 ${isSpotlight ? "-top-3 left-1/2 w-16" : "-top-2 left-1/2 w-11"}`}
        rotation={-4}
      />
      <motion.div
        layout
        className={`matte-paper border-soft overflow-hidden rounded-[var(--radius-soft)] bg-white shadow-[2px_4px_0_rgba(0,0,0,0.08)] ${
          isSpotlight ? "p-3 pb-4 sm:p-3.5 sm:pb-5" : "p-2 pb-2.5 opacity-95"
        }`}
        transition={spring}
      >
        <div
          className={`relative w-full overflow-hidden bg-[var(--color-stripe-cream)] ${aspect} ${
            isSpotlight ? "min-h-[15rem] sm:min-h-[19rem] md:min-h-[21rem]" : "min-h-[6.5rem] sm:min-h-[7.5rem]"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes={isSpotlight ? "(max-width: 640px) 85vw, 520px" : "160px"}
          />
        </div>
        {isSpotlight && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-center font-hand text-xs text-[var(--color-muted)] sm:text-sm"
          >
            {photo.alt}
          </motion.p>
        )}
      </motion.div>
      {!isSpotlight && (
        <p className="mt-1.5 text-center font-hand text-[10px] text-[var(--color-muted)]">
          tap to view
        </p>
      )}
    </>
  );

  const sharedProps = {
    layout: true as const,
    layoutId: photo.src,
    transition: spring,
    className: `relative block w-full text-left ${
      isSpotlight ? "z-10" : "z-0 cursor-pointer"
    }`,
    style: { rotate: isSpotlight ? 0 : (photo.rotation ?? -4) },
  };

  if (isSpotlight) {
    return (
      <motion.div {...sharedProps} aria-label={photo.alt}>
        {frame}
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      {...sharedProps}
      className={`${sharedProps.className} focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-note-pink)] focus-visible:ring-offset-2`}
      whileHover={{ scale: 1.05, rotate: (photo.rotation ?? -4) + 2 }}
      whileTap={{ scale: 0.97 }}
      aria-label={`View ${photo.alt}`}
    >
      {frame}
    </motion.button>
  );
}

export function SpotlightGallery({ photos }: SpotlightGalleryProps) {
  const [active, setActive] = useState(0);

  if (photos.length < 2) {
    return null;
  }

  const spotlight = photos[active];
  const sideIndex = (active + 1) % photos.length;
  const side = photos[sideIndex];

  return (
    <div className="mb-5 w-full">
      <div className="flex items-end gap-3 sm:gap-4">
        {/* Spotlight — large */}
        <motion.div className="min-w-0 flex-[2]" layout transition={spring}>
          <PolaroidFrame photo={spotlight} isSpotlight />
        </motion.div>

        <motion.div
          className="mb-1 min-w-0 flex-[0.85] max-w-[10rem] sm:max-w-[12rem]"
          layout
          transition={spring}
        >
          <PolaroidFrame
            photo={side}
            isSpotlight={false}
            onSelect={() => setActive(sideIndex)}
          />
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="mt-3 flex justify-center gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-[var(--color-tape-pink)]"
                : "w-2 bg-[var(--color-border-soft)] hover:bg-[var(--color-note-pink)]"
            }`}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
