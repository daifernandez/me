import avatarHenry from "../img/avatarHenry.jpeg";
import avatarCoder from "../img/avatarCoder.png";
import avatarPlatzi from "../img/avatarPlatzi.png";
import avatarGA from "../img/avatarGA.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
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
  SiFirebase
} from 'react-icons/si';

import { 
  FaceFrownIcon,
  SparklesIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  PuzzlePieceIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  AdjustmentsHorizontalIcon,
  BarsArrowUpIcon,
  ChevronRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

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
    icon: VideoCameraIcon, 
    color: 'text-stone-500 dark:text-stone-400',
    bgColor: 'bg-stone-100 dark:bg-neutral-800' 
  },
  'PawCare': { 
    icon: HeartIcon, 
    color: 'text-stone-500 dark:text-stone-400',
    bgColor: 'bg-stone-100 dark:bg-neutral-800' 
  },
  'Capellari': { 
    icon: ShoppingBagIcon, 
    color: 'text-stone-500 dark:text-stone-400',
    bgColor: 'bg-stone-100 dark:bg-neutral-800' 
  }
};

const AptitudesList = ({ aptitudes }) => {
  if (!aptitudes) return null;
  
  const aptitudeArray = aptitudes.split('·').map(apt => apt.trim()).filter(Boolean);
  
  return (
    <div className="pt-3 border-t border-stone-200 dark:border-stone-700">
      <h4 className="text-xs font-light text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-3">
        <span>Aptitudes</span>
        <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700"></div>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {aptitudeArray.map((aptitud, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-2 p-2 rounded-lg"
          >
            <SparklesIcon className="w-4 h-4 text-stone-400 dark:text-stone-500" strokeWidth={1.5} />
            <span className="text-sm font-light text-stone-600 dark:text-stone-400">
              {aptitud}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Cv() {
  const navigate = useNavigate();
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
    navigate(path);
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
    <section className="bg-stone-50 dark:bg-neutral-900 py-16 sm:py-32">
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        <motion.header 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-24 px-4"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-stone-800 dark:text-white">
            Experiencia Profesional
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-16 bg-stone-300 dark:bg-stone-600"></div>
          </div>
          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone-500 dark:text-stone-400 font-light">
            Mi trayectoria en desarrollo web y tecnologías digitales
          </p>

          <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-2 px-4">
            <div className="flex-1 max-w-[200px] flex items-center gap-2 bg-white dark:bg-neutral-800 border border-stone-200 dark:border-stone-700 rounded-lg p-2.5">
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-stone-400 flex-shrink-0" strokeWidth={1.5} />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filtrar experiencias"
                className="w-full bg-transparent border-none text-sm text-stone-600 dark:text-stone-300 focus:ring-0"
              >
                <option value="all">Todos</option>
                <option value="withProjects">Con Proyectos</option>
                <option value="courses">Cursos</option>
              </select>
            </div>

            <button
              onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
              aria-label={`Ordenar: ${sortOrder === 'desc' ? 'más reciente primero' : 'más antiguo primero'}`}
              className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-white dark:bg-neutral-800 border border-stone-200 dark:border-stone-700 rounded-lg p-2.5 hover:border-stone-400 dark:hover:border-stone-500 transition-colors"
            >
              <BarsArrowUpIcon className={`w-5 h-5 text-stone-400 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} strokeWidth={1.5} />
              <span className="text-sm text-stone-600 dark:text-stone-300">
                {sortOrder === 'desc' ? 'Más reciente' : 'Más antiguo'}
              </span>
            </button>
          </div>
        </motion.header>

        <div className="relative" id="cv-timeline">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700">
            <div 
              className="absolute left-0 top-0 w-full bg-stone-400 dark:bg-stone-500 transition-all duration-300"
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
              <FaceFrownIcon className="w-16 h-16 mx-auto text-stone-300 dark:text-stone-600 mb-4" strokeWidth={1} />
              <h3 className="text-lg font-light text-stone-600 dark:text-stone-400">
                No se encontraron resultados
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">
                Intenta cambiar los filtros de búsqueda
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 text-stone-700 dark:text-stone-300 text-sm hover:text-stone-900 dark:hover:text-white transition-colors underline underline-offset-4"
              >
                Mostrar todo
              </button>
            </motion.div>
          ) : (
            <div className="space-y-20" role="list">
              {filteredAndSortedActivity.map((item, index) => (
                <motion.article 
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16 group"
                  role="listitem"
                >
                  <div className="absolute -left-4 top-0 flex items-center justify-center">
                      <div className="absolute left-1 w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600"></div>
                        
                      <div className="relative ml-4 sm:ml-6">
                          <div className="rounded-full p-0.5 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-stone-700">
                            <img
                              src={item.imageUrl}
                              alt={`Logo de ${item.experience.where}`}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg sm:text-xl font-light text-stone-800 dark:text-white">
                          {item.experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-400 dark:text-stone-500 mt-1">
                          <div className="flex items-center gap-1 min-w-0">
                            <BuildingOfficeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" strokeWidth={1.5} />
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
                            <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" strokeWidth={1.5} />
                            <span className="font-light">{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light text-sm text-justify">
                        {item.description}
                      </p>
                    )}

                    {item.aptitudes && <AptitudesList aptitudes={item.aptitudes} />}

                    {item.project && item.project.length > 0 && (
                      <div>
                        <h4 className="text-xs font-light text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-3">
                          <span className="sm:inline">Proyectos destacados</span>
                          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700"></div>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {item.project.map((proj, idx) => {
                            const projectIcon = projectIcons[proj.title] || {
                              icon: PuzzlePieceIcon,
                              color: 'text-stone-400 dark:text-stone-500',
                              bgColor: 'bg-stone-100 dark:bg-neutral-800'
                            };
                            const IconComponent = projectIcon.icon;
                            
                            return (
                              <button
                                key={idx}
                                onClick={() => handleClick(proj.title)}
                                className="group relative flex items-center gap-3 py-2 px-2.5 -mx-2.5 rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-300"
                                aria-label={`Ver proyecto ${proj.title}`}
                              >
                                <div className={`flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-md ${projectIcon.bgColor}`}>
                                  <IconComponent 
                                    className={`h-3.5 w-3.5 ${projectIcon.color}`}
                                  />
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                  <h3 className="text-sm font-light text-stone-600 dark:text-stone-300 group-hover:text-stone-800 dark:group-hover:text-white transition-colors">
                                    {proj.title}
                                  </h3>
                                </div>
                                <div className="flex-shrink-0 text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors duration-200">
                                  <ChevronRightIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {item.tecnologies && (
                      <div className="pt-3 border-t border-stone-200 dark:border-stone-700">
                        <h4 className="text-xs font-light text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-3">
                          <span>Stack tecnológico</span>
                          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700"></div>
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
                                className="inline-flex items-center gap-1.5 py-1.5 px-2 sm:px-2.5 rounded-md"
                                role="listitem"
                                aria-label={`Tecnología: ${techKey}`}
                                title={techKey}
                              >
                                <Icon 
                                  className={`w-4 h-4 ${techData.color}`}
                                  aria-hidden="true"
                                />
                                <span className="hidden sm:inline text-xs font-light text-stone-500 dark:text-stone-400">
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
