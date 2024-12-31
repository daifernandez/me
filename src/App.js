import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ProjectDetails from "./components/ProjectDetails";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div>
      <DarkModeToggle />
      <Route exact path="/" component={Home} />
      <Route exact path="/me" component={AboutMe} />
      <Route exact path="/projects/:name" component={ProjectDetails} />
    </div>
  );
}

export default App;
