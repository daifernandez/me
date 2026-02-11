import { useEffect, useState, useCallback } from "react";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "system"
  );
  
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = useCallback(() => {
    if (theme === "system") {
      if (darkQuery.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  }, [darkQuery.matches, element.classList, theme]);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      case "system":
        localStorage.setItem("theme", "system");
        onWindowMatch();
        break;
      default:
        break;
    }
  }, [theme, element.classList, onWindowMatch]);

  useEffect(() => {
    const handleSystemThemeChange = () => {
      if (theme === "system") {
        onWindowMatch();
      }
    };

    darkQuery.addEventListener("change", handleSystemThemeChange);
    return () => darkQuery.removeEventListener("change", handleSystemThemeChange);
  }, [darkQuery, onWindowMatch, theme]);

  useEffect(() => {
    onWindowMatch();
  }, [onWindowMatch]);

  const options = [
    {
      icon: SunIcon,
      text: "light",
      tooltip: "Modo claro"
    },
    {
      icon: MoonIcon,
      text: "dark",
      tooltip: "Modo oscuro"
    },
    {
      icon: ComputerDesktopIcon,
      text: "system",
      tooltip: "Usar configuración del sistema"
    }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="p-1.5 flex gap-1 
        bg-white dark:bg-neutral-800 
        border border-stone-200 dark:border-stone-700
        rounded-lg">
        {options?.map((option) => (
          <button
            key={option.text}
            onClick={() => setTheme(option.text)}
            className={`
              w-8 h-8 
              flex items-center justify-center
              rounded-md transition-colors duration-200
              ${theme === option.text 
                ? 'bg-stone-100 dark:bg-neutral-700 text-stone-800 dark:text-white' 
                : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
              }
            `}
            title={option.tooltip}
          >
            <option.icon className="w-4 h-4" strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
}
