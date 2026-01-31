const Footer = () => {
  return (
    <footer className="w-full mt-20 relative z-10">
      {/* Mobile Footer - Functional */}
      <div className="block md:hidden border-t-2 border-retro-border bg-retro-bg pb-10 pt-10 px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://x.com/dhruvshxrmaa" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold font-mono">X</a>
            <a href="https://github.com/dhruv14122004" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold font-mono">GITHUB</a>
            <a href="https://www.linkedin.com/in/dhruvsharmaa14/" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold font-mono">LINKEDIN</a>
            <a href="https://peerlist.io/dhruvsharma" target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-accent text-sm font-bold font-mono">PEERLIST</a>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold leading-none text-retro-text font-heading">
              DHRUV.DEV
            </h2>
            <p className="text-retro-text-secondary text-xs mt-2 font-mono">
              © 2025 Dhruv Sharma
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Footer - Aesthetic */}
      <div className="hidden md:flex w-full pt-10 justify-center items-end overflow-hidden select-none pointer-events-none">
        <h1
          className="font-heading font-extrabold text-[#333] tracking-tighter text-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(3rem, 18vw, 16rem)',
            lineHeight: '0.8',
            WebkitTextStroke: '2px rgba(255, 72, 0, 0.8)',
            color: 'transparent',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
          }}
        >
          Dhruv.Dev
        </h1>
      </div>
    </footer>
  )
}

export default Footer
