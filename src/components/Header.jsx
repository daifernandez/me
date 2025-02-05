import avatar from "../img/mac.png";
import background from "../img/background.jpg";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative" role="banner">
      <div className="bg-white dark:bg-slate-900">
        <div 
          aria-hidden="true" 
          className="relative h-48 lg:h-64 overflow-hidden"
        >
          <img
            className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
            src={background}
            alt="Imagen de fondo del encabezado"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-900/90" />
        </div>
      </div>
      
      <div className="relative mx-auto -mt-24 max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="flex items-end justify-between">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4 sm:space-x-5"
            >
              <div className="relative group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg transition-all duration-300 group-hover:ring-indigo-500 dark:group-hover:ring-indigo-400"
                  src={avatar}
                  alt="Foto de perfil"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 relative z-10"
            >
              <DarkModeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
