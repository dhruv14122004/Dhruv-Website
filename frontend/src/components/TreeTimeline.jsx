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
    duration: 'May 2025 – August 2025',
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
    <section id="experience" className="py-4 transition-colors duration-500">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading uppercase text-retro-text section-title">Experience</h2>

        </motion.div>

        {/* Timeline Tree (desktop/tablet) */}
        <div className="relative hidden md:block">
          {/* Trunk - spans full height */}
          <Trunk height="100%" />

          {/* Experience items */}
          <div className="relative z-10 space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isActive = activeId === exp.id;

              return (
                <div
                  key={exp.id}
                  className="relative flex items-center pl-24"
                >
                  {/* Center dot on trunk */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`
                      absolute left-8 -translate-x-1/2
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

                  {/* Right side content */}
                  <div className="w-full relative">
                    <ExperienceNode
                      experience={exp}
                      index={index}
                      isLeft={false}
                      isActive={isActive}
                      onClick={() => handleNodeClick(exp.id)}
                    />
                    <Branch isLeft={false} index={index} isActive={isActive} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Collapsible vertical list */}
        <div className="md:hidden mt-8">
          <div className="relative pl-6 border-l-2 border-retro-border space-y-6">
            {experiences.map((exp, index) => {
              const isExpanded = activeId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-[29px] top-5 w-3 h-3 border-2 border-retro-bg transition-colors duration-300 ${isExpanded ? 'bg-retro-accent' : 'bg-retro-text'}`} />

                  {/* Card */}
                  <div
                    className={`
                      bg-retro-surface border-2 transition-all duration-300
                      ${isExpanded ? 'border-retro-accent shadow-[4px_4px_0px_0px_var(--accent-retro)]' : 'border-retro-border shadow-retro'}
                    `}
                  >
                    <div
                      onClick={() => handleNodeClick(exp.id)}
                      className="p-4 cursor-pointer"
                    >
                      {/* Header: Type & Toggle */}
                      <div className="flex justify-between items-start mb-2">
                        <span className={`
                          inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border border-retro-border font-mono text-retro-bg
                          ${exp.type === 'work'
                            ? 'bg-retro-accent'
                            : exp.type === 'internship'
                              ? 'bg-purple-500' // Keeping distinctive color for internship 
                              : 'bg-green-600'
                          }
                        `}>
                          {exp.type}
                        </span>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={isExpanded ? "text-retro-accent" : "text-retro-text"}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Title & Company */}
                      <h3 className={`text-sm font-bold font-heading uppercase mb-1 transition-colors ${isExpanded ? 'text-retro-accent' : 'text-retro-text'}`}>
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-retro-text-secondary mb-3">
                        <span className="text-retro-text">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>

                      {/* Skills (Always visible) */}
                      {exp.tech && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="text-[10px] font-mono text-retro-text/70 border border-retro-border/50 px-1.5 py-0.5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Expandable Description */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 border-t border-dashed border-retro-border/50 mt-1">
                        <p className="text-xs text-retro-text-secondary leading-relaxed font-mono pt-3">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeTimeline;
