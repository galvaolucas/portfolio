import { twMerge } from "tailwind-merge";

interface TButton {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "ghost";
}

export const Button = ({
  className,
  onClick,
  label,
  variant = "default",
}: TButton): React.ReactElement => {
  const base = "cursor-pointer relative overflow-hidden font-medium";
  const variants = {
    default: "bg-purple-800 text-white p-2 px-4 rounded-full hover:bg-purple-600 active:bg-purple-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102",
    ghost: "bg-transparent text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full",
  };

  return (
    <button
      className={twMerge(
        base,
        className,
        variants[variant],
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};