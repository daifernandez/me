import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div >
      <Route exact path="/" component={Home} />
      <Route exact path="/dai" component={AboutMe} />
    </div>
  );
}

export default App;
