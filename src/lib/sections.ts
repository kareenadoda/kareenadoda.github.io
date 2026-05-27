export type SectionId = "about" | "projects" | "interests" | "geek-out";

export type Section = {
  id: SectionId;
  label: string;
  subtitle: string;
};

export const sections: Section[] = [
  {
    id: "about",
    label: "About Me",
    subtitle: "Who I am and what I do",
  },
  {
    id: "projects",
    label: "Projects",
    subtitle: "Things I've built",
  },
  {
    id: "interests",
    label: "Interests",
    subtitle: "What keeps me curious",
  },
  {
    id: "geek-out",
    label: "Geek Out",
    subtitle: "Features, tools & tech rabbit holes",
  },
];
