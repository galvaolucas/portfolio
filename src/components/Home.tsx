import type React from "react";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col w-full h-full items-start justify-end font-anton p-8 text-white">
      <span className="text-8xl">{firstNameText}</span>
      <br />
      <span className="text-8xl">{lastNameText}</span>
    </div>
  );
};
