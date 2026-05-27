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
    title: "Your moment",
    caption: "Upload a photo and write a short caption about this memory.",
    tall: true,
  },
  {
    id: "hackathon-team",
    title: "Friends & fun",
    caption: "Add a group shot (or text-only note) from a weekend or event.",
    tall: false,
  },
  {
    id: "linkedin-empire-state",
    title: "Explore",
    caption: "A place you visited — short and sweet!",
    tall: true,
  },
  {
    id: "microsoft-cube",
    title: "Cozy corner",
    caption: "A vibe: study spot, café, home feeling, anything personal.",
    tall: true,
  },
  {
    id: "pin-text-1",
    title: "A thought",
    caption: "Quotes, notes, or a tiny takeaway you want to remember.",
    tall: false,
  },
  {
    id: "pin-text-2",
    title: "What I’m into",
    caption: "A hobby, playlist, book, recipe, or “currently loving” moment.",
    tall: false,
  },
];
