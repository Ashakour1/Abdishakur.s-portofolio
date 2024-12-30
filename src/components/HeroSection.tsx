import { MdBusinessCenter } from "react-icons/md";
import AboutMe from "./about-me";
const HeroSection = () => {
  return (
    <section>
      <div className="py-5 pt-10 lg:flex-row md:gap-2 sm:gap-2 gap-4 flex flex-col md:flex-row justify-between border-b">
        <div className="">
          <AboutMe />
          <div className="flex flex-col gap-2 ">
            <h1 className="max-w-2xl text-2xl lg:text-3xl md:text-3xl font-bold spacing-1">
              Hey! I’m{" "}
              <span className="border-blue-400 border-b-2">Abdishakour</span>{" "}
              and I’m Software Developer
            </h1>
            <p className="max-w-2xl text-sm md:text-sm lg:text-base text-gray-700 flex flex-col gap-1">
              <span className="">
                Hey there! 👋 I'm Abdishakur Mohamed Hussein, a dynamic Software
                Developer with 2.5 years of hands-on experience and a third-year
                Computer Science student at Jamhuuriyo University of Science &
                Technology.
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

        <div className="flex md:flex-col items-center flex-col gap-2">
          <img
            className="md:w-64 w-full rounded"
            src="/hero.JPG"
            alt="Abdishakour Mohamed"
          />
          <button className="bg-gray-100 text-sm text-gray-600 md:px-4 px-10 py-2 rounded-md flex gap-1 ">
            <MdBusinessCenter className="text-xl" />
            SWE @<span className="text-black font-bold">Relia Trusty</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
