import { useState } from "react";
import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
import capellari from "../img/capellari.jpeg";
import { useHistory } from "react-router-dom";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiPostgresql, SiSequelize, SiExpress, SiTailwindcss, SiFirebase, SiNextdotjs } from "react-icons/si";

// Objeto para mapear tecnologías con sus iconos
const techIcons = {
  "React": <FaReact className="w-3.5 h-3.5" />,
  "Node.js": <FaNodeJs className="w-3.5 h-3.5" />,
  "CSS": <FaCss3Alt className="w-3.5 h-3.5" />,
  "PostgreSQL": <SiPostgresql className="w-3.5 h-3.5" />,
  "Sequelize": <SiSequelize className="w-3.5 h-3.5" />,
  "Express": <SiExpress className="w-3.5 h-3.5" />,
  "TailwindCSS": <SiTailwindcss className="w-3.5 h-3.5" />,
  "Firebase": <SiFirebase className="w-3.5 h-3.5" />,
  "Next.js": <SiNextdotjs className="w-3.5 h-3.5" />,
};

const categories = [
  {
    id: 1,
    title: "Desarrollo Web",
    projects: [
      {
        id: 1,
        title: "GameStream",
        href: "/projects/gamestream",
        description: "Plataforma de streaming de videojuegos que permite a los usuarios ver y compartir contenido relacionado con sus juegos favoritos.",
        imageUrl: gamestream,
        date: "Ene 2023",
        tags: ["React", "CSS", "Node.js", "Express", "PostgreSQL", "Sequelize"],
        author: {
          name: "Proyecto Individual",
          imageUrl: avatarGS,
        },
      },
      {
        id: 2,
        title: "PawCare",
        href: "/projects/pawcare",
        description: "Aplicación web para el cuidado y seguimiento de mascotas, permitiendo a los dueños gestionar citas veterinarias y recordatorios.",
        imageUrl: pawcare,
        date: "Feb 2023",
        tags: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
        author: {
          name: "Proyecto Grupal",
          imageUrl: avatarPC,
        },
      },
      {
        id: 3,
        title: "Capellari",
        href: "/projects/capellari",
        description: "Sitio web moderno para un ecomerce de electrodomesticos, con catálogo de productos y sistema de compras en línea.",
        imageUrl: capellari,
        date: "Dic 2023",
        tags: ["Next.js", "React", "TailwindCSS", "Firebase"],
        author: {
          name: "Proyecto Individual",
          imageUrl: avatarPC,
        },
      },
    ],
  },
];

export default function Projects() {
  const redirect = useHistory();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const routes = {
    GameStream: "/projects/gamestream",
    Capellari: "/projects/capellari",
    PawCare: "/projects/pawcare",
  };

  const handleClick = (title) => {
    const path = routes[title];
    redirect.push(path);
  };

  // Obtener todos los tags únicos
  const allTags = Array.from(
    new Set(
      categories
        .flatMap((category) => category.projects)
        .flatMap((project) => project.tags)
    )
  );

  const filteredProjects = categories.map((category) => ({
    ...category,
    projects: category.projects.filter(
      (project) => !selectedTag || project.tags.includes(selectedTag)
    ),
  }));

  return (
    <div className="animate-fade-up animate-once animate-duration-1000 animate-ease-in-out bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado principal */}
        <div className="relative mx-auto max-w-2xl text-center mb-24">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl" />
          
          <h2 className="text-4xl font-light tracking-tight text-gray-900 dark:text-white">
            Mis Proyectos
          </h2>
          
          {/* Subtítulo y descripción */}
          <div className="mt-12 space-y-8">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>
              <span className="text-sm font-light tracking-widest uppercase text-gray-500 dark:text-gray-400">
                {categories[0].title}
              </span>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
            </div>
            
            <p className="text-base text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Explora mi portafolio de desarrollo web, donde cada proyecto refleja mi pasión por crear experiencias digitales excepcionales
            </p>
          </div>

          {/* Filtros por tecnología */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-5 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                !selectedTag
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                  : "bg-gray-50 dark:bg-slate-800/50 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              }`}
            >
              Todos
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                    : "bg-gray-50 dark:bg-slate-800/50 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                }`}
              >
                <span className="flex items-center gap-2">
                  {techIcons[tag]}
                  {tag}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        {filteredProjects.map((category) => (
          <div key={category.id} className="space-y-16">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {category.projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden cursor-pointer border border-gray-100/10 dark:border-gray-700/10"
                    onClick={() => handleClick(project.title)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ver detalles de ${project.title}`}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(project.title)}
                  >
                    {/* Contenedor de la imagen */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 group-focus:scale-105 filter brightness-95 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Contenido */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-light tracking-wide text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-3">
                          <time className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {project.date}
                          </time>
                          <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                          <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {project.author.name}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 font-light line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Tags con iconos */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-slate-700/80 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-300"
                          >
                            {techIcons[tag]}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Indicador de acción */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
