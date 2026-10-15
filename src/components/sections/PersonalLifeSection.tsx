"use client";

import { personalLifePins } from "@/lib/personal-life";
import { PinCard } from "@/components/pinterest/PinCard";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function PersonalLifeSection() {
  return (
    <div className="personal-life-board">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <SectionHeading>Personal Life</SectionHeading>
        <p className="font-hand text-sm text-[var(--color-muted)]">
          scroll to explore ↓
        </p>
      </div>

      <div className="pinterest-masonry">
        {personalLifePins.map((pin, i) => (
          <PinCard key={pin.id} pin={pin} index={i} />
        ))}
      </div>
    </div>
  );
}
