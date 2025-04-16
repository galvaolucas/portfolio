import { Github, Linkedin } from "lucide-react";
import { Link } from "./ui/Link";

export const TopBar = (): React.ReactElement => {
  return (
    <div className="text-isabelline flex flex-row items-start justify-between">
      <div className="">
        <a href="/" target="_self" className="cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}/public/logos/logo-white.png`}
            width={80}
            height={80}
            alt="logo_white"
          />
        </a>
      </div>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/lucasm-galvao/" target="_blank">
          <Linkedin className="hover:text-purple-400" />
        </a>
        <a href="https://github.com/galvaolucas" target="_blank">
          <Github className="hover:text-purple-400" />
        </a>
        <Link
          label="Blog"
          href="/blog"
          className="text-isabelline hover:text-purple-400"
        />
      </div>
    </div>
  );
};
