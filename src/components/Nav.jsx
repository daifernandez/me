import { useHistory } from "react-router-dom";
import background from "../img/background.jpg";

export default function Nav() {
  const redirect = useHistory();
  return (
    <div>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={background}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
      </div>
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img className="h-8 mr-4" src="logo.png" alt="Logo" />
          <h1 className="text-white font-bold">Mi Sitio Web</h1>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
            onClick={() => redirect.push("/")}
          >
            Volver
          </button>
          {/* add more navigation items here */}
        </div>
      </nav>
    </div>
  );
}
