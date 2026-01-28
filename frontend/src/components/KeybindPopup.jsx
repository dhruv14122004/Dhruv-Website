import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCommand, FiX } from 'react-icons/fi';

const KeybindPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        // Show after loader delay (simulated)
        const timer = setTimeout(() => {
            const hasSeen = localStorage.getItem('hasSeenKeybinds');
            if (!hasSeen) {
                setIsVisible(true);
            }
            setHasLoaded(true);
        }, 3000); // Wait for initial loader

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenKeybinds', 'true');
    };

    const shortcuts = [
        { keys: ['R'], desc: 'Toggle Resume' },
        { keys: ['P'], desc: 'Projects' },
        { keys: ['C'], desc: 'Contact' },
        { keys: ['G'], desc: 'Open Source' },
        { keys: ['H'], desc: 'Home' },
        { keys: ['B'], desc: 'View Blog' },
        { keys: ['S'], desc: 'Playlist' },
        { keys: ['⇧', '1-5'], desc: 'Social Links' },
    ];

    if (!hasLoaded) return null;

    return (
        <>
            <AnimatePresence mode="wait">
                {isVisible ? (
                    <motion.div
                        key="popup"
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-24 right-4 md:right-8 z-50 max-w-xs w-full"
                    >
                        <div className="bg-retro-bg/95 backdrop-blur-md border border-retro-accent shadow-[4px_4px_0px_0px_rgba(var(--accent-retro-rgb),0.5)] p-4 rounded-sm relative overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3 border-b border-retro-border pb-2">
                                <div className="flex items-center gap-2 text-retro-accent">
                                    <FiCommand />
                                    <span className="font-heading uppercase text-xs tracking-wider font-bold">System Controls</span>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="text-retro-text-secondary hover:text-retro-accent transition-colors"
                                >
                                    <FiX size={16} />
                                </button>
                            </div>

                            {/* Shortcuts Grid */}
                            <div className="grid grid-cols-1 gap-y-2">
                                {shortcuts.map((shortcut, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-xs font-mono group">
                                        <span className="text-retro-text-secondary group-hover:text-retro-text transition-colors">
                                            {shortcut.desc}
                                        </span>
                                        <div className="flex gap-1">
                                            {shortcut.keys.map((k, i) => (
                                                <span
                                                    key={i}
                                                    className="px-1.5 py-0.5 bg-retro-surface border border-retro-border text-retro-text rounded text-[10px] min-w-[20px] text-center font-bold"
                                                >
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Blinking Indicator */}
                            <div className="w-2 h-2 bg-retro-accent absolute top-2 right-2 rounded-full animate-pulse opacity-20"></div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        key="trigger"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsVisible(true)}
                        className="fixed top-24 right-4 md:right-8 z-40 bg-retro-surface border border-retro-border p-2 shadow-retro text-retro-accent hover:bg-retro-bg hover:text-retro-accent hover:border-retro-accent transition-all duration-300 rounded-sm group"
                        aria-label="Show Keybinds"
                        title="Show Keyboard Shortcuts"
                    >
                        <FiCommand size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default KeybindPopup;
