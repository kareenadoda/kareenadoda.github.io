"use client";

import { motion } from "framer-motion";

type DoodleProps = {
  className?: string;
  size?: number;
  variant?: "clean" | "sketchy";
};

export function FlowerDoodle({
  className = "",
  size = 64,
  variant = "clean",
}: DoodleProps) {
  if (variant === "sketchy") {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        className={className}
        aria-hidden
      >
        <circle cx="40" cy="40" r="6" fill="#1a1a1a" />
        {[0, 51, 103, 154, 206, 257].map((deg, i) => (
          <ellipse
            key={deg}
            cx="40"
            cy="40"
            rx="9"
            ry="20"
            fill="white"
            stroke="#1a1a1a"
            strokeWidth={i % 2 === 0 ? 2.2 : 1.8}
            transform={`rotate(${deg} 40 40)`}
            opacity={0.95}
          />
        ))}
        {/* Extra sketch lines */}
        <path
          d="M 40 18 Q 44 28 40 32 M 58 40 Q 48 44 44 40"
          stroke="#1a1a1a"
          strokeWidth="1.2"
          fill="none"
          opacity="0.4"
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="32" r="5" fill="#1a1a1a" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="32"
          rx="10"
          ry="22"
          fill="white"
          stroke="#1a1a1a"
          strokeWidth="2"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
    </motion.svg>
  );
}

export function StarDoodle({
  className = "",
  size = 32,
  filled = false,
}: DoodleProps & { filled?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <path
        d="M16 2 L19.5 12 L30 12 L21.5 18.5 L25 29 L16 22.5 L7 29 L10.5 18.5 L2 12 L12.5 12 Z"
        fill={filled ? "#1a1a1a" : "white"}
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {filled && (
        <path
          d="M16 6 L18 12 L24 12 L19 16 L21 24 L16 20 L11 24 L13 16 L8 12 L14 12 Z"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.8"
          opacity="0.3"
        />
      )}
    </svg>
  );
}

export function ScatteredDoodles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-60">
      <FlowerDoodle
        className="absolute -left-6 top-[18%]"
        size={64}
        variant="sketchy"
      />
      <FlowerDoodle
        className="absolute right-[3%] top-[22%]"
        size={48}
        variant="sketchy"
      />
      <StarDoodle className="absolute left-[6%] bottom-[28%]" size={32} filled />
      <StarDoodle className="absolute right-[10%] bottom-[35%]" size={24} />
    </div>
  );
}
