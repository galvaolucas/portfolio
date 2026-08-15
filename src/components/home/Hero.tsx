import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { LINKS, ROUTES, SITE } from "@/data/site";
import { WORK_EXPERIENCE } from "@/data/experience";
import { ButtonLink } from "@/components/ui/button";
import { yearsSince } from "@/lib/date";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useFirstVisitInSession, useTypewriter } from "@/hooks/useTypewriter";

const currentRole = WORK_EXPERIENCE.find((role) => role.end === null);

const STATS = [
  { value: `${yearsSince(SITE.since)}+`, label: "Years shipping software" },
  { value: `${WORK_EXPERIENCE.length}`, label: "Engineering roles" },
  { value: "100K+", label: "App downloads delivered" },
];

/** Roughly how long the name takes to type, so the rest can follow it in. */
const TYPING_MS = 250 + SITE.name.length * 90;

export const Hero = (): React.ReactElement => {
  const reducedMotion = usePrefersReducedMotion();
  const isFirstVisit = useFirstVisitInSession();
  const animate = isFirstVisit && !reducedMotion;

  const { typed, isDone } = useTypewriter(SITE.name, { enabled: animate });

  /**
   * Fade-and-rise for slot `index` of the run that follows the typing: the name
   * types itself, then everything below it staggers in behind it.
   */
  const afterTyping = (index: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            ease: "easeOut" as const,
            delay: TYPING_MS / 1000 + index * 0.08,
          },
        }
      : {};

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h1 id="home-heading" className="max-w-3xl">
          {/* Full name for assistive tech; the visual copy is revealed letter by
              letter and hidden from the accessibility tree. */}
          <span className="sr-only">
            {SITE.name} — {SITE.role}, {SITE.location}
          </span>

          <span
            aria-hidden
            className="grid text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {/* Invisible full name reserves the line box so nothing reflows. */}
            <span className="invisible col-start-1 row-start-1">
              {SITE.name}
            </span>
            <span className="col-start-1 row-start-1">
              {typed}
              {animate && !isDone && (
                <span className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse bg-accent align-middle" />
              )}
            </span>
          </span>

          <motion.span
            {...afterTyping(0)}
            aria-hidden
            className="mt-3 block text-xl font-normal text-ink-muted sm:text-2xl"
          >
            {SITE.role} · {SITE.location}
          </motion.span>
        </h1>

        <motion.p
          {...afterTyping(1)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty"
        >
          {SITE.bio}
        </motion.p>

        {currentRole && (
          <motion.p {...afterTyping(2)} className="mt-4 text-sm text-ink-subtle">
            Currently <span className="text-ink-muted">{currentRole.role}</span>{" "}
            at{" "}
            <a
              href={currentRole.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {currentRole.company}
            </a>
            .
          </motion.p>
        )}

        <motion.div
          {...afterTyping(3)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <ButtonLink href="#contact" variant="primary">
            <Mail size={16} aria-hidden />
            Get in touch
          </ButtonLink>
          <ButtonLink href={ROUTES.about} variant="secondary">
            About me
            <ArrowUpRight size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink href={LINKS.github} target="_blank" variant="ghost">
            GitHub
            <ArrowUpRight size={16} aria-hidden />
          </ButtonLink>
        </motion.div>

        <motion.dl
          {...afterTyping(4)}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-surface px-5 py-4">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight text-ink">
                  {value}
                </span>
                <span className="mt-1 block font-mono text-xs text-ink-subtle">
                  {label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
