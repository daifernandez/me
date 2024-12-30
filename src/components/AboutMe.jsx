import avatar from "../img/me1.png";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
// import { DocumentCheckIcon } from "@heroicons/react/20/solid";
// import cvFile from "../assets/CV-DaianaFernandez.pdf";

export default function AboutMe() {
  return (
    <div className="bg-stone-50 dark:bg-slate-900">
      <ScrollToTop />
      <div className="relative isolate pt-14">
        <section id="cv" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-base text-stone-600 dark:text-stone-400 font-semibold tracking-wide uppercase mb-8 animate-fade-right">
              Sobre mi
            </h2>
            <div className="animate-fade animate-once animate-duration-1000 animate-ease-in grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="text-center md:text-left space-y-8">
                <div className="flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-stone-300/30 dark:bg-stone-400/20 rounded-full blur-md group-hover:bg-stone-400/40 dark:group-hover:bg-stone-400/30 transition duration-300"></div>
                    <img
                      src={avatar}
                      alt="Foto de perfil"
                      className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl hover:scale-102 transition duration-300 ring-4 ring-stone-100 dark:ring-stone-800"
                    />
                  </div>
                </div>
                <div className="relative">
                  <h2 className="text-base text-stone-600 dark:text-stone-400 font-semibold tracking-wide mb-2 animate-fade-up animate-delay-300">
                    ¡Hola Mundo!
                  </h2>
                  <h3 className="text-4xl font-bold mb-4 dark:text-white bg-gradient-to-r from-stone-700 to-stone-500 inline-block text-transparent bg-clip-text animate-fade-up animate-delay-500">
                    Soy Daiana Fernandez
                  </h3>
                  <p className="text-xl text-stone-600 dark:text-stone-400 animate-fade-up animate-delay-700 mb-6">
                    Desarrolladora Web FullStack de Buenos Aires, Argentina 🚀
                  </p>
                  <div className="animate-fade-up animate-delay-1000">
                    <button
                      type="button"
                      onClick={() => window.open('#', '_blank')}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-700 bg-stone-100 border border-stone-200 rounded-md shadow-sm hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-400 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700 dark:hover:bg-stone-700 transition-colors duration-200"
                    >
                      <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                      Descargar CV
                    </button>
                  </div>
                </div>
              </div>
              <div className="animate-fade-left space-y-8 bg-stone-100/50 dark:bg-stone-800/50 p-8 rounded-2xl border border-stone-200/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-stone-600 dark:text-stone-300 animate-fade-up animate-delay-300 leading-relaxed">
                  Me enorgullece decir que he trabajado en proyectos desafiantes
                  y emocionantes, lo que me ha permitido desarrollar habilidades
                  creativas para resolver problemas.
                </p>
                <p className="text-lg text-stone-600 dark:text-stone-300 animate-fade-up animate-delay-300">
                  Además, tengo experiencia en el campo de la asistencia dental.
                  Durante varios años trabajé en clínicas dentales donde aprendí
                  habilidades valiosas como la atención al detalle, la empatía y
                  la comunicación efectiva.
                </p>
                <p className="text-lg text-stone-600 dark:text-stone-300 animate-fade-up animate-delay-300">
                  Soy una persona adaptable y tengo facilidad para el trabajo en
                  equipo, siempre enfocada en aprender nuevas experiencias y
                  habilidades.
                </p>
                <p className="text-lg text-stone-600 dark:text-stone-300 animate-fade-up animate-delay-300">
                  Actualmente estoy buscando nuevas oportunidades laborales en
                  el campo del desarrollo. Si tienes un proyecto interesante
                  o una posición disponible, ¡no dudes en contactarme!
                </p>

                <div className="flex justify-end mt-12">
                  <Social className="animate-fade-up animate-delay-700" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
}
