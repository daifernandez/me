import React from "react";
import Social from "./Social";

export default function Intro() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Bienvenido a mi portfolio!
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            FullStack Web Developer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hola mi nombre es Daiana, soy desarrolladora web fullstack. En este
            Portfolio, encontrarás algunos de mis proyectos más recientes y
            emocionantes. Me enorgullece compartir mi trabajo y espero que
            puedas encontrar algo que te inspire o te resulte útil. Si tienes
            alguna pregunta o quieres saber más sobre mi trabajo, no dudes en
            contactarme.
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
}
