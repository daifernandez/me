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

const technologiesName = {
  javascript: {
    icon: <SiJavascript title="JavaScript" color="default" size={24} />,
  },
  react: {
    icon: <SiReact title="React" color="default" size={24} />,
  },
  redux: {
    icon: <SiRedux title="Redux" color="default" size={24} />,
  },
  css: {
    icon: <SiCss3 title="CSS" color="default" size={24} />,
  },
  nodejs: {
    icon: <SiNodedotjs title="Auth0" color="default" size={24} />,
  },
  express: {
    icon: <SiExpress title="Express" color="default" size={24} />,
  },
  sequelize: {
    icon: <SiSequelize title="Sequelize" color="default" size={24} />,
  },
  postgresql: {
    icon: <SiPostgresql title="PostgreSQL" color="default" size={24} />,
  },
  bootstrap: {
    icon: <SiBootstrap title="Bootstrap" color="default" size={24} />,
  },
  tailwindcss: {
    icon: <SiTailwindcss title="TailwindCSS" color="default" size={24} />,
  },
};

function TechnologyItem({ technology }) {
  const technologyName = technology.toLowerCase().replace(/\s/g, "");
  const technologyIcon = technologiesName[technologyName].icon;
  return (
    <li className="flex items-center py-1">
      {technologyIcon && <span className="mr-2">{technologyIcon}</span>}
      <span className="text-indigo-800 dark:text-indigo-100">{technology}</span>
    </li>
  );
}

export default function Tech() {
  return (
    <div>
      {" "}
      <Popover className="relative">
        <Popover.Button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
          <Popover.Panel className="z-10 mt-5 flex w-screen max-w-max">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-slate-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-5">
                <ul className="grid grid-cols-2 gap-1 md:grid-cols-3  lg:grid-cols-3">
                  {Object.keys(technologiesName).map((technology) => (
                    <TechnologyItem key={technology} technology={technology} />
                  ))}
                </ul>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
