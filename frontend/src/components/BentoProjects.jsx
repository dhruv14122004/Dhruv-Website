import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { 
  IconBrain, 
  IconTicket, 
  IconCoin, 
  IconCar, 
  IconPuzzle2, 
  IconShoeOff 
} from '@tabler/icons-react';
import accidentImage from '../assets/accident.jpeg'
import expenseImage from '../assets/expensemanager.jpeg'
import hotelImage from '../assets/hotel.png'
import sportImage from '../assets/sport.png'
import escapeImage from '../assets/escape.png'
import eventImage from '../assets/event.png'
import dihImage from '../assets/dih_tix.png'
import cvipImage from '../assets/cvip_image.png'
import forrestImage from '../assets/forrestfir.jpeg'

// Utility function for classnames
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Bento Grid Container
const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

// Bento Grid Item
const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  technologies,
  github,
  demo,
  isBlurred,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:shadow-xl dark:border-white/[0.1] dark:bg-neutral-900",
        isBlurred && "blur-[2px] scale-[0.98] opacity-50",
        className
      )}
    >
      {/* Header / Image */}
      {header}
      
      {/* Content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex items-center gap-2 mb-2 mt-4">
          {icon}
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {technologies?.[0]}
          </span>
        </div>
        <div className="font-sans font-bold text-neutral-700 dark:text-neutral-200 mb-2 line-clamp-1">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </div>
        
        {/* Tech Tags */}
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {technologies?.slice(1, 4).map(tech => (
            <span 
              key={tech} 
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 mt-4 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300">
          <a 
            href={github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors"
          >
            <FiGithub size={14} />
          </a>
          {demo && demo !== '#' && (
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const BentoProjects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Multi-Class Abnormality Classification',
      description: 'Developed a multi-class abnormality classification model for endoscopy images using Vision Transformers and ResNet. Achieved 7th place in Capsule Vision 2024 Challenge.',
      image: cvipImage,
      technologies: ['AI/ML', 'Python', 'Vision Transformers', 'ResNet'],
      icon: <IconBrain className="h-4 w-4 text-purple-500" />,
      github: 'https://github.com/devrishivermaa/capsule-commandos',
      demo: '#',
      span: 'md:col-span-2'
    },
    {
      id: 2,
      title: 'DTIX – Decentralized Ticketing',
      description: 'Blockchain-based ticketing platform for buying, reselling, and auctioning event tickets as NFTs. 4th place at HackJKLU v4.0.',
      image: dihImage,
      technologies: ['Web3', 'React', 'MongoDB', 'Blockchain'],
      icon: <IconTicket className="h-4 w-4 text-blue-500" />,
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      span: ''
    },
    {
      id: 3,
      title: 'Fintech Flutter App',
      description: 'Comprehensive Flutter fintech app with portfolio tracking, mutual fund analysis, and AI portfolio analyzer.',
      image: expenseImage,
      technologies: ['Mobile', 'Flutter', 'PostgreSQL', 'Figma'],
      icon: <IconCoin className="h-4 w-4 text-green-500" />,
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      span: ''
    },
    {
      id: 4,
      title: 'Accident Detection System',
      description: 'Real-time accident detection using Jetson Nano and YOLO-based AI to trigger quick alerts.',
      image: accidentImage,
      technologies: ['IoT', 'YOLO', 'Flask', 'Django'],
      icon: <IconCar className="h-4 w-4 text-red-500" />,
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      span: 'md:col-span-2'
    },
    {
      id: 5,
      title: 'Escape the Maze',
      description: 'Open-world game inspired by Maze Runner with dynamic environments using Unreal Engine.',
      image: escapeImage,
      technologies: ['Game', 'Unreal Engine', 'Blender', 'C++'],
      icon: <IconPuzzle2 className="h-4 w-4 text-orange-500" />, 
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      span: ''
    },
    {
      id: 6,
      title: 'Shoe App',
      description: 'E-commerce shoe app built with Flutter and Firebase for seamless shopping experience.',
      image: dihImage,
      technologies: ['Mobile', 'Flutter', 'Firebase'],
      icon: <IconShoeOff className="h-4 w-4 text-pink-500" />,
      github: 'https://github.com/dhruv14122004/shoeApp',
      demo: '#',
      span: ''
    },
  ];

  // Image header component
  const ImageHeader = ({ src, alt }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-110"
      />
    </div>
  );

  return (
    <section id="projects" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-500">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
      >
        Selected Work
      </motion.h2>
      
      <BentoGrid className="max-w-5xl">
        {projects.map((project, index) => (
          <BentoGridItem
            key={project.id}
            title={project.title}
            description={project.description}
            header={<ImageHeader src={project.image} alt={project.title} />}
            icon={project.icon}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            className={project.span}
            isBlurred={hoveredId !== null && hoveredId !== project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default BentoProjects;

