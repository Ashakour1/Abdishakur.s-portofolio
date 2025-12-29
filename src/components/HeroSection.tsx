import { MdLocationOn } from "react-icons/md";
import AboutMe from "./about-me";

const HeroSection = () => {
  return (
    <section>
      <div className="lg:flex-row md:gap-2 sm:gap-2 gap-4 flex flex-col md:flex-row justify-between border-b">
        <div className="space-y-2">
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
           {/* <div className="relative overflow-hidden rounded-2xl">
                    <img
                      className="md:w-72 w-full rounded-xl aspect-[4/5] object-cover"
                      src="/image-hero.jpg"
                      alt="Abdishakour Mohamed"
                    />
                    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg inline-flex items-center gap-2">
                      <img
                        src="/logo-salaam.jpeg"
                        className="w-6 h-6 rounded-full"
                        alt="Salaam Financial Services"
                      />
                      Software Engineer @ SSB
                    </div>
                  </div> */}

          {/* Sleek Work Info Strip */}
          <div className="w-full max-w-sm space-y-2">
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


  // <div className="rounded-[28px] bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-600 p-[2px] shadow-2xl">
  //             <div className="rounded-[26px] bg-white">
  //               <div className="p-4 md:p-5">
  //                 <div className="relative overflow-hidden rounded-2xl">
  //                   <img
  //                     className="w-full aspect-[4/5] object-cover"
  //                     src="/image-hero.jpg"
  //                     alt="Abdishakour Mohamed"
  //                   />
  //                   <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg inline-flex items-center gap-2">
  //                     <img
  //                       src="/logo-salaam.jpeg"
  //                       className="w-6 h-6 rounded-full"
  //                       alt="Salaam Financial Services"
  //                     />
  //                     Software Engineer @ Salaam
  //                   </div>
  //                 </div>

  //                 <div className="mt-5 flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3">
  //                   <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
  //                     <MdLocationOn className="text-base text-blue-600" />
  //                     Somalia
  //                   </div>
  //                   <div className="text-xs text-slate-500">
  //                     Crafting resilient, scalable systems
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>