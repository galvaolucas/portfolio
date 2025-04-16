import { twMerge } from "tailwind-merge";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./ui/LoadingScreen";
import { Stack } from "./Stack";
import { Experience } from "./Experience";

export const Page = (): React.ReactElement => {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <BaseSection id='home' className="relative bg-midnight">
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
      <BaseSection id='stack' className="bg-midnight">
        <Stack />
      </BaseSection>
      <BaseSection className="bg-black" id='experience' >
        <Experience />
      </BaseSection>
    </div>
  );
};

const BaseSection = ({
  id,
  children,
  className,
}: {
  id: string,
  children: React.ReactElement;
  className?: string;
}): React.ReactElement => {
  return (
    <section
      id={id}
      className={twMerge(
        "h-screen snap-start flex items-center justify-center px-12",
        className
      )}
    >
      {children}
    </section>
  );
};
