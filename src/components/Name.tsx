import { Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";

export const Name = (): React.ReactElement => {
  const [firstNameText, setFirstNameText] = useState<string>("");
  const [lastNameText, setLastNameText] = useState<string>("");
  const [showLine, setShowLine] = useState<boolean>(false);
  const firstName = "Lucas";
  const lastName = "Galvão.";

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
        animateText(0, lastName.split(""), setLastNameText, () => {
          setShowLine(true);
        });
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="leading-8 min-h-48">
        <span className="text-8xl">{firstNameText}</span>
        <br />
        <span className="text-8xl">{lastNameText}</span>
        <div
          className={`h-2 bg-white ml-2 ${
            showLine ? "line-grow-animation" : "w-0"
          }`}
        ></div>
      </div>
      <div className="flex flex-row gap-4">
        <a href="https://www.linkedin.com/in/lucasm-galvao/" target="_blank">
          <Linkedin className="hover:text-purple-400" />
        </a>
        <a href="https://github.com/galvaolucas" target="_blank">
          <Github className="hover:text-purple-400" />
        </a>
      </div>
    </div>
  );
};