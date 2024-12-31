import avatar from "../img/mac.png";
import background from "../img/background.jpg";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <div className="relative">
      <div className="bg-white dark:bg-slate-900">
        <div 
          aria-hidden="true" 
          className="animate-fade-down animate-once animate-ease-linear relative h-48 lg:h-64"
        >
          <img
            className="h-full w-full object-cover"
            src={background}
            alt="Imagen de fondo del encabezado"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-900/90" />
        </div>
      </div>
      
      <div className="relative mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex items-center space-x-5">
              <img
                className="h-32 w-32 rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg sm:h-40 sm:w-40 lg:h-48 lg:w-48 transition-transform hover:scale-105"
                src={avatar}
                alt="Foto de perfil"
              />
            </div>
            
            <div className="mb-4">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
