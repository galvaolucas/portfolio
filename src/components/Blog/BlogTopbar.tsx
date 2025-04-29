import { useIsMobile } from "@/hooks/useIsMobile";
import ThemeSwitcher from "../ThemeSwitcher";
import logoWhite from "@public/logos/logo-white.png";
import logoBlack from "@public/logos/logo-black.png";
import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/hooks/useTheme";

export const BlogTopbar = (): React.ReactElement => {
  const { isMobile } = useIsMobile();
  const { slug } = useParams();
  const theme = useTheme();

  const isBlogPost = Object.keys(slug ?? {}).length > 0;
  const isDarkMode = theme === "dark";

  return (
    <div
      className={twMerge(
        "h-16 flex flex-row items-center justify-between bg-gray-900 px-60 py-2",
        isBlogPost && "bg-ice dark:bg-black",
      )}
    >
      <div>
        <img
          src={isDarkMode ? logoWhite : logoBlack}
          alt="logo"
          width={isMobile ? 40 : 50}
          height={isMobile ? 40 : 50}
        />
      </div>
      <ThemeSwitcher />
    </div>
  );
};
