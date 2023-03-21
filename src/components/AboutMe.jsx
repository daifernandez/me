import Nav from "./Nav";

export default function AboutMe() {
  return (
    <div>
      <Nav />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Sobre Mi
            </h2>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Soy Daiana Fernandez
            </p>

            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Soy una desarrolladora web full stack, me gusta aprender cosas
              nuevas y me encanta el mundo de la tecnología.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
