import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ProjectDetails from "./components/ProjectDetails";
import DarkModeToggle from "./components/DarkModeToggle";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

function App() {
  const location = useLocation();
  
  return (
    <div>
      <DarkModeToggle />
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
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
