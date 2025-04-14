import { twMerge } from "tailwind-merge";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./ui/LoadingScreen";

export const Page = (): React.ReactElement => {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <BaseSection className="bg-gradient-to-b from-space-cadet via-dark-purple to-night relative">
        <>
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: showLoading ? 1 : 0 }}
          >
            <LoadingScreen />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: showLoading ? 0 : 1 }}
          >
            <Home />
          </div>
        </>
      </BaseSection>
      <BaseSection className="bg-night">
        <h1 className="text-white text-4xl">Page 2</h1>
      </BaseSection>
      <BaseSection>
        <h1 className="text-white text-4xl">Page 3</h1>
      </BaseSection>
    </div>
  );
};

const BaseSection = ({
  children,
  className,
}: {
  children: React.ReactElement;
  className?: string;
}): React.ReactElement => {
  return (
    <section
      className={twMerge(
        "h-screen snap-start flex items-center justify-center",
        className
      )}
    >
      {children}
    </section>
  );
};
