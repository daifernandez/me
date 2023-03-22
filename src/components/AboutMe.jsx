import Footer from "./Footer";
import background from "../img/background.jpg";
import avatar from "../img/hello.png";
import Social from "./Social";

export default function AboutMe() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={background}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <section id="about" className="px-6 py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Sobre mi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <img
                  src={avatar}
                  alt="Foto de perfil"
                  className="w-84 h-64 rounded-full mx-auto md:mx-0 mb-6 mt-10 aspect-[6/5]  object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-66"
                />
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide">
                  ¡Hola Mundo!
                </h2>
                <h3 className="text-2xl font-bold mb-2">
                  Soy Daiana Fernandez
                </h3>
                <p className="text-lg text-gray-700">
                  Desarrollador Web FullStack de Buenos Aires, Argentina 🚀.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  Me apasiona la tecnología y disfruto aprendiendo nuevas
                  habilidades y enfrentando desafíos emocionantes.
                </p>
                <p className="text-lg text-gray-700">
                  Tengo experiencia en tecnologías como Javascript, NodeJS,
                  React, Redux y ExpressJS. Me enorgullece decir que he
                  trabajado en proyectos desafiantes y emocionantes, lo que me
                  ha permitido desarrollar habilidades creativas para resolver
                  problemas.
                </p>
                <p className="text-lg text-gray-700">
                  Además, tengo experiencia en el campo de la asistencia dental.
                  Durante varios años trabajé en clínicas dentales donde aprendí
                  habilidades valiosas como la atención al detalle, la empatía y
                  la comunicación efectiva con los pacientes.
                </p>
                <p className="text-lg text-gray-700">
                  Soy una persona adaptable y tengo facilidad para el trabajo en
                  equipo, siempre enfocado en aprender nuevas experiencias y
                  habilidades.
                </p>
                <p className="text-lg text-gray-700">
                  En mi tiempo libre, disfruto pasar tiempo con mi familia y me
                  encantan todo tipo de animales 💕.
                </p>
                <p className="text-lg text-gray-700">
                  Actualmente estoy buscando nuevas oportunidades emocionantes
                  en el campo del desarrollo web. Si tienes un proyecto
                  interesante o una posición disponible, ¡no dudes en
                  contactarme!
                </p>{" "}
                <Social />
                {/* <div className="text-center md:text-right mt-10 mb-5">
                  <a
                    href="#contact"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 "
                  >
                    Contáctame
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
