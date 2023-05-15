import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Options from "./Options";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />
      <Intro />
      <Options />
      <Footer />
    </div>
  );
}
