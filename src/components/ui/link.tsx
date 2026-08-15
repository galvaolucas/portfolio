import { cn } from "@/lib/utils";

export type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * An anchor that adds `rel="noopener noreferrer"` whenever it opens a new tab,
 * so no individual call site has to remember to.
 */
export const ExternalLink = ({
  className,
  target,
  rel,
  ...props
}: ExternalLinkProps): React.ReactElement => (
  <a
    className={cn("transition-colors duration-200", className)}
    target={target}
    rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
    {...props}
  />
);

/** Text link with an underline that wipes in on hover. */
export const UnderlineLink = ({
  className,
  ...props
}: ExternalLinkProps): React.ReactElement => (
  <ExternalLink
    className={cn(
      "relative text-ink-muted hover:text-ink",
      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full",
      className,
    )}
    {...props}
  />
);
