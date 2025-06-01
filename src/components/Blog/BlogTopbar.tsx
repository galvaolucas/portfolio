import { useIsMobile } from "@/hooks/useIsMobile";
import ThemeSwitcher from "../ThemeSwitcher";
import logoWhite from "@public/logos/logo-white.png";
import logoBlack from "@public/logos/logo-black.png";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/hooks/useTheme";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { debounce } from "lodash";
import { useMemo } from "react";

const Search = ({
  setFilter,
}: {
  setFilter: (filter: string) => void;
}): React.ReactElement => {
  const theme = useTheme();
  const isDarkMode = theme === "dark";
  const debouncedSetFilter = useMemo(
    () =>
      debounce((value: string) => {
        setFilter(value);
      }, 300),
    [],
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetFilter(e.target.value);
  };

  return (
    <div className="relative flex flex-row gap-2">
      <div className="absolute left-2 top-[8px]">
        <SearchIcon
          className={twMerge(isDarkMode ? "text-black" : "text-white")}
          width={20}
          height={20}
        />
      </div>
      <Input
        placeholder="Search by tag or title"
        className={twMerge(
          "w-60 shadow-sm border-1 border-gray-200 focus:border-gray-400 focus:ring-transparent focus:shadow-none pl-8",
          isDarkMode
            ? "bg-white text-black placeholder:text-black"
            : "bg-black text-white placeholder:text-white",
        )}
        onChange={onChange}
      />
    </div>
  );
};

export const BlogTopbar = ({
  setFilter,
}: {
  setFilter?: (arg: string) => void;
}): React.ReactElement => {
  const { isMobile } = useIsMobile();
  const theme = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={twMerge(
        "h-16 flex flex-row items-center justify-between px-4 md:px-60 py-2 bg-white dark:bg-black shadow-lg",
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
      <div className="flex flex-row gap-4 items-center justify-center">
        {!isMobile && setFilter && <Search setFilter={setFilter} />}
        <ThemeSwitcher />
      </div>
    </div>
  );
};
