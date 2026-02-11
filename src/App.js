import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import DarkModeToggle from "./components/DarkModeToggle";

const AboutMe = lazy(() => import("./components/AboutMe"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const NotFound = lazy(() => import("./components/NotFound"));

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

// Error Boundary para capturar errores de renderizado
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 dark:bg-neutral-900 flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h1 className="font-display text-4xl font-light text-stone-800 dark:text-white mb-4">
              Algo salió mal
            </h1>
            <p className="text-stone-500 dark:text-stone-400 font-light mb-8">
              Ocurrió un error inesperado. Por favor, recargá la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-2.5 text-sm font-light text-white bg-stone-800 dark:bg-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-100 rounded-full transition-colors duration-300"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const location = useLocation();
  
  return (
    <ErrorBoundary>
      {/* Skip to content — visible solo al hacer Tab */}
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido
      </a>

      <DarkModeToggle />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Suspense fallback={
          <div className="min-h-screen bg-stone-50 dark:bg-neutral-900 flex items-center justify-center" aria-live="polite" aria-busy="true">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 dark:border-stone-700 border-t-stone-600 dark:border-t-stone-400" />
          </div>
        }>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
              <Route path="/me" element={<motion.div {...pageTransition}><AboutMe /></motion.div>} />
              <Route path="/projects/:name" element={<motion.div {...pageTransition}><ProjectDetails /></motion.div>} />
              <Route path="*" element={<motion.div {...pageTransition}><NotFound /></motion.div>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}

export default App;
