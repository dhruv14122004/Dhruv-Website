import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import sports from '../assets/sport.png'
import event from '../assets/event.png'
import forrestfire from '../assets/forrestfir.jpeg'
import hotel from '../assets/hotel.png'
import cvip_img from '../assets/cvip_image.png'
import dtix from '../assets/dih_tix.png'
import accident from '../assets/accident.jpeg'
import expensemanger from '../assets/expensemanager.jpeg'
import escape from '../assets/escape.png'

const projects = [
  {
    id: 1,
    title: 'Multi-Class Abnormality Classification',
    description: 'Participated in the Capsule Vision 2024 Challenge, where we developed a multi-class abnormality classification model for endoscopy images using Vision Transformers and ResNet. Achieved 7th place out of numerous teams. Gained hands-on experience in biomedical image analysis and machine learning techniques.',
    img: cvip_img
  },
  {
    id: 2,
    title: 'DTIX – Decentralized Ticketing App',
    description: 'Created a blockchain-based ticketing platform using Vite + React that allows users to buy, resell, and auction event tickets as NFTs. The app ensures ticket authenticity, prevents fraud, and enables secure peer-to-peer transfers. Placed 4th at HackJKLU v4.0 and 6th at Code Hive, IIT Delhi.',
    img: dtix
  },
  {
    id: 3,
    title: 'Accident Detection System',
    description: 'Built an accident detection system using Jetson Nano and a camera. It used a trained AI model to spot accidents in live video and lit up indicator lights when one was detected. This project focused on using real-time video and AI to improve safety through quick alerts.',
    img: accident
  },
  {
    id: 4,
    title: 'Expense Planner',
    description: 'Created a simple and user-friendly expense planner app using Flutter. It helps users track their spending, manage budgets, and view their expenses in a clean, organized way.',
    img: expensemanger
  },
  {
    id: 5,
    title: 'Escape the Maze',
    description: 'Developed an open-world game inspired by the Maze Runner movie using Unreal Engine. The game features dynamic environments and immersive gameplay where players navigate through challenges and escape an ever-changing maze.',
    img: escape
  },
  {
    id: 6,
    title: 'Event Management System',
    description: 'The system allows clubs to input event and workshop details, streamlining resource allocation for smoother event planning. Automation ensures efficient resource utilization, benefiting both organizers and participants. Collaboration between clubs is enhanced, optimizing resource allocation for better efficiency.',
    img: event
  },
  {
    id: 7,
    title: 'Hotel Management System',
    description: 'The system integrates both a standard calculator and  a price calculator, boosting its functionality. It also features a dynamic billing system, automating price calculations and ensuring precise invoicing for enhanced efficiency.',
    img: hotel
  },
  {
    id: 8,
    title: 'Forest Fire Detector',
    description: 'Developed a comprehensive forest fire detection system using Arduino, aimed at early identification and prevention of potential wildfires. The project involved the integration of varioussensors and communication modules to ensure real-time monitoring and timely response.',
    img: forrestfire
  }
];

function truncateText(text, maxLines = 2) {
  const lines = text.split(/\r?\n|(?<=\.) /g);
  if (lines.length <= maxLines) return text;
  return lines.slice(0, maxLines).join(' ') + ' ...';
}

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  if (projects.length === 0) {
    return (
      <section id="Projects" className="card w-full max-w-6xl min-h-[600px] mx-auto mt-10 text-center">
        <h2 className="text-3xl mb-4 text-yellow-400">Projects</h2>
        <div className="flex flex-col items-center justify-center h-[600px] min-w-[350px] mx-auto">
          <p className="text-2xl text-gray-400">No projects to display at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="Projects" className="card w-full max-w-7xl min-h-[950px] mx-auto mt-10 text-center px-2 sm:px-4 md:px-8">
      <h2 className="text-3xl sm:text-4xl mb-6 sm:mb-8 text-yellow-400">Projects</h2>
      <div className="flex flex-col items-center justify-center h-[600px] sm:h-[850px] min-w-[0] w-full relative">
        {/* Dots and arrows in a row at the top right */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-4 sm:mb-6 mt-2 px-2 sm:px-4 gap-2 sm:gap-0">
          <div className="flex gap-2 mb-2 sm:mb-0">
            {projects.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${idx === current ? "bg-yellow-400" : "bg-gray-600"}`}
              ></span>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2">
            <button
              aria-label="Previous project"
              onClick={prevSlide}
              className="bg-purple-600 hover:bg-pink-500 text-white font-bold rounded-md p-2 sm:p-3 shadow-lg transition-colors border-2 border-purple-600 hover:border-pink-500"
              style={{ height: '32px', width: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}
            >
              &#8592;
            </button>
            <button
              aria-label="Next project"
              onClick={nextSlide}
              className="bg-purple-600 hover:bg-pink-500 text-white font-bold rounded-md p-2 sm:p-3 shadow-lg transition-colors border-2 border-purple-600 hover:border-pink-500"
              style={{ height: '32px', width: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full min-w-0">
          <motion.img
            key={projects[current].img}
            src={projects[current].img}
            alt={projects[current].title}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-60 sm:h-80 md:h-[28rem] object-contain mb-4 sm:mb-6 mx-auto rounded-xl bg-gray-900"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: 'spring' }}
          />
          <motion.h3
            key={projects[current].title}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {projects[current].title}
          </motion.h3>
          <motion.p
            key={projects[current].description}
            className="text-base sm:text-lg md:text-2xl text-gray-300 mb-2 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {truncateText(projects[current].description, 2)}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
