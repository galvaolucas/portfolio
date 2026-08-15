import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** Rendered as the section's eyebrow and used as its accessible name. */
  title?: string;
  /** Short line under the title. */
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

/**
 * One snap stop. `min-h-screen` rather than `h-screen`: sections still fill the
 * viewport, but a section whose content is taller (Work, on a laptop) grows
 * instead of clipping.
 */
export const Section = ({
  id,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionProps): React.ReactElement => {
  const headingId = title ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        // Padding is deliberately modest: a snap section only works if its
        // content fits the viewport, and generous vertical padding is the first
        // thing that pushes content off the bottom on a short laptop screen.
        "flex min-h-screen flex-col justify-center px-6 py-14 md:px-10 md:py-20 lg:px-16",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-5xl", contentClassName)}>
        {title && (
          <header className="mb-8 md:mb-12">
            <h2
              id={headingId}
              className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-3 max-w-xl text-base text-ink-muted md:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};
