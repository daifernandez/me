import { useState } from "react";
import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
import capellari from "../img/capellari.jpeg";
import { useHistory } from "react-router-dom";
import { SiReact, SiNodedotjs, SiCss3, SiPostgresql, SiSequelize, SiExpress, SiTailwindcss, SiFirebase, SiNextdotjs } from "react-icons/si";
import { Bars3Icon } from "@heroicons/react/24/outline";

const techIconClass = "w-5 h-5 sm:w-3.5 sm:h-3.5 text-stone-500 dark:text-stone-400";

const techIcons = {
  "React": <SiReact className={techIconClass} />,
  "Node.js": <SiNodedotjs className={techIconClass} />,
  "CSS": <SiCss3 className={techIconClass} />,
  "PostgreSQL": <SiPostgresql className={techIconClass} />,
  "Sequelize": <SiSequelize className={techIconClass} />,
  "Express": <SiExpress className={techIconClass} />,
  "TailwindCSS": <SiTailwindcss className={techIconClass} />,
  "Firebase": <SiFirebase className={techIconClass} />,
  "Next.js": <SiNextdotjs className={techIconClass} />,
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
  const redirect = useHistory()
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
    <div className="animate-fade-up animate-once animate-duration-1000 animate-ease-in-out bg-stone-50 dark:bg-neutral-900 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado principal */}
        <div className="relative mx-auto max-w-2xl text-center mb-24">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-800 dark:text-white">
            Mis Proyectos
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-16 bg-stone-300 dark:bg-stone-600"></div>
          </div>
         
          {/* Subtítulo y descripción */}
          <div className="mt-10 space-y-6">
            <p className="text-xs xs:text-sm font-light tracking-widest uppercase text-stone-400 dark:text-stone-500">
              {categories[0].title}
            </p>
            
            <p className="text-sm xs:text-base sm:text-lg text-stone-500 dark:text-stone-400 font-light leading-relaxed">
              Explora mi portafolio de desarrollo web, donde cada proyecto refleja mi pasión por crear experiencias digitales excepcionales
            </p>
          </div>

          {/* Filtros por tecnología */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              aria-pressed={!selectedTag}
              aria-label="Mostrar todos los proyectos"
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light transition-colors duration-300 ${
                !selectedTag
                  ? "bg-stone-800 dark:bg-white text-white dark:text-stone-900"
                  : "text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500"
              }`}
            >
              <span className="hidden sm:inline">Todos</span>
              <span className="sm:hidden">
                <Bars3Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                aria-pressed={selectedTag === tag}
                aria-label={`Filtrar por ${tag}`}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light transition-colors duration-300 ${
                  selectedTag === tag
                    ? "bg-stone-800 dark:bg-white text-white dark:text-stone-900"
                    : "text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500"
                }`}
              >
                <span className="flex items-center gap-2">
                  {techIcons[tag]}
                  <span className="hidden sm:inline">{tag}</span>
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
                    className="group relative bg-white dark:bg-neutral-800 rounded-2xl transition-colors duration-300 overflow-hidden cursor-pointer border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500"
                    onClick={() => handleClick(project.title)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ver detalles de ${project.title}`}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handleClick(project.title))}
                  >
                    {/* Contenedor de la imagen */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-display text-xl xs:text-2xl font-light tracking-wide text-stone-800 dark:text-white">
                          {project.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-3">
                          <time className="text-xs xs:text-sm font-light text-stone-400 dark:text-stone-500">
                            {project.date}
                          </time>
                          <span className="text-stone-300 dark:text-stone-600">·</span>
                          <span className="text-xs xs:text-sm font-light text-stone-400 dark:text-stone-500">
                            {project.author.name}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs xs:text-sm text-stone-500 dark:text-stone-400 font-light line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags como texto con separadores */}
                      <p className="text-xs text-stone-400 dark:text-stone-500 font-light pt-2">
                        {project.tags.join(" · ")}
                      </p>
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
