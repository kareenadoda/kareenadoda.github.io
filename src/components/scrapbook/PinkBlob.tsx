"use client";

import { motion } from "framer-motion";

type PinkBlobProps = {
  children: React.ReactNode;
  className?: string;
  size?: "hero" | "default";
};

export function PinkBlob({ children, className = "", size = "default" }: PinkBlobProps) {
  const dimensions =
    size === "hero"
      ? "w-full max-w-[min(100%,520px)]"
      : "w-full max-w-[320px]";

  return (
    <motion.div
      className={`relative mx-auto ${dimensions} ${className}`}
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <svg
        viewBox="0 0 520 220"
        className="h-auto w-full drop-shadow-[0_6px_0_rgba(26,26,26,0.12)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="pinkMatte" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fce4ec" />
            <stop offset="35%" stopColor="#f8c4d4" />
            <stop offset="70%" stopColor="#f0b0c4" />
            <stop offset="100%" stopColor="#e8a8bc" />
          </linearGradient>
          <linearGradient id="pinkMatteShade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.06)" />
          </linearGradient>
        </defs>
        {/* Main wavy blob — like "Group Project" slide */}
        <path
          d="M 42 118
             C 38 62, 98 28, 158 38
             C 188 18, 228 32, 268 28
             C 318 22, 368 42, 398 68
             C 438 48, 478 78, 478 118
             C 478 158, 438 188, 388 178
             C 348 198, 298 182, 248 188
             C 198 198, 148 182, 98 188
             C 58 192, 42 158, 42 118 Z"
          fill="url(#pinkMatte)"
          stroke="#1a1a1a"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M 42 118
             C 38 62, 98 28, 158 38
             C 188 18, 228 32, 268 28
             C 318 22, 368 42, 398 68
             C 438 48, 478 78, 478 118
             C 478 158, 438 188, 388 178
             C 348 198, 298 182, 248 188
             C 198 198, 148 182, 98 188
             C 58 192, 42 158, 42 118 Z"
          fill="url(#pinkMatteShade)"
        />
        {/* White dashed "stitching" inside */}
        <path
          d="M 58 118
             C 56 72, 108 48, 158 54
             C 188 40, 222 50, 262 48
             C 308 44, 352 58, 382 78
             C 412 64, 458 88, 458 118
             C 458 148, 418 168, 378 162
             C 338 176, 288 164, 248 168
             C 198 176, 148 164, 108 168
             C 72 172, 58 148, 58 118 Z"
          fill="none"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2"
          strokeDasharray="7 5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pb-2 pt-2 text-center">
        {children}
      </div>
    </motion.div>
  );
}
