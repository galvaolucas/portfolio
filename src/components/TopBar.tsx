import { Github, Linkedin } from "lucide-react";
import { Link } from "./ui/Link";
import { useIsMobile } from "@/hooks/useIsMobile";

const mode = import.meta.env.MODE;

export const TopBar = (): React.ReactElement => {
  const { isMobile } = useIsMobile();

  return (
    <div className="text-isabelline flex flex-row items-start justify-between">
      <div className="">
        <a href="/" target="_self" className="cursor-pointer">
          <img
            src={mode === 'development' ? `logos/logo-white.png` : `${import.meta.env.BASE_URL}/logos/logo-white.png`}
            width={isMobile ? 40 : 80}
            height={isMobile ? 40 : 80}
            alt="logo_white"
          />
        </a>
      </div>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/lucasm-galvao/" target="_blank">
          <Linkedin className="hover:text-purple-400 text-purple-400 md:text-white" />
        </a>
        <a href="https://github.com/galvaolucas" target="_blank">
          <Github className="hover:text-purple-400 text-purple-400 md:text-white" />
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
