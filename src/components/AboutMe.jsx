import avatar from "../img/profile.jpg";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineHeart, HiOutlineLightBulb, HiOutlineChip, HiOutlineUser } from "react-icons/hi";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNextdotjs,
  SiGit,
  SiPostgresql
} from "react-icons/si";
// import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function AboutMe() {
  const skills = [
    { icon: HiOutlineCode, title: "Desarrollo Web FullStack", description: "Frontend y Backend" },
    { icon: HiOutlineHeart, title: "Pasión por el Código", description: "Aprendizaje continuo" },
    { icon: HiOutlineLightBulb, title: "Soluciones Creativas", description: "Enfoque innovador" }
  ];

  const technologies = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiReact, name: "React", color: "text-blue-400" }, 
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-700 dark:text-gray-300" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" }
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm p-8 mb-12 shadow-sm"
        >
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group cursor-pointer flex-shrink-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur-md transition duration-300 animate-pulse"></div>
              <img
                src={avatar}
                alt="Foto de perfil"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-lg shadow-indigo-500/30 dark:shadow-indigo-400/30 transform transition duration-300 group-hover:scale-105"
              />
            </motion.div>
            
            <div className="text-center md:text-left">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-sm sm:text-base font-medium text-indigo-500 dark:text-indigo-400 tracking-wider mb-3">
                  ¡Bienvenido a mi espacio!
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-4">
                  Soy Daiana Fernandez
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light">
                  Desarrolladora Web FullStack enfocada en crear experiencias digitales · Buenos Aires 🚀
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineUser className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              <h2 className="text-xl font-light text-gray-900 dark:text-white">Sobre mí</h2>
            </div>
            <div className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300">
              <p className="transition-colors duration-300 hover:text-gray-900 dark:hover:text-white text-justify">
                Como desarrolladora web fullstack, combino mi pasión por la programación con 
                creatividad para construir soluciones digitales efectivas. Mi experiencia en 
                frontend y backend me permite desarrollar aplicaciones web completas con 
                énfasis en la experiencia del usuario.
              </p>
              <p className="transition-colors duration-300 hover:text-gray-900 dark:hover:text-white text-justify">
                Mi experiencia previa en el campo de la salud me aportó habilidades valiosas 
                como la atención al detalle, la empatía y una buena comunicación. Esta 
                combinación de habilidades técnicas y personales me ayuda a entender mejor 
                las necesidades de cada proyecto y trabajar eficientemente en equipo.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 group cursor-pointer shadow-sm text-center"
              >
                <div className="flex justify-center">
                  <skill.icon className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <HiOutlineChip className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            <h2 className="text-xl font-light text-gray-900 dark:text-white">Stack Tecnológico</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-200 to-transparent dark:from-indigo-900"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/30 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="mt-2 text-sm font-light text-gray-600 dark:text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm"
        >
          <div className="space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300">
            <p className="transition-colors duration-300 hover:text-gray-900 dark:hover:text-white text-justify">
              Me gusta mantenerme actualizada con las nuevas tecnologías y metodologías 
              del desarrollo web. Disfruto aprendiendo constantemente y aplicando estos 
              conocimientos para mejorar la calidad de mi código y los proyectos en 
              los que trabajo.
            </p>
            <p className="transition-colors duration-300 hover:text-gray-900 dark:hover:text-white text-justify">
              Busco oportunidades para colaborar en proyectos interesantes donde pueda 
              aportar mis conocimientos y seguir creciendo profesionalmente. Si buscas 
              una desarrolladora comprometida y con ganas de aprender, ¡me encantaría 
              conectar contigo!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
