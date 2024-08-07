import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";

const Header = () => {
  return (
    <header className="">
      <div className="rounded-md flex justify-between items-center px-5 max-w-[1020px] mx-auto h-16 mt-2">
        <div className="logo">
          <img
            src="/image.png"
            className="rounded-full w-12 border-dotted border-2 border-black"
            alt=""
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <div className="border  flex items-center text-center gap-1 px-2 py-1 rounded-md  hover:bg-gray-300 hover:border-none">
              <GoPerson className="text-black text-xs" />
              <Link to="/" className=" text-black text-xs font-semibold">
                About
              </Link>
            </div>
            <div className="border  flex items-center text-center gap-1 px-2 py-1 rounded-md  hover:bg-gray-300 hover:border-none ">
              <GoProjectSymlink className="text-black text-xs" />
              <Link to="/" className=" text-black text-xs font-semibold">
                Projects
              </Link>
            </div>
            <div className="border flex items-center text-center gap-1 px-2 py-1 rounded-md hover:bg-gray-300 hover:border-none">
              <MdContactPhone className="text-black text-xs" />
              <Link to="/" className=" text-black text-xs font-semibold">
                Contact
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
