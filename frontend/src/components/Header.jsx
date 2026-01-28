import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [timeStr, setTimeStr] = useState('');
    const [cpuUsage, setCpuUsage] = useState(12);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const time = now.getHours().toString().padStart(2, "0") +
                ":" +
                now.getMinutes().toString().padStart(2, "0") +
                ":" +
                now.getSeconds().toString().padStart(2, "0");
            setTimeStr(time);
            setCpuUsage(Math.floor(Math.random() * 20) + 5);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-retro-bg/95 border-b border-retro-border backdrop-blur-sm">
            {/* Logo Section */}
            <div className="flex-shrink-0 w-1/4">
                <div className="logo text-xl font-heading font-extrabold uppercase tracking-tighter text-retro-text">
                    DHRUV.DEV
                </div>
            </div>

            {/* Navigation Section - Centered (Desktop) */}
            <nav className="hidden md:flex flex-1 justify-center">
                <div className="nav-links flex gap-8 items-center">
                    <a href="#projects" className="text-xs font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider">PROJECTS</a>
                    <a href="#experience" className="text-xs font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider">EXPERIENCE</a>
                    <a href="#contact" className="text-xs font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider">CONTACT</a>
                    <a
                        href="https://blog-verse-iota.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-retro-accent text-retro-bg font-bold font-mono text-xs hover:bg-white hover:text-retro-accent transition-colors uppercase tracking-wider"
                    >
                        BLOGS
                        <FiArrowUpRight size={14} />
                    </a>
                </div>
            </nav>

            {/* System Status Section - Right Aligned (Desktop) */}
            <div className="hidden md:flex flex-shrink-0 w-1/4 justify-end items-center gap-6">
                <div className="system-status text-[10px] md:text-xs font-mono text-retro-accent tracking-wider">
                    TIME: {timeStr} | CPU: {cpuUsage}%
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0 w-1/4 flex justify-end items-center gap-4">
                <button onClick={toggleMenu} className="text-retro-text hover:text-retro-accent focus:outline-none p-2 border border-transparent active:border-retro-accent">
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-retro-bg border-b-2 border-retro-border flex flex-col shadow-retro"
                    >
                        <nav className="flex flex-col p-6 gap-6 items-center">
                            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider w-full text-center py-2 hover:bg-retro-surface border border-transparent hover:border-retro-border">PROJECTS</a>
                            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider w-full text-center py-2 hover:bg-retro-surface border border-transparent hover:border-retro-border">EXPERIENCE</a>
                            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider w-full text-center py-2 hover:bg-retro-surface border border-transparent hover:border-retro-border">SKILLS</a>
                            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold font-mono text-retro-text hover:text-retro-accent transition-colors uppercase tracking-wider w-full text-center py-2 hover:bg-retro-surface border border-transparent hover:border-retro-border">CONTACT</a>
                        </nav>

                        <div className="p-4 border-t border-retro-border bg-retro-surface flex justify-center">
                            <div className="system-status text-[10px] font-mono text-retro-accent tracking-wider">
                                TIME: {timeStr} | CPU: {cpuUsage}%
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
