import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import avatar from "../img/profile.jpg";
import background from "../img/background.jpg";
import { useHistory } from "react-router-dom";

// const profile = {
//   name: "Daiana Fernandez",
// };

export default function Header() {
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
      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-1 sm:px-6 sm:pb-1 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-7xl">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={avatar}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => redirect.push("/dai")}
              >
                <RocketLaunchIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Sobre Mi</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
        </div> */}
      </div>
    </div>
  );
}
