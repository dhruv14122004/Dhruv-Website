import { motion } from 'framer-motion';
import { FiZoomIn, FiZoomOut, FiDownload, FiX } from 'react-icons/fi';

const ResumeToolbar = ({ zoom, onZoomIn, onZoomOut, onDownload, onClose, filename = 'Resume' }) => {
  const IconButton = ({ onClick, children, danger = false }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`p-2.5 rounded-lg transition-colors duration-150
        ${danger 
          ? 'hover:bg-red-500/10 text-gray-500 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400' 
          : 'hover:bg-gray-100/70 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10'
        }`}
    >
      {children}
    </motion.button>
  );

  return (
    <div className="flex items-center justify-between px-4 sm:px-5 py-3
      bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200/60 dark:border-gray-800">
      
      {/* Filename */}
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
        {filename}
      </h3>

      {/* Controls */}
      <div className="flex items-center gap-1">
        {/* Zoom Controls */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100/60 dark:bg-white/5 mr-2">
          <IconButton onClick={onZoomOut}>
            <FiZoomOut size={18} />
          </IconButton>
          
          <span className="w-14 text-center text-xs font-medium text-gray-600 dark:text-gray-300 tabular-nums">
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
        <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-2" />

        {/* Close */}
        <IconButton onClick={onClose} danger>
          <FiX size={20} />
        </IconButton>
      </div>
    </div>
  );
};

export default ResumeToolbar;
