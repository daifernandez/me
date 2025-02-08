import avatarHenry from "../img/avatarHenry.jpeg";
import avatarCoder from "../img/avatarCoder.png";
import avatarPlatzi from "../img/avatarPlatzi.png";
import avatarAAO from "../img/avatarAAO.jpeg";
import avatarGA from "../img/avatarGA.png";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { HiOutlineEmojiSad, HiOutlineSparkles } from 'react-icons/hi';

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
  HiOutlinePuzzle,
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiOutlineAdjustments,
  HiOutlineSortAscending
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
        date: "",
      },
    ],
    funcionalidades: "",
    tecnologies: "NextJS, React, TailwindCSS, Firestore, Firebase.",
    date: "2023",
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
  'JavaScript': { icon: SiJavascript, color: 'text-gray-500 dark:text-gray-400' },
  'React': { icon: SiReact, color: 'text-gray-500 dark:text-gray-400' },
  'Redux': { icon: SiRedux, color: 'text-gray-500 dark:text-gray-400' },
  'NodeJS': { icon: SiNodedotjs, color: 'text-gray-500 dark:text-gray-400' },
  'Express': { icon: SiExpress, color: 'text-gray-500 dark:text-gray-400' },
  'Sequelize': { icon: SiSequelize, color: 'text-gray-500 dark:text-gray-400' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-gray-500 dark:text-gray-400' },
  'NextJS': { icon: SiNextdotjs, color: 'text-gray-500 dark:text-gray-400' },
  'TailwindCSS': { icon: SiTailwindcss, color: 'text-gray-500 dark:text-gray-400' },
  'Firebase': { icon: SiFirebase, color: 'text-gray-500 dark:text-gray-400' },
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

const AptitudesList = ({ aptitudes }) => {
  if (!aptitudes) return null;
  
  const aptitudeArray = aptitudes.split('·').map(apt => apt.trim()).filter(Boolean);
  
  return (
    <div className="pt-3 border-t border-gray-100/10 dark:border-gray-800/10">
      <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-3">
        <span>Aptitudes</span>
        <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {aptitudeArray.map((aptitud, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50/10 dark:bg-gray-800/5 hover:bg-gray-100/20 dark:hover:bg-gray-700/10 transition-colors duration-200 group"
          >
            <HiOutlineSparkles className="w-4 h-4 text-indigo-400/70 dark:text-indigo-500/70 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-200" />
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              {aptitud}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Cv() {
  const redirect = useHistory();
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const routes = {
    GameStream: "/projects/gamestream",
    Capellari: "/projects/capellari",
  };

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById('cv-timeline');
      if (timeline) {
        const scrollPosition = window.scrollY - timeline.offsetTop;
        const scrollHeight = timeline.scrollHeight - window.innerHeight;
        const progress = Math.min(Math.max(scrollPosition / scrollHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleClick = (title) => {
    const path = routes[title] || "/projects/pawcare";
    redirect.push(path);
  };

  const filteredAndSortedActivity = useMemo(() => {
    let filtered = [...activity];
    
    if (filter !== 'all') {
      filtered = filtered.filter(item => {
        if (filter === 'withProjects') {
          return item.project && item.project.length > 0;
        }
        if (filter === 'courses') {
          return item.type === 'comment';
        }
        return false;
      });
    }

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }, [filter, sortOrder]);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 py-12 sm:py-24">
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-24 px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-extralight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experiencia Profesional
          </h2>
          <div className="mt-3 sm:mt-4 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-500 dark:text-gray-400 font-extralight">
            Mi trayectoria en desarrollo web y tecnologías digitales
          </p>

          <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-2 px-4">
            <div className="flex-1 max-w-[200px] flex items-center gap-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-2.5">
              <HiOutlineAdjustments className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-transparent border-none text-sm text-gray-600 dark:text-gray-300 focus:ring-0"
              >
                <option value="all">Todos</option>
                <option value="withProjects">Con Proyectos</option>
                <option value="courses">Cursos</option>
              </select>
            </div>

            <button
              onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
              className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-2.5 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              <HiOutlineSortAscending className={`w-5 h-5 text-gray-400 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {sortOrder === 'desc' ? 'Más reciente' : 'Más antiguo'}
              </span>
            </button>
          </div>
        </motion.header>

        <div className="relative" id="cv-timeline">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/20 to-transparent">
            <div 
              className="absolute left-0 top-0 w-full bg-indigo-500/30 dark:bg-indigo-400/30 transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          
          {isLoading ? (
            <div className="space-y-20">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4"></div>
                  <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-lg w-3/4"></div>
                </div>
              ))}
            </div>
          ) : filteredAndSortedActivity.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <HiOutlineEmojiSad className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <h3 className="text-lg font-light text-gray-600 dark:text-gray-400">
                No se encontraron resultados
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Intenta cambiar los filtros de búsqueda
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              >
                Mostrar todo
              </button>
            </motion.div>
          ) : (
            <div className="space-y-20" role="list">
              {filteredAndSortedActivity.map((item, index) => (
                <motion.article 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16 group"
                  role="listitem"
                >
                  <div className="absolute -left-4 top-0 flex items-center justify-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                          className="absolute w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/10 dark:to-transparent"
                        />
                        
                      <div className="absolute left-1 w-1.5 h-1.5 rounded-full bg-indigo-300/40 dark:bg-indigo-400/20 ring-2 ring-white/90 dark:ring-slate-900/90"></div>
                        
                      <div className="relative ml-4 sm:ml-6">
                          <div className="rounded-full p-0.5 bg-white/90 dark:bg-slate-900/90 shadow-lg">
                            <img
                              src={item.imageUrl}
                              alt={`Logo de ${item.experience.where}`}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                            />
                          </div>
                        </div>
                      </div>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-light text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {item.experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-1">
                          <div className="flex items-center gap-1 min-w-0">
                            <HiOutlineOfficeBuilding className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="font-light block sm:hidden">
                              {item.experience.where.includes("Universidad Computense") 
                                ? "UCM - Google Actívate"
                                : item.experience.where.includes("Ateneo Argentino")
                                ? "AAO - UF"
                                : item.experience.where}
                            </span>
                            <span className="font-light hidden sm:block">{item.experience.where}</span>
                          </div>
                          <span className="text-gray-300 dark:text-gray-600">•</span>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <HiOutlineCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="font-light">{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-sm text-justify">
                        {item.description}
                      </p>
                    )}

                    {item.aptitudes && <AptitudesList aptitudes={item.aptitudes} />}

                    {item.project && item.project.length > 0 && (
                      <div>
                        <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-3">
                          <span className="sm:inline">Proyectos destacados</span>
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {item.project.map((proj, idx) => {
                            const projectIcon = projectIcons[proj.title] || {
                              icon: HiOutlinePuzzle,
                              color: 'text-gray-400',
                              bgColor: 'bg-gray-50/10 dark:bg-gray-800/5'
                            };
                            const IconComponent = projectIcon.icon;
                            
                            return (
                              <button
                                key={idx}
                                onClick={() => handleClick(proj.title)}
                                className="group relative flex items-center gap-3 py-2 px-2.5 -mx-2.5 rounded-lg hover:bg-gray-50/20 dark:hover:bg-slate-800/10 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-400/20"
                                aria-label={`Ver proyecto ${proj.title}`}
                              >
                                <div className={`flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-md ${projectIcon.bgColor} group-hover:scale-105 transition-transform duration-200`}>
                                  <IconComponent 
                                    className={`h-3.5 w-3.5 ${projectIcon.color}`}
                                  />
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                  <h3 className="text-sm font-light text-gray-600 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    {proj.title}
                                  </h3>
                                </div>
                                <div className="flex-shrink-0 text-gray-300 dark:text-gray-700 group-hover:text-indigo-500/50 dark:group-hover:text-indigo-400/50 group-hover:translate-x-0.5 transition-all duration-200 opacity-0 group-hover:opacity-100">
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {item.tecnologies && (
                      <div className="pt-3 border-t border-gray-100/10 dark:border-gray-800/10">
                        <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-3">
                          <span>Stack tecnológico</span>
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
                        </h4>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {item.tecnologies.split(',').map((tech, idx) => {
                            const techKey = tech.trim();
                            const techData = techIcons[techKey];
                            
                            if (!techData) return null;
                            
                            const Icon = techData.icon;
                            return (
                              <div 
                                key={idx}
                                className="inline-flex items-center gap-1.5 py-1.5 px-2 sm:px-2.5 rounded-md bg-gray-50/10 dark:bg-gray-800/5 hover:bg-gray-100/20 dark:hover:bg-gray-700/10 transition-colors duration-200 group"
                                role="listitem"
                                aria-label={`Tecnología: ${techKey}`}
                                title={techKey}
                              >
                                <Icon 
                                  className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${techData.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                                  aria-hidden="true"
                                />
                                <span className="hidden sm:inline text-xs font-light text-gray-500 dark:text-gray-400">
                                  {techKey}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
