import { BiEnvelope, BiSearch } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
// import { GiNightSleep } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
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
        <nav className="border-[1px] border--gray-400 md:px-6 py-2  rounded-full">
          <ul className="flex md:space-x-4 space-x-2">
            <div className="  flex items-center text-center gap-1 px-2 py-1 rounded-md  hover:bg-gray-300 hover:-none">
              <GoPerson className="text-black text-xs" />
              <Link to="/" className=" text-black text-xs font-semibold">
                About
              </Link>
            </div>
            <div className="  flex items-center text-center gap-1 px-2 py-1 rounded-md  hover:bg-gray-300 hover:-none ">
              <BiSearch className="text-black text-xs" />
              <Link
                to="/projects"
                className=" text-black text-xs font-semibold"
              >
                Projects
              </Link>
            </div>
            <div className=" flex items-center text-center gap-1 px-2 py-1 rounded-md hover:bg-gray-300 hover:border-none">
              <BiEnvelope className="text-black text-xs" />
              <Link to="/contact" className=" text-black text-xs font-semibold">
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
