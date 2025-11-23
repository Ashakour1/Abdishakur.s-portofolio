import { Link } from "react-router-dom";
import Socials from "./Socials";
export const NavbarRoutes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Tools",
    route: "/tools",
  },
  {
    name: "Contributions",
    route: "/contributions",
  },

  {
    name: "Contact",
    route: "/contact",
  },
  {
    name: "blogs",
    route: "/blogs",
  },
  {
    name: "Resume",
    route: "/resume",
  },
];
const Footer = () => {
  return (
    <footer className="max-w-[1020px] mx-auto px-5">
      <div className="py-20 flex flex-col">
        <div className="flex flex-col items-center text-center border-b ">
          <div className="flex gap-1 items-center ">
            <img
              src="/image.png"
              className="rounded-full w-12 border-dotted border-2 border-black"
              alt=""
            />{" "}
          </div>
          <nav className="pt-2 pb-5">
            <ul className="flex gap-3 text-black">
              {NavbarRoutes.map((item, index) => (
                <Link className="text-sm" to={item.route} key={index}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-between py-4">
          <div>
            <p className="text-sm text-gray-500">&copy; Abdishakour Mohamed.</p>
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
