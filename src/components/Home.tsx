import type React from "react";
import { useEffect, useState } from "react";
import { Introducing } from "./Introducing";
import { TopBar } from "./TopBar";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export const Home = (): React.ReactElement => {
  const [firstNameText, setFirstNameText] = useState<string>("");
  const [lastNameText, setLastNameText] = useState<string>("");
  const firstName = "I CAN HELP YOU";
  const lastName = "TO CRAFT THINGS";

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
      animateText(0, firstName.split(""), setFirstNameText, () => {
        animateText(0, lastName.split(""), setLastNameText);
      });
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full px-12 py-8 text-isabelline">
      <TopBar />
      <div className="w-full h-full flex items-center justify-end">
        <Introducing />
      </div>
      <div className="flex flex-row items-end justify-between min-h-52">
        <div>
          <span className="text-8xl font-anton">{firstNameText}</span>
          <br />
          <span className="text-8xl font-anton">{lastNameText}</span>
        </div>
        <Button iconRight={<ArrowRight />}>
          <a href="#experience">About me</a>
        </Button>
      </div>
    </div>
  );
};
