import avatar from "../img/mac.png";
import background from "../img/background.jpg";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <div>
      <div className="bg-white dark:bg-slate-900">
        <div aria-hidden="true" className="relative">
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={background}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900" />
        </div>
      </div>
      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-1 sm:px-6 sm:pb-1 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-7xl">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-white sm:h-32 sm:w-32 lg:h-40 lg:w-40"
              src={avatar}
              alt=""
            />
            <div className="mt-6 flex min-w-0 flex-1 items-center justify-end space-x-6 pb-1">
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
