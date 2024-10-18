import { Link } from "react-scroll";
import { IoPerson } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { useState } from "react"; // Import useState

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu open/close state

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {/* Hamburger icon for toggling menu */}
      <div
        className="fixed top-5 right-10 cursor-pointer z-50 bg-gray-600 p-2 rounded-md"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="text-[26px] text-custom_yellow" />
      </div>

      {/* Menu with transition */}
      <div
        className={`flex flex-col lg:flex-row gap-2 bg-gray-600 backdrop-blur-xl bg-opacity-30 py-1 px-3 rounded-md fixed backdrop-filter bg-clip-padding top-16 right-5 transition-all duration-500 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        {/* Home Icon */}
        <Link
          activeClass="bg-[#1484da] rounded-full"
          to="Home"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          onClick={toggleMenu}
        >
          <FaHome className="text-[20px] p-[5px] text-custom_yellow" />
        </Link>

        {/* About Icon */}
        <Link
          activeClass="bg-[#1484da] rounded-full"
          to="About"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          onClick={toggleMenu}
        >
          <IoPerson className="text-[20px] p-[5px] text-custom_yellow" />
        </Link>
        <Link
          activeClass="bg-[#1484da] rounded-full"
          to="Experience"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          onClick={toggleMenu}
        >
          <FaPencilRuler className="text-[20px] p-[5px] text-custom_yellow" />
        </Link>

        {/* Skills Icon */}
        <Link
          activeClass="bg-[#1484da] rounded-full"
          to="Skills"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          onClick={toggleMenu}
        >
          <GiBiceps className="text-[20px] p-[5px] text-custom_yellow" />
        </Link>

        {/* Experience Icon */}

        {/* Hobbies Icon */}
        <Link
          activeClass="bg-[#1484da] rounded-full"
          to="Projects"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          onClick={toggleMenu}
        >
          <BiFootball className="text-[20px] p-[5px] text-custom_yellow" />
        </Link>

        {/* Contact Icon */}
        <Link
          activeClass="bg-[#1484da] rounded-full"
          to="Contact"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          onClick={toggleMenu}
        >
          <IoMdMail className="text-[20px] p-[5px] text-custom_yellow" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
