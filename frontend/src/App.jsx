import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import TreeTimeline from './components/TreeTimeline'
import BentoProjects from './components/BentoProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BottomNavbar from './components/BottomNavbar'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 font-main pb-28 md:pb-32">
      <Hero />
      <Skills />
      <TreeTimeline />
      <BentoProjects />
      <Contact />
      <Footer />
      <BottomNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
