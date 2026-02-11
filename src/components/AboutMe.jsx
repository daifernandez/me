import avatar from "../img/profile.jpg";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";
import { CodeBracketIcon, HeartIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNextdotjs,
  SiGit,
  SiPostgresql
} from "react-icons/si";

export default function AboutMe() {
  const skills = [
    { icon: CodeBracketIcon, title: "Desarrollo Web FullStack", description: "Frontend y Backend" },
    { icon: HeartIcon, title: "Pasión por el Código", description: "Aprendizaje continuo" },
    { icon: LightBulbIcon, title: "Soluciones Creativas", description: "Enfoque innovador" }
  ];

  const technologies = [
    { icon: SiJavascript, name: "JavaScript", color: "text-stone-500 dark:text-stone-400" },
    { icon: SiReact, name: "React", color: "text-stone-500 dark:text-stone-400" }, 
    { icon: SiTailwindcss, name: "Tailwind", color: "text-stone-500 dark:text-stone-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-stone-500 dark:text-stone-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-stone-500 dark:text-stone-400" },
    { icon: SiGit, name: "Git", color: "text-stone-500 dark:text-stone-400" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-stone-500 dark:text-stone-400" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-900 py-16 sm:py-24">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative p-8 mb-16"
        >
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <img
                src={avatar}
                alt="Foto de perfil"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border border-stone-200 dark:border-stone-700"
              />
            </motion.div>
            
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <p className="text-sm font-light text-stone-400 dark:text-stone-500 tracking-widest uppercase mb-3">
                  Sobre mí
                </p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 dark:text-white mb-4">
                  Soy Daiana Fernandez
                </h1>
                <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 font-light">
                  Desarrolladora Web FullStack enfocada en crear experiencias digitales · Buenos Aires
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <Social />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-8 border border-stone-200 dark:border-stone-700"
          >
            <h2 className="font-display text-2xl font-light text-stone-800 dark:text-white mb-6">Sobre mí</h2>
            <div className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone-500 dark:text-stone-400 font-light">
              <p className="text-justify">
                Como desarrolladora web fullstack, combino mi pasión por la programación con 
                creatividad para construir soluciones digitales efectivas. Mi experiencia en 
                frontend y backend me permite desarrollar aplicaciones web completas con 
                énfasis en la experiencia del usuario.
              </p>
              <p className="text-justify">
                Mi experiencia previa en el campo de la salud me aportó habilidades valiosas 
                como la atención al detalle, la empatía y una buena comunicación. Esta 
                combinación de habilidades técnicas y personales me ayuda a entender mejor 
                las necesidades de cada proyecto y trabajar eficientemente en equipo.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-stone-200 dark:border-stone-700 text-center"
              >
                <div className="flex justify-center">
                  <skill.icon className="w-7 h-7 text-stone-400 dark:text-stone-500 mb-3" />
                </div>
                <h3 className="font-display text-lg font-light text-stone-800 dark:text-white mb-1">{skill.title}</h3>
                <p className="text-xs sm:text-sm text-stone-400 dark:text-stone-500 font-light">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 rounded-2xl p-8 border border-stone-200 dark:border-stone-700"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-light text-stone-800 dark:text-white">Stack Tecnológico</h2>
            <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center p-4 rounded-lg"
              >
                <tech.icon className={`w-7 h-7 ${tech.color}`} />
                <span className="mt-2 text-sm font-light text-stone-500 dark:text-stone-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 rounded-2xl p-8 border border-stone-200 dark:border-stone-700"
        >
          <div className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone-500 dark:text-stone-400 font-light">
            <p className="text-justify">
              Me gusta mantenerme actualizada con las nuevas tecnologías y metodologías 
              del desarrollo web. Disfruto aprendiendo constantemente y aplicando estos 
              conocimientos para mejorar la calidad de mi código y los proyectos en 
              los que trabajo.
            </p>
            <p className="text-justify">
              Busco oportunidades para colaborar en proyectos interesantes donde pueda 
              aportar mis conocimientos y seguir creciendo profesionalmente. Si buscas 
              una desarrolladora comprometida y con ganas de aprender, me encantaría 
              conectar contigo.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
