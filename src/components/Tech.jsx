import React from "react";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiCss3,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiBootstrap,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNpm,
  SiNextdotjs,
} from "react-icons/si";

const techIconClass = "w-6 h-6 text-stone-500 dark:text-stone-400";

// Objeto con las tecnologías
const technologiesTypes = {
  lenguajes: {
    javascript: {
      icon: <SiJavascript title="JavaScript" className={techIconClass} />,
      title: "JavaScript",
    },
  },
  tools: {
    git: {
      icon: <SiGit title="Git" className={techIconClass} />,
      title: "Git",
    },
    github: {
      icon: <SiGithub title="Github" className={techIconClass} />,
      title: "GitHub",
    },
    npm: {
      icon: <SiNpm title="Npm" className={techIconClass} />,
      title: "Npm",
    },
  },
  frontend: {
    nextjs: {
      icon: <SiNextdotjs title="NextJS" className={techIconClass} />,
      title: "Next.js",
    },
    react: {
      icon: <SiReact title="React" className={techIconClass} />,
      title: "React",
    },
    redux: {
      icon: <SiRedux title="Redux" className={techIconClass} />,
      title: "Redux",
    },
    css: {
      icon: <SiCss3 title="CSS" className={techIconClass} />,
      title: "CSS",
    },
    bootstrap: {
      icon: <SiBootstrap title="Bootstrap" className={techIconClass} />,
      title: "Bootstrap",
    },
    tailwindcss: {
      icon: <SiTailwindcss title="TailwindCSS" className={techIconClass} />,
      title: "TailwindCSS",
    },
  },
  backend: {
    nodejs: {
      icon: <SiNodedotjs title="NodeJS" className={techIconClass} />,
      title: "NodeJS",
    },
    express: {
      icon: <SiExpress title="Express" className={techIconClass} />,
      title: "Express",
    },
    sequelize: {
      icon: <SiSequelize title="Sequelize" className={techIconClass} />,
      title: "Sequelize",
    },
    postgresql: {
      icon: <SiPostgresql title="PostgreSQL" className={techIconClass} />,
      title: "PostgreSQL",
    },
  },
};

// Función para renderizar las tecnologías
function renderTechnologies(technologies) {
  return (
    <ul className="grid grid-cols-1">
      {Object.keys(technologies).map((technology) => (
        <div className="text-sm leading-6 text-indigo-800 text-center font-medium p-2 items-center  ">
          <li className="flex items-center py-1" key={technology}>
            {technologies[technology].icon && (
              <span className="mr-5">{technologies[technology].icon}</span>
            )}
            <span className="md:inline font-semibold text-gray-600 dark:text-gray=200">
              {technologies[technology].title}
            </span>
          </li>
        </div>
      ))}
    </ul>
  );
}

// Componente que renderiza las tecnologías basado en el tipo (frontend o backend)
function TechnologiesComponent({ technologiesTypes, type }) {
  return (
    <div className="mb-8 mt-8">
      <h3 className="mt-1 mb-4 text-sm leading-6 text-indigo-800 text-center font-medium p-3 items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md  dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
        <span className="md:inline font-semibold text-gray-600 dark:text-gray=200">
          {" "}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>

      {renderTechnologies(technologiesTypes[type])}
    </div>
  );
}

export default function Tech() {
  return (
    <div className="animate-fade animate-once animate-duration-1000 animate-ease-in bg-white dark:bg-slate-900 mb-36">
      <div className="mx-auto max-w-7xl md:px-12 lg:px-8">
        <div className="sm:px-20 md:px-20 xl:px-52 px-20 ">
          <h3 className="mb-4 text-sm leading-6 text-indigo-800 text-center font-medium p-3 items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md  dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
            <span
              href="#"
              className="font-semibold text-indigo-600 dark:text-indigo-500"
            >
              <span className="absolute inset-0" aria-hidden="true" />{" "}
              Tecnologias - Lenguajes - Herramientas
            </span>
            <span className="hidden md:inline font-semibold text-gray-600 dark:text-gray=200">
              {" "}
              que manejo
            </span>
          </h3>

          <div className="grid grid-cols-1 text-sm font-semibold text-indigo-600 dark:text-indigo-500 mb-4 mt-20">
            Desarrollo web
          </div>
          <ul className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <ul className="grid-cols-1">
              <TechnologiesComponent
                technologiesTypes={technologiesTypes}
                type="lenguajes"
              />
              <TechnologiesComponent
                technologiesTypes={technologiesTypes}
                type="tools"
              />
            </ul>
            <TechnologiesComponent
              technologiesTypes={technologiesTypes}
              type="frontend"
            />
            <TechnologiesComponent
              technologiesTypes={technologiesTypes}
              type="backend"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
