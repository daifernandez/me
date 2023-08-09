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
    images: [GSipad, GSipad2, GSweb, GSmobile],
    link: "https://gamestream.dev/",
  },
};

const technologiesName = {
  javascript: {
    name: "JavaScript",
    icon: <SiJavascript title="JavaScript" color="default" size={24} />,
  },
  react: {
    name: "React",
    icon: <SiReact title="React" color="default" size={24} />,
  },
  redux: {
    name: "Redux",
    icon: <SiRedux title="Redux" color="default" size={24} />,
  },
  css: {
    name: "CSS",
    icon: <SiCss3 title="CSS" color="default" size={24} />,
  },
  nodejs: {
    name: "NodeJS",
    icon: <SiNodedotjs title="Auth0" color="default" size={24} />,
  },
  express: {
    name: "Express",
    icon: <SiExpress title="Express" color="default" size={24} />,
  },
  sequelize: {
    name: "Sequelize",
    icon: <SiSequelize title="Sequelize" color="default" size={24} />,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: <SiPostgresql title="PostgreSQL" color="default" size={24} />,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: <SiBootstrap title="Bootstrap" color="default" size={24} />,
  },
  googlelogin: {
    name: "Google login",
    icon: <SiGoogle title="Google login" color="default" size={20} />,
  },
  mercadopago: {
    name: "MercadoPago",
    icon: <SiMercadopago title="MercadoPago" color="default" size={24} />,
  },
  auth0: {
    name: "Auth0",
    icon: <SiAuth0 title="Auth0" color="default" size={24} />,
  },
  cloudinary: {
    name: "Cloudinary",
    icon: null,
  },
};

function TechnologyItem({ technology }) {
  const technologyName = technology.toLowerCase().replace(/\s/g, "");
  const technologyIcon = technologiesName[technologyName].icon;
  return (
    <li className="flex items-center py-1">
      {technologyIcon && <span className="mr-2">{technologyIcon}</span>}
      <span className="text-indigo-800 dark:text-indigo-100">{technology}</span>
    </li>
  );
}

export default function ProjectDetails() {
  const { name } = useParams();
  const project = projects[name];

  return (
    <div>
      <ScrollToTop />
      <div className="bg-white dark:bg-slate-900">
        <div
          aria-hidden="true"
          className="animate-fade-down animate-once animate-ease-linear relative"
        >
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={background}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900" />
        </div>
      </div>
      <div className="overflow-hidden bg-white dark:bg-slate-900 py-32">
        <div className="animate-fade animate-once animate-duration-1000 animate-ease-in mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="animate-fade-up text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl hover:animate-pulse">
                {project.name}
              </h2>
              <p
                className="animate-fade-left mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400"
                style={{ textAlign: "justify" }}
              >
                {project.description}
              </p>
              <section className="animate-fade-left mt-12">
                <h2 className="text-lg font-medium text-gray-900 dark:text-indigo-600 mb-4">
                  Tecnologías utilizadas
                </h2>
                <div className="grid grid-cols-2 gap-1 lg:grid-cols-3">
                  {project.technologies.sort().map((technology) => (
                    <div
                      key={technology}
                      className=" bg-indigo-100/20 bg-opacity-5 backdrop-blur-md rounded-md p-2  dark:bg-slate-800 dark:bg-opacity-60"
                    >
                      <TechnologyItem technology={technology} />
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-12 flex">
                <a
                  href={project.link}
                  className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Visita la App <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src={project.images[0]}
                  alt=""
                  className="aspect-[5/7] w-[30rem] max-w-none rounded-2xl object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src={project.images[1]}
                    alt=""
                    className="aspect-[5/7] w-[20rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src={project.images[2]}
                    alt=""
                    className="aspect-[7/] w-[45rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src={project.images[3]}
                    alt=""
                    className="aspect-[/3] w-[10rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 animate-jump-in animate-once animate-ease-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {project.video && (
              <div className="flex items-center justify-center h-96 md:h-full p-4">
                <ReactPlayer
                  url="https://vimeo.com/803296822"
                  controls={true}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
