import React from "react";
import Header from "./Header";
// import Options from "./Options";
import Footer from "./Footer";
import Intro from "./Intro";
// import Tech from "./Tech";
import Cv from "./Cv";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
      <Header />
      <Intro />
      <Cv />
      <Projects />
      <Footer />
    </div>
  );
}
