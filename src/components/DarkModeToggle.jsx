import { useEffect, useState } from "react";
// import { Switch } from "@headlessui/react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function DarkModeToggle() {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <Switch
//       checked={enabled}
//       onChange={setEnabled}
//       className={classNames(
//         enabled ? "bg-indigo-600" : "bg-gray-200",
//         "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
//       )}
//     >
//       <span
//         className={classNames(
//           enabled ? "translate-x-5" : "translate-x-0",
//           "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
//         )}
//       >
//         <span
//           className={classNames(
//             enabled
//               ? "opacity-0 duration-100 ease-out"
//               : "opacity-100 duration-200 ease-in",
//             "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
//           )}
//           aria-hidden="true"
//         >
//           <svg
//             className="h-5 w-5 text-yellow-400"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//             stroke-width="1.5"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//             />
//           </svg>
//         </span>
//         <span
//           className={classNames(
//             enabled
//               ? "opacity-100 duration-200 ease-in"
//               : "opacity-0 duration-100 ease-out",
//             "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
//           )}
//           aria-hidden="true"
//         >
//           <svg
//             className="h-3 w-3 text-indigo-700"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//             />{" "}
//           </svg>
//         </span>
//       </span>
//     </Switch>
//   );
// }

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
    {
      icon: "desktop-outline",
      text: "system",
    },
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
    <section className=" pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        {options?.map((option) => (
          <button
            key={option.text}
            onClick={() => setTheme(option.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-slate-400 ${
              theme === option.text && "text-sky-500"
            }`}
          >
            <ion-icon name={option.icon}></ion-icon>
          </button>
        ))}
      </div>
    </section>
  );
}
