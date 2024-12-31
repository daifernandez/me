import React from "react";
import Social from "./Social";
import { useHistory } from "react-router-dom";
import { HiOutlineCode, HiOutlineUser, HiOutlineLink } from "react-icons/hi";

export default function Intro() {
  const redirect = useHistory();
  return (
    <div className="bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Título principal a la izquierda */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="relative">
              <p className="text-sm font-light text-indigo-500 dark:text-indigo-400 tracking-wider
                animate-fade-down animate-duration-[800ms] animate-delay-300">
                BIENVENIDO A MI PORTFOLIO
              </p>
              <div className="overflow-hidden">
                <h2 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight
                  animate-fade-right animate-once animate-duration-[1200ms] animate-delay-500">
                  <span className="block text-gray-900 dark:text-white">
                    FullStack
                  </span>
                  <span className="block mt-1 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent
                    animate-fade-up animate-once animate-duration-[1200ms] animate-delay-700">
                    Web Developer
                  </span>
                </h2>
              </div>
              <div className="mt-6 relative">
                <div className="h-px w-24 bg-gradient-to-r from-indigo-400 to-transparent opacity-70
                  animate-fade-right animate-once animate-duration-[1000ms] animate-delay-1000">
                </div>
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-indigo-400 to-transparent opacity-0
                  animate-fade-right animate-once animate-duration-[2000ms] animate-delay-[1200ms]">
                </div>
              </div>
            </div>
          </div>

          {/* Contenido principal*/}
          <div className="relative pl-8 sm:pl-16">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/20 to-transparent"></div>

            <div className="space-y-20">
              {/* Sección de presentación */}
              <div className="relative group">
                <div className="absolute -left-4 top-1">
                  <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800">
                    <HiOutlineUser className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <div className="space-y-4 pl-8">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">
                    Hola, soy Daiana
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-lg">
                    Desarrolladora web fullstack apasionada por crear experiencias digitales únicas. 
                    Aquí encontrarás algunos de mis proyectos más recientes.
                  </p>
                </div>
              </div>

              {/* Sección de especialidades */}
              <div className="relative group">
                <div className="absolute -left-4 top-1">
                  <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800">
                    <HiOutlineCode className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <div className="space-y-4 pl-8">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">
                    Especialidades
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Frontend Development', 'Backend Development', 'Responsive Design', 'API Integration'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm font-light text-gray-600 dark:text-gray-400">
                        <span className="h-1 w-1 rounded-full bg-indigo-400/60"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sección de conexión */}
              <div className="relative group">
                <div className="absolute -left-4 top-1">
                  <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800">
                    <HiOutlineLink className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <div className="space-y-6 pl-8">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => redirect.push("/me")}
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800/50 text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
                    >
                      Más sobre Mi
                      <span aria-hidden="true" className="transform transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100/30 dark:border-gray-800/30">
                    <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-3">
                      <span>Conecta conmigo</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
                    </h4>
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
