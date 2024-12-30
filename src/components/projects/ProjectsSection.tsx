import { AiFillProject } from "react-icons/ai";
// import Project from "./Project";
// import { ProjectsData } from "../../data/projects-data";
import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
  const items = [
    {
      title: "Aslos",
      description:
        "A ecommerce system that allows you to sell your products online.",
      link: "https://aslos.so",
      image: "/landing5.png",
      techStacks: ["Next.js", "MongoDb", "Stripe", "TypeScript"],
    },
    {
      title: "Eventify",
      description: "A platform for managing your events and tickets.",
      link: "https://eventify-abdi.vercel.app/",
      image: "/landing2.png",
      techStacks: ["Next.js", "MongoDb", "Stripe"],
    },
    {
      title: "SomAtlasAPI",
      description:
        "Streamlining App Development with Key Somali Regional Data.",
      link: "https://www.somatlas.dev/",
      image: "/landing3.png",
      techStacks: ["Svelte", "MongoDb", "Node.js", "supabase"],
    },
    {
      title: "Jamhuuriya (Jutsa)",
      description: "JUTSA Management System enables efficient work management.",
      link: "https://itday.jtech.so/",
      image: "/jutsa-mn.png",
      techStacks: ["React", "MongoDb", "Node.js", ""],
    },
    {
      title: "Asal Advert",
      description:
        "Asal Advertising Company is a marketing and advertising agency",
      link: "https://eventify-abdi.vercel.app/",
      image: "/asaladver.png",
      techStacks: ["Next.js", "MongoDb", "Stripe"],
    },
    {
      title: "Donorix",
      description:
        "Donorix is a blood donation platform that connects donors with recipients.",
      link: "https://www.somatlas.dev/",
      image: "/donorix.png",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
    },
  ];
  return (
    <div>
      <div className="flex items-center text-center py-5 gap-1 text-gray-600">
        <AiFillProject className="text-xl" />
        <h1 className="font-bold text-sm">Projects</h1>
      </div>
      <HoverEffect items={items} className="gap-6" />
      <div className="flex items-center justify-center text-center py-10 gap-1 text-gray-600">
        <button className="bg-gray-100 text-sm text-gray-600 md:px-4 px-10 py-2 rounded-md flex gap-1 ">
         
          <span className="text-black font-bold">View More</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
