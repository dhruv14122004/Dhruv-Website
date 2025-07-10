import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const GameHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Removed scroll-based logic to keep the header translucent throughout
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`game-nav`}>
      <div className="nav-container">
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default GameHeader
