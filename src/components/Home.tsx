import type React from "react";
import { useEffect, useState } from "react";
import { Introducing } from "./Introducing";
import { ArrowRight } from "lucide-react";
import { TopBar } from "./TopBar";
import { CustomButton } from "./ui/CustomButton";

export const Home = (): React.ReactElement => {
  const [part1, setPart1] = useState<string>("");
  const [part2, setPart2] = useState<string>("");
  const first = "I CAN HELP YOU";
  const second = "TO CRAFT THINGS";

  const animateText = (
    index: number,
    letters: string[],
    setText: React.Dispatch<React.SetStateAction<string>>,
    callback?: () => void
  ): void => {
    if (index < letters.length) {
      setText((prev) => prev + letters[index]);
      setTimeout(() => animateText(index + 1, letters, setText, callback), 100);
    } else if (callback) {
      callback();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateText(0, first.split(""), setPart1, () => {
        animateText(0, second.split(""), setPart2);
      });
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col h-full px-6 md:px-12 py-6 text-isabelline">
      <TopBar />
      <div className="h-full flex items-center justify-end">
        <Introducing />
      </div>
      <div className="flex flex-row items-end justify-end md:justify-between min-h-52">
        <div className="hidden md:block">
          <span className="text-8xl font-anton">{part1}</span>
          <br />
          <span className="text-8xl font-anton">{part2}</span>
        </div>
        <CustomButton iconRight={<ArrowRight />}>
          <a href="#experience">About me</a>
        </CustomButton>
      </div>
    </div>
  );
};
