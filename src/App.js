import "./App.css";
import Intro from "./components/Intro";
import Options from "./components/Options";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Options />
      <Footer/>
    </div>
  );
}

export default App;
