import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      href: 'https://github.com/dhruv14122004',
      color: 'hover:text-gray-900'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/dhruv-sharma',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      href: 'https://instagram.com/dhruv14122004',
      color: 'hover:text-pink-600'
    },
    {
      icon: FiMail,
      name: 'Email',
      href: 'mailto:dhruv14122004@gmail.com',
      color: 'hover:text-green-600'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dhruv Sharma</h3>
            <p className="text-gray-400 mb-4">
              Mobile App and Game Developer specializing in Flutter development, AI/ML applications, 
              and immersive game experiences. Currently pursuing Computer Science at JK Lakshmipat University.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 dhruv.sharma122004@gmail.com</p>
              <p>📍 Jaipur, Rajasthan, India</p>
              <p>🎓 CS Student at JK Lakshmipat University</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dhruv Sharma. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer