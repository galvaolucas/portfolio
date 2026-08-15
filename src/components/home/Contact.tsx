import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { LINKS, SITE } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/link";

const CHANNELS = [
  { label: "Email", value: SITE.email, href: SITE.emailUrl, Icon: Mail },
  { label: "LinkedIn", value: "lucasm-galvao", href: LINKS.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "galvaolucas", href: LINKS.github, Icon: Github },
];

export const Contact = (): React.ReactElement => (
  <div className="grid gap-10 md:grid-cols-2 md:gap-16">
    <div>
      <p className="text-2xl leading-snug font-semibold tracking-tight text-balance text-ink sm:text-3xl">
        Have something you want built?
      </p>
      <p className="mt-4 max-w-md leading-relaxed text-ink-muted text-pretty">
        Whether it is a role, a project, or just a question about something on
        this site — I read everything and try to reply within a day or two.
      </p>
      <ButtonLink
        href={SITE.emailUrl}
        target="_blank"
        variant="primary"
        className="mt-8"
      >
        <Mail size={16} aria-hidden />
        Send a message
      </ButtonLink>
    </div>

    <ul className="divide-y divide-line border-y border-line">
      {CHANNELS.map(({ label, value, href, Icon }) => (
        <li key={label}>
          <ExternalLink
            href={href}
            target="_blank"
            className="group flex items-center gap-4 py-4 hover:bg-surface/60"
          >
            <Icon size={18} className="shrink-0 text-ink-subtle" aria-hidden />
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-xs text-ink-subtle">
                {label}
              </span>
              <span className="block truncate text-sm text-ink-muted group-hover:text-ink">
                {value}
              </span>
            </span>
            <ArrowUpRight
              size={16}
              aria-hidden
              className="shrink-0 text-ink-subtle transition-colors group-hover:text-accent"
            />
          </ExternalLink>
        </li>
      ))}
    </ul>
  </div>
);
