import avatar from "../img/mac.png";
import background from "../img/background.jpg";

export default function Header() {

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
              className="h-24 w-24 rounded-full ring-white sm:h-32 sm:w-32 lg:h-40 lg:w-40"
              src={avatar}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
