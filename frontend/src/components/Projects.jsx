import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import accidentImage from '../assets/accident.jpeg'
import expenseImage from '../assets/expensemanager.jpeg'
import escapeImage from '../assets/escape.png'
import dihImage from '../assets/dih_tix.png'
import cvipImage from '../assets/cvip_image.png'

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'ABNORMALITY_CLASS.EXE',
      subtitle: 'Multi-Class Abnormality Classification',
      description: 'Vision Transformers and ResNet model for endoscopy imagery. Ranked 7th globally in Capsule Vision 2024.',
      image: cvipImage,
      tags: ['PYTHON', 'ML', 'RESNET'],
      github: 'https://github.com/devrishivermaa/capsule-commandos',
      demo: '#'
    },
    {
      id: 2,
      title: 'DTIX_PROTOCOL',
      subtitle: 'Decentralized Ticketing System',
      description: 'Blockchain-based NFT ticketing platform preventing scalping and transparent auctions.',
      image: dihImage,
      tags: ['WEB3', 'REACT', 'SOLIDITY'],
      github: 'https://github.com/dhruv14122004',
      demo: '#'
    },
    {
      id: 3,
      title: 'FINTECH_APP_V1',
      subtitle: 'Flutter Finance Suite',
      description: 'Cross-platform mobile application for portfolio tracking and mutual fund analysis with AI.',
      image: expenseImage,
      tags: ['FLUTTER', 'DART', 'FIREBASE'],
      github: 'https://github.com/dhruv14122004',
      demo: '#'
    },
    {
      id: 4,
      title: 'ACCIDENT_DETECTION',
      subtitle: 'IoT Safety System',
      description: 'Real-time YOLO detection system taking immediate action on accident identification.',
      image: accidentImage,
      tags: ['IOT', 'PYTHON', 'YOLO'],
      github: 'https://github.com/dhruv14122004',
      demo: '#'
    },
    {
      id: 5,
      title: 'MAZE_RUNNER_UE5',
      subtitle: 'Unreal Engine Open World',
      description: 'High-fidelity open world game with dynamic environments and physics-based interactions.',
      image: escapeImage,
      tags: ['CPP', 'UNREAL', 'GAMEDEV'],
      github: 'https://github.com/dhruv14122004',
      demo: '#'
    },
    {
      id: 6,
      title: 'COMMERCE_FLUTTER',
      subtitle: 'E-Commerce Shoe Platform',
      description: 'Production-ready shopping application with real-time inventory and payments.',
      image: dihImage,
      tags: ['FLUTTER', 'FIREBASE', 'STRIPE'],
      github: 'https://github.com/dhruv14122004/shoeApp',
      demo: '#'
    },
  ];

  const toggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 font-heading uppercase text-retro-text section-title">Projects</h2>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => {
          const isOpen = expandedId === project.id;
          const num = (index + 1).toString().padStart(2, '0');

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`border-2 transition-all duration-300 ${isOpen ? 'border-retro-accent bg-retro-surface/50' : 'border-retro-border bg-retro-surface'}`}
            >
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 text-left hover:bg-white/5 transition-colors group"
                aria-expanded={isOpen}
              >
                <span className={`text-4xl md:text-5xl font-heading font-extrabold leading-none transition-colors ${isOpen ? 'text-retro-accent' : 'text-retro-text/50 group-hover:text-retro-text'}`}>
                  {num}/
                </span>

                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-heading font-bold uppercase mb-1 transition-colors ${isOpen ? 'text-retro-text' : 'text-retro-text group-hover:text-retro-accent'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-retro-text-secondary font-mono hidden md:block">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4 self-end md:self-auto">
                  <span className="text-xs font-mono text-retro-accent block md:hidden">{isOpen ? 'CLOSE' : 'VIEW'}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-retro-accent"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-dashed border-retro-border/50 mt-2 flex flex-col md:flex-row gap-8">
                  {/* Project Image */}
                  <div className="w-full md:w-5/12 aspect-video overflow-hidden border border-retro-text bg-black relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-retro-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-xs font-bold text-retro-bg bg-retro-text-secondary">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-retro-text text-base md:text-lg leading-relaxed font-mono mb-8">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-retro-text text-retro-text hover:bg-retro-accent hover:border-retro-accent hover:text-retro-bg transition-all font-bold font-mono text-sm uppercase group/btn"
                      >
                        <FiGithub className="group-hover/btn:scale-110 transition-transform" />
                        Source Code
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-retro-text text-retro-bg hover:bg-retro-accent hover:text-retro-bg transition-all font-bold font-mono text-sm uppercase group/btn"
                        >
                          <FiExternalLink className="group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
