import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import accidentImage from '../assets/accident.jpeg'
import expenseImage from '../assets/expensemanager.jpeg'
import hotelImage from '../assets/hotel.png'
import sportImage from '../assets/sport.png'
import escapeImage from '../assets/escape.png'
import eventImage from '../assets/event.png'
import dihImage from '../assets/dih_tix.png'
import cvipImage from '../assets/cvip_image.png'
import forrestImage from '../assets/forrestfir.jpeg'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Multi-Class Abnormality Classification',
      description: 'Developed a multi-class abnormality classification model for endoscopy images using Vision Transformers and ResNet. Achieved 7th place in Capsule Vision 2024 Challenge.',
      image: cvipImage,
      technologies: ['Python', 'Machine Learning', 'Vision Transformers', 'ResNet'],
      category: 'ai',
      github: 'https://github.com/devrishivermaa/capsule-commandos',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'DTIX – Decentralized Ticketing App',
      description: 'Blockchain-based ticketing platform for buying, reselling, and auctioning event tickets as NFTs. Prevents fraud and ensures ticket authenticity. 4th place at HackJKLU v4.0.',
      image: dihImage,
      technologies: ['React', 'Vite', 'MongoDB', 'MoonPay', 'Blockchain'],
      category: 'web',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Fintech Flutter App',
      description: 'Built a comprehensive Flutter-based fintech application with portfolio tracking, mutual fund analysis, investment dashboard, and AI portfolio analyzer.',
      image: expenseImage,
      technologies: ['Flutter', 'Dart', 'PostgreSQL', 'Figma'],
      category: 'mobile',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Accident Detection System',
      description: 'Real-time accident detection system using Jetson Nano and YOLO-based AI model to detect accidents and trigger indicator lights for quick alerts.',
      image: accidentImage,
      technologies: ['Python', 'Jetson Nano', 'YOLO', 'SQLite', 'Flask', 'Django'],
      category: 'ai',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Expense Planner',
      description: 'User-friendly expense planner app in Flutter that tracks spending, manages budgets, and displays organized expense summaries.',
      image: expenseImage,
      technologies: ['Flutter', 'Dart', 'MySQL'],
      category: 'mobile',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Escape the Maze',
      description: 'Open-world game inspired by Maze Runner with dynamic environments and immersive gameplay created using Unreal Engine and Blender.',
      image: escapeImage,
      technologies: ['Unreal Engine', 'Blender', 'C++', 'Game Design'],
      category: 'game',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      featured: true
    },
    {
      id: 7,
      title: 'Shoe App',
      description: 'Created a ecommerce shoe app using Flutter ',
      image: dihImage,
      technologies: ['Dart', 'Flutter', 'Firebase'],
      category: 'mobile',
      github: 'https://github.com/dhruv14122004/shoeApp',
      demo: '#',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'game', name: 'Game Development', count: projects.filter(p => p.category === 'game').length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'data', name: 'Data Tools', count: projects.filter(p => p.category === 'data').length }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in various technologies and domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:bg-gray-750 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-blue-400 text-blue-400 text-sm rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects