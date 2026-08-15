/** Single source of truth for identity, links and copy used across the site. */

const EMAIL = "lucasmelogalv@gmail.com";

/** Gmail compose URL, so the CTA works even without a desktop mail client. */
const composeUrl = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const SITE = {
  name: "Lucas Galvão",
  initials: "LG",
  role: "Software Engineer",
  location: "Brazil",
  /** Year the first line of professional code shipped — drives the "N years" stat. */
  since: 2020,
  headline: "I build web and mobile products that ship.",
  bio: "Full-stack engineer working with multiple technologies. I can help you to build cool things.",
  email: EMAIL,
  emailUrl: composeUrl(
    "Hello from your portfolio",
    "Hi Lucas,\n\n",
  ),
} as const;

export const LINKS = {
  github: "https://github.com/galvaolucas",
  linkedin: "https://www.linkedin.com/in/lucasm-galvao/",
  /** Repo backing the star/fork counter in the footer. */
  repo: { owner: "galvaolucas", name: "portfolio" },
} as const;

/**
 * Header nav. In-page `#` targets must match the `id` of a <Section>; the blog
 * entry is a route, so it is resolved below once ROUTES is defined.
 */
export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Writing", href: `${import.meta.env.BASE_URL}blog` },
  { label: "Contact", href: "#contact" },
] as const;

/** Router-aware absolute paths (respects the `/portfolio/` base path). */
export const ROUTES = {
  home: import.meta.env.BASE_URL,
  blog: `${import.meta.env.BASE_URL}blog`,
  about: `${import.meta.env.BASE_URL}blog/who-am-i`,
} as const;
