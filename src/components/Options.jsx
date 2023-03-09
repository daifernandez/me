export default function Options() {
  return (
    <div className="flex justify-center">
      {" "}
      <span className="isolate inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          Mis proyectos
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          Experiencias
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          Educación
        </button>
      </span>
    </div>
  );
}
