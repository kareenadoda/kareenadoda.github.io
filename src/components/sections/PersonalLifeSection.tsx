"use client";

import { personalLifePins } from "@/lib/personal-life";
import { PinCard } from "@/components/pinterest/PinCard";
import { LabelTag } from "@/components/scrapbook/LabelTag";

export function PersonalLifeSection() {
  return (
    <div className="personal-life-board">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <LabelTag className="!px-5 !py-2 !text-lg">Personal Life</LabelTag>
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
