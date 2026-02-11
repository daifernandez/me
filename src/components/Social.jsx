import { useState } from "react";
import { EnvelopeIcon, CheckIcon } from "@heroicons/react/24/outline";
import { SiGithub, SiLinkedin } from "react-icons/si";

const EMAIL = "dtama.fernandez@gmail.com";

export default function Social() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback: abrir mailto si no se puede copiar
      window.location.href = `mailto:${EMAIL}`;
    });
  };

  return (
    <div className="relative flex flex-row gap-4 mt-4" role="list" aria-label="Redes sociales">
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
      <button
        onClick={handleEmailClick}
        aria-label={copied ? "Email copiado" : "Copiar email"}
        className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
      >
        {copied 
          ? <CheckIcon className="w-6 h-6 text-emerald-500" strokeWidth={1.5} aria-hidden="true" />
          : <EnvelopeIcon className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
        }
      </button>

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-light whitespace-nowrap
          bg-stone-800 dark:bg-white text-white dark:text-stone-900
          transition-all duration-300 pointer-events-none
          ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        Email copiado
      </div>
    </div>
  );
}
