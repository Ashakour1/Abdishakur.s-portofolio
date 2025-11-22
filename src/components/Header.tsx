import { FaGithub } from "react-icons/fa";
// import { GiNightSleep } from "react-icons/gi";

import { Link } from "react-router-dom";

const Header = () => {
  // const { setTheme } = useTheme();
  return (
    <header>
      <div className="rounded-md flex  justify-between items-center px-5 max-w-[1020px] mx-auto h-16 mt-2">
        <div className="logo">
          <Link to="/">
            <img
              src="/image.png"
              className="rounded-full w-12 border-dotted border-2 border-black"
              alt=""
            />
          </Link>
        </div>
        <nav className="">
          <ul className="flex md:space-x-4 space-x-2">
            <div className="  flex items-center text-center gap-1 px-2 py-1 rounded-md   hover:-none">
              <Link to="/" className=" text-black text-sm font-semibold hover:text-blue-500">
                About Me
              </Link>
            </div>
            <div className="  flex items-center text-center gap-1 px-2 py-1 rounded-md   hover:-none ">
              <Link
                to="/projects"
                className=" text-black text-sm font-semibold hover:text-blue-500"
              >
                Projects
              </Link>
            </div>
            <div className=" flex items-center text-center gap-1 px-2 py-1 rounded-md  hover:border-none">
              <Link to="/contact" className=" text-black text-sm font-semibold hover:text-blue-500">
                Contact
              </Link>
            </div>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="border text-black px-3 py-3 rounded-full">
            <Link to="https://github.com/Ashakour1">
              <FaGithub className="text-xl" />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
