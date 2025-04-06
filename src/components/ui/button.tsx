import { twMerge } from "tailwind-merge";

interface TButton {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "ghost";
  type?: "link" | "button";
  href?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined
}

export const Button = ({
  className,
  onClick,
  label,
  variant = "default",
  type = "button",
  href,
  target = '_blank',
}: TButton): React.ReactElement => {
  const base = "cursor-pointer relative overflow-hidden";
  const variants = {
    default: "",
    ghost: "bg-transparent text-white",
  };

  if (type === "link") {
    return (
      <button
        className={twMerge(base, className, variants[variant])}
        onClick={onClick}
      >
        <a href={href} target={target}>
          {label}
        </a>
      </button>
    );
  }
  return (
    <button
      className={twMerge(
        base,
        className,
        variants[variant],
        "before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};