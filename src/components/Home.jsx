import React from "react";
import Header from "./Header";
import Options from "./Options";
import Footer from "./Footer";
import Intro from "./Intro";
import Tech from "./Tech";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />
      <Intro />
      <Tech />
      <Options />
      <Footer />
    </div>
  );
}
