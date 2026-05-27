export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "personal-life"
  | "geek-out";

export type Section = {
  id: SectionId;
  label: string;
  subtitle: string;
};

export const sections: Section[] = [
  {
    id: "about",
    label: "About Me",
    subtitle: "Education, skills & a bit about me",
  },
  {
    id: "experience",
    label: "Experience",
    subtitle: "Work, leadership & campus roles",
  },
  {
    id: "projects",
    label: "Projects",
    subtitle: "Hackathons & things I've built",
  },
  {
    id: "geek-out",
    label: "Geek Out",
    subtitle: "Tools, stack & tech rabbit holes",
  },
  {
    id: "personal-life",
    label: "Personal Life",
    subtitle: "Photos, moments & little joys",
  },
];
