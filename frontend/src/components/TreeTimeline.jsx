import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceNode from './ExperienceNode';
import Branch from './Branch';
import Trunk from './Trunk';

const experiences = [
  {
    id: 1,
    role: 'Flutter Developer',
    company: 'Dynamicore Strategies',
    type: 'internship',
    duration: 'May 2025 – August 2025',
    description: 'Created a responsive Flutter fintech app with portfolio tracking, mutual fund analytics, and AI-powered investment dashboards.',
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'Aunwesha Knowledge Technologies',
    type: 'internship',
    duration: 'May 2024 – July 2025',
    description: 'Developed a Java Swing tool to OCR AutoCAD (.dwg/.pdf) files and enable Lucene search with Excel export for seamless data extraction and analysis.',
  },
];

const TreeTimeline = () => {
  const [activeId, setActiveId] = useState(null);

  const handleNodeClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 px-4 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Tree (desktop/tablet) */}
        <div className="relative hidden md:block">
          {/* Trunk - spans full height */}
          <Trunk height="100%" />

          {/* Experience items */}
          <div className="relative z-10 space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`
                    relative flex items-center
                    ${isLeft ? 'justify-start' : 'justify-end'}
                  `}
                >
                  {/* Left side content */}
                  {isLeft && (
                    <div className="w-5/12 pr-8 relative">
                      <ExperienceNode
                        experience={exp}
                        index={index}
                        isLeft={true}
                        isActive={isActive}
                        onClick={() => handleNodeClick(exp.id)}
                      />
                      <Branch isLeft={true} index={index} isActive={isActive} />
                    </div>
                  )}

                  {/* Center dot on trunk */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`
                      absolute left-1/2 -translate-x-1/2
                      w-4 h-4 rounded-full
                      border-4 border-white dark:border-gray-950
                      ${isActive 
                        ? 'bg-blue-500 dark:bg-blue-400' 
                        : 'bg-gray-300 dark:bg-gray-600'
                      }
                      transition-colors duration-300
                      z-20
                    `}
                  />

                  {/* Spacer for alternating layout */}
                  {isLeft && <div className="w-5/12" />}
                  {!isLeft && <div className="w-5/12" />}

                  {/* Right side content */}
                  {!isLeft && (
                    <div className="w-5/12 pl-8 relative">
                      <ExperienceNode
                        experience={exp}
                        index={index}
                        isLeft={false}
                        isActive={isActive}
                        onClick={() => handleNodeClick(exp.id)}
                      />
                      <Branch isLeft={false} index={index} isActive={isActive} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Simplified vertical list */}
        <div className="md:hidden mt-8">
          <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900" />
                
                {/* Card */}
                <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <span className={`
                    inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full mb-2
                    ${exp.type === 'work' 
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                      : exp.type === 'internship'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    }
                  `}>
                    {exp.type}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.company}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{exp.duration}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeTimeline;
