import "./App.css";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ProjectDetails from "./components/ProjectDetails";
import NotFound from "./components/NotFound";
import DarkModeToggle from "./components/DarkModeToggle";

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
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            </Route>
            <Route exact path="/me">
              <motion.div {...pageTransition}>
                <AboutMe />
              </motion.div>
            </Route>
            <Route exact path="/projects/:name">
              <motion.div {...pageTransition}>
                <ProjectDetails />
              </motion.div>
            </Route>
            <Route>
              <motion.div {...pageTransition}>
                <NotFound />
              </motion.div>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
    </ErrorBoundary>
  );
}

export default App;
