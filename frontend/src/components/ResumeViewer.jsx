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
                <div className="w-10 h-10 border-2 border-retro-border border-t-retro-accent rounded-full animate-spin" />
                <span className="text-sm text-retro-text-secondary font-mono">LOADING_DATA...</span>
              </div>
            </div>
          }
          error={
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <p className="text-red-500 font-mono">ERROR: LOAD_FAILED</p>
                <p className="text-retro-text-secondary text-sm mt-2 font-mono">RETRY_CONNECTION</p>
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
              <div className="overflow-hidden shadow-retro border-2 border-retro-border">
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
                  <span className="text-xs text-retro-text font-medium px-2.5 py-1 bg-retro-surface border border-retro-border font-mono">
                    PAGE {index + 1} / {numPages}
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
