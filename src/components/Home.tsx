import type React from "react";
import { TopBar } from "./TopBar";
import { Name } from "./Name";
import { AboutMe } from "./AboutMe";

export const Home = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-16">
        <TopBar />
      <div className="flex flex-row justify-between">
        <Name />
        <AboutMe />
      </div>
    </div>
  );
};
