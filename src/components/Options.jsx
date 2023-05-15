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
    <div className="justify-center">
      <div className="flex justify-center">
        <span className="flex rounded-full py-3 bg-white/90 dark:bg-slate-800 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <button
            type="button"
            className="px-5"
            active={content === "Projects"}
            onClick={handleSelectProjects}
          >
            Mis proyectos
          </button>
          <button
            type="button"
            className="px-5"
            active={content === "Experience"}
            onClick={handleSelectExperience}
          >
            Experiencias
          </button>
          <button
            type="button"
            className="px-5"
            active={content === "Education"}
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
