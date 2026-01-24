import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import accidentImage from '../assets/accident.jpeg'
import expenseImage from '../assets/expensemanager.jpeg'
import escapeImage from '../assets/escape.png'
import dihImage from '../assets/dih_tix.png'
import cvipImage from '../assets/cvip_image.png'

const Projects = () => {
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

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading uppercase text-retro-text section-title justify-center">Projects</h2>


      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
          >
            {/* Window Header */}
            <div className="window-header">
              <span className="uppercase text-xs tracking-wider">{project.title}</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
                <button className="window-btn window-close" aria-label="Close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden border-b-2 border-retro-border">
              <img
                src={project.image}
                alt={project.subtitle}
                className="project-img group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with links */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-retro-bg border-2 border-retro-text text-retro-text hover:bg-retro-accent hover:text-retro-bg hover:border-retro-bg transition-colors"
                  title="View Source"
                >
                  <FiGithub size={20} />
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-retro-bg border-2 border-retro-text text-retro-text hover:bg-retro-accent hover:text-retro-bg hover:border-retro-bg transition-colors"
                    title="Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="project-info">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag inline-block">#{tag}</span>
                ))}
              </div>

              <h3 className="project-title font-heading uppercase leading-tight">
                {project.subtitle}
              </h3>

              <p className="text-sm text-retro-text-secondary font-mono leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
