import { twMerge } from "tailwind-merge";

export const BaseLayout = ({
  children,
  className,
}: {
  children: React.ReactElement;
  className?: string
}): React.ReactElement => {
  return (
    <div
      className={twMerge("w-screen p-8", className)}
    >
      {children}
    </div>
  );
};
