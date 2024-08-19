import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const socialsData = [
  {
    icon: <BsGithub />,
    route: "https://github.com/Ashakour1",
  },
  {
    icon: <BsTwitter />,
    route: "https://x.com/Ashakour17",
  },
  {
    icon: <BsFacebook />,
    route: "https://www.facebook.com/Shakramohamad6/",
  },
  {
    icon: <BsLinkedin />,
    route: "https://www.linkedin.com/in/a-shakour-mohammed-90836725a/",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="flex gap-2">
        {socialsData.map((item, index) => (
          <Link key={index} className="text-gray-500" to={item.route}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
