import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
import capellari from "../img/capellari.jpeg";
import { useHistory } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Desarrollo Web",
    projects: [
      {
        id: 1,
        title: "GameStream",
        href: "/projects/gamestream",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: gamestream,
        date: "Ene 2023",
        author: {
          name: "Proyecto Individual",
          imageUrl: avatarGS,
        },
      },
      {
        id: 2,
        title: "PawCare",
        href: "/projects/pawcare",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: pawcare,
        date: "Feb 2023",
        author: {
          name: "Proyecto Grupal",
          imageUrl: avatarPC,
        },
      },
      {
        id: 3,
        title: "Capellari",
        href: "/projects/capellari",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: capellari,
        date: "Dic 2023",
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

  const routes = {
    GameStream: "/projects/gamestream",
    Capellari: "/projects/capellari",
    PawCare: "/projects/pawcare",
  };

  const handleClick = (title) => {
    const path = routes[title];
    redirect.push(path);
  };

  return (
    <div className="animate-fade animate-once animate-duration-1000 animate-ease-in bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Mis Proyectos
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-light">
            Explora algunos de mis trabajos más recientes
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="space-y-16">
            <div className="relative">
              <div className="flex items-center mb-12">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
                <h3 className="px-4 text-lg font-light text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {category.projects.map((project) => (
                  <div 
                    key={project.id}
                    className="group relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <time className="text-sm font-light text-gray-300 tracking-wider">
                          {project.date}
                        </time>
                        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-light text-gray-200 tracking-wide border border-white/10">
                          {project.author.name}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-light tracking-wide text-white group-hover:text-indigo-300 transition-colors duration-300">
                          <button
                            onClick={() => handleClick(project.title)}
                            className="focus:outline-none"
                          >
                            <span className="absolute inset-0" />
                            {project.title}
                          </button>
                        </h3>
                        <div className="h-0.5 w-0 group-hover:w-full bg-indigo-500/50 transition-all duration-300 mt-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-sm leading-7 text-gray-500 dark:text-gray-400 font-light italic">
                  Haz click en cada proyecto para explorar más detalles
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
