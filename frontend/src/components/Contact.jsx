import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiX, FiLink, FiSend } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { SiPeerlist } from 'react-icons/si'

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'dhruv.sharma122004@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dhruv.sharma122004@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: '#',
      description: 'Currently based in Jaipur'
    }
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      href: 'https://github.com/dhruv14122004',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruvsharmaa14/',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      href: 'https://instagram.com/dhruv14122004',
      color: 'hover:text-pink-600'
    },
    {
      icon: FiX,
      name: 'X',
      href: 'https://x.com/dhruvshxrmaa',
      color: 'hover:text-red-600'
    },
    {
      icon: SiPeerlist,
      name: 'Peerlist',
      href: 'https://peerlist.io/dhruvsharma',
      color: 'hover:text-green-500'
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading uppercase text-retro-text section-title justify-center">Get In Touch</h2>
          <p className="text-lg text-retro-text-secondary max-w-2xl mx-auto font-mono">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? "_blank" : undefined}
                rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-4 p-6 bg-retro-surface border-2 border-retro-border shadow-retro hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 group text-center"
              >
                <div className="p-4 bg-retro-bg border border-retro-border text-retro-accent rounded-full">
                  <info.icon size={32} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-retro-text-secondary font-mono uppercase mb-1">{info.title}</h4>
                  <p className="text-lg font-semibold text-retro-text font-mono">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* <div className="flex flex-col items-center gap-6">
            <h4 className="text-xl font-bold text-retro-text font-heading uppercase">Follow Me</h4>
            <div className="flex flex-wrap gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-retro-surface border-2 border-retro-border shadow-retro hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 text-retro-text hover:text-retro-accent`}
                  aria-label={social.name}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
