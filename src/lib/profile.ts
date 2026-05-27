export const profile = {
  name: "Kareena Vijay Doda",
  shortName: "Kareena",
  phone: "(848) 437-0696",
  email: "kareenadoda5@gmail.com",
  linkedin: "https://linkedin.com/in/kareena-doda",
  github: "https://github.com/kareenadoda",
  tagline: "CS @ Rutgers Honors College",
  linkedinHeadline:
    "CS @ Rutgers · Prev. SDE Intern Amazon · IDEA · Women in Product",
  introSubline: "A little corner of the internet —",
  introHighlight: "part scrapbook, part portfolio.",
};

export const images = {
  heroLaughing: "/images/kareena-laughing.png",
  heroOutdoor: "/images/kareena-outdoor.png",
  womenInProduct: "/images/women-in-product.png",
  amazonOffice: "/images/amazon-office.png",
  amazonRooftop: "/images/amazon-rooftop.png",
} as const;

export type ExperienceImage = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape";
  rotation?: number;
  tapeVariant?: "white" | "pink-stripe" | "pink-dots";
};

export const education = {
  school: "Rutgers University, New Brunswick",
  degree: "Bachelor of Science in Computer Science",
  minor: "Minor in Business Administration",
  graduation: "May 2027",
  gpa: "3.8 / 4.0",
};

export const skills = {
  languages: [
    "Java",
    "C",
    "Python",
    "TypeScript",
    "JavaScript",
    "React.js",
    "SQL",
    "HTML",
  ],
  tools: [
    "AWS",
    "Bedrock",
    "GitHub",
    "Docker",
    "Power BI",
    "Tableau",
    "Excel",
    "PowerPoint",
  ],
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  location?: string;
  role: string;
  period: string;
  bullets: string[];
  kind: "work" | "club";
  image?: string;
  imageAlt?: string;
  gallery?: ExperienceImage[];
};

export const experiences: ExperienceEntry[] = [
  {
    id: "rutgers-la",
    organization: "Rutgers University — Dept. of Computer Science",
    location: "New Brunswick, NJ",
    role: "Lead Learning Assistant — Data Structures",
    period: "Aug 2025 – Present · promoted from Learning Assistant (Aug 2024)",
    kind: "work",
    bullets: [
      "Promoted to Lead LA: manage a team of 30 learning assistants as they lead recitation classes.",
      "Conduct kickoff and staff meetings to coordinate the course across sections.",
      "Assist the Department Head in running the course smoothly and efficiently.",
      "As Learning Assistant (Aug 2024 – Aug 2025): led 3 cohorts of 80+ students, reinforcing HashMaps, Trees, Queues, and core data structures.",
      "Graded quizzes and assignments; provided guidance and resolved student questions on lecture material.",
    ],
  },
  {
    id: "amazon",
    organization: "Amazon",
    location: "New York, NY",
    role: "Software Development Engineer Intern",
    period: "May 2025 – Aug 2025",
    kind: "work",
    gallery: [
      {
        src: images.amazonOffice,
        alt: "Kareena at Amazon NYC office",
        aspect: "portrait",
        rotation: -3,
        tapeVariant: "white",
      },
      {
        src: images.amazonRooftop,
        alt: "Amazon internship — NYC rooftop",
        aspect: "landscape",
        rotation: 4,
        tapeVariant: "pink-stripe",
      },
    ],
    bullets: [
      "SDE Intern on the Grocery Shopping Experience team under the Loyalty & Rewards charter.",
      "Spearheaded an MCP server to automate merchant onboarding and loyalty integrations.",
      "Built a full-stack system with AWS, Bedrock, and a custom MCP client — cut review time from 6 to 2 weeks.",
      "Engineered prompts to fine-tune LLM behavior for code quality and contextual accuracy in production.",
    ],
  },
  {
    id: "microsoft",
    organization: "Microsoft",
    location: "New York, NY",
    role: "Summer Mentee — NYC Mentorship Program",
    period: "July 2024 – Aug 2024",
    kind: "work",
    gallery: [
      {
        src: "/images/personal/hackathon-presentation.png",
        alt: "Presenting to Senior Management",
        aspect: "landscape",
        rotation: -3,
        tapeVariant: "white",
      },
      {
        src: "/images/personal/hackathon-team.png",
        alt: "Hackathon Team!",
        aspect: "portrait",
        rotation: 3,
        tapeVariant: "pink-stripe",
      },
      {
        src: "/images/personal/linkedin-empire-state.png",
        alt: "LinkedIn @ Empire State",
        aspect: "landscape",
        rotation: -2,
        tapeVariant: "white",
      },
      {
        src: "/images/personal/microsoft-cube-nyc.png",
        alt: "Microsoft Cube in NYC",
        aspect: "portrait",
        rotation: 4,
        tapeVariant: "pink-stripe",
      },
    ],
    bullets: [
      "Connected with 50+ mentors alongside 15 mentees; gained insights into navigating professional careers and the corporate landscape.",
      "Explored roles across software development, PM, CSAM, sales & marketing, sustainability, FastTrack, and Employee Resource Groups (ERGs).",
      "Built FinFolio with teammates — an AI-powered personal finance advisor using Azure and ChatGPT 4.0 Mini.",
      "Presented end-of-summer recap to mentors and leadership on accomplishments and the hackathon project.",
    ],
  },
  {
    id: "idea",
    organization: "IDEA — Emerging Technologies Program, Rutgers",
    location: "New Brunswick, NJ",
    role: "Research Intern — Design Research",
    period: "May 2024 – Aug 2024",
    kind: "work",
    bullets: [
      "Worked with startup NextBreath to build the front-end of an iOS app for COPD patients using React Native and JavaScript.",
      "Researched 30 features for audiences ages 65+; prioritized 10 based on business requirements, code complexity, and UX needs.",
      "Conducted market research on competitor strengths/weaknesses and identified Tri-state area clinics to support the business model.",
      "Fine-tuned the founders' pitch deck using guidance from Y Combinator and Pitch.com.",
      "Analyzed the COPD 360 Social forum to identify common pain points and tags from patients' perspectives.",
    ],
  },
  {
    id: "wip",
    organization: "Women in Product — Rutgers",
    location: "New Brunswick, NJ",
    role: "Treasurer & Events Committee Chair",
    period: "Apr 2024 – Mar 2025",
    kind: "club",
    image: images.womenInProduct,
    imageAlt: "Women in Product at Rutgers — group photo",
    bullets: [
      "Managed club finances and oversaw events as Treasurer and Events Committee Chair.",
      "Organized Product Making competitions, PM workshops, and hosted the club's first Etiquette Dinner.",
      "Educated fellow students on product management and product design; helped them build professional skills and portfolios.",
      "Led workshops to share a passion for PM and grow product interest across campus.",
    ],
  },
  {
    id: "honors",
    organization: "Rutgers Honors College",
    location: "New Brunswick, NJ",
    role: "Student Ambassador",
    period: "Mar 2024 – Feb 2025",
    kind: "club",
    bullets: [
      "Engaged prospective students on university settings, academic opportunities, and extracurricular life.",
      "Answered questions to help ease the transition into college for incoming Honors College students.",
    ],
  },
];

export type ProjectEntry = {
  id: string;
  title: string;
  award?: string;
  period: string;
  bullets: string[];
  tags: string[];
  href?: string;
};

export const projects: ProjectEntry[] = [
  {
    id: "finfolio",
    title: "FinFolio",
    award: "HackHERS 2025 — Best Mobile App",
    period: "Feb 2025",
    tags: ["React Native", "Python", "FastAPI", "Plaid", "AI"],
    href: "#",
    bullets: [
      "Budgeting app with React Native, Python, FastAPI, and Plaid for secure real-time bank data.",
      "Adaptive AI for savings goals, subscriptions, and credit card benefits.",
      "Linear regression to auto-adjust budgets; 99.95% fraud detection accuracy.",
    ],
  },
  {
    id: "safespace",
    title: "SafeSpace",
    award: "HackRU Runner-Up — Education Track",
    period: "Nov 2024",
    tags: ["React.js", "SQLite", "GPT-3.5", "RAG", "WebSockets"],
    href: "#",
    bullets: [
      "AI edtech platform delivering WHO-backed reproductive health content to underserved schools.",
      "Private chatbot with GPT-3.5 & RAG on verified data for secure student interactions.",
      "Interactive games (Flappy Bird, Matchy Cards) plus eModules for engagement.",
      "Live counselor chats via WebSockets in a full-stack React.js & SQLite app.",
    ],
  },
];

export const contactLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    description: "linkedin.com/in/kareena-doda",
  },
  {
    id: "email",
    label: "Gmail",
    href: `mailto:${profile.email}`,
    description: profile.email,
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.github,
    description: "github.com/kareenadoda",
  },
] as const;
