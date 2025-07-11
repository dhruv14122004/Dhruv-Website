import { FiCode, FiDatabase, FiGlobe, FiSmartphone, FiServer, FiTool } from 'react-icons/fi'
import { SiReact, SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiGit , SiFlutter, SiGo, SiGithub, SiFigma,} from 'react-icons/si'

const GameAbout = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, level: 'Expert', color: '#F7DF1E', description: 'Modern ES6+ development' },
    { name: 'React', icon: SiReact, level: 'Expert', color: '#61DAFB', description: 'Component-based architecture' },
    { name: 'Node.js', icon: SiNodedotjs, level: 'Advanced', color: '#339933', description: 'Server-side development' },
    { name: 'Python', icon: SiPython, level: 'Advanced', color: '#3776AB', description: 'Backend & data processing' },
    { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', color: '#47A248', description: 'NoSQL database design' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate', color: '#336791', description: 'Relational databases' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Expert', color: '#06B6D4', description: 'Utility-first styling' },
    { name: 'Git', icon: SiGit, level: 'Advanced', color: '#F05032', description: 'Version control & collaboration' },
  ]

  const services = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks and best practices.',
      color: 'var(--color-primary)'
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      description: 'Building robust server-side applications and RESTful APIs for scalable solutions.',
      color: 'var(--color-secondary)'
    },
    {
      icon: FiDatabase,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing query performance.',
      color: 'var(--color-accent)'
    },
    {
      icon: FiGlobe,
      title: 'Full-Stack Applications',
      description: 'End-to-end web development from concept to deployment and maintenance.',
      color: 'var(--color-primary)'
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Creating mobile-first designs that work seamlessly across all devices.',
      color: 'var(--color-secondary)'
    },
    {
      icon: FiTool,
      title: 'Problem Solving',
      description: 'Analyzing complex requirements and implementing efficient technical solutions.',
      color: 'var(--color-accent)'
    }
  ]

  const stats = [
    { number: '2+', label: 'Years Experience', description: 'Development & Learning' },
    { number: '15+', label: 'Projects Built', description: 'Web Applications' },
    { number: '8+', label: 'Technologies', description: 'Mastered' },
    { number: '100%', label: 'Dedication', description: 'To Quality Code' }
  ]

  return (
    <section id="about" className="about-section" style={{ 
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
            About Me
          </h2>
          <p style={{ 
            fontFamily: 'Inter',
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Passionate software developer with experience in full-stack development.
            <br />
            Always learning and building innovative solutions.
          </p>
        </div>

        {/* Player Stats */}
        <div className="player-stats animate-on-scroll" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card"
              style={{ 
                textAlign: 'center',
                padding: '2rem 1rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(250, 250, 255, 0.9))',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(106, 17, 203, 0.15)',
                border: '1px solid rgba(106, 17, 203, 0.2)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(106, 17, 203, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(106, 17, 203, 0.1)'
              }}
            >
              <div style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Raleway',
                fontWeight: '700',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{ 
                fontSize: '1.1rem',
                fontFamily: 'Inter',
                fontWeight: '600',
                color: 'var(--color-text-heading)',
                marginBottom: '0.3rem'
              }}>
                {stat.label}
              </div>
              <div style={{ 
                fontSize: '0.9rem',
                color: 'var(--color-text-body)',
                fontFamily: 'Inter'
              }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="skills-section animate-on-scroll" style={{ marginBottom: '4rem' }}>
          <h3 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontFamily: 'Raleway',
            fontWeight: '600',
            color: 'var(--color-white)',
            textAlign: 'center',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
          }}>
            Technical Skills
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(250, 250, 255, 0.9))',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(106, 17, 203, 0.15)',
                  border: '1px solid rgba(106, 17, 203, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(106, 17, 203, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(106, 17, 203, 0.1)'
                }}
              >
                <skill.icon style={{ 
                  fontSize: '2rem',
                  color: skill.color,
                  flexShrink: 0
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontSize: '1.1rem',
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    color: 'var(--color-text-heading)',
                    marginBottom: '0.3rem'
                  }}>
                    {skill.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--color-primary)',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    marginBottom: '0.3rem'
                  }}>
                    Level: {skill.level}
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem',
                    color: 'var(--color-text-body)',
                    fontFamily: 'Inter',
                    fontStyle: 'italic'
                  }}>
                    {skill.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section animate-on-scroll">
          <h3 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontFamily: 'Raleway',
            fontWeight: '600',
            color: 'var(--color-white)',
            textAlign: 'center',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
          }}>
            What I Do
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(250, 250, 255, 0.9))',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(106, 17, 203, 0.15)',
                  border: '1px solid rgba(106, 17, 203, 0.2)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(106, 17, 203, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(106, 17, 203, 0.1)'
                }}
              >
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  background: service.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  <service.icon />
                </div>
                <h4 style={{ 
                  fontSize: '1.3rem',
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  color: 'var(--color-text-heading)',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h4>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--color-text-body)',
                  fontFamily: 'Inter',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Quote */}
        <div className="fun-quote animate-on-scroll" style={{ 
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          background: 'var(--gradient-primary)',
          borderRadius: '20px',
          color: 'white'
        }}>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontFamily: 'Inter',
            fontWeight: '500',
            fontStyle: 'italic',
            marginBottom: '0.5rem'
          }}>
            "Yes, This Portfolio Slaps (Or At Least It Tries)"
          </p>
          <p style={{ 
            fontSize: '1rem',
            opacity: '0.9',
            fontFamily: 'Inter'
          }}>
            — Dhruv, probably at 3 AM
          </p>
        </div>
      </div>
    </section>
  )
}

export default GameAbout
