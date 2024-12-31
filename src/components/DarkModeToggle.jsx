import { useEffect, useState, useCallback } from "react";

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
      icon: "sunny",
      text: "light",
      tooltip: "Modo claro"
    },
    {
      icon: "moon",
      text: "dark",
      tooltip: "Modo oscuro"
    },
    {
      icon: "desktop-outline",
      text: "system",
      tooltip: "Usar configuración del sistema"
    }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="p-2 flex gap-1 
        bg-white/20 dark:bg-slate-800/20 
        backdrop-blur-lg 
        border border-white/30 dark:border-slate-700/30
        rounded-lg 
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        {options?.map((option) => (
          <button
            key={option.text}
            onClick={() => setTheme(option.text)}
            className={`
              w-9 h-9 
              flex items-center justify-center
              rounded-md transition-all duration-200
              hover:bg-white/30 dark:hover:bg-slate-700/30
              ${theme === option.text 
                ? 'bg-white/40 dark:bg-slate-700/40 text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-600 dark:text-gray-300'
              }
            `}
            title={option.tooltip}
          >
            <ion-icon name={option.icon} className="text-xl"></ion-icon>
          </button>
        ))}
      </div>
    </div>
  );
}
