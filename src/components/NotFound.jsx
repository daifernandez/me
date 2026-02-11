import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-900 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-light tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-4">
          Error 404
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-light tracking-tight text-stone-800 dark:text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-stone-500 dark:text-stone-400 font-light mb-10 leading-relaxed">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-light text-white bg-stone-800 dark:bg-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-100 rounded-full transition-colors duration-300"
        >
          <ArrowLeftIcon className="w-4 h-4" strokeWidth={1.5} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
