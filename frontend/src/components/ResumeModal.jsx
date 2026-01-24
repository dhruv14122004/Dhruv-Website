import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeToolbar from './ResumeToolbar';
import ResumeViewer from './ResumeViewer';

const ResumeModal = ({ isOpen, onClose, file, filename = 'Resume' }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(2.5, Number((z + 0.15).toFixed(2))));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(0.5, Number((z - 0.15).toFixed(2))));
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${filename}.pdf`;
    link.click();
  }, [file, filename]);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  // Reset zoom when modal opens
  const handleAnimationStart = useCallback(() => {
    if (isOpen) setZoom(1);
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onAnimationStart={handleAnimationStart}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.3
            }}
            className="relative w-full max-w-5xl h-[90vh] max-h-[900px]
              flex flex-col overflow-hidden
              bg-retro-surface
              border-2 border-retro-border
              shadow-retro"
          >
            {/* Toolbar */}
            <ResumeToolbar
              zoom={zoom}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onDownload={handleDownload}
              onClose={onClose}
              filename={filename}
            />

            {/* PDF Viewer */}
            <ResumeViewer file={file} zoom={zoom} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ResumeModal;
