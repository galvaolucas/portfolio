import { twMerge } from "tailwind-merge";

interface TButton {
  children: string | React.ReactElement;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "ghost";
  iconRight?: React.ReactElement
}

export const Button = ({
  className,
  onClick,
  children,
  variant = "default",
  iconRight,
}: TButton): React.ReactElement => {
  const base = twMerge("cursor-pointer relative overflow-hidden font-semibold", iconRight && 'flex flex-row gap-2');
  const variants = {
    default: "bg-gradient-to-r from-isabelline to-purple-600 text-night p-2 px-4 rounded-full hover:opacity-95 active:opacity-80 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102",
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
      {children}{iconRight && iconRight}
    </button>
  );
};