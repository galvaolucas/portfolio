import { Button } from "./ui/button";

export const TopBar = (): React.ReactElement => {
  return (
    <div className="text-white flex flex-row items-center justify-between">
      <div className="">
        <a href="/" target="_self" className="cursor-pointer">
          <img
            src="/logos/logo-white.png"
            width={80}
            height={80}
            alt="logo_white"
          />
        </a>
      </div>
      <div className="flex gap-4">
        <Button
          label="Experience"
          type="link"
          target="_self"
          href="/experience"
        />
        <Button label="About me" />
        <Button label="Blog" />
      </div>
    </div>
  );
};
