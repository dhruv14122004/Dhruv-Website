import { SiPython, SiMongodb, SiPostgresql, SiGit, SiFlutter, SiGo, SiDocker, SiAmazonaws } from 'react-icons/si'

const GameAbout = () => {
  const skills = [
    { name: 'Flutter', icon: SiFlutter, level: 'Advanced', color: '#02569B', description: 'Cross-platform app development' },
    { name: 'Go', icon: SiGo, level: 'Intermediate', color: '#00ADD8', description: 'Concurrent programming & backend' },
    { name: 'Docker', icon: SiDocker, level: 'Intermediate', color: '#2496ED', description: 'Containerization & deployment' },
    { name: 'AWS', icon: SiAmazonaws, level: 'Intermediate', color: '#FF9900', description: 'Cloud services & infrastructure' },
    { name: 'Python', icon: SiPython, level: 'Advanced', color: '#3776AB', description: 'Backend & data processing' },
    { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', color: '#47A248', description: 'NoSQL database design' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate', color: '#336791', description: 'Relational databases' },
    { name: 'Git', icon: SiGit, level: 'Advanced', color: '#F05032', description: 'Version control & collaboration' },
  ]

  return (
    <section id="skills" className="skills-section-only" style={{
      padding: '4rem 0', // Adjusted padding
      position: 'relative',
      minHeight: 'auto' // Adjusted minHeight as other sections are removed
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Skills Section */}
        <div className="skills-section animate-on-scroll">
          <h3 style={{ 
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', // Slightly larger title
            fontFamily: 'Raleway, sans-serif', // Ensure modern font
            fontWeight: '700', // Bold title
            color: 'var(--color-secondary)', // Use secondary color (orange) for title
            textAlign: 'center',
            marginBottom: '2.5rem', // Increased margin
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' // Adjusted shadow for dark theme
          }}>
            Technical Skills
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Wider cards
            gap: '2rem' // Increased gap
          }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item" // Using the .skill-item class from index.css for new theme
                // Inline styles below are for fallback or minor adjustments if needed,
                // but primary styling should come from .skill-item in index.css
                style={{
                  // background: 'linear-gradient(135deg, #2c2c2c, #222222)', // Already in .skill-item
                  // border: '1px solid var(--color-border)', // Already in .skill-item
                  // borderRadius: '12px', // Already in .skill-item
                  // padding: '1rem 1.5rem', // Adjusted in .skill-item
                  // display: 'flex', // Already in .skill-item
                  // alignItems: 'center', // Already in .skill-item
                  // gap: '1rem', // Already in .skill-item
                  // transition: 'all 0.3s ease', // Already in .skill-item
                  // cursor: 'pointer', // Already in .skill-item
                }}
              >
                <skill.icon style={{ 
                  fontSize: '2.2rem', // Slightly larger icon
                  color: skill.color, // Icon color from skill data
                  flexShrink: 0,
                  transition: 'color 0.3s ease' // Smooth color transition on hover
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontSize: '1.2rem', // Slightly larger skill name
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '600',
                    color: 'var(--color-text-heading)', // White heading text
                    marginBottom: '0.4rem' // Adjusted margin
                  }}>
                    {skill.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', // Slightly larger level text
                    color: 'var(--color-accent)', // Orange accent for level
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500',
                    marginBottom: '0.4rem'
                  }}>
                    Level: {skill.level}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', // Slightly larger description
                    color: 'var(--color-text-body)', // Light gray body text
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'
                  }}>
                    {skill.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameAbout
