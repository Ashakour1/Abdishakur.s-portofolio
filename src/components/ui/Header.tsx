import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";

const Header = () => {
  return (
    <header className="">
      <div className="rounded-md flex justify-between items-center px-5 max-w-[1040px] mx-auto h-16 mt-2">
        <div className="logo">
          <img
            src="/image.png"
            className="rounded-full w-14 border-dotted border-2 border-black"
            alt=""
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <div className="border border-black flex items-center text-center gap-1 px-3 py-1 rounded-md">
              <GoPerson className="text-black" />
              <Link to="/" className=" text-black font-semibold">
                About
              </Link>
            </div>
            <div className="border border-black flex items-center text-center gap-1 px-3 py-1 rounded-md">
              <GoProjectSymlink className="text-black" />
              <Link to="/" className=" text-black font-semibold">
                Projects
              </Link>
            </div>
            <div className="border border-black flex items-center text-center gap-1 px-3 py-1 rounded-md">
              <MdContactPhone className="text-black" />
              <Link to="/" className=" text-black font-semibold">
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
