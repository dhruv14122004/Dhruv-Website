const Footer = () => {
  return (
    <div id="footer" className="pt-28 custom_yellow text-center pb-10">
      <p>Made by Dhruv Sharma</p>
      
      <div className="flex justify-center space-x-4 mt-4">
        {/* Social Links */}
        <a href="mailto:dhruv.sharma122004@gmail.com" className="hover:text-gray-400">Email</a>
        <a href="https://www.linkedin.com/in/dhruv-sharma-142932252/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        <a href="https://github.com/dhruv14122004" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Dhruv Sharma. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
