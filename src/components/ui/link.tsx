import { twMerge } from "tailwind-merge";

export const Link = ({
  href,
  target = "_self",
  label,
  className,
}: {
  href: string;
  label: string;
  target?: "_self" | "_blank";
  className?: string
}): React.ReactElement => {
  const baseClassname = 'cursor-pointer relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full font-medium'
  return (
    <a className={twMerge(baseClassname, className)} href={href} target={target}>
      {label}
    </a>
  );
};
