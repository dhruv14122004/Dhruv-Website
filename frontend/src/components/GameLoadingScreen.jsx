import { useState, useEffect } from 'react'

const GameLoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Loading Portfolio...",
    "Initializing Experience...",
    "Preparing Content...",
    "Loading Projects & Skills...",
    "Setting Up Interface...",
    "Almost Ready...",
    "Finalizing Details...",
    "Welcome! Loading Complete..."
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.5
      })
    }, 50)

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length)
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="loading-screen" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'var(--gradient-hero)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: progress >= 100 ? 'slideUp 0.8s ease-out forwards' : 'none'
    }}>
      <div className="loading-content" style={{
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px',
        padding: '2rem'
      }}>
        <h1 className="loading-text" style={{
          fontFamily: 'Raleway',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '600',
          marginBottom: '3rem',
          opacity: '0.9',
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          {loadingTexts[currentText]}
        </h1>
        
        <div className="loading-bar" style={{
          width: '100%',
          height: '8px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          overflow: 'hidden',
          marginBottom: '1.5rem'
        }}>
          <div 
            className="loading-progress" 
            style={{ 
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,1))',
              borderRadius: '50px',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
        
        <div className="loading-percentage" style={{
          fontFamily: 'Press Start 2P',
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2rem'
        }}>
          {progress}%
        </div>
        
        <div className="loading-icons" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="loading-icon" style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            animation: 'bounce 1s infinite'
          }}></div>
          <div className="loading-icon" style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#7F7FD5',
            borderRadius: '50%',
            animation: 'bounce 1s infinite 0.2s'
          }}></div>
          <div className="loading-icon" style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#2575FC',
            borderRadius: '50%',
            animation: 'bounce 1s infinite 0.4s'
          }}></div>
        </div>
        
        <div className="loading-subtitle" style={{ 
          fontFamily: 'Inter', 
          fontSize: '1rem', 
          color: 'rgba(255, 255, 255, 0.7)', 
          marginTop: '2rem',
          fontStyle: 'italic'
        }}>
          Welcome to Dhruv's Portfolio
        </div>
      </div>
    </div>
  )
}

export default GameLoadingScreen
