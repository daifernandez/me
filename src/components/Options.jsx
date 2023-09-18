import { useState } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

export default function Options() {
  const [content, setContent] = useState("Projects");

  const handleSelectProjects = () => {
    setContent("Projects");
  };
  const handleSelectExperience = () => {
    setContent("Experience");
  };
  const handleSelectEducation = () => {
    setContent("Education");
  };

  var contentComponent;
  switch (content) {
    case "Projects":
      contentComponent = <Projects />;
      break;
    case "Experience":
      contentComponent = <Experience />;
      break;
    case "Education":
      contentComponent = <Education />;
      break;
    default:
      break;
  }

  return (
    <div className="justify-center mt-20">
      <div className="flex justify-center">
        <span className="flex rounded-full py-3 mb-3 dark:bg-slate-800 bg-indigo-100/20 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-zinc-200 dark:ring-white/10">
          <button
            type="button"
            className={`px-5 ${
              content === "Projects"
                ? "text-indigo-600 dark:text-indigo-500 font-medium"
                : "hover:animate-bounce"
            }`}
            onClick={handleSelectProjects}
          >
            Mis proyectos
          </button>
          <button
            type="button"
            className={`px-5 ${
              content === "Experience"
                ? "text-indigo-600 dark:text-indigo-500 font-medium"
                : "hover:animate-bounce"
            }`}
            onClick={handleSelectExperience}
          >
            Experiencias
          </button>
          <button
            type="button"
            className={`px-5 ${
              content === "Education"
                ? "text-indigo-600 dark:text-indigo-500 font-medium"
                : "hover:animate-bounce"
            }`}
            onClick={handleSelectEducation}
          >
            Educación
          </button>
        </span>
      </div>
      <div className="justify-center">
        <div className="flex justify-center">{contentComponent}</div>
      </div>
    </div>
  );
}
