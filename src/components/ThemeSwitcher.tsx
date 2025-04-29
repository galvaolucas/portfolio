import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("color-theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out
      ${darkMode ? "bg-blue-800" : "bg-blue-100"}`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out
        ${darkMode ? "translate-x-8" : "translate-x-0"}`}
      >
        <div className="flex items-center justify-center h-full">
          {darkMode ? (
            <Moon className="h-4 w-4 text-blue-500 transition-colors duration-300 ease-in-out" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500 transition-colors duration-300 ease-in-out" />
          )}
        </div>
      </div>
    </div>
  );
}
