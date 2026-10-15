"use client";

import Image from "next/image";
import { LabelTag } from "@/components/scrapbook/LabelTag";

const favouriteSongs = [
  {
    src: "/images/favourite-so-good.png",
    alt: "So Good (feat. Kendrick Lamar) by Jhené Aiko on Spotify",
  },
  {
    src: "/images/favourite-maahiya.png",
    alt: "Maahiya by Akashdeep Sengupta on Spotify",
  },
] as const;

export function CurrentFavouriteSongSection() {
  return (
    <div className="space-y-3">
      <LabelTag color="yellow">Current Favourite Songs</LabelTag>

      <p className="font-hand text-sm text-[var(--color-muted)]">
        on repeat lately 🎧
      </p>

      <div className="flex gap-2">
        {favouriteSongs.map((song) => (
          <div
            key={song.src}
            className="relative aspect-[690/140] min-w-0 flex-1 overflow-hidden rounded-md bg-black shadow-paper-sm"
          >
            <Image
              src={song.src}
              alt={song.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 45vw, 220px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
