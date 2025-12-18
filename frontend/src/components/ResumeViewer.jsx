import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Use CDN for worker to avoid Vite bundling issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeViewer = ({ file, zoom }) => {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const w = el.clientWidth;
      setContainerWidth(Math.max(280, w));
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pageWidth = Math.floor((containerWidth - 80) * zoom);

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto overflow-x-hidden resume-scrollbar bg-transparent"
    >
      <div className="flex flex-col items-center py-6 px-4 min-h-full">
        <Document
          file={file}
          onLoadSuccess={onLoadSuccess}
          loading={
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                <span className="text-sm text-gray-400">Loading PDF...</span>
              </div>
            </div>
          }
          error={
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <p className="text-red-400">Failed to load PDF</p>
                <p className="text-gray-500 text-sm mt-2">Please try again later</p>
              </div>
            </div>
          }
        >
          {numPages && Array.from({ length: numPages }).map((_, index) => (
            <div 
              key={`page_${index + 1}`} 
              className="mb-6 last:mb-0"
            >
              {/* Page container - clean and simple */}
              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="!bg-white"
                />
              </div>

              {/* Page number */}
              {numPages > 1 && (
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-500 font-medium px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-full">
                    {index + 1} / {numPages}
                  </span>
                </div>
              )}
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default ResumeViewer;
