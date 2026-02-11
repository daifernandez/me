import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative bg-stone-50 dark:bg-neutral-900" role="banner">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-6 sm:pt-8 pb-5 sm:pb-6 lg:pt-12 lg:pb-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex items-center space-x-4 sm:space-x-5"
            >
              <Link
                to="/"
                className="flex items-center space-x-4 sm:space-x-5 outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-neutral-900 rounded-full"
                aria-label="Ir al inicio"
              >
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-full border border-stone-200 dark:border-stone-700 bg-white dark:bg-neutral-800 font-display text-xl sm:text-2xl md:text-3xl font-light text-stone-600 dark:text-stone-300 tracking-tight"
                  aria-hidden="true"
                >
                  DF
                </div>
                <div>
                  <h1 className="font-display text-xl sm:text-2xl font-light text-stone-800 dark:text-white tracking-tight">
                    Daiana Fernández
                  </h1>
                  <p className="text-sm font-light text-stone-400 dark:text-stone-500 tracking-wide">
                    Desarrolladora Web
                  </p>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <DarkModeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
