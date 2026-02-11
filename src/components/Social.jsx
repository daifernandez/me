import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Social() {
  return (
    <div className="flex flex-row gap-4 mt-4">
      <a
        href="https://github.com/daifernandez"
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
      >
        <SiGithub className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/daifernandez/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
      >
        <SiLinkedin className="w-6 h-6" />
      </a>
      <Link
        to="#"
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "mailto:dtama.fernandez@gmail.com";
        }}
      >
        <EnvelopeIcon className="w-6 h-6" strokeWidth={1.5} />
      </Link>
    </div>
  );
}
