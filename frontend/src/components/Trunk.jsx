import { motion } from 'framer-motion';

const Trunk = ({ height }) => {
  return (
    <div className="absolute left-8 -translate-x-1/2 top-0 bottom-0 flex flex-col items-center">
      {/* Main trunk line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ originY: 0, height }}
        className="w-0.5 bg-retro-border"
      />

      {/* Top cap */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute top-0 w-2 h-2 bg-retro-text"
      />

      {/* Bottom root detail */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="absolute bottom-0 w-3 h-3 bg-retro-text"
      />
    </div>
  );
};

export default Trunk;
