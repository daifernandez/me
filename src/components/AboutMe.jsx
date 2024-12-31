import avatar from "../img/me1.png";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
// import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function AboutMe() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <ScrollToTop />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-75 group-hover:opacity-100 blur-md transition duration-300 animate-pulse"></div>
              <img
                src={avatar}
                alt="Foto de perfil"
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover ring-2 ring-white shadow-lg shadow-gray-400/50 transform transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-light text-indigo-500 dark:text-indigo-400 tracking-wider
                animate-fade-down animate-duration-[800ms] animate-delay-300">
                ¡Bienvenido a mi espacio!
              </p>
              <h2 className="mt-2 text-5xl sm:text-5xl lg:text-6xl font-extralight tracking-tight
                  animate-fade-right animate-once animate-duration-[1200ms] animate-delay-500">
                  Soy Daiana Fernandez
               
              </h2>
              <p className="block mt-6 bg-clip-text animate-fade-up animate-once animate-duration-[1200ms] animate-delay-700">
                Desarrolladora Web FullStack apasionada por crear experiencias digitales · Buenos Aires 🚀
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Como desarrolladora web fullstack, combino creatividad y habilidades técnicas 
                para construir soluciones digitales innovadoras. Mi experiencia abarca tanto 
                el desarrollo frontend como backend, permitiéndome crear aplicaciones web 
                completas y escalables.
              </p>
              <p>
                Mi background en asistencia dental me ha proporcionado habilidades únicas 
                como la precisión, la atención al detalle y una excelente capacidad de 
                comunicación con clientes y equipos multidisciplinarios. Esta combinación 
                de habilidades técnicas y soft skills me permite abordar los proyectos 
                desde una perspectiva integral.
              </p>
              <p>
                Me destaco por mi capacidad de aprendizaje rápido y mi entusiasmo por 
                mantenerme actualizada con las últimas tecnologías y mejores prácticas 
                del desarrollo web. Disfruto trabajando en equipo y contribuyendo con 
                ideas innovadoras para alcanzar los objetivos del proyecto.
              </p>
              <p>
                Actualmente busco oportunidades para colaborar en proyectos desafiantes 
                donde pueda aportar valor y seguir creciendo profesionalmente. Si buscas 
                una desarrolladora comprometida y versátil para tu equipo, ¡me encantaría 
                conectar contigo!
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-8 max-w-md w-full">
              {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <button
                  type="button"
                  onClick={() => window.open('#', '_blank')}
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <DocumentArrowDownIcon className="w-5 h-5 mr-1.5 text-gray-400" />
                  <span>Descargar CV</span>
                </button>
              </div> */}

              <div className="flex items-center gap-4 w-full justify-center mt-10">
                <div className="h-px w-12 bg-gray-300 "></div>
                <span className="text-sm text-gray-500">conecta conmigo</span>
                <div className="h-px w-12 bg-gray-300"></div>
              </div>
              <div className="flex justify-center">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
