import { useState, useEffect } from 'react'
import heroImage from '../assets/me.jpeg'
import resumePDF from '../assets/Dhruv_Sharma_Resume.pdf'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  const subtitles = [
    "Mobile App Developer",
    "Flutter & Dart Specialist",
    "Game Developer",
    "AI/ML Enthusiast",
    "UI/UX Designer"
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
        
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (index > 0) {
              setDisplayText(currentText.slice(0, index - 1))
              index--
            } else {
              clearInterval(deleteInterval)
              setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentSubtitle])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'Dhruv_Sharma_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg text-gray-400 mb-2">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Dhruv Sharma
              </h1>
              <div className="h-8 mb-6">
                <p className="text-xl lg:text-2xl text-blue-400 font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Mobile app and game developer specializing in Flutter development, 
              AI/ML applications, and creating immersive game experiences with modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <button 
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200"
              >
                Download Resume
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="Dhruv Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10 opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero