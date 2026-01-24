import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiX } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';

const FloatingSocials = () => {
    const socials = [
        {
            icon: FiGithub,
            name: 'GitHub',
            href: 'https://github.com/dhruv14122004',
            bgClass: 'hover:bg-gray-800'
        },
        {
            icon: FiLinkedin,
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dhruvsharmaa14/',
            bgClass: 'hover:bg-blue-600'
        },
        {
            icon: FaInstagram,
            name: 'Instagram',
            href: 'https://instagram.com/dhruv14122004',
            bgClass: 'hover:bg-pink-600'
        },
        {
            icon: FiX,
            name: 'X',
            href: 'https://x.com/dhruvshxrmaa',
            bgClass: 'hover:bg-black'
        },
        {
            icon: SiPeerlist,
            name: 'Peerlist',
            href: 'https://peerlist.io/dhruvsharma',
            bgClass: 'hover:bg-green-600'
        }
    ];

    return (
        <>
            {/* Desktop Floating Bar (Left Side) */}
            <div className="hidden lg:flex fixed left-8 bottom-8 z-40 flex-col items-center gap-6">
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className={`
              p-3 bg-retro-bg border-2 border-retro-border text-retro-text 
              hover:-translate-y-1 hover:text-white hover:border-transparent transition-all duration-300
              ${social.bgClass}
            `}
                        aria-label={social.name}
                    >
                        <social.icon size={20} />
                    </motion.a>
                ))}
            </div>

            {/* Mobile/Tablet Bottom Bar */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between items-center bg-retro-bg/90 backdrop-blur-md p-2 rounded-xl border-2 border-retro-border shadow-retro"
                >
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                p-3 rounded-lg text-retro-text hover:text-white transition-colors
                active:scale-95
                ${social.bgClass}
                `}
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default FloatingSocials;
