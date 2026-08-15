import type { StackGroup } from "@/types";

const devicon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

/** Fallback for brands devicon does not carry. `hex` has no leading `#`. */
const simpleicon = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

export const TECH_STACK: StackGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", logo: devicon("typescript"), color: "#3178C6", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", logo: devicon("javascript"), color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", logo: devicon("python"), color: "#3776AB", url: "https://www.python.org/" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: devicon("react"), color: "#61DAFB", url: "https://react.dev/" },
      { name: "Next.js", logo: devicon("nextjs"), color: "#FFFFFF", url: "https://nextjs.org/" },
      { name: "React Native", logo: devicon("react"), color: "#61DAFB", url: "https://reactnative.dev/" },
      { name: "Expo", logo: devicon("react"), color: "#61DAFB", url: "https://expo.dev/" },
      { name: "Tailwind CSS", logo: devicon("tailwindcss"), color: "#06B6D4", url: "https://tailwindcss.com/" },
      { name: "Material UI", logo: devicon("materialui"), color: "#007FFF", url: "https://mui.com/" },
      { name: "Mantine", logo: "https://avatars.githubusercontent.com/u/79146003?s=200&v=4", color: "#339AF0", url: "https://mantine.dev/" },
      { name: "shadcn/ui", logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", color: "#FFFFFF", url: "https://ui.shadcn.com/" },
    ],
  },
  {
    label: "Backend & data",
    items: [
      { name: "Node.js", logo: devicon("nodejs"), color: "#339933", url: "https://nodejs.org/" },
      { name: "NestJS", logo: devicon("nestjs"), color: "#E0234E", url: "https://nestjs.com/" },
      { name: "PostgreSQL", logo: devicon("postgresql"), color: "#336791", url: "https://www.postgresql.org/" },
      { name: "MongoDB", logo: devicon("mongodb"), color: "#47A248", url: "https://www.mongodb.com/" },
      { name: "SQL Server", logo: devicon("microsoftsqlserver", "plain"), color: "#CC2927", url: "https://learn.microsoft.com/en-us/sql/sql-server/" },
      { name: "TimescaleDB", logo: simpleicon("timescale", "FDB515"), color: "#FDB515", url: "https://www.timescale.com/" },
      { name: "TypeORM", logo: simpleicon("typeorm", "FE0803"), color: "#FE0803", url: "https://typeorm.io/" },
    ],
  },
  {
    label: "Cloud & infrastructure",
    items: [
      { name: "AWS", logo: devicon("amazonwebservices", "plain-wordmark"), color: "#FF9900", url: "https://aws.amazon.com/" },
      { name: "Google Cloud", logo: devicon("googlecloud"), color: "#4285F4", url: "https://cloud.google.com/" },
      { name: "Firebase", logo: devicon("firebase", "plain"), color: "#FFCA28", url: "https://firebase.google.com/" },
      { name: "Auth0", logo: simpleicon("auth0", "EB5424"), color: "#EB5424", url: "https://auth0.com/" },
      { name: "Terraform", logo: devicon("terraform"), color: "#844FBA", url: "https://www.terraform.io/" },
      { name: "GitHub Actions", logo: devicon("githubactions", "plain"), color: "#2088FF", url: "https://github.com/features/actions" },
    ],
  },
  {
    label: "Testing & tooling",
    items: [
      { name: "Playwright", logo: devicon("playwright"), color: "#2EAD33", url: "https://playwright.dev/" },
      { name: "Jest", logo: devicon("jest", "plain"), color: "#C21325", url: "https://jestjs.io/" },
      { name: "Storybook", logo: devicon("storybook"), color: "#FF4785", url: "https://storybook.js.org/" },
      { name: "Git", logo: devicon("git", "plain"), color: "#F05032", url: "https://git-scm.com/" },
      { name: "Figma", logo: devicon("figma"), color: "#F24E1E", url: "https://figma.com/" },
    ],
  },
];
