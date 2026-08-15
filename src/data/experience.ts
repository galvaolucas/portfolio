import type { Experience } from "@/types";

/**
 * Roles are authored in any order and sorted for display by `sortExperience`:
 * ongoing roles first, then most recently finished.
 */
const ROLES: Experience[] = [
  {
    id: "glacier",
    role: "Software Engineer",
    company: "Glacier",
    companyUrl: "https://endwaste.io/",
    location: "San Francisco, CA 🇺🇸",
    remote: true,
    start: "2025-09",
    end: null,
    summary:
      "Glacier builds AI-powered robots that sort recyclables inside material recovery facilities, identifying 70+ material categories in real time.",
    highlights: [
      "Building Argus, a platform that monitors MRF's runtime, providing insights and live-data to help MRF management and operations, playing a role as Tech Lead.",
      "Built GPD - Glacier Performance Dashboard, that provides fleet data in almost real time.",
    ],
    responsibilities: [
      "Own end-to-end development of Argus features, from database schema design through backend APIs to React frontend, working closely with the product team to translate MRF operational needs into monitoring tools.",
      "Design and maintain the PostgreSQL/TimescaleDB data layer powering fleet and facility metrics, including schema changes and data provisioning for scanners and users across deployed sites.",
      "Built and maintain a React Flow-based interactive facility map that visualizes conveyor belt layouts, scanner placements, and real-time material flow across MRF sites.",
      "Develop shared UI components (@glacier/ui) used across Glacier's frontend products, improving consistency and reducing duplication between GPD and Argus.",
      "Contribute to CI/CD pipelines and cloud data pipelines supporting reliable, near real-time data delivery from facility hardware to dashboards.",
    ],
    stack: ["Typescript", "React.js", "FastAPI", "Python"],
  },
  {
    id: "instacasa",
    role: "Software Developer",
    company: "InstaCasa",
    companyUrl: "https://instacasa.com.br/",
    location: "São Paulo, Brazil 🇧🇷",
    remote: true,
    start: "2022-01",
    end: "2025-09",
    summary:
      "InstaCasa sells standardised architectural designs to people who have just bought a plot of land, with preview and customisation built into the platform. The company needed to retire its legacy stack without pausing delivery, so new technology was rolled out incrementally alongside the old.",
    highlights: [
      "Completed a 100% platform migration to a new stack with no delivery freeze.",
      "Increased release frequency 5×.",
      "Took the platform's core flows to full automated and end-to-end test coverage.",
      "Led InstaCasa's first B2C financing product end to end, widening customer access to financing.",
    ],
    responsibilities: [
      "Built the React admin application used to run the company.",
      "Built the customer-facing application offering projects and financing to land buyers.",
      "Helped building the Node.js API that backs both as the core system.",
      "Set up unit, feature and end-to-end testing, plus the CI/CD pipeline around them.",
      "Provisioned applications on Elastic Beanstalk, Amplify and EC2.",
      "Ran code reviews, war-room support with the team.",
    ],
    stack: [
      "Typescript",
      "Javascript",
      "Python",
      "React.js",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "TypeORM",
      "Material UI",
      "TailwindCSS",
      "Storybook",
      "AWS",
      "Google Cloud Platform",
    ],
  },
  {
    id: "carter-labs",
    role: "Frontend Engineer",
    company: "Carter Labs",
    companyUrl: "https://www.carter.chat/",
    location: "United Kingdom 🇬🇧",
    remote: true,
    start: "2024-10",
    end: "2025-03",
    summary:
      "Carter.chat is an AI character platform with hundreds of thousands of creators. Rapid growth had outpaced the website's performance, and the company needed a scalable mobile chat app built from scratch alongside it.",
    highlights: [
      "Shipped the Carter.chat app to 100K+ downloads across the App Store and Google Play.",
      "Improved website retention through UX work and a targeted caching strategy.",
      "Reached full end-to-end coverage of core flows on both web and mobile.",
    ],
    responsibilities: [
      "Built the Carter.chat mobile application with React Native and Expo.",
      "Fixed bugs and shipped improvements across the Carter.chat website.",
      "Set up end-to-end testing with Playwright on web and Maestro on mobile.",
      "Tuned performance and caching for better UX and lower resource cost.",
      "Managed state and data fetching with Zustand and React Query.",
    ],
    stack: [
      "Typescript",
      "Javascript",
      "React.js",
      "React Native",
      "Expo",
      "Mantine UI",
      "Zustand",
      "React Query",
      "Playwright",
      "Maestro",
    ],
  },
  {
    id: "info-sistemas",
    role: "Senior Software Analyst II",
    company: "Info Sistemas",
    companyUrl: "https://www.infosistemas.com.br/",
    location: "Belo Horizonte, Brazil 🇧🇷",
    remote: true,
    start: "2022-08",
    end: "2022-11",
    summary:
      "A fleet management system had accumulated enough legacy code that maintenance was eating the roadmap. The goal was to cut that cost by enforcing patterns, migrating off the legacy stack and tightening type safety.",
    highlights: [
      "Cut maintenance time by 50% across three core projects by improving TypeScript usage.",
      "Stabilised and optimised the fleet management system's key modules.",
    ],
    responsibilities: [
      "Fixed bugs and shipped features across multiple projects.",
      "Established coding patterns and practices aimed at long-term maintainability.",
      "Enforced stricter TypeScript conventions and improved type coverage.",
      "Optimised performance on both the frontend and the backend.",
      "Contributed through code reviews and sprint ceremonies.",
    ],
    stack: [
      "Typescript",
      "Javascript",
      "Angular.js",
      "Node.js",
      "Nest.js",
      "SQL Server",
      "Azure DevOps",
    ],
  },
  {
    id: "fix-it",
    role: "Junior Software Developer",
    company: "Fix It",
    companyUrl: "https://usefixit.com.br/",
    location: "Natal, Brazil 🇧🇷",
    remote: false,
    start: "2021-12",
    end: "2022-08",
    summary:
      "Fix It was building a streaming platform for 3D printing, which meant secure and performant integration between browser software and physical hardware. The same platform ran internal operations and external client interaction, so it had to be robust and usable at once.",
    highlights: [
      "Delivered a platform with high availability and consistent print-job performance.",
      "Built a browser-based GCode reader and editor that cut 3D print file registration time by 98%.",
    ],
    responsibilities: [
      "Built features and interfaces for customer and access management.",
      "Maintained the internal platform used by the 3D printing and design team.",
      "Kept the printing process stable and secure across the web interface.",
      "Implemented reading and processing of 3D GCode files via browser streaming.",
      "Automated manual workflows to cut operational overhead and user friction.",
    ],
    stack: [
      "Typescript",
      "Javascript",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Styled Components",
      "Google Cloud Platform",
    ],
  },
  {
    id: "fix-it-intern",
    role: "Software Development Intern",
    company: "Fix It",
    companyUrl: "https://usefixit.com.br/",
    location: "Natal, Brazil 🇧🇷",
    remote: false,
    start: "2021-08",
    end: "2021-12",
    summary:
      "Supported the engineering team on Fix It's internal management and 3D printing platforms while ramping up on the company's stack and workflows.",
    highlights: [
      "Shipped production-ready React and TypeScript code within the first month.",
      "Delivered a series of UI improvements to the team's internal tooling.",
    ],
    responsibilities: [
      "Built internal interfaces with React.js and Styled Components.",
      "Maintained and improved UI components against design and usability specs.",
      "Debugged, tested and resolved frontend issues across ongoing projects.",
      "Took part in code reviews and team discussions on development practice.",
    ],
    stack: ["Typescript", "Javascript", "React.js", "Styled Components"],
  },
];

/** Ongoing roles first, then most recently finished. Ties break on start date. */
const sortExperience = (a: Experience, b: Experience): number => {
  if (a.end !== b.end) {
    if (a.end === null) return -1;
    if (b.end === null) return 1;
    if (a.end !== b.end) return b.end.localeCompare(a.end);
  }
  return b.start.localeCompare(a.start);
};

export const WORK_EXPERIENCE: Experience[] = [...ROLES].sort(sortExperience);
