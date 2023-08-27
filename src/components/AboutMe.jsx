import Footer from "./Footer";
import background from "../img/background.jpg";
import avatar from "../img/me3.jpg";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
// import { DocumentCheckIcon } from "@heroicons/react/20/solid";

export default function AboutMe() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <ScrollToTop />
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white  dark:bg-slate-900 shadow-xl shadow-indigo-600/10 dark:shadow-slate-800 ring-1 ring-indigo-50 dark:ring-slate-800 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <section id="cv" className="px-6 py-12 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">
              Sobre mi
            </h2>
            <div className="animate-fade animate-once animate-duration-1000 animate-ease-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <img
                  src={avatar}
                  alt="Foto de perfil"
                  className="w-64 h-64 rounded-full mx-auto md:mx-0 mb-6 mt-10 aspect-[6/5] object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-5"
                />
                <h2 className="text-base text-indigo-700 font-semibold tracking-wide">
                  ¡Hola Mundo!
                </h2>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  Soy Daiana Fernandez
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-400">
                  Desarrolladora Web FullStack de Buenos Aires, Argentina 🚀.
                </p>
                {/* <div className="mt-1 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:space-x-6 sm:pb-1">
                  <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <DocumentCheckIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Descargar CV
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="animate-fade-left">
                {/* <p className="text-lg text-gray-700  dark:text-gray-400">
                  Me considero una entusiasta de la tecnología que disfruta
                  aprendiendo nuevas habilidades y enfrentando desafíos
                  emocionantes.
                </p> */}
                <p className="text-lg text-gray-700  dark:text-gray-400">
                  {/* Tengo experiencia en tecnologías como Javascript, NodeJS,
                  React, Redux y ExpressJS.*/}{" "}
                  Me enorgullece decir que he trabajado en proyectos desafiantes
                  y emocionantes, lo que me ha permitido desarrollar habilidades
                  creativas para resolver problemas.
                </p>
                <p className="text-lg text-gray-700  dark:text-gray-400">
                  Además, tengo experiencia en el campo de la asistencia dental.
                  Durante varios años trabajé en clínicas dentales donde aprendí
                  habilidades valiosas como la atención al detalle, la empatía y
                  la comunicación efectiva.
                </p>
                <p className="text-lg text-gray-700  dark:text-gray-400">
                  Soy una persona adaptable y tengo facilidad para el trabajo en
                  equipo, siempre enfocada en aprender nuevas experiencias y
                  habilidades.
                </p>
                {/* <p className="text-lg text-gray-700  dark:text-gray-400">
                  En mi tiempo libre, disfruto pasar tiempo con mi familia y me
                  encantan todo tipo de animales 💕.
                </p> */}
                <p className="text-lg text-gray-700  dark:text-gray-400">
                  Actualmente estoy buscando nuevas oportunidades laborales en
                  el campo del desarrollo. Si tienes un proyecto interesante
                  o una posición disponible, ¡no dudes en contactarme!
                </p>

                <Social />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
