import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiPeerlist } from 'react-icons/si'

const FloatingSocialBubble = () => {
  return (
    <div 
      className="floating-social-bubble"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'transparent',
        border: 'none',
        padding: '1rem 0.5rem',
        zIndex: 1001, // Higher than header
        transition: 'all 0.3s ease',
        animation: 'fadeInSlideDown 1s ease-out'
      }}
    >
      <a 
        href="https://github.com/dhruv14122004" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'var(--color-white)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)'
          e.target.style.transform = 'translateY(-2px) scale(1.1)'
          e.target.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)'
          e.target.style.transform = 'translateY(0) scale(1)'
          e.target.style.boxShadow = 'none'
        }}
      >
        <FaGithub size={18} />
      </a>

      <a 
        href="https://www.linkedin.com/in/dhruv-sharma-142932252/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'var(--color-white)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(0, 119, 181, 0.3)'
          e.target.style.transform = 'translateY(-2px) scale(1.1)'
          e.target.style.boxShadow = '0 5px 15px rgba(0, 119, 181, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)'
          e.target.style.transform = 'translateY(0) scale(1)'
          e.target.style.boxShadow = 'none'
        }}
      >
        <FaLinkedin size={18} />
      </a>

      <a 
        href="https://peerlist.io/dhruvsharma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'var(--color-white)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(34, 197, 94, 0.3)'
          e.target.style.transform = 'translateY(-2px) scale(1.1)'
          e.target.style.boxShadow = '0 5px 15px rgba(34, 197, 94, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)'
          e.target.style.transform = 'translateY(0) scale(1)'
          e.target.style.boxShadow = 'none'
        }}
      >
        <SiPeerlist size={16} />
      </a>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .floating-social-bubble {
            top: 0.75rem !important;
            right: 0.75rem !important;
            padding: 0.75rem 0.5rem !important;
            gap: 0.6rem !important;
          }
          
          .floating-social-bubble .social-icon {
            width: 38px !important;
            height: 38px !important;
          }
        }
        
        @media (max-width: 480px) {
          .floating-social-bubble {
            top: 0.5rem !important;
            right: 0.5rem !important;
            padding: 0.6rem 0.4rem !important;
            gap: 0.5rem !important;
          }
          
          .floating-social-bubble .social-icon {
            width: 35px !important;
            height: 35px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingSocialBubble
