import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/experience";
import { formatDuration, formatRange } from "@/lib/date";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { Experience as TExperience } from "@/types";

export const Experience = (): React.ReactElement => {
  const [activeId, setActiveId] = useState(WORK_EXPERIENCE[0].id);
  const active =
    WORK_EXPERIENCE.find((role) => role.id === activeId) ?? WORK_EXPERIENCE[0];
  const baseId = useId();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /** Roving focus: arrow keys move between tabs, Home/End jump to the ends. */
  const onKeyDown = (event: React.KeyboardEvent) => {
    const offset = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[
      event.key
    ];
    const index = WORK_EXPERIENCE.findIndex((role) => role.id === activeId);

    let next: number | undefined;
    if (offset !== undefined) {
      next =
        (index + offset + WORK_EXPERIENCE.length) % WORK_EXPERIENCE.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = WORK_EXPERIENCE.length - 1;
    }

    if (next === undefined) return;
    event.preventDefault();
    const nextId = WORK_EXPERIENCE[next].id;
    setActiveId(nextId);
    tabRefs.current[nextId]?.focus();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-12">
      <div
        role="tablist"
        aria-label="Companies"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        // `scroll-px-6` keeps the snap point inside the padding, otherwise the
        // browser scrolls the first tab flush to the viewport edge on mount.
        className="hide-scrollbar -mx-6 flex snap-x scroll-px-6 gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:scroll-px-0 lg:px-0"
      >
        {WORK_EXPERIENCE.map((role) => {
          const selected = role.id === activeId;
          return (
            <button
              key={role.id}
              ref={(node) => {
                tabRefs.current[role.id] = node;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${role.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${role.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(role.id)}
              className={cn(
                "relative shrink-0 snap-start rounded-lg px-4 py-3 text-left transition-colors duration-200 lg:w-full",
                selected
                  ? "bg-surface text-ink"
                  : "text-ink-subtle hover:bg-surface/60 hover:text-ink-muted",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="active-role"
                  aria-hidden
                  className="absolute inset-y-2 -left-px hidden w-0.5 rounded-full bg-accent lg:block"
                />
              )}
              <span className="block text-sm font-medium whitespace-nowrap">
                {role.company}
              </span>
              {/* The role disambiguates the two spells at the same company. */}
              <span className="mt-0.5 block text-xs whitespace-nowrap text-ink-subtle">
                {role.role}
              </span>
              <span className="mt-1 block font-mono text-[11px] whitespace-nowrap text-ink-subtle/70">
                {formatRange(role.start, role.end)}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <Detail
          key={active.id}
          role={active}
          panelId={`${baseId}-panel-${active.id}`}
          tabId={`${baseId}-tab-${active.id}`}
        />
      </AnimatePresence>
    </div>
  );
};

const Detail = ({
  role,
  panelId,
  tabId,
}: {
  role: TExperience;
  panelId: string;
  tabId: string;
}): React.ReactElement => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-w-0 rounded-xl border border-line bg-surface p-6 md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-ink md:text-xl">
            {role.role}
          </h3>
          <a
            href={role.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-strong"
          >
            {role.company}
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </div>
        <div className="text-right font-mono text-xs text-ink-subtle">
          <p>{formatRange(role.start, role.end)}</p>
          <p className="mt-1">{formatDuration(role.start, role.end)}</p>
        </div>
      </div>

      <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-subtle">
        <MapPin size={13} aria-hidden />
        {role.location}
        {role.remote && " · Remote"}
      </p>

      <p className="mt-5 text-sm leading-relaxed text-ink-muted text-pretty">
        {role.summary}
      </p>

      {/*
        Impact stays visible and responsibilities fold away. Previously both
        lived in a fixed-height scroll area, which made the whole section taller
        than a laptop viewport — so anchoring to it left the bottom cut off.
        A native <details> needs no JS and collapses to a single row.
      */}
      <Block title="Impact" items={role.highlights} marker="accent" className="mt-5" />

      {role.responsibilities.length > 0 && (
        <details className="group mt-4 border-t border-line pt-4">
          <summary className="cursor-pointer list-none font-mono text-[11px] font-medium tracking-[0.16em] text-ink-subtle uppercase transition-colors marker:content-none hover:text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <ChevronRight
                size={12}
                aria-hidden
                className="transition-transform duration-200 group-open:rotate-90"
              />
              Responsibilities ({role.responsibilities.length})
            </span>
          </summary>
          <Block
            title=""
            items={role.responsibilities}
            marker="muted"
            className="mt-3"
          />
        </details>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
        {role.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-line bg-surface-raised px-2 py-1 font-mono text-[11px] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Block = ({
  title,
  items,
  marker,
  className,
}: {
  title: string;
  items: string[];
  marker: "accent" | "muted";
  className?: string;
}): React.ReactElement | null => {
  if (!items.length) return null;

  return (
    <div className={className}>
      {title && (
        <h4 className="font-mono text-[11px] font-medium tracking-[0.16em] text-ink-subtle uppercase">
          {title}
        </h4>
      )}
      <ul className={cn("space-y-2", title && "mt-3")}>
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-ink-muted"
          >
            <span
              aria-hidden
              className={cn(
                "mt-2 h-1 w-1 shrink-0 rounded-full",
                marker === "accent" ? "bg-accent" : "bg-line-strong",
              )}
            />
            <span className="text-pretty">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
