import { twMerge } from "tailwind-merge";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import { Stack } from "./Stack";
import { Experience } from "./Experience";
import { GetInTouch } from "./GetInTouch";
import { LoadingScreen } from "./custom/LoadingScreen";

export const Page = (): React.ReactElement => {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <BaseSection id="home" className="bg-black relative">
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
      {!showLoading && (
        <>
          <BaseSection id="stack" className="bg-black">
            <Stack />
          </BaseSection>
          <BaseSection className="bg-black" id="experience">
            <Experience />
          </BaseSection>
          <BaseSection className="bg-black" id="getintouch">
            <GetInTouch />
          </BaseSection>
        </>
      )}
    </div>
  );
};

const BaseSection = ({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactElement;
  className?: string;
}): React.ReactElement => {
  return (
    <section
      id={id}
      className={twMerge(
        "h-screen snap-start flex items-center justify-center px-4 md:px-12 overflow-x-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};
