import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Social() {
  return (
    <div className="flex flex-row gap-4 mt-4" role="list" aria-label="Redes sociales">
      <a
        href="https://github.com/daifernandez"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
      >
        <SiGithub className="w-6 h-6" aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/daifernandez/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
      >
        <SiLinkedin className="w-6 h-6" aria-hidden="true" />
      </a>
      <a
        href="mailto:dtama.fernandez@gmail.com"
        aria-label="Enviar email"
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
      >
        <EnvelopeIcon className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  );
}
