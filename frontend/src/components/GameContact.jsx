import { useState } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiX, FiMessageCircle } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const GameContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Send Message',
      value: 'dhruv14122004@gmail.com',
      href: 'mailto:dhruv14122004@gmail.com',
      description: 'Email me anytime!'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'India',
      href: '#',
      description: 'Based in India'
    },
    {
      icon: FiMessageCircle,
      title: 'Response Time',
      value: '< 24 hours',
      href: '#',
      description: 'Quick to respond!'
    }
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      href: 'https://github.com/dhruv14122004',
      color: 'var(--color-text)',
      description: 'Code & Projects'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruv-sharma-142932252',
      color: 'var(--color-accent)',
      description: 'Professional Network'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      href: '#',
      color: 'var(--color-secondary)',
      description: 'Life & Adventures'
    }
  ]

  return (
    <section id="contact" className="contact-section" style={{ 
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
            Get In Touch
          </h2>
          <p style={{ 
            fontFamily: 'Inter',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            <em>Let's connect and discuss opportunities</em>
            <br />
            Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div className="contact-info animate-on-scroll">
            <div className="game-card" style={{ 
              padding: '2.5rem',
              height: 'fit-content'
            }}>
              <h3 style={{ 
                fontFamily: 'Raleway',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--color-primary)',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Contact Information
              </h3>
              
              <div className="contact-items" style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="contact-item"
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'var(--color-light)',
                      borderRadius: '15px',
                      border: '2px solid var(--color-border)',
                      transition: 'all 0.3s ease',
                      cursor: info.href !== '#' ? 'pointer' : 'default'
                    }}
                    onClick={() => {
                      if (info.href !== '#') {
                        if (info.href.startsWith('mailto:')) {
                          window.location.href = info.href
                        } else {
                          window.open(info.href, '_blank')
                        }
                      }
                    }}
                  >
                    <div className="contact-icon" style={{ 
                      width: '50px',
                      height: '50px',
                      background: 'var(--color-primary)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-white)',
                      fontSize: '1.2rem'
                    }}>
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <h4 style={{ 
                        fontFamily: 'Cabin',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--color-text)',
                        marginBottom: '0.2rem'
                      }}>
                        {info.title}
                      </h4>
                      <p style={{ 
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        marginBottom: '0.2rem'
                      }}>
                        {info.value}
                      </p>
                      <p style={{ 
                        fontSize: '0.9rem',
                        color: 'var(--color-accent)',
                        fontStyle: 'italic'
                      }}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h4 style={{ 
                  fontFamily: 'Cabin',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--color-text)',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  🌟 Connect With Me
                </h4>
                <div className="social-grid" style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem'
                }}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                        background: 'var(--color-white)',
                        borderRadius: '15px',
                        border: '2px solid var(--color-border)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <social.icon style={{ 
                        fontSize: '1.5rem',
                        color: social.color,
                        marginBottom: '0.5rem'
                      }} />
                      <span style={{ 
                        fontFamily: 'Cabin',
                        fontWeight: '600',
                        color: 'var(--color-text)',
                        fontSize: '0.9rem',
                        marginBottom: '0.2rem'
                      }}>
                        {social.name}
                      </span>
                      <span style={{ 
                        fontSize: '0.8rem',
                        color: 'var(--color-accent)',
                        textAlign: 'center'
                      }}>
                        {social.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form animate-on-scroll">
            <div className="game-form">
              <h3 style={{ 
                fontFamily: 'Raleway',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--color-primary)',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row" style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div className="form-group">
                    <label className="form-label">
                      👤 Player Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      📧 Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    🎯 Quest Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="What's this adventure about?"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    💬 Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell me about your project, idea, or just say hi!"
                    rows={6}
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`submit-status ${submitStatus}`} style={{ 
                    padding: '1rem',
                    borderRadius: '10px',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'Cabin',
                    fontWeight: '600',
                    ...(submitStatus === 'success' 
                      ? { 
                          background: 'rgba(129, 199, 132, 0.2)',
                          color: 'var(--color-success)',
                          border: '2px solid var(--color-success)'
                        }
                      : { 
                          background: 'rgba(255, 105, 97, 0.2)',
                          color: 'var(--color-secondary)',
                          border: '2px solid var(--color-secondary)'
                        })
                  }}>
                    {submitStatus === 'success' ? (
                      <>
                        <FiCheck />
                        <span>🎉 Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <FiX />
                        <span>❌ Failed to send message. Please try again or contact me directly.</span>
                      </>
                    )}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="game-btn game-btn-primary"
                  style={{ 
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    opacity: isSubmitting ? '0.7' : '1',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{ 
                        width: '20px',
                        height: '20px',
                        border: '2px solid var(--color-white)',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta animate-on-scroll" style={{ 
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <div className="game-card" style={{ 
            maxWidth: '700px',
            margin: '0 auto',
            padding: '2.5rem'
          }}>
            <h3 style={{ 
              fontFamily: 'Press Start 2P',
              fontSize: '1.2rem',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              🚀 Ready to Start an Epic Adventure?
            </h3>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--color-text)',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              I'm always excited to connect with fellow adventurers in the tech world!
            </p>
            <div className="cta-buttons" style={{ 
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="mailto:dhruv14122004@gmail.com"
                className="game-btn game-btn-primary"
              >
                <FiMail />
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-sharma-142932252"
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn game-btn-secondary"
              >
                <FiLinkedin />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-color: var(--color-primary);
        }
        
        .social-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          border-color: var(--color-primary);
        }
        
        .form-input:focus {
          transform: scale(1.02);
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          
          .form-row {
            grid-template-columns: 1fr !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  )
}

export default GameContact
