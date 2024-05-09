import { CheckIcon, AcademicCapIcon } from "@heroicons/react/20/solid";
import education from "../data/data";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const timeline = [
  {
    id: 11,
    content: "Curso de",
    target: "Desarrollo de Aplicaciones para Apple Watch",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 10,
    content: "Curso ",
    target: "Profesional de Git y GitHub",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 9,
    content: "Curso de",
    target: "SwiftUI: Porteo y Ciclo de Vida de Aplicaciónes",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 8,
    content: "Curso de",
    target: "Desarrollo de Aplicaciones iOS con Swift",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 7,
    content: "Curso de",
    target: "Programación orientada a objetos en Swift",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 6,
    content: "Curso de",
    target: "Programación orientada a objetos: POO",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 5,
    content: "Curso de",
    target: "SwiftUI desde Cero",
    date: "2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 4,
    content: "Curso de",
    target: "Programación en Swift: Funciones",
    date: "2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 3,
    content: "Curso de",
    target: "Programación en Swift",
    date: "2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 2,
    content: "Curso de",
    target: "Programación Estruturada",
    date: "2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 1,
    content: "Curso de",
    target: "Introducción a Swift",
    date: "2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function All() {
  const redirect = useHistory();

  const handleClick = (title) => {
    if (title === "GameStream") {
      redirect.push("/projects/gamestream");
    }
    if (title === "Capellari") {
      redirect.push("/projects/capellari");
    } else {
      redirect.push("/projects/pawcare");
    }
  };

  return (
    <div className="animate-fade animate-once animate-duration-1000 animate-ease-in bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* EDUCACION */}
        {education.map((post) => (
          <div className="space-y-16 border-t border-gray-200 sm:mt-1 sm:pt-1  dark:border-slate-700">
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs mt-5">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <div className="dark:text-gray-500">{post.category.title}</div>
              </div>
              <div className="group relative">
                <div className="relative mt-10 flex items-center gap-x-4 mb-8 px-3">
                  <AcademicCapIcon
                    stroke="#9e9e9e"
                    fill="none"
                    className="h-8 w-8 rounded-full bg-white-40"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-lg text-indigo-500">
                      <span className="absolute inset-0 " />
                      {post.title.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.where}
                    </p>
                  </div>
                </div>
                <p className="mb-14 lg:mb-2 text-sm leading-6 text-gray-600 line-clamp-3 dark:text-gray-400">
                  {post.description}
                </p>
              </div>
              {/* EXPERIENCIA */}
              <div className="animate-fade animate-once animate-duration-1000 animate-ease-in bg-white dark:bg-slate-900">
                <div className="flex items-center mx-auto max-w-4xl ">
                  <ul
                    role="list"
                    className="mx-auto mt-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 "
                  >
                    {post.experience &&
                      post.experience.map((activityItem, activityItemIdx) => (
                        <li key={activityItem.id}>
                          <button
                            onClick={() => handleClick(activityItem.title)}
                          >
                            <img
                              className=" w-full rounded-2xl object-cover"
                              src={activityItem.imageProject}
                              alt=""
                            />
                          </button>

                          <h3 className="mt-1 mb-4 text-sm leading-6 text-indigo-800 text-center font-medium p-3 items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md  dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
                            <button
                              onClick={() => handleClick(activityItem.title)}
                            >
                              <span
                                href="#"
                                className="font-semibold text-indigo-600 dark:text-indigo-500"
                              >
                                {" "}
                                {activityItem.title}
                              </span>
                            </button>
                          </h3>

                          <p className="text-base leading-7 text-gray-600 mb-24">
                            {activityItem.description}
                          </p>
                          {/* <ul role="list" className="mt-6 flex gap-x-6">
                            <li>
                              <a
                                href={redirect}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">X</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href={redirect}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul> */}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {post.title.role === "iOS Mobile Developer" ? (
                <div className="flow-root mb-24">
                  <ul className="-mb-8">
                    <Popover className="relative">
                      <Popover.Button
                        type="button"
                        className="focus-visible:outline-offset-2 focus-visible:outline-indigo-600 focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900/5"
                      >
                        <h3 className="text-sm leading-6 text-indigo-800 text-center font-medium p-3 items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md  dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
                          <span
                            href="#"
                            className="font-semibold text-indigo-600 dark:text-indigo-500"
                          >
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />{" "}
                            iOS Mobile Developer{" "}
                          </span>
                          <span className="hidden md:inline font-semibold text-gray-600 dark:text-gray=200">
                            {" "}
                            Ruta
                            <span aria-hidden="true">&rarr;</span>
                          </span>
                        </h3>
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
                          <div className="sm:px-20 md:px-10 xl:px-22 p-10 px-20 ">
                            <ul className="grid-cols-1">
                              {timeline.map((event, eventIdx) => (
                                <li key={event.id}>
                                  <div className="relative pb-7">
                                    <div className="relative flex space-x-3">
                                      <div>
                                        <span
                                          className={classNames(
                                            event.iconBackground,
                                            "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-slate-700"
                                          )}
                                        >
                                          <event.icon
                                            className="h-5 w-5 text-white "
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </div>
                                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                          <p className="font-medium text-gray-900 dark:text-gray-400">
                                            {event.target}
                                          </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
                                          <time dateTime={event.datetime}>
                                            {event.date}
                                          </time>
                                        </div>
                                        {}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </ul>
                </div>
              ) : null}
              {/* JOBS */}{" "}
              <div>
                {post.jobs &&
                  post.jobs.map((job) => (
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mb-24">
                      <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12  sm:gap-y-16 xl:col-span-2"
                      >
                        <li key={job.id}>
                          <div className="flex items-center gap-x-6">
                            <img
                              className="h-16 w-16 rounded-full"
                              src={job.imageUrl}
                              alt=""
                            />
                            <div>
                              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-400">
                                {job.activity}
                              </h3>
                              <p className="text-sm font-semibold leading-6 text-indigo-600">
                                {job.title}
                              </p>
                              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {job.aptitudes}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))}{" "}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
