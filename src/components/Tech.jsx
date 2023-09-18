import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
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
} from "@icons-pack/react-simple-icons";

// tipos de categorias
const technologiesTypes = {
  frontend: {
    javascript: {
      icon: <SiJavascript title="JavaScript" color="default" size={24} />,
      title: "JavaScript",
    },
    react: {
      icon: <SiReact title="React" color="default" size={24} />,
      title: "React",
    },
    redux: {
      icon: <SiRedux title="Redux" color="default" size={24} />,
      title: "Redux",
    },
    css: {
      icon: <SiCss3 title="CSS" color="default" size={24} />,
      title: "CSS",
    },
    bootstrap: {
      icon: <SiBootstrap title="Bootstrap" color="default" size={24} />,
      title: "Bootstrap",
    },
    tailwindcss: {
      icon: <SiTailwindcss title="TailwindCSS" color="default" size={24} />,
      title: "TailwindCSS",
    },
  },
  backend: {
    nodejs: {
      icon: <SiNodedotjs title="Auth0" color="default" size={24} />,
      title: "NodeJS",
    },
    express: {
      icon: <SiExpress title="Express" color="default" size={24} />,
      title: "Express",
    },
    sequelize: {
      icon: <SiSequelize title="Sequelize" color="default" size={24} />,
      title: "Sequelize",
    },
    postgresql: {
      icon: <SiPostgresql title="PostgreSQL" color="default" size={24} />,
      title: "PostgreSQL",
    },
  },
};

// Función para renderizar las tecnologías
function renderTechnologies(technologies) {
  return (
    <ul className="p-2 items-center">
      {Object.keys(technologies).map((technology) => (
        <div className="bg-indigo-100/20 bg-opacity-5 backdrop-blur-md rounded-md p-2 dark:bg-slate-800 dark:bg-opacity-60 my-2">
          <li className="flex items-center py-1" key={technology}>
            {technologies[technology].icon && (
              <span className="mr-5">{technologies[technology].icon}</span>
            )}
            <span className="text-indigo-900 dark:text-indigo-100 mx-2">
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
    <div>
      {/* <h3 className="mt-1 mb-4 text-indigo-800 text-center font-medium p-3 items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md  dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h3> */}
      {renderTechnologies(technologiesTypes[type])}
    </div>
  );
}

export default function Tech() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-8 mb-10 ">
      <Popover className="relative ">
        <Popover.Button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  dark:bg-indigo-600 dark:bg-opacity-60 dark:hover:bg-indigo-600"
        >
          <span>Tecnologias</span>
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="z-10 mt-2">
            <div className="sm:px-20 md:px-32 xl:px-42 p-10 px-20 ">
              <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 ">
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
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
