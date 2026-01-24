import { motion } from 'framer-motion';
import { FiZoomIn, FiZoomOut, FiDownload, FiX } from 'react-icons/fi';

const ResumeToolbar = ({ zoom, onZoomIn, onZoomOut, onDownload, onClose, filename = 'Resume' }) => {
  const IconButton = ({ onClick, children, danger = false }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`p-2.5 transition-colors duration-150 border-2 border-retro-border bg-retro-bg text-retro-text hover:bg-retro-accent hover:text-retro-bg hover:border-retro-bg mr-2`}
    >
      {children}
    </motion.button>
  );

  return (
    <div className="flex items-center justify-between px-4 sm:px-5 py-3
      bg-retro-surface border-b-2 border-retro-border">

      {/* Filename */}
      <h3 className="text-sm font-medium text-retro-text truncate font-mono uppercase">
        {filename}
      </h3>

      {/* Controls */}
      <div className="flex items-center gap-1">
        {/* Zoom Controls */}
        <div className="flex items-center gap-1">
          <IconButton onClick={onZoomOut}>
            <FiZoomOut size={18} />
          </IconButton>

          <span className="w-14 text-center text-xs font-medium text-retro-text tabular-nums font-mono">
            {Math.round(zoom * 100)}%
          </span>

          <IconButton onClick={onZoomIn}>
            <FiZoomIn size={18} />
          </IconButton>
        </div>

        {/* Download */}
        <IconButton onClick={onDownload}>
          <FiDownload size={18} />
        </IconButton>

        {/* Divider */}
        <div className="w-px h-5 bg-retro-border mx-2" />

        {/* Close */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="p-2.5 bg-retro-bg border-2 border-retro-border text-retro-text hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-150"
        >
          <FiX size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default ResumeToolbar;
