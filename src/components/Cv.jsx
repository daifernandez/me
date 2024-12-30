import avatarHenry from "../img/avatarHenry.jpeg";
import avatarCoder from "../img/avatarCoder.png";
import avatarPlatzi from "../img/avatarPlatzi.png";
import avatarAAO from "../img/avatarAAO.jpeg";
import avatarGA from "../img/avatarGA.png";
import { useHistory } from "react-router-dom";


import { 
  SiJavascript, 
  SiReact, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiSequelize,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPetsathome
} from 'react-icons/si';

import { 
  HiOutlineVideoCamera,
  HiOutlineShoppingBag,
  HiOutlinePuzzle
} from 'react-icons/hi';

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

const techIcons = {
  'JavaScript': { icon: SiJavascript, color: 'text-yellow-400' },
  'React': { icon: SiReact, color: 'text-blue-400' },
  'Redux': { icon: SiRedux, color: 'text-purple-500' },
  'NodeJS': { icon: SiNodedotjs, color: 'text-green-500' },
  'Express': { icon: SiExpress, color: 'text-gray-600 dark:text-gray-400' },
  'Sequelize': { icon: SiSequelize, color: 'text-blue-500' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-400' },
  'NextJS': { icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
  'TailwindCSS': { icon: SiTailwindcss, color: 'text-cyan-400' },
  'Firebase': { icon: SiFirebase, color: 'text-yellow-500' },
};

const projectIcons = {
  'GameStream': { 
    icon: HiOutlineVideoCamera, 
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30' 
  },
  'PawCare': { 
    icon: SiPetsathome, 
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30' 
  },
  'Capellari': { 
    icon: HiOutlineShoppingBag, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30' 
  }
};

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
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800/50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experiencia Profesional
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-light">
            Mi trayectoria en desarrollo web y tecnologías digitales
          </p>
        </div>

        <div className="relative">
          {/* Línea decorativa vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />

          <div className="space-y-24">
            {activity.map((item) => (
              <div 
                key={item.id}
                className="relative pl-20 group"
              >
                {/* Imagen con efecto hover */}
                <div className="absolute -left-2 top-0">
                  <div className="p-1 rounded-full bg-white dark:bg-slate-700 shadow-sm">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Contenido principal */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                  {/* Encabezado */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {item.experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{item.experience.where}</span>
                      <span className="text-gray-400">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {item.description}
                    </p>
                  )}

                  {/* Proyectos */}
                  {item.project && item.project.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-4">
                        Proyectos destacados
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.project.map((proj, idx) => {
                          const projectIcon = projectIcons[proj.title] || {
                            icon: HiOutlinePuzzle,
                            color: 'text-gray-600',
                            bgColor: 'bg-gray-100 dark:bg-gray-800'
                          };
                          const IconComponent = projectIcon.icon;
                          
                          return (
                            <button
                              key={idx}
                              onClick={() => handleClick(proj.title)}
                              className="group relative flex items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                            >
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-3">
                                  <div className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md ${projectIcon.bgColor}`}>
                                    <IconComponent 
                                      className={`h-5 w-5 ${projectIcon.color}`}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                      {proj.title}
                                    </h3>
                                    {proj.date && (
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {proj.date}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="ml-3 flex-shrink-0">
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white dark:bg-slate-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
                                  <svg 
                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} 
                                      d="M9 5l7 7-7 7" 
                                    />
                                  </svg>
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Tecnologías */}
                  {item.tecnologies && (
                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-4">
                        Stack tecnológico
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {item.tecnologies.split(',').map((tech, idx) => {
                          const techKey = tech.trim();
                          const techData = techIcons[techKey];
                          
                          if (!techData) return null;
                          
                          const Icon = techData.icon;
                          return (
                            <div 
                              key={idx}
                              className="group flex items-center p-3 rounded-xl bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 p-2 rounded-lg bg-white dark:bg-slate-600">
                                  <Icon 
                                    className={`w-4 h-4 ${techData.color} group-hover:scale-110 transition-transform duration-300`}
                                  />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {techKey}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
