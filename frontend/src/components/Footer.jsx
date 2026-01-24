const Footer = () => {
  return (
    <footer className="border-t-2 border-retro-border mt-20 bg-retro-bg relative z-10 w-full mb-10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="footer-logo">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-none text-retro-text font-heading">
            DHRUV.DEV
            <br />
            2025©
          </h2>
        </div>
        <div className="text-right w-full md:w-auto">
          <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-8 justify-end">
            <a href="#" className="text-retro-text hover:text-retro-accent text-sm font-bold no-underline font-mono">X</a>
            <a href="https://github.com/dhruv14122004" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold no-underline font-mono">GITHUB</a>
            <a href="https://www.linkedin.com/in/dhruvsharmaa14/" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold no-underline font-mono">LINKEDIN</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
