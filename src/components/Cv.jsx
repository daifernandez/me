import avatarHenry from "../img/avatarHenry.jpeg";
import avatarMed from "../img/avatarMed.jpeg";
import avatarOH from "../img/avatarOH.png";
import avatarCoder from "../img/avatarCoder.png";
import avatarPlatzi from "../img/avatarPlatzi.png";
import avatarAAO from "../img/avatarAAO.jpeg";
import avatarGA from "../img/avatarGA.png";
import { useHistory } from "react-router-dom";

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

export default function Cv() {
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
      <div className="mx-auto max-w-4xl px-32 lg:px-20">
        <ul className="-mb-8 space-y-16 ">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-10">
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
                        <div className="text-sm dark:text-white">
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
                              <p className="text-gray-500 dark:text-gray-400">
                                <button
                                  onClick={() => handleClick(projectItem.title)}
                                >
                                  <span
                                    href="#"
                                    className="font-semibold text-indigo-600 dark:text-indigo-500"
                                  >
                                    {projectItem.title}
                                  </span>
                                </button>
                              </p>
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
