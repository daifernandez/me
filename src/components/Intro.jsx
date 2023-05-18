import React from "react";
import Social from "./Social";
import { useHistory } from "react-router-dom";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";

export default function Intro() {
  const redirect = useHistory();
  return (
    <div className="py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Bienvenido a mi portfolio!
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            FullStack Web Developer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Hola mi nombre es Daiana, soy desarrolladora web fullstack. En este
            Portfolio, encontrarás algunos de mis proyectos más recientes. Me
            enorgullece compartir mi trabajo y espero que puedas encontrar algo
            que te inspire o te resulte útil. Si tienes alguna pregunta o
            quieres saber más sobre mi trabajo, no dudes en contactarme.
          </p>
          <Social />
          <div className="mt-12 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-start sm:space-x-6 sm:pb-1">
            <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="flex rounded py-3 bg-white px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-zinc-400 dark:ring-white/10 justify-center dark:bg-slate-800 text-slate-700  ring-inset ring-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:ring-slate-500 "
                onClick={() => redirect.push("/me")}
              >
                <RocketLaunchIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5  text-slate-400 dark:text-white"
                  aria-hidden="true"
                />
                <span className="dark:text-white">+ Sobre Mi</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
