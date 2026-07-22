export const profile = {
  name: "Kareena Vijay Doda",
  shortName: "Kareena",
  email: "kareenadoda5@gmail.com",
  linkedin: "https://linkedin.com/in/kareena-doda",
  github: "https://github.com/kareenadoda",
  tagline: "CS @ Rutgers Honors College",
  linkedinHeadline:
    "CS @ Rutgers · Prev. SDE Intern Amazon · IDEA · Women in Product",
  introSubline:
    "A little corner on the internet- part scrapbook, part portfolio <3",
};

export const images = {
  heroLaughing: "/images/kareena-laughing.png",
  heroOutdoor: "/images/kareena-outdoor.png",
  womenInProduct: "/images/women-in-product.png",
  amazonOffice: "/images/amazon-office.png",
  amazonRooftop: "/images/amazon-rooftop.png",
  amazonSantaClara: "/images/amazon-santa-clara.png",
  ideaNextBreathPoster: "/images/idea-nextbreath-poster.png",
  ideaHatcheryPresentation: "/images/idea-hatchery-presentation.png",
  rutgersLogo: "/images/rutgers-logo.png",
} as const;

export type ExperienceImage = {
  src: string;
  alt: string;
  rotation?: number;
  tapeVariant?: "white" | "pink-stripe" | "pink-dots";
  objectPosition?: string;
};

export const education = {
  school: "Rutgers University, New Brunswick",
  degree: "Bachelor of Science in Computer Science",
  minor: "Minor in Business Administration",
  graduation: "May 2027",
  gpa: "3.8 / 4.0",
  logo: images.rutgersLogo,
  logoAlt: "Rutgers University Block R logo",
};

export const skills = {
  languagesAndTools: [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "Node.js",
    "React Native",
    "FastAPI",
    "Git",
    "Docker",
    "REST APIs",
  ],
  cloudAndAi: [
    "AWS",
    "Amazon Bedrock",
    "Cache-Augmented Generation (CAG)",
    "Model Context Protocol (MCP)",
    "LLM Integration",
    "Prompt Engineering",
  ],
} as const;

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
    id: "amazon-2026",
    organization: "Amazon",
    location: "Santa Clara, CA",
    role: "Software Development Engineer Intern",
    period: "May 2026 – Aug 2026",
    kind: "work",
    image: images.amazonSantaClara,
    imageAlt: "View from Amazon Santa Clara office",
    bullets: [
      "Working on the Rufus (Alexa for Shopping) team to learn more about agents and caching.",
    ],
  },
  {
    id: "rutgers-la",
    organization: "Rutgers University — Dept. of Computer Science",
    location: "New Brunswick, NJ",
    role: "Lead Learning Assistant — Data Structures",
    period: "Aug 2025 – May 2025 · Learning Assistant (Aug 2024 – May 2025)",
    kind: "work",
    bullets: [
      "Promoted to Lead LA: manage a team of 30 learning assistants as they lead recitation classes.",
      "Conduct kickoff and staff meetings to coordinate the course across sections.",
      "Assist the Department Head in running the course smoothly and efficiently.",
      "As Learning Assistant (Aug 2024 – May 2025): led 3 cohorts of 80+ students, reinforcing HashMaps, Trees, Queues, and core data structures.",
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
        rotation: -3,
        tapeVariant: "white",
      },
      {
        src: images.amazonRooftop,
        alt: "Amazon internship — NYC rooftop",
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
        rotation: -3,
        tapeVariant: "white",
      },
      {
        src: "/images/personal/hackathon-team.png",
        alt: "Hackathon Team!",
        rotation: 3,
        tapeVariant: "pink-stripe",
      },
      {
        src: "/images/personal/linkedin-empire-state.png",
        alt: "LinkedIn @ Empire State",
        rotation: -2,
        tapeVariant: "white",
      },
      {
        src: "/images/personal/microsoft-cube-nyc.png",
        alt: "Microsoft Cube in NYC",
        rotation: 4,
        tapeVariant: "pink-stripe",
        objectPosition: "center 20%",
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
    gallery: [
      {
        src: images.ideaNextBreathPoster,
        alt: "NextBreath research poster at IDEA showcase",
        rotation: -3,
        tapeVariant: "white",
        objectPosition: "65% center",
      },
      {
        src: images.ideaHatcheryPresentation,
        alt: "Presentation at The Hatchery — Rutgers IDEA program",
        rotation: 4,
        tapeVariant: "pink-stripe",
      },
    ],
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
    href: "https://github.com/Aimankoli/finfolio",
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
    href: "https://github.com/Prabhat-Shastri/Safe_Space",
    bullets: [
      "AI edtech platform delivering WHO-backed reproductive health content to underserved schools.",
      "Private chatbot with GPT-3.5 & RAG on verified data for secure student interactions.",
      "Interactive games (Flappy Bird, Matchy Cards) plus eModules for engagement.",
      "Live counselor chats via WebSockets in a full-stack React.js & SQLite app.",
    ],
  },
  {
    id: "ru-cafe-android",
    title: "RU Cafe",
    period: "Dec 2025",
    tags: ["Java", "Android", "Gradle", "MVC", "RecyclerView"],
    href: "https://github.com/KBhalodia/Project5",
    bullets: [
      "Android port of our JavaFX cafe POS — multi-screen app for donuts, coffee, sandwiches, and order management.",
      "Shared OrderManager keeps cart state across activities; RecyclerView adapters for custom menu options.",
      "Capstone mobile build co-developed with Kavya Bhalodia; mirrors the desktop RUDonuts workflow on API 24+.",
    ],
  },
  {
    id: "rudonuts-javafx",
    title: "RUDonuts",
    period: "Nov 2025",
    tags: ["Java", "JavaFX", "FXML", "MVC", "JUnit"],
    href: "https://github.com/KBhalodia/GUI-programming-with-JavaFX-4",
    bullets: [
      "JavaFX point-of-sale system with dynamic pricing for donuts, coffee, and sandwiches.",
      "Multi-screen MVC architecture — FXML controllers, live order totals with tax, and export to StoreOrders.txt.",
      "JUnit tests for coffee and sandwich pricing; co-developed with Kavya Bhalodia.",
    ],
  },
  {
    id: "ru-fleet-inheritance",
    title: "RU Fleet System",
    period: "Oct 2025",
    tags: ["Java", "Inheritance", "Polymorphism", "JUnit", "Data Structures"],
    href: "https://github.com/KBhalodia/Project-2-Inheritance-Polymorphism",
    bullets: [
      "Fleet management CLI extended with Sedan, Truck, and Utility vehicle subtypes and campus-based pricing.",
      "Custom growable List and Sort utilities (no ArrayList); file-based fleet loading from vehicles.txt.",
      "JUnit tests for date validation, surcharges, and vehicle comparison — co-developed with Kavya Bhalodia.",
    ],
  },
  {
    id: "vehicle-management",
    title: "Vehicle Management System",
    period: "Sep 2025",
    tags: ["Java", "OOP", "MVC", "CLI"],
    href: "https://github.com/KBhalodia/Project-1-OOP",
    bullets: [
      "Command-line fleet manager for vehicles, employee bookings, trips, and department-based reporting.",
      "MVC design with validated input for dates, makes, mileage, and booking conflicts.",
      "Foundation OOP coursework project co-developed with Kavya Bhalodia.",
    ],
  },
  {
    id: "lotka-volterra-dashboard",
    title: "Lotka–Volterra Market Dashboard",
    period: "Dec 2025",
    tags: ["Python", "Streamlit", "Plotly", "SciPy", "Data Science"],
    href: "https://github.com/Minty9000/Predator-vs-Prey",
    bullets: [
      "Models Apple vs Samsung US market share as a Lotka–Volterra competition system with Huawei as a third competitor.",
      "Fits ODE parameters via SciPy, analyzes residuals, and detects dominance/equilibrium regimes.",
      "Interactive Streamlit dashboard with scenario selection, smoothing, and Plotly charts — co-developed with Minty9000.",
    ],
  },
  {
    id: "assessment-graph-analysis",
    title: "Student Assessment Graph Analysis",
    period: "Oct 2025",
    tags: ["Python", "NetworkX", "Pandas", "scikit-learn", "Data Viz"],
    href: "https://github.com/Minty9000/data_presentation",
    bullets: [
      "Network analysis of student self-assessment skill data — wrangling, normalization, and similarity graphs.",
      "NetworkX graphs at multiple distance thresholds; degree distributions and connected component analysis.",
      "Exports interactive 2D/3D visualizations; Rutgers CS439 project co-developed with Minty9000.",
    ],
  },
  {
    id: "dbscan-outliers",
    title: "DBSCAN Outlier Detection",
    period: "Nov 2025",
    tags: ["Python", "DBSCAN", "scikit-learn", "PCA", "Clustering"],
    href: "https://github.com/Minty9000/DBSCAN",
    bullets: [
      "Identifies outlier students from self-assessed skills and quiz scores using DBSCAN clustering.",
      "KNN distance + elbow method for epsilon tuning; PCA visualization of clusters and noise points.",
      "Rutgers CS439 project co-developed with Minty9000.",
    ],
  },
  {
    id: "sql-regression-cs439",
    title: "SQL & Health Regression (CS439)",
    period: "Sep 2025",
    tags: ["Python", "SQL", "MySQL", "Linear Regression", "Pandas"],
    href: "https://github.com/Minty9000/intro-to-data-sql-project",
    bullets: [
      "HDMA mortgage data pipeline — zip extraction, MySQL loading, state-level stats, and high-risk applicant detection.",
      "Memory-efficient multiple linear regression on CDC BRFSS data predicting health from education, income, and BMI.",
      "Rutgers CS439 group project co-developed with Minty9000.",
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
