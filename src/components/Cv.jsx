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
    <div className="bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <h2 className="text-3xl font-extralight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experiencia Profesional
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70"></div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400 font-extralight">
            Mi trayectoria en desarrollo web y tecnologías digitales
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/20 to-transparent"></div>
          
          <div className="space-y-20">
            {activity.map((item) => (
              <div 
                key={item.id}
                className="relative pl-16 group"
              >
                <div className="absolute -left-4 top-0 flex items-center justify-center">
                  <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/10 dark:to-transparent"></div>
                  
                  <div className="absolute left-1 w-1.5 h-1.5 rounded-full bg-indigo-300/40 dark:bg-indigo-400/20 ring-2 ring-white/90 dark:ring-slate-900/90"></div>
                  
                  <div className="relative ml-6">
                    <div className="rounded-full p-0.5 bg-white/90 dark:bg-slate-900/90">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-9 h-9 rounded-full object-cover shadow-sm opacity-90"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-light text-gray-800 dark:text-white">
                      {item.experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mt-0.5">
                      <span className="font-light">{item.experience.where}</span>
                      <span className="text-gray-200 dark:text-gray-700">•</span>
                      <span className="font-light">{item.date}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-sm">
                      {item.description}
                    </p>
                  )}

                  {item.project && item.project.length > 0 && (
                    <div>
                      <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-3">
                        <span>Proyectos destacados</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.project.map((proj, idx) => {
                          const projectIcon = projectIcons[proj.title] || {
                            icon: HiOutlinePuzzle,
                            color: 'text-gray-400',
                            bgColor: 'bg-gray-50/30 dark:bg-gray-800/20'
                          };
                          const IconComponent = projectIcon.icon;
                          
                          return (
                            <button
                              key={idx}
                              onClick={() => handleClick(proj.title)}
                              className="group flex items-center gap-2 hover:opacity-80"
                            >
                              <div className={`flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-md ${projectIcon.bgColor}`}>
                                <IconComponent 
                                  className={`h-4 w-4 ${projectIcon.color}`}
                                />
                              </div>
                              <div>
                                <h3 className="text-sm font-light text-gray-700 dark:text-gray-300">
                                  {proj.title}
                                </h3>
                                {proj.date && (
                                  <p className="text-xs text-gray-400 dark:text-gray-500">
                                    {proj.date}
                                  </p>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {item.tecnologies && (
                    <div className="pt-5 border-t border-gray-100/30 dark:border-gray-800/30">
                      <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-3">
                        <span>Stack tecnológico</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tecnologies.split(',').map((tech, idx) => {
                          const techKey = tech.trim();
                          const techData = techIcons[techKey];
                          
                          if (!techData) return null;
                          
                          const Icon = techData.icon;
                          return (
                            <div 
                              key={idx}
                              className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-gray-50/30 dark:bg-gray-800/20"
                            >
                              <Icon 
                                className={`w-3.5 h-3.5 ${techData.color} opacity-75`}
                              />
                              <span className="text-xs font-light text-gray-500 dark:text-gray-400">
                                {techKey}
                              </span>
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
