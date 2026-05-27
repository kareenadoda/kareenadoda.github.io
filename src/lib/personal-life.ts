/**
 * Personal Life — Pinterest-style pins
 *
 * Add images to /public/images/personal/ and reference them below.
 */
export type PersonalPin = {
  id: string;
  image?: string;
  title?: string;
  caption?: string;
  /** Taller pin in the masonry grid */
  tall?: boolean;
};

export const personalLifePins: PersonalPin[] = [
  {
    id: "hackathon-presentation",
    image: "/images/personal/personal-1.png",
    tall: true,
  },
  {
    id: "hackathon-team",
    image: "/images/personal/personal-2.png",
    tall: false,
  },
  {
    id: "linkedin-empire-state",
    image: "/images/personal/personal-3.png",
    tall: true,
  },
  {
    id: "microsoft-cube",
    image: "/images/personal/personal-4.png",
    tall: true,
  },
  {
    id: "pin-img-5",
    image: "/images/personal/personal-5.png",
    tall: false,
  },
  {
    id: "pin-img-6",
    image: "/images/personal/personal-6.png",
    tall: true,
  },
  {
    id: "pin-img-7",
    image: "/images/personal/personal-7.png",
    tall: false,
  },
  {
    id: "coming-soon",
    title: "More coming soon…",
  },
];
