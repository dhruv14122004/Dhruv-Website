import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import heroImage from '../assets/me.jpeg';
import resumePDF from '../assets/Dhruv_Sharma_Resume.pdf';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center space-y-8 max-w-4xl"
      >
        {/* Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
          <img
            src={heroImage}
            alt="Dhruv Sharma"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
          />
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-sm md:text-base font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dhruv Sharma
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Crafting digital experiences with code and creativity.
            <br />
            <span className="text-gray-400 dark:text-gray-500">Full Stack Developer & UI/UX Enthusiast.</span>
          </p>
        </div>
        
        <motion.div 
          className="pt-4 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a 
            href="#projects"
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10"
          >
            View My Work
          </a>
          
          <button 
            onClick={() => setShowResume(true)}
            className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/5 flex items-center justify-center gap-2"
          >
            <FiEye /> View Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Premium Resume Modal */}
      <ResumeModal
        isOpen={showResume}
        onClose={() => setShowResume(false)}
        file={resumePDF}
        filename="Dhruv Sharma - Resume"
      />
    </section>
  );
};

export default Hero;
