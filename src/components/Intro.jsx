import React from "react";
import Social from "./Social";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Intro() {
  const navigate = useNavigate();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 }
  };

  return (
    <div className="bg-stone-50 dark:bg-neutral-900 pt-12 pb-20 sm:pt-24 sm:pb-24 lg:py-32 lg:min-h-screen lg:flex lg:items-center">
      <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24">
          {/* Título principal a la izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="lg:sticky lg:top-24 lg:self-start space-y-5 sm:space-y-6">
            <div className="relative">
              <motion.p 
                {...fadeInUp}
                className="text-sm font-light text-stone-400 dark:text-stone-500 tracking-widest uppercase">
                Portfolio
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="mt-3 text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-display font-light tracking-tight">
                  <span className="block text-stone-800 dark:text-white">
                    FullStack
                  </span>
                  <span className="block mt-1 text-stone-400 dark:text-stone-500 italic">
                    Web Developer
                  </span>
                </motion.h1>
              </div>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="mt-6 sm:mt-8 h-px w-full bg-stone-200 dark:bg-stone-700 origin-left">
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido principal*/}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative pl-0 sm:pl-8 md:pl-16">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700 hidden sm:block"></div>

            <div className="space-y-12 sm:space-y-12 lg:space-y-20">
              {/* Sección de presentación */}
              <motion.div 
                {...fadeInUp}
                className="relative">
                <div className="space-y-4 sm:space-y-4 pl-0 sm:pl-8">
                  <h2 className="font-display text-xl xs:text-2xl sm:text-3xl font-light text-stone-800 dark:text-white">
                    Hola, soy Daiana
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-loose sm:leading-relaxed font-light">
                    Como desarrolladora web full stack, me apasiona crear experiencias digitales
                    que aporten valor y resuelvan problemas reales. Acá vas a encontrar algunos
                    de mis proyectos más recientes.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/me")}
                    className="inline-flex items-center gap-2 xs:gap-2.5 px-5 xs:px-6 sm:px-7 py-2.5 xs:py-3 rounded-full bg-stone-800 dark:bg-white text-white dark:text-stone-900 text-xs xs:text-sm font-light tracking-wide hover:bg-stone-700 dark:hover:bg-stone-100 transition-colors duration-300 mt-2"
                    aria-label="Ir a la página Sobre mí"
                  >
                    <span>Más sobre mí</span>
                    <span aria-hidden="true" className="text-sm">→</span>
                  </button>
                </div>
              </motion.div>

              {/* Sección de conexión */}
              <motion.div 
                {...fadeInUp}
                className="relative">
                <div className="space-y-5 xs:space-y-6 pl-0 sm:pl-8">
                    <div className="pt-8 sm:pt-6 border-t border-stone-200 dark:border-stone-700">
                      <div className="flex flex-col items-center">
                        <p className="w-full text-sm xs:text-base font-light text-stone-400 dark:text-stone-500 mb-3 text-center tracking-wide">
                          Conecta conmigo
                        </p>
                        <div className="w-full flex justify-center">
                          <Social />
                        </div>
                      </div>
                    </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
