import { useState } from "react";
import Projects from "./Projects";
// import Experience from "./Experience";
// import Education from "./Education";
import All from "./All";

export default function Options() {
  const [content, setContent] = useState("Projects");

  const handleSelectProjects = () => {
    setContent("Projects");
  };
  // const handleSelectExperience = () => {
  //   setContent("Experience");
  // };
  // const handleSelectEducation = () => {
  //   setContent("Education");
  // };
  const handleSelectAll = () => {
    setContent("All");
  };

  var contentComponent;
  switch (content) {
    case "Projects":
      contentComponent = <Projects />;
      break;
    // case "Experience":
    //   contentComponent = <Experience />;
    //   break;
    // case "Education":
    //   contentComponent = <Education />;
    //   break;
    case "All":
      contentComponent = <All />;
      break;
    default:
      break;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
      <div className="flex justify-center">
        <div className="mt-1 mb-4 text-sm rounded-3xl leading-6 text-indigo-800 text-center font-medium p-3 items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-md  shadow-md dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
          <div className="font-semibold">
            <div>
              {" "}
              <button
                type="button"
                className={`px-5 ${
                  content === "Projects"
                    ? "text-indigo-600 dark:text-indigo-500 font-medium"
                    : "hover:animate-bounce"
                }`}
                onClick={handleSelectProjects}
              >
                Mis Proyectos
              </button>
              {/* <button
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
              </button> */}
              <button
                type="button"
                className={`px-5 ${
                  content === "All"
                    ? "text-indigo-600 dark:text-indigo-500 font-medium"
                    : "hover:animate-bounce"
                }`}
                onClick={handleSelectAll}
              >
                Educacion y Experiencia
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center">
        <div className="flex justify-center">{contentComponent}</div>
      </div>
    </div>
  );
}
