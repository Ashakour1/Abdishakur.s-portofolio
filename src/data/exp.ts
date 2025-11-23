import { type Experience } from "../types/experiences-type";

export const ExperienceData: Experience[] = [
  {
    position: "Software Engineer",
    name: "Salaam Somali Bank",
    logo: "/logo-salaam.jpeg",
    time: "May 2025 - present",
    description:
      "As a software engineer  at Salaam Somali Bank, you'll design and develop high-quality software applications, collaborate with a skilled team, and stay updated with the latest industry trends. Your role involves writing efficient code, debugging issues, and delivering innovative solutions to maintain Salaam Somali Bank's leadership in the tech industry.",
    technologies: [
      "Mysql",
      "React",
      "Prisma",
      "Next.js",
      "Python",
      "Django",
      "Flutter",
      "Dart",
      "More",
    ],
    images: [],
  },

  {
    position: "CVO & AI Engineer",
    name: "Relia Trusty",
    logo: "/logo-relia-trusty.jpg",
    time: "Fep 2024 - July 2024",
    description:
      "As a CVO & AI Engineer at Relia Trusty, you'll design and develop high-quality software applications, collaborate with a skilled team, and stay updated with the latest industry trends. Your role involves writing efficient code, debugging issues, and delivering innovative solutions to maintain Relia Trusty's leadership in the tech industry.",
    technologies: [
      "Machine learning",
      "Deep learning",
      "React",
      "MongoDb",
      "Prisma",
      "More",
    ],
    images: [],
  },
  {
    position: "Software Developer",
    name: "Heegan Technology",
    logo: "/logo-heegan.jpg",
    time: "Jan 2025 - June 2025",
    description:
      "As a software developer at Heegan Technology, you'll design and develop high-quality software applications, collaborate with a skilled team, and stay updated with the latest industry trends. Your role involves writing efficient code, debugging issues, and delivering innovative solutions to maintain Heegan Technology's leadership in the tech industry.",
    technologies: [
      "Mysql",
      "React",
      "Prisma",
      "Next.js",
      "Python",
      "Django",
      "Flutter",
      "Dart",
      "More",
    ],
    images: [],
  },
  {
    position: "Chief Development Officer",
    name: "Jamhuriya University Technology Students Association",
    logo: "/logo-jutsa.jpg",
    time: "March 2024 - Present",
    description:
      "As the CDO of the Jamhuriya University Technology Students Association, I spearheaded digital advancements by developing a system to manage student data and events, creating the itDay event website to enhance participation, and implementing a secure voting system for efficient elections.",
    technologies: ["React", "Node.js", "Next.js", "MongoDb", "Prisma", "More"],
    images: ["/jutsa.png", "/jutsa-mn.png"],
  },

  {
    position: "Founder & Developer",
    name: "SomAtlasAPI",
    logo: "/logo-somatlas.jpg",
    time: "Dec 2023 - Present",
    description:
      "As the founder and developer of SomAtlasAPI, I developed a RESTful API to provide data on Somalia's regions, districts, and sub-districts. I designed the API to be user-friendly, secure, and scalable, ensuring that users can access accurate information with ease.",
    technologies: [
      "Svelte",
      "Node.js",
      "Prisma",
      "supabase",
      "Postgresql",
      "More",
    ],
    images: ["/landing3.png", "/docs.png"],
  },
  {
    position: "Fullstack Developer",
    name: "Matso Organization",
    logo: "/logo-matso.jpg",
    time: "Fep 2022 - July 2024",
    description:
      "As a full-stack developer at Matso Organization, you'll design and develop high-quality software applications, collaborate with a skilled team, and stay updated with the latest industry trends. Your role involves writing efficient code, debugging issues, and delivering innovative solutions to maintain Matso Organization's leadership in the tech industry.",
    technologies: ["Mysql", "Php", "Javascript", "React", "Prisma", "More"],
    images: [],
  },
];



   
// import {
//   FaCcStripe,
//   FaDatabase,
//   FaJava,
//   FaNode,
//   FaPython,
//   FaReact,
// } from "react-icons/fa";
// import { type Experience } from "../../types/experiences-type";
// import { IoCalendarOutline, IoLogoJavascript, IoPrism } from "react-icons/io5";
// import { TbBrandSupabase, TbBrandTypescript } from "react-icons/tb";
// import { BiLogoMongodb, BiLogoPhp } from "react-icons/bi";
// import { RiFlutterFill, RiNextjsFill, RiSvelteFill } from "react-icons/ri";
// import { GrAnalytics } from "react-icons/gr";
// import { IoIosMore } from "react-icons/io";
// import { SiPostgresql } from "react-icons/si";
// import { DiDart, DiDjango } from "react-icons/di";

// type ExperienceProps = {
//   experienceItem: Experience;
// };

// const Experience = ({ experienceItem }: ExperienceProps) => {
//   console.log(experienceItem.logo);

//   const getStack = (stack: string) => {
//     switch (stack) {
//       case "Postgresql":
//         return <SiPostgresql className="w-5 h-5" />;
//       case "More":
//         return <IoIosMore className="w-5 h-5" />;
//       case "SAD":
//         return <GrAnalytics className="w-5 h-5" />;
//       case "Prisma":
//         return <IoPrism className="w-5 h-5" />;
//       case "Javascript":
//         return <IoLogoJavascript className="w-5 h-5" />;
//       case "Mysql":
//         return <FaDatabase className="w-5 h-5" />;
//       case "Php":
//         return <BiLogoPhp className="w-5 h-5" />;
//       case "Stripe":
//         return <FaCcStripe className="w-5 h-5" />;
//       case "TypeScript":
//         return <TbBrandTypescript className="w-5 h-5" />;
//       case "supabase":
//         return <TbBrandSupabase className="w-5 h-5" />;
//       case "MongoDb":
//         return <BiLogoMongodb className="w-5 h-5" />;
//       case "Svelte":
//         return <RiSvelteFill className="w-5 h-5" />;
//       case "React":
//         return <FaReact className="w-5 h-5" />;
//       case "Next.js":
//         return <RiNextjsFill className="w-5 h-5" />;
//       case "Node.js":
//         return <FaNode className="w-5 h-5" />;
//       case "Python":
//         return <FaPython className="w-5 h-5" />;
//       case "Java":
//         return <FaJava className="w-5 h-5" />;
//       case "Database":
//         return <FaDatabase className="w-5 h-5" />;
//       case "Django":
//         return <DiDjango className="w-5 h-5" />;
//       case "Flutter":
//         return <RiFlutterFill className="w-5 h-5" />;
//       case "Dart":
//         return <DiDart className="w-5 h-5" />;
//       default:
//         return null;
//     }
//   };
//   return (
//     <section>
//       {/* <div className="flex flex-col   px-3 py-2  rounded-md">
//         <div className="flex flex-col  space-y-1">
//           <div className="flex items-center gap-1 py-1">
//             <img
//               src={experienceItem.logo}
//               className="w-12 rounded-full"
//               alt=""
//             />
//             <div className="flex flex-col">
//               <h1 className="text-sm font-bold">{experienceItem.position}</h1>
//               <p className="text-xs text-gray-500 max-w-56">
//                 {experienceItem.name}
//               </p>
//             </div>
//           </div>
//           <p className="text-xs text-gray-500 flex items-center gap-1 ">
//             <IoCalendarOutline className="text-xs" />
//             {experienceItem.time}
//           </p>
//           <p className="text-xs text-gray-500 max-w-3xl">
//             {experienceItem.description}
//           </p>
//           <div className="flex gap-2 pt-2">
//             {experienceItem.technologies.map((tech, index) => (
//               <span key={index} className={`text-xs px-2 py-1 rounded-md`}>
//                 {getStack(tech)}
//               </span>
//             ))}
//           </div>
//           <div className="flex gap-2 pt-2">
//             {experienceItem.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 className="w-40 h-20   rounded-md"
//                 alt=""
//               />
//             ))}
//           </div>
//         </div>
//       </div> */}

//       <div  className="flex justify-between items-center  px-3 py-2">
//         <div className="flex">
//           <h1 className="text-gray-600  text-lg">
//             {experienceItem.time}
//           </h1>
//         </div>
//         <div className="flex">
//          <h1 className="text-gray-600 font-semibold hover:underline  text-lg">
//             {experienceItem.position}
//           </h1>
//           <img src={experienceItem.logo} className="w-8 h-8 ml-2 rounded-full" alt="" />
           
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default Experience;
