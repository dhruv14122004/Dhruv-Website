import { TbCircleLetterDFilled } from "react-icons/tb";
const Header = () => {
    return (
      <header id="Home" className="px-10 py-4 flex items-center justify-between bg-transparent">
        <a href="https://dhruv14122004.github.io/dhruv_portfolio_website/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
          <TbCircleLetterDFilled className="text-[40px] text-yellow-400 drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-red-400"/>
          <span className="text-2xl font-bold text-white hidden sm:inline-block tracking-wide group-hover:text-yellow-400 transition-colors">Dhruv</span>
        </a>
        <nav className="space-x-6 text-lg font-medium hidden md:block">
          {/* <a href="#About" className="link">About</a>
          <a href="#Experience" className="link">Experience</a>
          <a href="#Projects" className="link">Projects</a>
          <a href="#Contact" className="link">Contact</a> */}
        </nav>
      </header>
    );
  };
  
  export default Header;