import { useLocation } from "react-router-dom";
import { Link } from "./ui/link";
import { Button } from "./ui/button";

export const TopBar = (): React.ReactElement => {
  const { pathname } = useLocation();
  return (
    <div className="text-white flex flex-row items-center justify-between rounded-full bg-radial from-0% from-[#262626] to-[#1a1a1a] p-2 px-6">
      <div className="">
        <a href="/" target="_self" className="cursor-pointer">
          <img
            src="/logos/logo-white.png"
            width={60}
            height={60}
            alt="logo_white"
          />
        </a>
      </div>
      <div className="flex gap-4">
        {!(pathname === '/') && <Link label="Home" href="/" />}
        <Link label="Experience" href="/experience" className={pathname === '/experience' ? 'text-purple-400' : ''} />
        <Link label="Projects" href="/projects" className={pathname === '/projects' ? 'text-purple-400' : ''} />
        <Link label="About me" href="/about-me" className={pathname === '/about-me' ? 'text-purple-400' : ''} />
        <Link label="Blog" href="/blog" className={pathname === '/blog' ? 'text-purple-400' : ''} />
      </div>
      <Button variant="default" label="Get in touch" />
    </div>
  );
};
