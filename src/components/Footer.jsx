import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/daiofernandez",
    icon: SiX,
  },
  {
    name: "GitHub",
    href: "https://github.com/daifernandez",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daifernandez/",
    icon: SiLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-50 dark:bg-neutral-900 border-t border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-7xl py-10 xs:py-12 px-5 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-xs font-light text-stone-400 dark:text-stone-600 tracking-wide">
            daifernandez
          </p>
        </div>
      </div>
    </footer>
  );
}
