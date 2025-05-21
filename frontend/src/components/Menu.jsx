import React, { useState, useRef, useEffect } from "react";

const sections = [
  { id: "Home", label: "Home" },
  { id: "About", label: "About Me" },
  { id: "Experience", label: "Experience" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 right-4 z-50 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-gray-900 shadow-lg lg:hidden focus:outline-none transition-all duration-300"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-900 mb-1 transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
          style={{ transition: "all 0.3s" }}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 mb-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
          style={{ transition: "all 0.3s" }}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
          style={{ transition: "all 0.3s" }}
        ></span>
      </button>
      {/* Overlay for closing menu when open and clicking outside */}
      {open && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Menu navigation */}
      <nav
        ref={menuRef}
        className={`${
          open ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 z-40 flex-col gap-6 bg-gray-900/90 px-8 py-16 rounded-none shadow-xl h-full max-h-full items-center justify-center lg:justify-start lg:items-end lg:rounded-2xl lg:shadow-xl lg:top-0 lg:bottom-0 lg:right-4 lg:left-auto lg:my-auto lg:flex lg:flex-col lg:gap-6 lg:bg-gray-900/80 lg:px-4 lg:py-6 lg:h-auto lg:max-h-fit`}
        onClick={(e) => {
          // Only close if not clicking a section button
          if (e.target === menuRef.current) setOpen(false);
        }}
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.id === "Home" ? "#" : `#${section.id}`}
            className="text-yellow-400 text-2xl lg:text-xl font-bold px-6 py-4 lg:px-4 lg:py-2 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={(e) => {
              e.preventDefault();
              if (section.id === "Home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                const el = document.getElementById(section.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }
              setOpen(false);
            }}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Menu;
