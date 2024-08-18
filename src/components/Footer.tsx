import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
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
    <footer>
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
          <div className="flex gap-2">
            <Link to="https://github.com/Ashakour1">
              <BsGithub className="text-gray-500" />
            </Link>
            <Link to="https://x.com/Ashakour17">
              <BsTwitter className="text-gray-500" />
            </Link>
            <Link to="https://www.facebook.com/Shakramohamad6/">
              <BsFacebook className="text-gray-500" />
            </Link>
            <Link to="https://www.linkedin.com/in/a-shakour-mohammed-90836725a/">
              <BsLinkedin className="text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
