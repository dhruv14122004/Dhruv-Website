import { useState } from 'react'
import { FiGithub, FiExternalLink, FiStar, FiTarget, FiTrendingUp } from 'react-icons/fi'
import accidentImage from '../assets/accident.jpeg'
import expenseImage from '../assets/expensemanager.jpeg'
import hotelImage from '../assets/hotel.png'
import sportImage from '../assets/sport.png'
import escapeImage from '../assets/escape.png'
import eventImage from '../assets/event.png'
import dihImage from '../assets/dih_tix.png'
import cvipImage from '../assets/cvip_image.png'
import forrestImage from '../assets/forrestfir.jpeg'

const GameProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Accident Detection System',
      description: 'AI-powered real-time accident detection using computer vision and machine learning algorithms.',
      image: accidentImage,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
      category: 'ai',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Expert',
      xp: 1200,
      featured: true
    },
    {
      id: 2,
      title: 'Expense Manager',
      description: 'Full-stack expense tracking application with analytics and budget management features.',
      image: expenseImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Advanced',
      xp: 1000,
      featured: true
    },
    {
      id: 3,
      title: 'Hotel Booking System',
      description: 'Complete hotel management platform with booking, payment integration, and admin dashboard.',
      image: hotelImage,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'web',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Advanced',
      xp: 950,
      featured: false
    },
    {
      id: 4,
      title: 'Sports Analytics Platform',
      description: 'Data visualization platform for sports statistics and performance analysis.',
      image: sportImage,
      technologies: ['Python', 'Django', 'Chart.js', 'PostgreSQL'],
      category: 'data',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Intermediate',
      xp: 800,
      featured: false
    },
    {
      id: 5,
      title: 'Escape Room Game',
      description: 'Interactive web-based escape room game with puzzles and immersive storytelling.',
      image: escapeImage,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
      category: 'game',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Intermediate',
      xp: 700,
      featured: false
    },
    {
      id: 6,
      title: 'Event Management System',
      description: 'Comprehensive event planning and management platform with attendee tracking.',
      image: eventImage,
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
      category: 'web',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Advanced',
      xp: 900,
      featured: true
    },
    {
      id: 7,
      title: 'Digital Innovation Hub',
      description: 'Platform for showcasing digital innovations and connecting entrepreneurs.',
      image: dihImage,
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      category: 'web',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Advanced',
      xp: 1100,
      featured: false
    },
    {
      id: 8,
      title: 'Computer Vision Project',
      description: 'Advanced computer vision application for object detection and image processing.',
      image: cvipImage,
      technologies: ['Python', 'OpenCV', 'PyTorch', 'NumPy'],
      category: 'ai',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Expert',
      xp: 1300,
      featured: false
    },
    {
      id: 9,
      title: 'Forest Fire Detection',
      description: 'Machine learning model for early forest fire detection using satellite imagery.',
      image: forrestImage,
      technologies: ['Python', 'TensorFlow', 'Satellite API', 'Flask'],
      category: 'ai',
      github: 'https://github.com/dhruv14122004',
      demo: '#',
      difficulty: 'Expert',
      xp: 1400,
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Quests', icon: '🎯', count: projects.length },
    { id: 'web', name: 'Web Adventures', icon: '🌐', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI Sorcery', icon: '🤖', count: projects.filter(p => p.category === 'ai').length },
    { id: 'data', name: 'Data Magic', icon: '📊', count: projects.filter(p => p.category === 'data').length },
    { id: 'game', name: 'Game Craft', icon: '🎮', count: projects.filter(p => p.category === 'game').length }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const regularProjects = filteredProjects.filter(p => !p.featured)

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Expert': return 'var(--color-secondary)'
      case 'Advanced': return 'var(--color-primary)'
      case 'Intermediate': return 'var(--color-accent)'
      default: return 'var(--color-accent)'
    }
  }

  return (
    <section id="projects" className="projects-section" style={{ 
      padding: '6rem 0',
      position: 'relative',
      minHeight: '100vh'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header text-center mb-4 animate-on-scroll">
          <h2 style={{ 
            fontFamily: 'Raleway',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: 'var(--color-white)',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            My Projects
          </h2>
          <p style={{ 
            fontFamily: 'Inter',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            <em>A collection of applications and solutions I've built</em>
            <br />
            Explore my portfolio of projects showcasing various technologies and problem-solving approaches. 
            Each project represents learning, growth, and technical achievement.
          </p>
        </div>

        {/* Category Filter */}
        <div className="quest-filters animate-on-scroll" style={{ 
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              style={{ 
                background: selectedCategory === category.id 
                  ? 'var(--color-primary)' 
                  : 'var(--color-white)',
                color: selectedCategory === category.id 
                  ? 'var(--color-white)' 
                  : 'var(--color-text)',
                border: '2px solid var(--color-primary)',
                padding: '1rem 1.5rem',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Cabin',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>{category.icon}</span>
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Quests */}
        {featuredProjects.length > 0 && (
          <div className="featured-quests animate-on-scroll" style={{ marginBottom: '4rem' }}>
            <h3 className="section-title" style={{ 
              fontFamily: 'Cabin',
              fontSize: '2rem',
              color: 'var(--color-text)',
              textAlign: 'center',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <FiStar style={{ color: 'var(--color-warning)' }} />
              Featured Quests
            </h3>
            
            <div className="featured-grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem'
            }}>
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="quest-card featured"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    position: 'relative',
                    border: '3px solid var(--color-warning)'
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="quest-image-wrapper" style={{ 
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="quest-image"
                      style={{ 
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="quest-overlay" style={{ 
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      opacity: hoveredProject === project.id ? '1' : '0',
                      transition: 'opacity 0.3s ease'
                    }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="game-btn game-btn-primary"
                        style={{ padding: '0.8rem 1.5rem' }}
                      >
                        <FiGithub />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="game-btn game-btn-secondary"
                        style={{ padding: '0.8rem 1.5rem' }}
                      >
                        <FiExternalLink />
                        Demo
                      </a>
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className="difficulty-badge" style={{ 
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: getDifficultyColor(project.difficulty),
                      color: 'var(--color-white)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      fontFamily: 'Cabin'
                    }}>
                      {project.difficulty}
                    </div>
                  </div>
                  
                  <div className="quest-content" style={{ padding: '1.5rem' }}>
                    <h4 className="quest-title" style={{ 
                      fontFamily: 'Raleway',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: 'var(--color-primary)',
                      marginBottom: '1rem'
                    }}>
                      {project.title}
                    </h4>
                    
                    <p className="quest-description" style={{ 
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      fontFamily: 'Inter',
                      fontSize: '1rem'
                    }}>
                      {project.description}
                    </p>
                    
                    <div className="quest-tech" style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="quest-xp" style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--color-success)',
                      fontFamily: 'Cabin',
                      fontWeight: '600'
                    }}>
                      <FiTrendingUp />
                      +{project.xp} XP
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Quests */}
        {regularProjects.length > 0 && (
          <div className="regular-quests animate-on-scroll">
            <h3 className="section-title" style={{ 
              fontFamily: 'Cabin',
              fontSize: '2rem',
              color: 'var(--color-text)',
              textAlign: 'center',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <FiTarget style={{ color: 'var(--color-accent)' }} />
              Other Adventures
            </h3>
            
            <div className="regular-grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}>
              {regularProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="quest-card"
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="quest-image-wrapper" style={{ 
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="quest-image"
                      style={{ 
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    
                    <div className="quest-overlay" style={{ 
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      opacity: hoveredProject === project.id ? '1' : '0',
                      transition: 'opacity 0.3s ease'
                    }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="game-btn game-btn-primary"
                        style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}
                      >
                        <FiGithub />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="game-btn game-btn-secondary"
                        style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}
                      >
                        <FiExternalLink />
                        Demo
                      </a>
                    </div>
                    
                    <div className="difficulty-badge" style={{ 
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: getDifficultyColor(project.difficulty),
                      color: 'var(--color-white)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      fontFamily: 'Cabin'
                    }}>
                      {project.difficulty}
                    </div>
                  </div>
                  
                  <div className="quest-content" style={{ padding: '1.2rem' }}>
                    <h4 className="quest-title" style={{ 
                      fontFamily: 'Raleway',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--color-primary)',
                      marginBottom: '0.8rem'
                    }}>
                      {project.title}
                    </h4>
                    
                    <p className="quest-description" style={{ 
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                      fontFamily: 'Inter'
                    }}>
                      {project.description}
                    </p>
                    
                    <div className="quest-tech" style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.3rem',
                      marginBottom: '0.8rem'
                    }}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-tag" style={{ 
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.6rem'
                        }}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag" style={{ 
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.6rem'
                        }}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="quest-xp" style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--color-success)',
                      fontFamily: 'Cabin',
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      <FiTrendingUp />
                      +{project.xp} XP
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="quest-cta animate-on-scroll" style={{ 
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <div className="game-card" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontFamily: 'Press Start 2P',
              fontSize: '1.2rem',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              Ready for a New Adventure?
            </h3>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--color-text)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Want to join forces and create something amazing together? 
              Let's embark on a new quest!
            </p>
            <a
              href="https://github.com/dhruv14122004"
              target="_blank"
              rel="noopener noreferrer"
              className="game-btn game-btn-primary"
            >
              <FiGithub />
              Join the Adventure
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .quest-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
        
        .quest-card.featured {
          border-width: 3px;
          box-shadow: 0 10px 30px rgba(255, 185, 77, 0.3);
        }
        
        .quest-card.featured:hover {
          box-shadow: 0 15px 40px rgba(255, 185, 77, 0.4);
        }
        
        @media (max-width: 768px) {
          .quest-filters {
            flex-direction: column;
            align-items: center;
          }
          
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          
          .regular-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default GameProjects
