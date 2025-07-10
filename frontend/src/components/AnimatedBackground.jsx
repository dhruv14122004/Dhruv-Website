import React from 'react'

const AnimatedBackground = () => {
  // Generate random particles with different sizes, speeds, and colors
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
    shape: Math.random() > 0.5 ? 'circle' : 'square'
  }))

  return (
    <div className="animated-background">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
            borderRadius: particle.shape === 'circle' ? '50%' : '10%',
            background: particle.shape === 'circle' 
              ? 'linear-gradient(45deg, rgba(106, 17, 203, 0.3), rgba(37, 117, 252, 0.3))'
              : 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.3))',
            backdropFilter: 'blur(2px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 20px rgba(106, 17, 203, 0.2)'
          }}
        />
      ))}
      
      {/* Add some special RPG-style icons */}
      <div className="rpg-icons">
        <div className="rpg-icon sword" style={{ 
          left: '10%', 
          top: '20%',
          animationDelay: '0s'
        }}>⚔️</div>
        <div className="rpg-icon shield" style={{ 
          right: '15%', 
          top: '60%',
          animationDelay: '2s'
        }}>🛡️</div>
        <div className="rpg-icon potion" style={{ 
          left: '80%', 
          bottom: '30%',
          animationDelay: '4s'
        }}>⚗️</div>
        <div className="rpg-icon star" style={{ 
          right: '25%', 
          top: '15%',
          animationDelay: '1s'
        }}>⭐</div>
        <div className="rpg-icon gem" style={{ 
          left: '60%', 
          bottom: '70%',
          animationDelay: '3s'
        }}>💎</div>
        <div className="rpg-icon lightning" style={{ 
          right: '40%', 
          bottom: '20%',
          animationDelay: '2.5s'
        }}>⚡</div>
      </div>

      <style jsx>{`
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }

        .floating-particle {
          position: absolute;
          animation: floatAround infinite linear;
          transform-style: preserve-3d;
        }

        .rpg-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .rpg-icon {
          position: absolute;
          font-size: 2rem;
          animation: gentleFloat 8s ease-in-out infinite;
          opacity: 0.4;
          filter: drop-shadow(0 4px 8px rgba(106, 17, 203, 0.3));
        }

        @keyframes floatAround {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) rotate(3deg);
          }
        }

        .sword {
          animation: gentleFloat 6s ease-in-out infinite;
        }

        .shield {
          animation: gentleFloat 7s ease-in-out infinite;
        }

        .potion {
          animation: gentleFloat 5s ease-in-out infinite;
        }

        .star {
          animation: gentleFloat 8s ease-in-out infinite;
        }

        .gem {
          animation: gentleFloat 6.5s ease-in-out infinite;
        }

        .lightning {
          animation: gentleFloat 4.5s ease-in-out infinite;
        }

        /* Add pulsing effect to some particles */
        .floating-particle:nth-child(3n) {
          animation: floatAround infinite linear, pulse 3s ease-in-out infinite;
        }

        .floating-particle:nth-child(5n) {
          animation: floatAround infinite linear, pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .rpg-icon {
            font-size: 1.5rem;
          }
          
          .floating-particle {
            width: 15px !important;
            height: 15px !important;
          }
        }

        @media (max-width: 480px) {
          .rpg-icon {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBackground
