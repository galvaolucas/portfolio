import { useEffect, useMemo } from "react";
import { ArrowLeft, SearchIcon } from "lucide-react";
import { debounce } from "lodash";
import { useTheme } from "@/hooks/useTheme";
import { ROUTES, SITE } from "@/data/site";
import ThemeSwitcher from "../ThemeSwitcher";
import logoWhite from "@/assets/logo-white.png";
import logoBlack from "@/assets/logo-black.png";

const Search = ({
  setFilter,
}: {
  setFilter: (value: string) => void;
}): React.ReactElement => {
  const debounced = useMemo(
    () => debounce((value: string) => setFilter(value), 300),
    [setFilter],
  );

  // Without this a keystroke in the last 300ms before unmount still fires.
  useEffect(() => () => debounced.cancel(), [debounced]);

  return (
    <div className="relative w-full sm:w-56">
      <SearchIcon
        aria-hidden
        width={15}
        height={15}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-paper-subtle"
      />
      <input
        type="search"
        aria-label="Search posts"
        placeholder="Search posts"
        onChange={(event) => debounced(event.target.value)}
        className="h-9 w-full rounded-lg border border-paper-line bg-paper-raised pr-3 pl-9 text-sm text-paper-ink transition-colors outline-none placeholder:text-paper-subtle focus:border-paper-accent"
      />
    </div>
  );
};

export const BlogTopbar = ({
  setFilter,
}: {
  setFilter?: (value: string) => void;
}): React.ReactElement => {
  const isDarkMode = useTheme() === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-6 py-3">
        <a
          href={ROUTES.home}
          className="group flex shrink-0 items-center gap-2.5 text-sm font-medium text-paper-ink"
          aria-label={`Back to ${SITE.name}'s portfolio`}
        >
          <img
            src={isDarkMode ? logoWhite : logoBlack}
            alt=""
            aria-hidden
            width={28}
            height={28}
          />
          <span className="hidden items-center gap-1.5 text-paper-muted transition-colors group-hover:text-paper-ink sm:flex">
            <ArrowLeft size={14} aria-hidden />
            Portfolio
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-3">
          {setFilter && <Search setFilter={setFilter} />}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
