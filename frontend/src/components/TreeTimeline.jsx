import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceNode from './ExperienceNode';
import Branch from './Branch';
import Trunk from './Trunk';

const experiences = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'Aerilon Tech',
    type: 'Internship',
    duration: 'Jan 2026 – Present',
    description:
  'Building scalable and production-ready backend systems for multiple client projects using Node.js and Express. Developing secure REST APIs, implementing authentication and authorization, optimizing performance, and deploying containerized services on AWS using Docker while following Git-based collaboration workflows.',

    tech: ['JavaScript', 'Node.js', 'Express.js', 'AWS', 'Docker', 'Git'],
  },

  {
    id: 2,
    role: 'Flutter Mobile App Developer Intern',
    company: 'Dynamicore Strategies',
    type: 'internship',
    duration: 'May 2025 – August 2026',
    description: 'Built a Flutter Based Fintech App with portfolio tracking and dynamic responsive layouts. Developed portfolio tracking, mutual fund analysis, investment dashboard, AI portfolio analyzer, and real-time financial data visualization with custom responsive widget library.',
    tech: ['Flutter', 'Dart', 'MediaQuery', 'Figma'],
  },
  {
    id: 3,
    role: 'Software Developer Intern',
    company: 'Aunwesha Knowledge Technologies',
    type: 'internship',
    duration: 'May 2024 – June 2024',
    description: 'Built an intelligent document search system for AutoCAD and PDF files using OCR and Apache Lucene indexing. Developed a Java-based application with a chatbot interface that enables conversational search across CAD drawings, along with file preview and Excel export for efficient analysis.',
    tech: ['Java', 'Java Swing', 'Apache Lucene', 'Apache POI', 'OCR Tools', 'GroupDocs.Viewer'],
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading uppercase text-retro-text section-title justify-center">Experience</h2>

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
                      w-4 h-4
                      border-2 border-retro-bg
                      ${isActive
                        ? 'bg-retro-accent'
                        : 'bg-retro-text'
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
          <div className="relative pl-6 border-l-2 border-retro-border space-y-8">
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
                <div className="absolute -left-[25px] top-2 w-3 h-3 bg-retro-text border-2 border-retro-bg" />

                {/* Card */}
                <div className="p-4 bg-retro-surface border-2 border-retro-border shadow-retro">
                  <span className={`
                    inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 border border-retro-border mb-2 font-mono text-retro-bg
                    ${exp.type === 'work'
                      ? 'bg-retro-accent'
                      : exp.type === 'internship'
                        ? 'bg-purple-600'
                        : 'bg-green-600'
                    }
                  `}>
                    {exp.type}
                  </span>
                  <h3 className="text-sm font-bold text-retro-text font-heading uppercase">{exp.role}</h3>
                  <p className="text-xs text-retro-text font-mono mt-1">{exp.company}</p>
                  <p className="text-xs text-retro-text-secondary mt-1 font-mono">{exp.duration}</p>
                  <p className="text-xs text-retro-text-secondary mt-2 leading-relaxed font-mono">{exp.description}</p>

                  {/* Technologies */}
                  {exp.tech && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono text-retro-accent border border-retro-border px-1.5 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
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
