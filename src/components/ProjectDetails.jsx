import { useParams } from "react-router-dom";
import Footer from "./Footer";
import GSipad from "./ImgProjects/GSipad.png";
import GSipad2 from "./ImgProjects/GSipad1.png";
import GSweb from "./ImgProjects/GSweb.png";
import GSmobile from "./ImgProjects/GSmobile.png";
import PCipad from "./ImgProjects/PCipad.png";
import PCipad1 from "./ImgProjects/PCipad1.png";
import PCweb from "./ImgProjects/PCweb.png";
import PCmobile from "./ImgProjects/PCmobile.png";
import Cipad from "./ImgProjects/Cipad.jpeg";
import Cipad2 from "./ImgProjects/Cipad2.jpeg";
import Cmobile from "./ImgProjects/Cmobile.jpeg";
import Cweb from "./ImgProjects/Cweb.jpeg";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiCss3,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiBootstrap,
  SiGoogle,
  SiAuth0,
  SiMercadopago,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiCloudinary,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import ReactPlayer from "react-player";
import ScrollToTop from "./ScrollToTop";
import pawcareBackground from "../img/PawCare.png";
import gamestreamBackground from "../img/GameStream.png";
import capellariBackground from "../img/capellari.jpeg";

const projects = {
  pawcare: {
    name: "PawCare",
    description:
      "Proyecto académico desarrollado dentro de Henry Bootcamp. Realizado en 24 días junto a un grupo de 6 personas como proyecto final en nuestra cursada. PawCare 🐾 es una plataforma de servicios para cuidar tus mascotas, conectándote con cuidadores que te ofrecerán diversos servicios como son guardería, cuidado de mascotas, paseos, etc. Podrás elegir a tu cuidador según una serie de preferencias, ya sea por ubicación, popularidad, tipo de mascota y cantidad, tipo de servicio.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Bootstrap",
      "NodeJS",
      "Express",
      "Google Login",
      "MercadoPago",
      "Auth0",
      "Cloudinary",
    ],
    aptitudes: ["Trabajo en equipo", "Comunicación", "Organización"],
    images: [PCipad, PCipad1, PCweb, PCmobile],
    link: "https://pawcare.vercel.app",
    video: true,
    github: "https://github.com/daifernandez/pf-pawcare.git",
    background: pawcareBackground,
  },
  gamestream: {
    name: "GameStream",
    description:
      "Proyecto individual desarrollado dentro de Henry Bootcamp que consiste en el desarrollo de una pagina web utilizando React para el Front End y Redux como state management, con el propósito de crear una pequeña aplicación en donde se podrá obtener detalles de videojuegos. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. Consume datos de una API (“RAWG”) a través de un Back End desarrollado en Node.JS utilizando Express, agregando nuevas funcionalidades",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "CSS",
      "NodeJS",
      "Express",
      "Sequelize",
      "PostgreSQL",
    ],
    aptitudes: ["Autonomía", "Resolución de problemas", "Investigación"],
    images: [GSipad, GSipad2, GSweb, GSmobile],
    link: "https://gamestream.dev/",
    github: "https://github.com/daifernandez/PI-Videogames.git",
    background: gamestreamBackground,
  },
  capellari: {
    name: "Capellari",
    description:
      "Proyecto individual desarrollado dentro de CoderHouse que consiste en el desarrollo de una página e-commerce con NextJS en la cual se desarrolla una app para la venta de productos electrodomésticos",
    technologies: [
      "NextJS",
      "JavaScript",
      "React",
      "NodeJS",
      "Google Login",
      "Firebase",
    ],
    aptitudes: ["Organización", "Investigación", "Autonomía"],
    images: [Cipad, Cipad2, Cweb, Cmobile],
    link: "https://e-commerce-capellari.vercel.app",
    video: false,
    github: "https://github.com/daifernandez/ECommerce-Capellari.git",
    background: capellariBackground,
  },
};

const technologiesName = {
  javascript: {
    name: "JavaScript",
    icon: <SiJavascript title="JavaScript" color="#F7DF1E" size={20} />,
  },
  nextjs: {
    name: "NextJS",
    icon: <SiNextdotjs title="NextJS" color="#000000" size={20} />,
  },
  react: {
    name: "React",
    icon: <SiReact title="React" color="#61DAFB" size={20} />,
  },
  redux: {
    name: "Redux",
    icon: <SiRedux title="Redux" color="#764ABC" size={20} />,
  },
  css: {
    name: "CSS",
    icon: <SiCss3 title="CSS" color="#1572B6" size={20} />,
  },
  nodejs: {
    name: "NodeJS",
    icon: <SiNodedotjs title="NodeJS" color="#339933" size={20} />,
  },
  express: {
    name: "Express",
    icon: <SiExpress title="Express" color="#000000" size={20} />,
  },
  sequelize: {
    name: "Sequelize",
    icon: <SiSequelize title="Sequelize" color="#52B0E7" size={20} />,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: <SiPostgresql title="PostgreSQL" color="#4169E1" size={20} />,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: <SiBootstrap title="Bootstrap" color="#7952B3" size={20} />,
  },
  googlelogin: {
    name: "Google login",
    icon: <SiGoogle title="Google login" color="#4285F4" size={20} />,
  },
  mercadopago: {
    name: "MercadoPago",
    icon: <SiMercadopago title="MercadoPago" color="#00B1EA" size={20} />,
  },
  auth0: {
    name: "Auth0",
    icon: <SiAuth0 title="Auth0" color="#EB5424" size={20} />,
  },
  cloudinary: {
    name: "Cloudinary",
    icon: <SiCloudinary title="Cloudinary" color="#3448C5" size={20} />,
  },
  firebase: {
    name: "Firebase",
    icon: <SiFirebase title="Firebase" color="#FFCA28" size={20} />,
  },
  github: {
    name: "GitHub",
    icon: <SiGithub title="GitHub" color="#181717" size={20} />,
  },
};

function TechnologyItem({ technology }) {
  const technologyName = technology.toLowerCase().replace(/\s/g, "");
  const technologyIcon = technologiesName[technologyName].icon;
  return (
    <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-500">
        {technologyIcon}
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
        {technology}
      </span>
    </div>
  );
}

function AptitudeItem({ aptitud }) {
  return (
    <div className="group flex flex-col items-center gap-4 p-6 w-full rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300">
      <div className="text-gray-400 dark:text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
          />
        </svg>
      </div>
      <span className="text-base font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors text-center">
        {aptitud}
      </span>
    </div>
  );
}

export default function ProjectDetails() {
  const { name } = useParams();
  const project = projects[name];

  return (
    <div>
      <ScrollToTop />
      
      <div className="bg-gray-50 dark:bg-gray-900">
        <div
          aria-hidden="true"
          className="animate-fade-down animate-once animate-ease-linear relative"
        >
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={project.background}
            alt={`${project.name} background`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900" />
        </div>
      </div>
      
      <div className="overflow-hidden bg-white dark:bg-slate-900 py-32">
        <div className="animate-fade animate-once animate-duration-1000 animate-ease-in mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <div className="overflow-hidden">
                <h2 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight
                  animate-fade-right animate-once animate-duration-[1200ms] animate-delay-500">
                  <span className="block text-gray-900 dark:text-white">
                {project.name}
                </span>
                
                </h2>
                <div className="mt-4 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70"></div>
          
          </div>
              </div>
              <div className="mt-8 space-y-6">
                <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400 font-extralight" >
                  {project.description}
                </p>
              </div>
              <div className="my-12">
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <section className="animate-fade-right mt-12">
               
                <div className="mx-auto max-w-2xl mb-24"> 

          <h2 className="text-3xl font-extralight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Aptitudes
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70"></div>
          </div>

        </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {project.aptitudes.map((aptitud, index) => (
                      <div
                        key={index}
                        className="w-full hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
                      >
                        <AptitudeItem aptitud={aptitud} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="animate-fade-left mt-12">
              <h2 className="text-3xl font-extralight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Tecnologías utilizadas
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70"></div>
          </div>

        
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mt-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.technologies.sort().map((technology, index) => (
                      <div
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
                      >
                        <TechnologyItem technology={technology} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 ease-out bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg hover:from-indigo-600 hover:to-indigo-500 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                  <span className="relative flex items-center gap-2">
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M15 12H9M12 9L15 12L12 15" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    Visitar sitio web
                  </span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ring-1 ring-gray-200 dark:ring-gray-700"
                >
                  <span className="relative flex items-center gap-2">
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                    Ver código fuente
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 lg:contents animate-fade-up animate-duration-1000 animate-delay-300">
              <div className="w-0 flex flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src={project.images[0]}
                  alt=""
                  className="aspect-[5/7] w-[30rem] rounded-xl lg:w-[32rem] object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-95 dark:hover:brightness-110"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex sm:w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src={project.images[1]}
                    alt=""
                    className="aspect-[7/] w-[9rem] sm:aspect-[5/7] sm:w-[20rem] rounded-xl lg:w-[20rem] object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  />
                </div>
                <div className="flex w-60 sm:w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src={project.images[2]}
                    alt=""
                    className="aspect-[7/] w-[45rem] sm:w-[45rem] lg:w-[44rem]"
                  />
                </div>
                <div className="sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src={project.images[3]}
                    alt=""
                    className="aspect-[/3] w-[5rem] sm:w-[8rem] rounded-2xl lg:w-[10rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 animate-fade-up animate-duration-1000 animate-delay-500 mt-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {project.video && (
                <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <ReactPlayer
                      url="https://vimeo.com/803296822"
                      controls={true}
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                      playing={false}
                      light={false}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
