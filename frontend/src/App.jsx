import { useState, useEffect } from 'react'
import GameLoadingScreen from './components/GameLoadingScreen'
import GameHeader from './components/GameHeader'
import GameHero from './components/GameHero'
import GameAbout from './components/GameAbout'
import GameProjects from './components/GameProjects'
import GameContact from './components/GameContact'
import GameFooter from './components/GameFooter'
import AnimatedBackground from './components/AnimatedBackground'
import FloatingSocialBubble from './components/FloatingSocialBubble'
import AIAgent from './components/AIAgent'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Loading screen timer
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  if (isLoading) {
    return <GameLoadingScreen />
  }

  return (
    <div className="game-app">
      <AnimatedBackground />
      <FloatingSocialBubble />
      <AIAgent />
      <GameHeader />
      <main>
        <GameHero />
        <GameAbout />
        <GameProjects />
        <GameContact />
      </main>
      <GameFooter />
    </div>
  )
}

export default App
