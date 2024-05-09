import avatarHenry from "../img/avatarHenry.jpeg";
// import avatarMed from "../img/avatarMed.jpeg";
// import avatarOH from "../img/avatarOH.png";
import avatarCoder from "../img/avatarCoder.png";
import avatarPlatzi from "../img/avatarPlatzi.png";
import avatarAAO from "../img/avatarAAO.jpeg";
import avatarGA from "../img/avatarGA.png";
import { useHistory } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const activity = [
  {
    id: 5,
    type: "comment",
    experience: { where: "Coderhouse", title: "NextJS" },
    imageUrl: avatarCoder,
    description:
      "14 horas dictadas a lo largo de 7 semanas, cumpliendo todos los requisitos académicos exigidos.",
    project: [
      {
        id: 1,
        title: "Capellari",
        imageUrl: "",
        date: "Dic 2023",
      },
    ],
    funcionalidades: "",
    tecnologies: "NextJS, React, TailwindCSS, Firestore, Firebase.",
    date: "Dic 2023",
  },
  {
    id: 4,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    description:
      "Modalidad Full-time con mas de 800 horas en tecnologías como Javascript, NodeJS, React, Redux y ExpressJS",
    project: [
      {
        id: 1,
        title: "GameStream",
        imageUrl: "",
        date: "",
      },
      {
        id: 2,
        title: "PawCare",
        imageUrl: "",
        date: "",
      },
    ],
    funcionalidades: "",
    tecnologies:
      "JavaScript, React, Redux, NodeJS, Express, Sequelize, PostgreSQL",
    date: "2023",
  },

  {
    id: 3,
    type: "comment",
    experience: {
      where: "Platzi",
      title: "Apple FullStack Developer - IOS Mobile Developer",
    },
    imageUrl: avatarPlatzi,
    description: "Ruta de Aprendizaje de Desarrollo de Aplicaciones iOS",
    funcionalidades: "",
    aptitudes: "",
    date: "2022",
  },
  {
    id: 2,
    type: "comment",
    experience: {
      where: "Universidad Computense de Madrid - Google Actívate",
      title: "Curso de Desarrollo de Apps Móviles",
    },
    imageUrl: avatarGA,
    description: "",
    funcionalidades: "",
    aptitudes: "",
    date: "2021",
  },
  {
    id: 1,
    type: "assigne",
    experience: {
      where: "Ateneo Argentino de Odontologia - Universidad de Favaloro",
      title: "Auxiliar de Odotología",
    },
    imageUrl: avatarAAO,
    description: "Caracter teórico con prácticas en clínica y evaluación",
    funcionalidades: "",
    aptitudes:
      "Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Asistencia de administración · Programación de citas",
    date: "2010",
  },
];
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

export default function Cv() {
  const redirect = useHistory();

  const routes = {
    GameStream: "/projects/gamestream",
    Capellari: "/projects/capellari",
  };

  const handleClick = (title) => {
    const path = routes[title] || "/projects/pawcare";
    redirect.push(path);
  };
  return (
    <div className="animate-fade animate-once animate-duration-1000 animate-ease-in bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-20">
        <ul className="-mb-8 space-y-16">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-5">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-slate-700"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white dark:ring-slate-700"
                        src={activityItem.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm font-semibold text-gray-400 dark:text-gray-400">
                          {activityItem.experience.title}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
                          {activityItem.experience.where} - {activityItem.date}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                        {activityItem.title && (
                          <p className="text-gray-900 font-medium">
                            {activityItem.title}
                          </p>
                        )}
                        <p>{activityItem.description}</p>
                        {/* agregar proyecto */}
                        {activityItem.project && (
                          <>
                            <p className="text-gray-500 mt-3 dark:text-gray-400">
                              Proyectos:
                            </p>
                            {activityItem.project.map((projectItem) => (
                              <div className="text-gray-500 dark:text-gray-400 mb-2 mt-2">
                                <button
                                  onClick={() => handleClick(projectItem.title)}
                                >
                                  <span className="font-semibold text-indigo-600 dark:text-indigo-500">
                                    <span aria-hidden="true">&rarr;</span>{" "}
                                    {projectItem.title}
                                  </span>
                                </button>
                              </div>
                            ))}
                          </>
                        )}
                        {activityItem.funcionalidades && (
                          <>
                            <p className="text-gray-500 mt-3 dark:text-gray-400">
                              Funcionalidades:
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                              {activityItem.funcionalidades}
                            </p>
                          </>
                        )}

                        <p className="text-gray-500 mt-2 dark:text-gray-400">
                          {activityItem.obs}
                        </p>
                        {activityItem.tecnologies && (
                          <>
                            <p className="text-gray-500 dark:text-gray-400">
                              Tecnologías utilizadas:
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                              {activityItem.tecnologies}
                            </p>
                          </>
                        )}
                        {activityItem.aptitudes && (
                          <>
                            <p className="text-gray-500 mt-3 dark:text-gray-400">
                              Aptitudes:
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                              {activityItem.aptitudes}
                            </p>
                          </>
                        )}
                        {activityItem.experience.title ===
                        "Apple FullStack Developer - IOS Mobile Developer" ? (
                          <div className="flow-root mb-5 mt-5">
                            <ul className="-mb-8">
                              <Popover className="relative">
                                <Popover.Button
                                  type="button"
                                  className="ffocus-visible:ring-2 focus:outline-none"
                                >
                                  <h3 className="text-sm leading-6 text-indigo-800 text-center font-medium p-3 items-center dark:focus:ring-offset-black focus:outline-none bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md  dark:bg-slate-800  dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-md dark:text-white ">
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
                                  <Popover.Panel>
                                    <div className="md:px-10 xl:px-22 p-10">
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
                                                    <time
                                                      dateTime={event.datetime}
                                                    >
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
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
