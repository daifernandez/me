import { useParams, Link } from "react-router-dom";
import { useRef } from 'react';
import React from 'react';
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
  SiTailwindcss,
} from "react-icons/si";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  BoltIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
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

const techIconClass = "w-5 h-5 text-stone-500 dark:text-stone-400";

const technologiesName = {
  javascript: {
    name: "JavaScript",
    icon: <SiJavascript title="JavaScript" className={techIconClass} />,
  },
  nextjs: {
    name: "NextJS",
    icon: <SiNextdotjs title="NextJS" className={techIconClass} />,
  },
  react: {
    name: "React",
    icon: <SiReact title="React" className={techIconClass} />,
  },
  redux: {
    name: "Redux",
    icon: <SiRedux title="Redux" className={techIconClass} />,
  },
  css: {
    name: "CSS",
    icon: <SiCss3 title="CSS" className={techIconClass} />,
  },
  nodejs: {
    name: "NodeJS",
    icon: <SiNodedotjs title="NodeJS" className={techIconClass} />,
  },
  express: {
    name: "Express",
    icon: <SiExpress title="Express" className={techIconClass} />,
  },
  sequelize: {
    name: "Sequelize",
    icon: <SiSequelize title="Sequelize" className={techIconClass} />,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: <SiPostgresql title="PostgreSQL" className={techIconClass} />,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: <SiBootstrap title="Bootstrap" className={techIconClass} />,
  },
  googlelogin: {
    name: "Google login",
    icon: <SiGoogle title="Google login" className={techIconClass} />,
  },
  mercadopago: {
    name: "MercadoPago",
    icon: <SiMercadopago title="MercadoPago" className={techIconClass} />,
  },
  auth0: {
    name: "Auth0",
    icon: <SiAuth0 title="Auth0" className={techIconClass} />,
  },
  cloudinary: {
    name: "Cloudinary",
    icon: <SiCloudinary title="Cloudinary" className={techIconClass} />,
  },
  firebase: {
    name: "Firebase",
    icon: <SiFirebase title="Firebase" className={techIconClass} />,
  },
  github: {
    name: "GitHub",
    icon: <SiGithub title="GitHub" className={techIconClass} />,
  },
  tailwindcss: {
    name: "TailwindCSS",
    icon: <SiTailwindcss title="TailwindCSS" className={techIconClass} />,
  },
};

function TechnologyItem({ technology }) {
  const technologyName = technology.toLowerCase().replace(/\s/g, "");
  const technologyIcon = technologiesName[technologyName].icon;
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
      <div>
        {technologyIcon}
      </div>
      <span className="text-sm font-light text-stone-600 dark:text-stone-400">
        {technology}
      </span>
    </div>
  );
}

const aptitudeIcons = {
  'trabajo en equipo': UserGroupIcon,
  'comunicación': ChatBubbleLeftRightIcon,
  'organización': ClipboardDocumentListIcon,
  'autonomía': BoltIcon,
  'resolución de problemas': Cog6ToothIcon,
  'investigación': MagnifyingGlassIcon,
};

function AptitudeItem({ aptitud }) {
  const IconComponent = aptitudeIcons[aptitud.toLowerCase()] || ShieldCheckIcon;

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-stone-200 dark:border-stone-700">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-stone-100 dark:bg-neutral-800 text-stone-500 dark:text-stone-400">
        <IconComponent className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-light text-stone-800 dark:text-white">
          {aptitud}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light">
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
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-900">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pb-32">
        {/* Navegación */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-light text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-white transition-colors"
              aria-label="Volver a la página principal"
            >
              <ArrowLeftIcon className="w-4 h-4" strokeWidth={1.5} />
              Volver
            </Link>
          </div>
        </div>

        {/* Contenido Hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-light tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-6">
              {project.technologiesDestacadas.join(" · ")}
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-800 dark:text-white mb-8
              animate-fade-up animate-once animate-duration-[1200ms] animate-delay-300">
              {project.name}
            </h1>
            
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-500 dark:text-stone-400 mb-12 animate-fade-up animate-delay-500 leading-relaxed font-light text-justify">
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-delay-700">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-light text-white bg-stone-800 dark:bg-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-100 rounded-full transition-colors duration-300"
              >
                <span>Ver sitio web</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-light text-stone-700 dark:text-white border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500 rounded-full transition-colors duration-300"
              >
                <SiGithub className="w-4 h-4" />
                <span>Ver código</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="relative pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tecnologías y Aptitudes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tecnologías */}
            <div className="rounded-2xl p-8 border border-stone-200 dark:border-stone-700">
              <h2 className="font-display text-xl sm:text-2xl font-light text-stone-800 dark:text-white mb-6">Tecnologías</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.technologies.sort().map((technology, index) => (
                  <TechnologyItem key={index} technology={technology} />
                ))}
              </div>
            </div>

            {/* Aptitudes */}
            <div className="rounded-2xl p-8 border border-stone-200 dark:border-stone-700">
              <h2 className="font-display text-xl sm:text-2xl font-light text-stone-800 dark:text-white mb-6">Aptitudes clave</h2>
              <div className="space-y-4">
                {project.aptitudes.map((aptitud, index) => (
                  <AptitudeItem key={index} aptitud={aptitud} />
                ))}
              </div>
            </div>
          </div>

          {/* Galería */}
          <div className="rounded-2xl p-8 border border-stone-200 dark:border-stone-700">
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
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 dark:bg-neutral-800">
                      <img
                        src={image}
                        alt={`Vista ${index + 1} del proyecto ${project.name}`}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* Grid de Vistas */}
            <div className="grid grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => splideRef.current?.go(index)}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500 transition-colors duration-300"
                >
                  <img
                    src={image}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>

            {/* Indicadores de Dispositivo */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {['Tablet', 'Tablet Alt', 'Desktop', 'Mobile'].map((device, index) => (
                <button
                  key={device}
                  onClick={() => splideRef.current?.go(index)}
                  className="px-4 py-1.5 text-xs font-light tracking-wide rounded-full transition-colors duration-300
                    text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-white
                    border border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500"
                >
                  {device}
                </button>
              ))}
            </div>
          </div>

          {/* Video demo */}
          {project.video && (
            <div className="mt-8">
              <div className="rounded-2xl p-8 border border-stone-200 dark:border-stone-700">
                <h2 className="font-display text-xl sm:text-2xl font-light text-stone-800 dark:text-white mb-6">Demo del proyecto</h2>
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
