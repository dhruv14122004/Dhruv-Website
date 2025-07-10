import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp, FiSun, FiMoon } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const GameFooter = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      href: 'https://github.com/dhruv14122004',
      color: 'var(--color-text)'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruv-sharma-142932252',
      color: 'var(--color-accent)'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      href: '#',
      color: 'var(--color-secondary)'
    },
    {
      icon: FiMail,
      name: 'Email',
      href: 'mailto:dhruv14122004@gmail.com',
      color: 'var(--color-success)'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Easter egg function
  const triggerEasterEgg = () => {
    const easterEgg = document.createElement('div')
    easterEgg.className = 'easter-egg show'
    easterEgg.innerHTML = `
      <div>
        <h3>🎮 Easter Egg Found!</h3>
        <p>You found the secret! 🎉</p>
        <p>Thanks for exploring my portfolio!</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: var(--color-primary);
          color: var(--color-white);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          cursor: pointer;
          margin-top: 1rem;
          font-family: 'Press Start 2P';
          font-size: 0.8rem;
        ">
          Close
        </button>
      </div>
    `
    document.body.appendChild(easterEgg)
    
    setTimeout(() => {
      if (easterEgg.parentElement) {
        easterEgg.remove()
      }
    }, 5000)
  }

  return (
    <footer className="game-footer" style={{ 
      padding: '3rem 0 1rem',
      position: 'relative'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div className="footer-content" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand Section */}
          <div className="footer-brand" style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontFamily: 'Press Start 2P',
              fontSize: '1.5rem',
              color: 'var(--color-white)',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              Dhruv.dev
            </h3>
            <p style={{ 
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Software Engineer passionate about creating innovative digital solutions. 
              Ready to build something amazing together!
            </p>
            <div className="footer-socials" style={{ 
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  style={{ 
                    width: '45px',
                    height: '45px',
                    background: 'var(--color-white)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color,
                    fontSize: '1.2rem',
                    border: '2px solid var(--color-border)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links" style={{ textAlign: 'center' }}>
            <h4 style={{ 
              fontFamily: 'Cabin',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--color-white)',
              marginBottom: '1rem',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              🧭 Quick Navigation
            </h4>
            <ul style={{ 
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none',
                      fontFamily: 'Cabin',
                      fontWeight: '500',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Stats */}
          <div className="footer-stats" style={{ textAlign: 'center' }}>
            <h4 style={{ 
              fontFamily: 'Cabin',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--color-white)',
              marginBottom: '1rem',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              🎨 Cozy Adventure Palette
            </h4>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              {[
                { color: '#E27D60', name: 'Clay Orange' },
                { color: '#85DCB0', name: 'Minty Green' },
                { color: '#C38D9E', name: 'Muted Rose' },
                { color: '#41B3A3', name: 'Aquatic Blue' },
                { color: '#E8A87C', name: 'Peach Sand' }
              ].map((colorInfo, index) => (
                <div
                  key={index}
                  title={colorInfo.name}
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: colorInfo.color,
                    borderRadius: '50%',
                    border: '2px solid var(--color-white)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              ))}
            </div>
            <h4 style={{ 
              fontFamily: 'Cabin',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--color-white)',
              marginBottom: '1rem',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              📊 Player Stats
            </h4>
            <div className="stats-grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              <div className="stat-item" style={{ 
                background: 'var(--color-white)',
                padding: '1rem',
                borderRadius: '15px',
                border: '2px solid var(--color-border)'
              }}>
                <div style={{ 
                  fontFamily: 'Press Start 2P',
                  fontSize: '1.2rem',
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem'
                }}>
                  2+
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--color-text)',
                  fontWeight: '500'
                }}>
                  Years
                </div>
              </div>
              <div className="stat-item" style={{ 
                background: 'var(--color-white)',
                padding: '1rem',
                borderRadius: '15px',
                border: '2px solid var(--color-border)'
              }}>
                <div style={{ 
                  fontFamily: 'Press Start 2P',
                  fontSize: '1.2rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '0.5rem'
                }}>
                  15+
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--color-text)',
                  fontWeight: '500'
                }}>
                  Projects
                </div>
              </div>
              <div className="stat-item" style={{ 
                background: 'var(--color-white)',
                padding: '1rem',
                borderRadius: '15px',
                border: '2px solid var(--color-border)'
              }}>
                <div style={{ 
                  fontFamily: 'Press Start 2P',
                  fontSize: '1.2rem',
                  color: 'var(--color-accent)',
                  marginBottom: '0.5rem'
                }}>
                  8+
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--color-text)',
                  fontWeight: '500'
                }}>
                  Skills
                </div>
              </div>
              <div className="stat-item" style={{ 
                background: 'var(--color-white)',
                padding: '1rem',
                borderRadius: '15px',
                border: '2px solid var(--color-border)'
              }}>
                <div style={{ 
                  fontFamily: 'Press Start 2P',
                  fontSize: '1.2rem',
                  color: 'var(--color-success)',
                  marginBottom: '0.5rem'
                }}>
                  ∞
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--color-text)',
                  fontWeight: '500'
                }}>
                  Learning
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ 
          borderTop: '2px solid var(--color-border)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div className="footer-copyright" style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.9rem'
          }}>
            <span>© {currentYear} Dhruv Sharma. Made with</span>
            <FiHeart style={{ 
              color: 'var(--color-secondary)',
              animation: 'pulse 1.5s infinite'
            }} />
            <span>and lots of ☕</span>
          </div>
          
          <div className="footer-actions" style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={scrollToTop}
              className="scroll-to-top"
              style={{ 
                background: 'var(--color-primary)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1rem'
              }}
            >
              <FiArrowUp />
            </button>
            
            {/* Easter Egg Button */}
            <button
              onClick={triggerEasterEgg}
              style={{ 
                background: 'transparent',
                border: 'none',
                color: 'var(--color-accent)',
                cursor: 'pointer',
                fontSize: '1.2rem',
                padding: '0.5rem',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
              title="Click for info"
            >
              🎮
            </button>
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="tech-stack" style={{ 
          textAlign: 'center',
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--color-border)'
        }}>
          <p style={{ 
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontStyle: 'italic'
          }}>
            Built with React, Tailwind CSS, and modern web technologies
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .footer-social-link:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          border-color: var(--color-primary);
        }
        
        .footer-links a:hover {
          color: #FFD700 !important;
          text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
        }
        
        .scroll-to-top:hover {
          transform: scale(1.1);
          background: var(--color-secondary) !important;
        }
        
        .stat-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default GameFooter
