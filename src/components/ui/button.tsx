import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ink text-canvas hover:bg-white",
        secondary:
          "border border-line bg-surface text-ink hover:border-line-strong hover:bg-surface-raised",
        ghost: "text-ink-muted hover:text-ink",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof button> & { className?: string };

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  variant,
  size,
  ...props
}: ButtonProps): React.ReactElement => (
  <button className={cn(button({ variant, size }), className)} {...props} />
);

export type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * An anchor styled as a button. Kept separate from `Button` so we never nest an
 * `<a>` inside a `<button>` — which is what the old `CustomButton` did.
 */
export const ButtonLink = ({
  className,
  variant,
  size,
  target,
  rel,
  ...props
}: ButtonLinkProps): React.ReactElement => (
  <a
    className={cn(button({ variant, size }), className)}
    target={target}
    rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
    {...props}
  />
);
