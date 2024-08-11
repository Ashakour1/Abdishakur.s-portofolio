import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import AboutMe from "./about-me";
import Experience from "./experience/experience";
const HeroSection = () => {
  return (
    <section>
      <div className="py-5 pt-10  flex justify-between border-b">
        <div className="">
          <AboutMe />
          <div className="flex flex-col gap-2 ">
            <h1 className="max-w-2xl text-3xl font-bold spacing-1">
              Hey! I’m{" "}
              <span className="border-blue-400 border-b-2">Abdishakour</span>{" "}
              and I’m Fullstack Developer
            </h1>
            <p className="max-w-2xl text-base text-gray-700 flex flex-col gap-1">
              <span className="">
                Hey there! 👋 I'm Abdishakur Mohamed Hussein, a dynamic
                Fullstack Developer with 2 years of hands-on experience and a
                third-year Computer Science student at Jamhuuriyo University of
                Science & Technology.
              </span>
              <span>
                I’m passionate about innovation and creativity, always exploring
                new ways to build exceptional web applications. I specialize in
                both engaging front-end interfaces and robust back-end systems,
                striving to create seamless and user-friendly solutions.
              </span>
              <span>
                My studies and work keep me at the forefront of tech, fueling my
                drive to innovate and excel. Let’s connect and collaborate to
                build something extraordinary together! ✨ ---
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            className="w-56 rounded"
            src="/image.png"
            alt="Abdishakour Mohamed"
          />
          <Link to="https://www.reliatrusty.com/">
            <button className="bg-gray-100 text-sm text-gray-600 px-4 py-2 mx-8 rounded-md flex items-center">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/forma-light/24/bag-front-view.png"
                alt="bag-front-view"
                className="px-1"
              />
              SWE @<span className="text-black font-bold">Relia trusty</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
