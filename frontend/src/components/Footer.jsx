const Footer = () => {
  return (
    <footer id="footer" className="pt-20 pb-10 text-center bg-transparent">
      <p className="text-lg text-gray-400 mb-4">Made by <span className="font-bold text-yellow-400">Dhruv Sharma</span></p>
      <div className="flex justify-center space-x-6 mt-2">
        <a href="mailto:dhruv.sharma122004@gmail.com" className="link hover:text-red-400">Email</a>
        <a href="https://www.linkedin.com/in/dhruv-sharma-142932252/" target="_blank" rel="noopener noreferrer" className="link hover:text-blue-400">LinkedIn</a>
        <a href="https://github.com/dhruv14122004" target="_blank" rel="noopener noreferrer" className="link hover:text-gray-300">GitHub</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="link hover:text-blue-300">Twitter</a>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h4 className="text-yellow-400 text-xl mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#About" className="link">About</a></li>
            <li><a href="#Experience" className="link">Experience</a></li>
            <li><a href="#Projects" className="link">Projects</a></li>
            <li><a href="#Contact" className="link">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-yellow-400 text-xl mb-2">Contact Info</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Email: dhruv.sharma122004@gmail.com</li>
            <li>Location: Jaipur, India</li>
            <li>Phone: +91-6378654771</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Dhruv Sharma. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
