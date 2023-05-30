import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  ); // 'light' | 'dark' | 'system'
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    // {
    //   icon: "desktop-outline",
    //   text: "system",
    // },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

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
      default:
        localStorage.setItem("theme", "system");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <section className="pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="right-10 duration-100 dark:bg-slate-800 bg-gray-200 rounded-2xl">
        {options?.map((option) => (
          <button
            key={option.text}
            onClick={() => setTheme(option.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-slate-400 ${
              theme === option.text &&
              "bg-indigo-600 text-white dark:bg-slate-100 dark:text-indigo-600"
            }`}
          >
            <ion-icon name={option.icon}></ion-icon>
          </button>
        ))}
      </div>
    </section>
  );
}
