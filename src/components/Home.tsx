import type React from "react";
import { Name } from "./Name";
import { AboutMe } from "./AboutMe";
import { TechnologiesList } from "./TechnologiesCard";

export const Home = (): React.ReactElement => {
  return (
    <div className="relative flex flex-col gap-16 overflow-hidden h-full">
      <div className="flex flex-row items-center justify-between mt-24">
        <Name />
        <AboutMe />
      </div>
      <TechnologiesList />
    </div>
  );
};
