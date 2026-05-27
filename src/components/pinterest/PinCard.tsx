"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PersonalPin } from "@/lib/personal-life";

const flow = { type: "spring" as const, stiffness: 260, damping: 28 };

type PinCardProps = {
  pin: PersonalPin;
  index: number;
};

export function PinCard({ pin, index }: PinCardProps) {
  const hasImage = Boolean(pin.image);
  const hasText = Boolean(pin.title || pin.caption);
  const rotation = index % 3 === 0 ? -0.6 : index % 3 === 1 ? 0.5 : -0.3;

  return (
    <motion.article
      className="pin-card mb-4 break-inside-avoid"
      style={{ rotate: `${rotation}deg` }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...flow, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.01, rotate: 0, transition: { duration: 0.2 } }}
    >
      <div className="pin-card-inner overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        {hasImage ? (
          <div
            className={`relative w-full overflow-hidden bg-[var(--color-stripe-cream)] ${
              pin.tall ? "aspect-[3/4]" : "aspect-[4/5]"
            }`}
          >
            <Image
              src={pin.image!}
              alt={pin.title ?? pin.caption ?? "Personal life"}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 280px"
            />
          </div>
        ) : (
          <div
            className={`pin-placeholder flex flex-col items-center justify-center px-4 text-center ${
              pin.tall ? "min-h-[220px]" : "min-h-[140px]"
            }`}
          >
            {!hasText && (
              <>
                <span className="text-3xl opacity-80" aria-hidden>
                  📌
                </span>
                <p className="mt-2 font-hand text-xs text-[var(--color-muted)]">
                  your photo here
                </p>
              </>
            )}
          </div>
        )}

        {hasText && (
          <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
            {pin.title && (
              <h3 className="font-display text-sm font-bold leading-snug text-[var(--color-ink)] sm:text-base">
                {pin.title}
              </h3>
            )}
            {pin.caption && (
              <p
                className={`font-hand text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm ${
                  pin.title ? "mt-1.5" : ""
                }`}
              >
                {pin.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
