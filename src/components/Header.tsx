import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
// import { GiNightSleep } from "react-icons/gi";

import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="rounded-md flex justify-between items-center px-3 sm:px-5 max-w-[1020px] mx-auto h-16 mt-2">
        <div className="logo">
          <Link to="/">
            <img
              src="/image.png"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-dotted border-2 border-black"
              alt=""
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <div className="flex items-center text-center gap-1 px-2 py-1 rounded-md hover:-none">
              <Link to="/" className="text-black text-sm font-semibold hover:text-blue-500">
                About Me
              </Link>
            </div>
            <div className="flex items-center text-center gap-1 px-2 py-1 rounded-md hover:-none">
              <Link
                to="/projects"
                className="text-black text-sm font-semibold hover:text-blue-500"
              >
                Projects
              </Link>
            </div>
            <div className="flex items-center text-center gap-1 px-2 py-1 rounded-md hover:-none">
              <Link
                to="/tools"
                className="text-black text-sm font-semibold hover:text-blue-500"
              >
                Tools
              </Link>
            </div>
            <div className="flex items-center text-center gap-1 px-2 py-1 rounded-md hover:-none">
              <Link
                to="/articles"
                className="text-black text-sm font-semibold hover:text-blue-500"
              >
                Articles
              </Link>
            </div>
            <div className="flex items-center text-center gap-1 px-2 py-1 rounded-md hover:-none">
              <Link
                to="/tags"
                className="text-black text-sm font-semibold hover:text-blue-500"
              >
                Tags
              </Link>
            </div>
            <div className="flex items-center text-center gap-1 px-2 py-1 rounded-md hover:border-none">
              <Link to="/contact" className="text-black text-sm font-semibold hover:text-blue-500">
                Contact
              </Link>
            </div>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="border text-black px-2 py-2 sm:px-3 sm:py-3 rounded-full">
            <Link to="https://github.com/Ashakour1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg sm:text-xl" />
            </Link>
          </button>
          
          <button
            onClick={toggleMenu}
            className="md:hidden border text-black px-2 py-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden max-w-[1020px] mx-auto px-3 sm:px-5 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-2 py-2">
          <div className="flex items-center text-center gap-1 px-2 py-2 rounded-md hover:bg-gray-100">
            <Link
              to="/"
              className="text-black text-sm font-semibold hover:text-blue-500 w-full"
              onClick={closeMenu}
            >
              About Me
            </Link>
          </div>
          <div className="flex items-center text-center gap-1 px-2 py-2 rounded-md hover:bg-gray-100">
            <Link
              to="/projects"
              className="text-black text-sm font-semibold hover:text-blue-500 w-full"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </div>
          <div className="flex items-center text-center gap-1 px-2 py-2 rounded-md hover:bg-gray-100">
            <Link
              to="/tools"
              className="text-black text-sm font-semibold hover:text-blue-500 w-full"
              onClick={closeMenu}
            >
              Tools
            </Link>
          </div>
          <div className="flex items-center text-center gap-1 px-2 py-2 rounded-md hover:bg-gray-100">
            <Link
              to="/articles"
              className="text-black text-sm font-semibold hover:text-blue-500 w-full"
              onClick={closeMenu}
            >
              Articles
            </Link>
          </div>
          <div className="flex items-center text-center gap-1 px-2 py-2 rounded-md hover:bg-gray-100">
            <Link
              to="/tags"
              className="text-black text-sm font-semibold hover:text-blue-500 w-full"
              onClick={closeMenu}
            >
              Tags
            </Link>
          </div>
          <div className="flex items-center text-center gap-1 px-2 py-2 rounded-md hover:bg-gray-100">
            <Link
              to="/contact"
              className="text-black text-sm font-semibold hover:text-blue-500 w-full"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
