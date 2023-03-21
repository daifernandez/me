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
      "Google login",
      "MercadoPago",
      "Auth0",
      "Cloudinary",
    ],
    images: [PCipad, PCipad1, PCweb, PCmobile],
    link: "https://pawcare.vercel.app",
  },
  gamestream: {
    name: "GameStream",
    description:
      "Proyecto individual desarrollado dentro de Henry Bootcamp que consiste en el desarrollo de una pagina web utilizando React para el Front End y Redux como state management, con el propósito de crear una pequeña aplicación en donde se podrá obtener detalles de videojuegos. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. Consume datos de una API (“RAWG”) a través de un Back End desarrollado en Node.JS utilizando Express, agregando nuevas funcionalidades",
    features: [
      " -Barra de búsquedas, por nombre.",
      " -Aplicación de filtros y ordenamientos (orden alfabético, filtros por rating, plataformas, géneros, etc )",
      " -Creación de nuevos detalles de Videojuegos.",
      " -Paginado.",
      " -Detalle de cada Videojuego, con recomentaciones en base a género.",
      " -Diseño y estilos con (CSS)",
      " -Landing page.",
      " -Sitio Responsive",
    ],
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

export default function ProjectDetails() {
  const { name } = useParams();
  const project = projects[name];

  return (
    <div>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={background}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {project.name}
              </h2>
              <p
                className="mt-6 text-xl leading-8 text-gray-600"
                style={{ textAlign: "justify" }}
              >
                {project.description}
              </p>
              {/* <p className="mt-6 text-base leading-7 text-gray-600">
                {project.technologies.map((technology) => (
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mr-2">
                    {technology}
                  </span>
                ))}
              </p> */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4 mt-5">
                  Tecnologias utilizadas:
                </h2>
                <ul className="list-disc list-inside">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mr-2"
                    >
                      <span className="mr-2">
                        {/* <img
                          src="../icons/javascript.svg"
                          className="h-4 w-4"
                        /> */}
                      </span>
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex">
                <a
                  href={project.link}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                  className="aspect-[5/7] w-[25rem] max-w-none rounded-2xl bg-gray-50 object-cover"
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
            {project.features?.length > 0 && (
              <section aria-labelledby="features-heading">
                <h4
                  id="features-heading"
                  className="text-lg font-medium text-gray-900 mb-4 mt-5"
                >
                  Algunas Funcionalidades:
                </h4>
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {project.features.map?.((feature, index) => (
                    <li key={index} className="px-4 py-3 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
