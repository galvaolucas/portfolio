import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "color-theme";

/** Dark unless light was explicitly chosen — matches the pre-paint script. */
const readStoredTheme = (): boolean =>
  localStorage.getItem(STORAGE_KEY) !== "light";

export default function ThemeSwitcher(): React.ReactElement {
  const [darkMode, setDarkMode] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle dark mode"
      onClick={() => setDarkMode((previous) => !previous)}
      className={cn(
        "flex h-7 w-12 cursor-pointer items-center rounded-full p-1 transition-colors duration-300",
        darkMode ? "bg-gray-700" : "bg-gray-200",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300",
          darkMode ? "translate-x-5" : "translate-x-0",
        )}
      >
        {darkMode ? (
          <Moon className="h-3 w-3 text-gray-700" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" />
        )}
      </span>
    </button>
  );
}
