import { MdLocationOn } from "react-icons/md";
import AboutMe from "../components/about-me";

const HeroSection = () => {
  return (
    <section>
      <div className="py-5 pt-10 lg:flex-row md:gap-2 sm:gap-2 gap-4 flex flex-col md:flex-row justify-between border-b">
        <div className="">
          <AboutMe />
          <div className="flex flex-col gap-2 py-1">
            <h1 className="max-w-2xl text-2xl lg:text-3xl md:text-3xl font-bold spacing-1">
              Hey! I’m{" "}
              <span className="border-blue-400 border-b-2">Abdishakour</span>{" "}
              and I’m Software Developer
            </h1>
            <p className="max-w-2xl text-sm md:text-sm lg:text-base text-gray-700 flex flex-col gap-1">
              <span>
                Hey there! 👋 I'm Abdishakur Mohamed Hussein, a dynamic Software
                Developer with 3.5 years of hands-on experience and a third-year
                Computer Science student at Jamhuuriyo University of Science &
                Technology.
              </span>
              <span>
                I’m passionate about innovation, creativity, and emerging
                technologies, especially AI and Machine Learning. I specialize
                in building exceptional web applications, with engaging
                front-end interfaces and robust back-end systems, striving to
                create seamless and user-friendly solutions.
              </span>
              <span>
                My studies and work keep me at the forefront of tech, fueling my
                drive to innovate and excel. Let’s connect and collaborate to
                build something extraordinary together! ✨
              </span>
            </p>
          </div>
        </div>

        <div className="flex md:flex-col items-center flex-col gap-3">
          <div className="relative">
            <img
              className="md:w-72 w-full rounded-xl"
              src="/image-hero.jpg"
              alt="Abdishakour Mohamed"
            />

            {/* Floating Status Badge */}
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg border border-gray-100">
              <div className="bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available
              </div>
            </div>
          </div>

          {/* Sleek Work Info Strip */}
          <div className="w-full max-w-sm space-y-2">
            <div className="text-center">
              <div className="inline-flex items-center border-gray-500 border gap-2 text-white px-4 py-2 rounded-full text-sm font-medium">
             
             <img src="/logo-salaam.jpeg" className="w-5 h-5 rounded-full"  alt="Abdishakour Mohamed" />

             <span className="text-black font-bold text-gray-500">Software Engineer</span>
                
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1 text-gray-500 text-xs">
                <MdLocationOn className="text-sm" />
                <span>Somalia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
