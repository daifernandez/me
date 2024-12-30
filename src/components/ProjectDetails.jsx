import { useParams } from "react-router-dom";
import background from "../img/background.jpg";
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
} from "@icons-pack/react-simple-icons";
import ReactPlayer from "react-player";
import ScrollToTop from "./ScrollToTop";

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
};

function TechnologyItem({ technology }) {
  const technologyName = technology.toLowerCase().replace(/\s/g, "");
  const technologyIcon = technologiesName[technologyName].icon;
  return (
    <div className="group flex items-center gap-3 p-2">
      <div className="transition-all duration-300 group-hover:scale-110">
        {technologyIcon}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
        {technology}
      </span>
    </div>
  );
}

function AptitudeItem({ aptitud }) {
  return (
    <div className="group flex flex-col items-center gap-4 p-4 w-full">
      <div className="text-gray-400 dark:text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4" 
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
            src={background}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900" />
        </div>
      </div>
      <div className="overflow-hidden bg-white dark:bg-slate-900 py-32">
        <div className="animate-fade animate-once animate-duration-1000 animate-ease-in mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <div className="space-y-4">
                <h2 className="animate-fade-up text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                  {project.name}
                </h2>
                <div className="h-1 w-20 bg-gray-700 dark:bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-8 space-y-6">
                <p className="animate-fade-left text-lg leading-relaxed text-gray-600 dark:text-gray-400 
                              first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 
                              dark:first-letter:text-gray-200 first-letter:mr-3 first-letter:float-left">
                  {project.description}
                </p>
              </div>
              <div className="my-12">
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <section className="animate-fade-right mt-12">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">
                  Aptitudes
                </h2>
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
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                  Tecnologías utilizadas
                </h2>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
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

              <div className="mt-12 flex">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg bg-gray-700 px-6 py-3 text-sm font-semibold text-gray-50 shadow-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
                >
                  <span className="flex items-center gap-2">
                    Visita la App
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 lg:contents">
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
        <div className="bg-white dark:bg-slate-900 animate-jump-in animate-once animate-ease-in mt-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {project.video && (
                <div className="mt-16 rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
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
