import { TECH_STACK } from "@/data/stack";
import { ExternalLink } from "@/components/ui/link";
import type { StackItem } from "@/types";

export const Stack = (): React.ReactElement => (
  <div className="space-y-5">
    {TECH_STACK.map((group) => (
      <div
        key={group.label}
        className="grid gap-2 border-t border-line pt-4 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] md:gap-8"
      >
        <h3 className="font-mono text-xs tracking-[0.16em] text-ink-subtle uppercase">
          {group.label}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li key={`${group.label}-${item.name}`}>
              <Pill item={item} />
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Pill = ({ item }: { item: StackItem }): React.ReactElement => (
  <ExternalLink
    href={item.url}
    target="_blank"
    style={{ "--pill-accent": item.color } as React.CSSProperties}
    className="group flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-sm text-ink-muted hover:border-(--pill-accent) hover:text-ink"
  >
    <img
      src={item.logo}
      alt=""
      aria-hidden
      width={16}
      height={16}
      loading="lazy"
      decoding="async"
      className="h-4 w-4 object-contain opacity-70 transition-opacity duration-200 group-hover:opacity-100"
    />
    {item.name}
  </ExternalLink>
);
