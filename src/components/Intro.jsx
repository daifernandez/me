import React from "react";
import Social from "./Social";
import { useHistory } from "react-router-dom";
import { HiOutlineCode, HiOutlineUser, HiOutlineLink } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Intro() {
  const redirect = useHistory();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    { name: 'Frontend Development', level: '95%' },
    { name: 'Backend Development', level: '85%' },
    { name: 'Responsive Design', level: '90%' },
    { name: 'API Integration', level: '88%' }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 py-16 sm:py-24 min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Título principal a la izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="relative">
              <motion.p 
                {...fadeInUp}
                className="text-sm font-light text-indigo-500 dark:text-indigo-400 tracking-wider">
                BIENVENIDO A MI PORTFOLIO
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight">
                  <span className="block text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300">
                    FullStack
                  </span>
                  <span className="block mt-1 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Web Developer
                  </span>
                </motion.h1>
              </div>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-6 h-px w-full bg-gradient-to-r from-indigo-400 to-transparent">
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido principal*/}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative pl-4 sm:pl-8 md:pl-16">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/20 to-transparent"></div>

            <div className="space-y-12 sm:space-y-20">
              {/* Sección de presentación */}
              <motion.div 
                {...fadeInUp}
                className="relative group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="absolute -left-4 top-1">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 group-hover:ring-indigo-400 transition-all duration-300">
                    <HiOutlineUser className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-8">
                  <h2 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    Hola, soy Daiana
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-base sm:text-lg">
                    Desarrolladora web fullstack apasionada por crear experiencias digitales únicas. 
                    Aquí encontrarás algunos de mis proyectos más recientes.
                  </p>
                </div>
              </motion.div>

              {/* Sección de especialidades */}
              <motion.div 
                {...fadeInUp} 
                className="relative group">
                <div className="absolute -left-4 top-1">
                  <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 group-hover:ring-indigo-400 transition-all duration-300">
                    <HiOutlineCode className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <div className="space-y-4 pl-8">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    Especialidades
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="space-y-2 group/skill"
                        role="progressbar"
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-light text-gray-600 dark:text-gray-400 group-hover/skill:text-indigo-500 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-light text-indigo-500">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sección de conexión */}
              <motion.div 
                {...fadeInUp}
                className="relative group">
                <div className="absolute -left-4 top-1">
                  <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 group-hover:ring-indigo-400 transition-all duration-300">
                    <HiOutlineLink className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <div className="space-y-6 pl-8">
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => redirect.push("/me")}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                      aria-label="Ir a la página Sobre Mi"
                    >
                      Más sobre Mi
                      <span aria-hidden="true" className="transform transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </motion.button>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100/30 dark:border-gray-800/30">
                    <h4 className="text-xs font-light text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-3">
                      <span>Conecta conmigo</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800"></div>
                    </h4>
                    <Social />
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
