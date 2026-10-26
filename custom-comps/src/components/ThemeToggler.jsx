import { createContext, useContext, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeContext = createContext(); /*this is a box context*/

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  const isDark = theme === "Dark";

  // Apply / remove the `dark` class on <html> so Tailwind dark: variants work
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const value = {
    theme,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context not comming!");
  }

  return context;
}

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
    >
      {isDark ? (
        <>
          <Sun size={15} />
          Light
        </>
      ) : (
        <>
          <Moon size={15} />
          Dark
        </>
      )}
    </button>
  );
}

const ThemeToggler = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex items-center gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {theme} mode
        </p>
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default ThemeToggler;
