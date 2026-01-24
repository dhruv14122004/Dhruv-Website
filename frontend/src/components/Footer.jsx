const Footer = () => {
  return (
    <footer className="border-t-2 border-retro-border mt-20 bg-retro-bg relative z-10 w-full mb-10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="footer-logo">
          <p className="text-retro-accent text-xs mb-3 font-mono">END_OF_PAGE</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-none text-retro-text font-heading">
            DHRUV.DEV
            <br />
            2025©
          </h2>
        </div>
        <div className="text-right w-full md:w-auto">
          <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-8 justify-end">
            <a href="#" className="text-retro-text hover:text-retro-accent text-sm font-bold no-underline font-mono">TWITTER</a>
            <a href="https://github.com/dhruv14122004" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold no-underline font-mono">GITHUB</a>
            <a href="https://www.linkedin.com/in/dhruvsharmaa14/" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold no-underline font-mono">LINKEDIN</a>
          </div>
          <p className="text-xs text-retro-text-secondary font-mono">BUILT ON THE EDGE OF THE WEB. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* Footer Badge (Absolute or integrated) */}
      <div className="footer-badge absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="https://github.com/dhruv14122004" target="_blank" rel="noopener noreferrer" className="badge-link-footer">
          <div className="badge-content-footer">
            <span className="badge-label">DEV:</span>
            <span className="badge-highlight">DHRUV</span>
            <span className="badge-separator">→</span>
            <span className="badge-label">STATUS:</span>
            <span className="badge-highlight">ONLINE</span>
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
