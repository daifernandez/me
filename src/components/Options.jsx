export default function Options() {
  return (
    <div className="flex justify-center">
      <span className="flex rounded-full py-3 bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <button type="button" className="px-5">
          Mis proyectos
        </button>
        <button type="button" className="px-5">
          Experiencias
        </button>
        <button type="button" className="px-5">
          Educación
        </button>
      </span>
    </div>
  );
}
