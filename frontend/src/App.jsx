import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import TreeTimeline from './components/TreeTimeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import GithubSection from './components/GithubSection'
import FloatingSocials from './components/FloatingSocials'
import Loader from './components/Loader'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Force dark mode for retro theme compatibility if needed, 
    // or rely on CSS !important overrides.
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen pb-10 relative">
        <Header />
        <div className="container">
          <Hero />
          <TreeTimeline />
          <Projects />
          <GithubSection />
          <Contact />
        </div>
        <Footer />
        <ScrollToTop />
        {!loading && <FloatingSocials />}
      </div>
    </>
  )
}

export default App
