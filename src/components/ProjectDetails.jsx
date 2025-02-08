import { useParams, Link } from "react-router-dom";
import { useRef } from 'react';
import Footer from "./Footer";
import GSipad from "./ImgProjects/GSipad.png";
import GSipad2 from "./ImgProjects/GSipad1.png";
import GSweb from "./ImgProjects/GSweb.png";
import GSmobile from "./ImgProjects/GSmobile.png";
import PCipad from "./ImgProjects/PCipad.png";
import PCipad1 from "./ImgProjects/PCipad1.png";
import PCweb from "./ImgProjects/PCweb.png";
import PCmobile from "./ImgProjects/PCmobile.png";
import Cipad from "./ImgProjects/Cipad.png";
import Cipad2 from "./ImgProjects/Cipad2.png";
import Cmobile from "./ImgProjects/Cmobile.png";
import Cweb from "./ImgProjects/Cweb.png";
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
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
    technologiesDestacadas: [
      "React",
      "Redux",
      "Bootstrap",
      "NodeJS",
      "Express",
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
      "Inicialmente desarrollado como proyecto individual en Henry Bootcamp, GameStream ha evolucionado significativamente con el tiempo hasta convertirse en un proyecto personal en constante crecimiento. La aplicación comenzó como una plataforma para obtener detalles de videojuegos, pero ha ido incorporando nuevas funcionalidades y mejoras técnicas. Desarrollada con React para el Front End y Redux como gestor de estado, la aplicación consume datos de la API 'RAWG' a través de un Back End personalizado en Node.JS con Express. Todos los componentes fueron desarrollados con CSS puro, priorizando la experiencia de usuario y el rendimiento. Este proyecto representa mi crecimiento como desarrollador, desde sus inicios académicos hasta convertirse en una plataforma en constante evolución.",
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
    technologiesDestacadas: [
      "React",
      "Redux",
      "CSS",
      "NodeJS",
      "Express",
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
      "Firebase",
      "NodeJS",
      "Google Login",
    ],
    technologiesDestacadas: [
      "NextJS",
      "React",
      "TailwindCSS",
      "Firebase",
      "NodeJS",
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
    <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
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
  const getIcon = (aptitud) => {
    switch(aptitud.toLowerCase()) {
      case 'trabajo en equipo':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'comunicación':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'organización':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'autonomía':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'resolución de problemas':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'investigación':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  return (
    <div className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 hover:from-indigo-50 hover:to-indigo-50/50 dark:hover:from-indigo-900/20 dark:hover:to-indigo-900/10 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-all duration-300">
        {getIcon(aptitud)}
      </div>
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {aptitud}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-justify">
          {getAptitudeDescription(aptitud)}
        </p>
      </div>
    </div>
  );
}

// Función auxiliar para las descripciones
function getAptitudeDescription(aptitud) {
  const descriptions = {
    'trabajo en equipo': 'Colaboración efectiva y sinergia con otros desarrolladores',
    'comunicación': 'Habilidad para expresar ideas y conceptos técnicos claramente',
    'organización': 'Gestión eficiente de tareas y recursos del proyecto',
    'autonomía': 'Capacidad para trabajar y resolver problemas independientemente',
    'resolución de problemas': 'Análisis y solución efectiva de desafíos técnicos',
    'investigación': 'Búsqueda y aplicación de nuevas tecnologías y soluciones',
  };
  return descriptions[aptitud.toLowerCase()] || 'Competencia clave para el desarrollo del proyecto';
}

export default function ProjectDetails() {
  const { name } = useParams();
  const project = projects[name];
  const splideRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pb-32">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.background}
            alt=""
            className="w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 backdrop-blur-sm" />
        </div>

        {/* Navegación */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Volver a la página principal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </Link>
          </div>
        </div>

        {/* Contenido Hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-700">
              <span className="px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {project.technologiesDestacadas.join(" · ")}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-8
              animate-fade-up animate-once animate-duration-[1200ms] animate-delay-300">
              {project.name}
            </h1>
            
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-12 animate-fade-up animate-delay-500 leading-relaxed text-justify">
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-delay-700">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Ver sitio web</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <SiGithub className="w-4 h-4" />
                <span>Ver código</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="relative -mt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tecnologías y Aptitudes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tecnologías */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-6">Tecnologías</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.technologies.sort().map((technology, index) => (
                  <TechnologyItem key={index} technology={technology} />
                ))}
              </div>
            </div>

            {/* Aptitudes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-6">Aptitudes clave</h2>
              <div className="space-y-4">
                {project.aptitudes.map((aptitud, index) => (
                  <AptitudeItem key={index} aptitud={aptitud} />
                ))}
              </div>
            </div>
          </div>

          {/* Galería */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl ring-1 ring-gray-100 dark:ring-gray-700">
            {/* Vista Principal */}
            <div className="relative mb-12">
              <Splide
                ref={splideRef}
                options={{
                  type: 'fade',
                  rewind: true,
                  gap: '1rem',
                  arrows: true,
                  pagination: false,
                  autoplay: true,
                  interval: 5000,
                  pauseOnHover: true,
                  resetProgress: false,
                }}
                className="splide-custom"
              >
                {project.images.map((image, index) => (
                  <SplideSlide key={index}>
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                      <img
                        src={image}
                        alt={`Vista ${index + 1} del proyecto ${project.name}`}
                        className="w-full h-full object-contain p-4 transform hover:scale-[1.02] transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* Grid de Vistas */}
            <div className="grid grid-cols-4 gap-6">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => splideRef.current?.go(index)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:shadow-lg transition-all duration-500 ease-out"
                >
                  <img
                    src={image}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-contain p-2 transform group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <span className="block text-xs text-center font-light text-white backdrop-blur-sm bg-black/20 rounded-full py-1 px-3">
                      {index === 0 ? 'Vista Tablet' :
                       index === 1 ? 'Vista Tablet Alt' :
                       index === 2 ? 'Vista Desktop' : 'Vista Mobile'}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Indicadores de Dispositivo */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              {['Tablet', 'Tablet Alt', 'Desktop', 'Mobile'].map((device, index) => (
                <button
                  key={device}
                  onClick={() => splideRef.current?.go(index)}
                  className="px-5 py-2 text-xs font-light tracking-wide rounded-full transition-all duration-500 ease-out
                    bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800
                    text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                    ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600
                    hover:shadow-md transform hover:-translate-y-0.5"
                >
                  {device}
                </button>
              ))}
            </div>
          </div>

          {/* Video demo */}
          {project.video && (
            <div className="mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-xl font-light text-gray-900 dark:text-white mb-6">Demo del proyecto</h2>
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
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
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
