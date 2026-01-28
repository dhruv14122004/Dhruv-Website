import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiSpotify } from 'react-icons/si';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const SpotifySidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Ignore if user is typing in an input
            if (['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;

            if (event.key.toLowerCase() === 's' && !event.ctrlKey && !event.altKey && !event.metaKey && !event.shiftKey) {
                setIsOpen(prev => !prev);
            }

            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            {/* Desktop Sidebar (Left) */}
            <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 items-center">

                {/* Sliding Panel */}
                <motion.div
                    initial={{ x: '-101%' }}
                    animate={{ x: isOpen ? 0 : '-101%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="bg-retro-surface border-r-2 border-y-2 border-retro-text shadow-[4px_4px_0px_0px_var(--text-primary)] w-[320px] h-[400px] flex flex-col"
                >
                    <div className="window-header justify-between">
                        <span className="flex items-center gap-2 text-xs">
                            <SiSpotify className="text-[#1DB954]" />
                            SYSTEM_AUDIO.MP3
                        </span>
                        <button onClick={() => setIsOpen(false)} className="window-btn window-close">
                            <span className="close-icon"></span>
                        </button>
                    </div>

                    <div className="bg-black p-1 flex-1">
                        <iframe
                            src="https://open.spotify.com/embed/playlist/0ivSgL5syDu2yo0I5AZdzt?utm_source=generator&theme=0"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            style={{ borderRadius: 0 }}
                        ></iframe>
                    </div>

                    <div className="p-2 border-t border-retro-border text-center">
                        <p className="text-[10px] text-retro-text-secondary font-mono uppercase">
                            Press <span className="text-retro-accent">[ESC]</span> to close
                        </p>
                    </div>
                </motion.div>

                {/* Toggle Tab */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    animate={{ x: isOpen ? 0 : -2 }} // slight adjustment
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 bg-retro-bg border-2 border-retro-text border-l-0 px-3 py-4 shadow-[4px_4px_0px_0px_var(--text-primary)] hover:bg-retro-surface transition-colors"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    <SiSpotify className={`mb-2 text-xl ${isOpen ? 'text-[#1DB954]' : 'text-retro-text'}`} style={{ transform: 'none', writingMode: 'horizontal-tb' }} />
                    <div className="flex items-center gap-2 font-heading font-bold uppercase tracking-wider text-xs">
                        {isOpen ? 'CLOSE' : 'DISCOVER PLAYLIST'}
                        <span style={{ writingMode: 'horizontal-tb', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            <FiChevronRight />
                        </span>
                    </div>
                </motion.button>
            </div>
        </>
    );
};

export default SpotifySidebar;
