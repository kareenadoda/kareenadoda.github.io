import fs from "node:fs";
import path from "node:path";

/**
 * Private, per-company recruiter pages served at /for/<slug>.
 *
 * Content lives in content/recruiter-pages.json (plus images in public/p/),
 * both gitignored so they never show up in the public repo. They're committed
 * only inside the encrypted content/recruiter-private.enc, which CI unpacks
 * with the RECRUITER_KEY secret (see scripts/recruiter-bundle.sh). Without
 * it, the committed example file is used so the route still builds.
 *
 * Only import this from server components — it reads the filesystem at build
 * time, and each page receives just its own company's data.
 */

export type RecruiterPage = {
  /** Unguessable URL segment, e.g. "examplecorp-a1b2c3d4". */
  slug: string;
  company: string;
  /** Line under the "Kareena at <company>" heading; defaults to a short thank-you. */
  intro?: string;
  /** Skills that matter at this company, and where Kareena learned each one. */
  skills: { skill: string; learnedAt: string; howItApplies: string }[];
  /** Optional short intro to a project, shown just before the "fit" note. */
  spotlight?: { title: string; body: string };
  /** Why Kareena would be a good fit at the company. Omit to skip that note. */
  fit?: { title: string; body: string }[];
  /** What Kareena has learned about the company so far, optionally with handwritten notes. */
  learned: { title: string; body: string; notes?: HandwrittenNotes }[];
};

/** Expandable handwritten note pages shown under a "learned" bullet. */
export type HandwrittenNotes = {
  title: string;
  /** Image paths under public/p/<random>/ (gitignored, shipped via the private bundle). */
  pages: string[];
};

const privateFile = path.join(process.cwd(), "content", "recruiter-pages.json");
const exampleFile = path.join(process.cwd(), "content", "recruiter-pages.example.json");

export function getRecruiterPages(): RecruiterPage[] {
  const file = fs.existsSync(privateFile) ? privateFile : exampleFile;
  return JSON.parse(fs.readFileSync(file, "utf8")) as RecruiterPage[];
}

export function getRecruiterPage(slug: string): RecruiterPage | undefined {
  return getRecruiterPages().find((page) => page.slug === slug);
}
