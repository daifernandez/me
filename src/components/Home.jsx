import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Cv from "./Cv";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dai Fernández — Portfolio</title>
        <meta name="description" content="Portfolio de Daiana Fernández — Desarrolladora FullStack Web. React, Node.js, Next.js y más." />
        <meta property="og:title" content="Dai Fernández — FullStack Web Developer" />
        <meta property="og:description" content="Portfolio de Daiana Fernández — Desarrolladora FullStack Web. React, Node.js, Next.js y más." />
      </Helmet>
      <div className="bg-stone-50 dark:bg-neutral-900 px-5 sm:px-6 lg:px-8">
        <Header />
        <Intro />
        <Cv />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
