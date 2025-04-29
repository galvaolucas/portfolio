import { getPortfolioRepoData } from "@/api";
import { Star, GitFork, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { CustomButton } from "./custom/CustomButton";

export const GetInTouch = (): React.ReactElement => {
  const [data, setData] = useState<{
    forks_count: number;
    stargazers_count: number;
  }>({ forks_count: 0, stargazers_count: 0 });

  useEffect(() => {
    void getPortfolioRepoData().then((res) => setData(res));
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-8 w-full h-full pt-44">
      <div className="flex flex-col items-center gap-8 md:gap-4">
        <div className="text-8xl font-anton text-isabelline text-center md:text-start">GET IN TOUCH</div>
        <div className="text-gray-600 text-xl text-center italic">
          Whether you have a question or just want to say hi, <br />
          I’ll try my best to get back to you!
        </div>
        <div className="mt-4">
          <CustomButton className="w-52" iconRight={<Mail />}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lucasmelogalv@gmail.com&su=Portfolio%20Contact&body=Leave%20your%20message%20here."
              target="_blank"
            >
              Send a message
            </a>
          </CustomButton>
        </div>
      </div>
      <div className="text-indigo pb-8 font-gochi text-lg">
        Designed and built by Lucas Galvão
        <div className="flex flex-row gap-2 font-inter text-base items-center justify-center text-indigo">
          <div className="flex flex-row gap-2">
            <Star width={20} height={20} />
            {data.stargazers_count}
          </div>
          <div className="flex flex-row gap-2">
            <GitFork width={20} height={20} />
            {data.forks_count}
          </div>
        </div>
      </div>
    </div>
  );
};
