import { motion } from 'framer-motion';
import { SiPython, SiMongodb, SiGit, SiFlutter, SiFirebase, SiUnrealengine, SiFigma, SiC, SiCplusplus, SiJavascript, SiNodedotjs, SiDocker, SiExpress, SiLinux } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: SiJavascript, color: '#F7DF1E', size: 'xl', name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { icon: SiNodedotjs, color: '#339933', size: 'lg', name: 'Node.js', url: 'https://nodejs.org' },
    { icon: SiExpress, color: '#000000', size: 'md', name: 'Express', url: 'https://expressjs.com' },
    { icon: SiFlutter, color: '#02569B', size: 'xl', name: 'Flutter', url: 'https://flutter.dev' },
    { icon: SiDocker, color: '#2496ED', size: 'md', name: 'Docker', url: 'https://www.docker.com' },
    { icon: SiMongodb, color: '#47A248', size: 'lg', name: 'MongoDB', url: 'https://www.mongodb.com' },
    { icon: SiGit, color: '#F05032', size: 'xl', name: 'Git', url: 'https://git-scm.com' },
    { icon: SiLinux, color: '#eeda3fff', size: 'lg', name: 'Linux', url: 'https://www.linux.org' },
    { icon: SiFirebase, color: '#FFCA28', size: 'md', name: 'Firebase', url: 'https://firebase.google.com' },
    { icon: SiPython, color: '#3776AB', size: 'md', name: 'Python', url: 'https://www.python.org' },
    { icon: SiUnrealengine, color: '#313131', size: 'md', name: 'Unreal Engine', url: 'https://www.unrealengine.com' },
    { icon: SiFigma, color: '#F24E1E', size: 'lg', name: 'Figma', url: 'https://www.figma.com' },
    { icon: SiCplusplus, color: '#00599C', size: 'xl', name: 'C++', url: 'https://isocpp.org' },
    { icon: SiC, color: '#A8B9CC', size: 'md', name: 'C', url: 'https://en.cppreference.com/w/c' },
  ];

  const getSize = (size) => {
    switch(size) {
      case 'xl': return 'w-32 h-32 md:w-44 md:h-44 text-6xl md:text-7xl';
      case 'lg': return 'w-28 h-28 md:w-36 md:h-36 text-5xl md:text-6xl';
      case 'md': return 'w-24 h-24 md:w-28 md:h-28 text-4xl md:text-5xl';
      default: return 'w-28 h-28 md:w-36 md:h-36 text-5xl md:text-6xl';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white "
        >
          Technical Skills
        </motion.h2>

        <div className="p-4 flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto perspective-1000">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 12,
                delay: index * 0.02 
              }}
              whileHover={{ scale: 1.15, zIndex: 10, rotate: 5 }}
              className={`${getSize(skill.size)} rounded-full bg-gray-50 dark:bg-gray-900 shadow-xl shadow-black/5 dark:shadow-white/5 flex items-center justify-center relative group cursor-pointer border border-gray-100 dark:border-gray-800`}
            >
              {/* Glassmorphism shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-transparent dark:from-white/10 dark:to-transparent opacity-50 pointer-events-none" />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] pointer-events-none" />

              <skill.icon 
                style={{ color: skill.color }}
                className="drop-shadow-sm relative z-10"
              />

              {/* Tooltip with skill name */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
