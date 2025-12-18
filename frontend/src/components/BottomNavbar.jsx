import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { 
  IconHome, 
  IconCpu, 
  IconBriefcase, 
  IconGridDots, 
  IconMail, 
  IconLink,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { SiPeerlist } from 'react-icons/si';

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Icon Container with magnification effect
const IconContainer = ({ mouseX, title, icon, href, onClick, isButton, isActive }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 35, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 35, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const Component = isButton ? 'button' : 'a';
  const props = isButton 
    ? { onClick, type: 'button' } 
    : { href, ...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) };

  return (
    <Component {...props}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors",
          "bg-gray-100/80 dark:bg-neutral-800/80",
          isActive && "bg-black/10 dark:bg-white/20"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-gray-600 dark:text-gray-300"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Component>
  );
};

// Mobile Icon (no magnification)
const MobileIcon = ({ title, icon, href, onClick, isButton, isActive }) => {
  const Component = isButton ? 'button' : 'a';
  const props = isButton 
    ? { onClick, type: 'button' } 
    : { href, ...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) };

  return (
    <Component {...props} className="relative group">
      <div className={cn(
        "h-10 w-10 flex items-center justify-center rounded-full transition-colors",
        "bg-gray-100/80 dark:bg-neutral-800/80",
        isActive && "bg-black/10 dark:bg-white/20"
      )}>
        <div className="h-5 w-5 text-gray-600 dark:text-gray-300">
          {icon}
        </div>
      </div>
    </Component>
  );
};

const BottomNavbar = ({ darkMode, setDarkMode }) => {
  const [showSocialBar, setShowSocialBar] = useState(false);
  const menuRef = useRef(null);
  const mouseX = useMotionValue(Infinity);

  const navItems = [
    { icon: <IconHome className="h-full w-full" />, title: 'Home', href: '#hero' },
    { icon: <IconCpu className="h-full w-full" />, title: 'Skills', href: '#skills' },
    { icon: <IconBriefcase className="h-full w-full" />, title: 'Experience', href: '#experience' },
    { icon: <IconGridDots className="h-full w-full" />, title: 'Projects', href: '#projects' },
    { icon: <IconMail className="h-full w-full" />, title: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <IconBrandGithub className="h-full w-full" />, title: 'GitHub', href: 'https://github.com/dhruv14122004' },
    { icon: <IconBrandX className="h-full w-full" />, title: 'X', href: 'https://x.com/dhruvshxrmaa' },
    { icon: <SiPeerlist className="h-full w-full" />, title: 'Peerlist', href: 'https://peerlist.io/dhruvsharma' },
    { icon: <IconBrandLinkedin className="h-full w-full" />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruvsharmaa14' },
  ];

  // Close bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowSocialBar(false);
      }
    };

    if (showSocialBar) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showSocialBar]);

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3" ref={menuRef}>
      {/* Social Links Bar - Appears above main navbar (Desktop) */}
      <AnimatePresence>
        {showSocialBar && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="hidden md:flex items-end gap-3 px-4 pb-3 pt-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg shadow-black/5"
          >
            {socialLinks.map((item) => (
              <IconContainer
                key={item.title}
                mouseX={mouseX}
                {...item}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links Bar - Mobile */}
      <AnimatePresence>
        {showSocialBar && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex md:hidden items-center gap-1 px-2 py-2 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-lg shadow-black/5"
          >
            {socialLinks.map((item) => (
              <MobileIcon key={item.title} {...item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar - Desktop with magnification */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="hidden md:flex items-end gap-3 px-4 pb-3 pt-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg shadow-black/5"
      >
        {/* Navigation Items */}
        {navItems.map((item) => (
          <IconContainer
            key={item.title}
            mouseX={mouseX}
            {...item}
          />
        ))}

        {/* Divider */}
        <div className="w-px h-10 bg-gray-300 dark:bg-gray-700 mx-1 self-center" />

        {/* Dark Mode Toggle */}
        <IconContainer
          mouseX={mouseX}
          title={darkMode ? 'Light Mode' : 'Dark Mode'}
          icon={darkMode ? <FiSun className="h-full w-full" /> : <FiMoon className="h-full w-full" />}
          onClick={() => setDarkMode(!darkMode)}
          isButton
        />

        {/* Divider */}
        <div className="w-px h-10 bg-gray-300 dark:bg-gray-700 mx-1 self-center" />

        {/* Social Links Toggle */}
        <IconContainer
          mouseX={mouseX}
          title="Social Links"
          icon={<IconLink className="h-full w-full" />}
          onClick={() => setShowSocialBar(!showSocialBar)}
          isButton
          isActive={showSocialBar}
        />
      </motion.nav>

      {/* Main Navigation Bar - Mobile (no magnification) */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex md:hidden items-center gap-1 px-2 py-2 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-lg shadow-black/5"
      >
        {/* Navigation Items */}
        {navItems.map((item) => (
          <MobileIcon key={item.title} {...item} />
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />

        {/* Dark Mode Toggle */}
        <MobileIcon
          title={darkMode ? 'Light Mode' : 'Dark Mode'}
          icon={darkMode ? <FiSun className="h-full w-full" /> : <FiMoon className="h-full w-full" />}
          onClick={() => setDarkMode(!darkMode)}
          isButton
        />

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />

        {/* Social Links Toggle */}
        <MobileIcon
          title="Social Links"
          icon={<IconLink className="h-full w-full" />}
          onClick={() => setShowSocialBar(!showSocialBar)}
          isButton
          isActive={showSocialBar}
        />
      </motion.nav>
    </div>
  );
};

export default BottomNavbar;
