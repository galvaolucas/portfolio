import { Github, Linkedin } from "lucide-react";
import { LINKS, NAV_ITEMS, ROUTES, SITE } from "@/data/site";
import { ExternalLink } from "@/components/ui/link";
import logo from "@/assets/logo-white.png";

const SOCIALS = [
  { label: "GitHub", href: LINKS.github, Icon: Github },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: Linkedin },
];

const linkClass =
  "rounded-full px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink";

export const Nav = (): React.ReactElement => (
  <header className="sticky top-0 z-50 border-b border-line/60 bg-canvas/80 px-6 backdrop-blur-md md:px-10 lg:px-16">
    <nav
      aria-label="Primary"
      className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between"
    >
      <a
        href={ROUTES.home}
        className="flex items-center gap-3"
        aria-label={`${SITE.name} — home`}
      >
        <img src={logo} alt="" width={28} height={28} aria-hidden />
        <span className="hidden text-sm font-medium text-ink sm:inline">
          {SITE.name}
        </span>
      </a>

      <div className="flex items-center gap-0.5 sm:gap-1">
        {NAV_ITEMS.map(({ label, href }) => (
          <a key={href} href={href} className={linkClass}>
            {label}
          </a>
        ))}

        <span className="mx-1.5 h-4 w-px bg-line" aria-hidden />

        {SOCIALS.map(({ label, href, Icon }) => (
          <ExternalLink
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="rounded-full p-2 text-ink-subtle hover:bg-surface hover:text-ink"
          >
            <Icon size={17} aria-hidden />
          </ExternalLink>
        ))}
      </div>
    </nav>
  </header>
);
