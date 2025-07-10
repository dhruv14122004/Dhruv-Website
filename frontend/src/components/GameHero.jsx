import { useState, useEffect } from 'react'
import heroImage from '../assets/me.jpeg'

const GameHero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentSubtitle, setCurrentSubtitle] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const subtitles = [
    "Software Developer & Problem Solver",
    "Full Stack Engineer",
    "Creative Developer",
    "Technology Enthusiast",
    "Frontend & Backend Specialist"
  ]

  useEffect(() => {
    const currentText = subtitles[currentSubtitle]
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        
        // After typing is complete, wait 3 seconds then start over
        setTimeout(() => {
          setDisplayText('')
          setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
          setIsTyping(true)
        }, 3000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentSubtitle])

  return (
    <section className="hero-section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>

      <div className="container">
        <div className="hero-content" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4rem',
          color: 'var(--color-white)',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Hero Image */}
          <div className="hero-image" style={{
            flex: '0 0 300px',
            animation: 'fadeIn 1s ease-out'
          }}>
            <img 
              src={heroImage} 
              alt="Dhruv Sharma" 
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                objectFit: 'cover',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </div>

          {/* Hero Text */}
          <div className="hero-text" style={{
            flex: '1',
            textAlign: 'left',
            maxWidth: '600px'
          }}>
            {/* Main Title */}
            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: 'Raleway',
              fontWeight: '700',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              animation: 'slideUp 1s ease-out'
            }}>
              Hey, I'm{' '}
              <span style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}>
                Dhruv
              </span>
            </h1>

            {/* Typing Subtitle */}
            <div className="hero-subtitle" style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontFamily: 'Inter',
              fontWeight: '600',
              marginBottom: '2rem',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              animation: 'fadeIn 1s ease-out 0.5s both'
            }}>
              <span>{displayText}</span>
              <span className="cursor" style={{
                marginLeft: '2px',
                animation: 'blink 1s infinite',
                opacity: isTyping ? 1 : 0
              }}>|</span>
            </div>

            {/* Professional Description */}
            <p className="hero-description" style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontFamily: 'Inter',
              marginBottom: '3rem',
              opacity: '0.9',
              lineHeight: '1.6',
              animation: 'fadeIn 1s ease-out 1s both'
            }}>
              <em>Welcome to my portfolio. Explore my projects and professional journey.</em>
              <br />
              <span style={{ fontSize: '0.9em', opacity: '0.8' }}>
                Passionate about creating innovative digital solutions
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons" style={{
              display: 'flex',
              gap: '1rem',
              animation: 'bounceIn 1s ease-out 1.5s both'
            }}>
              <a 
                href="#about" 
                className="game-btn game-btn-primary"
                style={{
                  fontSize: '1.1rem',
                  padding: '1rem 2.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'var(--color-white)',
                  border: '2px solid var(--color-white)',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontFamily: 'Cabin',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-white)'
                  e.target.style.color = 'var(--color-primary)'
                  e.target.style.transform = 'translateY(-3px) scale(1.05)'
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.color = 'var(--color-white)'
                  e.target.style.transform = 'translateY(0) scale(1)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Explore My Work
              </a>
              
              <a 
                href="#projects" 
                className="game-btn game-btn-secondary"
                style={{
                  fontSize: '1rem',
                  padding: '0.8rem 2rem',
                  background: 'transparent',
                  color: 'var(--color-white)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontFamily: 'Cabin',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.borderColor = 'var(--color-white)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                }}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
          100% { text-shadow: 0 0 30px rgba(255, 215, 0, 0.8); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 2rem !important;
          }
          
          .hero-image {
            flex: none !important;
          }
          
          .hero-image img {
            width: 250px !important;
            height: 250px !important;
          }
          
          .hero-text {
            text-align: center !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-buttons a {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          
          .floating-shape {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default GameHero
