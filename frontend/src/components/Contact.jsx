import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000)

    try {
      const response = await fetch('https://dhruv-website.onrender.com/api/send-email', {
        signal: controller.signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`
        }),
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        console.error('Server responded with error')
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'dhruv.sharma122004@gmail.com',
      href: 'mailto:dhruv.sharma122004@gmail.com',
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
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading uppercase text-retro-text section-title justify-center">Get In Touch</h2>
          <p className="text-lg text-retro-text-secondary max-w-3xl mx-auto font-mono">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-retro-accent mb-8 font-heading uppercase">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-retro-surface border-2 border-retro-border shadow-retro hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 group"
                >
                  <div className="p-3 bg-retro-bg border border-retro-border text-retro-accent">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-retro-text-secondary font-mono uppercase">{info.title}</h4>
                    <p className="text-lg font-semibold text-retro-text font-mono truncate max-w-[200px] md:max-w-full">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-retro-text mb-4 font-mono uppercase">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-retro-surface border-2 border-retro-border shadow-retro hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 text-retro-text hover:text-retro-accent`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-retro-surface p-8 border-2 border-retro-border shadow-retro"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-retro-text-secondary mb-2 font-mono uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-retro-bg border-2 border-retro-border text-retro-text focus:border-retro-accent outline-none font-mono"
                    placeholder="ENTER NAME"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-retro-text-secondary mb-2 font-mono uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-retro-bg border-2 border-retro-border text-retro-text focus:border-retro-accent outline-none font-mono"
                    placeholder="ENTER EMAIL"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-retro-text-secondary mb-2 font-mono uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-retro-bg border-2 border-retro-border text-retro-text focus:border-retro-accent outline-none font-mono"
                  placeholder="ENTER SUBJECT"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-retro-text-secondary mb-2 font-mono uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-retro-bg border-2 border-retro-border text-retro-text focus:border-retro-accent outline-none font-mono resize-none"
                  placeholder="ENTER MESSAGE..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-retro-accent text-retro-bg font-bold text-lg border-2 border-retro-text shadow-[4px_4px_0px_var(--text-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--text-primary)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-heading uppercase"
              >
                {isSubmitting ? (
                  'Transmitting...'
                ) : (
                  <>
                    Send Message
                    <FiSend />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-medium font-mono">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center font-medium font-mono">
                  {errorMessage || 'Message failed to send. Retry.'}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
