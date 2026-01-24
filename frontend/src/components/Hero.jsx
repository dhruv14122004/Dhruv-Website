import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiSupabase, SiPython, SiMongodb, SiGit, SiFlutter, SiFirebase, SiUnrealengine, SiFigma, SiC, SiCplusplus, SiJavascript, SiNodedotjs, SiDocker, SiExpress, SiLinux, SiReact, SiBlender } from 'react-icons/si';
import heroImage from '../assets/me.jpeg';
import resumePDF from '../assets/Dhruv_Sharma_Resume.pdf';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const skills = [
    { name: 'JAVASCRIPT', icon: SiJavascript, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'NODE.JS', icon: SiNodedotjs, url: 'https://nodejs.org' },
    { name: 'EXPRESS', icon: SiExpress, url: 'https://expressjs.com' },
    { name: 'MONGODB', icon: SiMongodb, url: 'https://www.mongodb.com' },
    { name: 'GIT', icon: SiGit, url: 'https://git-scm.com' },
    { name: 'LINUX', icon: SiLinux, url: 'https://www.linux.org' },
    { name: 'FLUTTER', icon: SiFlutter, url: 'https://flutter.dev' },
    { name: 'DOCKER', icon: SiDocker, url: 'https://www.docker.com' },
    { name: 'SUPABASE', icon: SiSupabase, url: 'https://supabase.com' },
    { name: 'C++', icon: SiCplusplus, url: 'https://isocpp.org' },
    { name: 'UNREAL', icon: SiUnrealengine, url: 'https://www.unrealengine.com' },
    { name: 'BLENDER', icon: SiBlender, url: 'https://www.blender.org' },
    { name: 'FIGMA', icon: SiFigma, url: 'https://www.figma.com' },
    { name: 'PYTHON', icon: SiPython, url: 'https://www.python.org' },
  ];

  return (
    <section id="hero" className="hero relative">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ color: "var(--accent-retro)", marginBottom: "10px" }} className="font-mono">
          {"{ HOT RELOADING... }"}
        </p>
        <h1 className="leading-tight">
          BACKEND <br />
          <span className="text-retro-accent">DEVELOPER</span>
          & SYSTEM <br />
          <span className="text-retro-accent">DESIGNER</span>
        </h1>
        <p className="font-mono text-sm md:text-base max-w-lg mt-6 text-retro-text-secondary">
          Creating solutions for real-time problems.
        </p>

        <div className="flex flex-wrap gap-3 my-8 max-w-lg">
          {skills.map((skill, index) => (
            <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold font-mono text-retro-text hover:text-retro-accent uppercase bg-retro-surface px-2 py-1 border border-retro-border hover:-translate-y-1 transition-transform">
              <skill.icon className="w-3 h-3 text-retro-accent" />
              {skill.name}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-20 md:mb-0">
          <a href="#projects" className="btn-retro uppercase text-sm tracking-wider">
            EXPLORE PROJECTS
          </a>
          <button
            onClick={() => setShowResume(true)}
            className="btn-retro uppercase text-sm tracking-wider"
          >
            RESUME
          </button>
        </div>
      </motion.div>

      <motion.div
        className="window-frame relative hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="window-header">
          <span>PORTRAIT_01.JPG</span>
          <div className="window-controls">
            <button className="window-btn" aria-label="Minimize">
              <span className="minimize-icon"></span>
            </button>
            <button className="window-btn" aria-label="Maximize">
              <span className="maximize-icon"></span>
            </button>
            <button className="window-btn window-close" aria-label="Close">
              <span className="close-icon"></span>
            </button>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Dhruv Sharma"
          className="hero-image"
          style={{ height: '400px', objectFit: 'cover' }}
        />
      </motion.div>




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
