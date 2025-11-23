// import Project from "./Project";
// import { ProjectsData } from "../../data/projects-data";
import { HoverEffect } from "../ui/card-hover-effect";
import { Link } from "react-router-dom";

const Projects = () => {
  const items = [
    {
      title: "Azm",
      description:
        "Azm helps you turn goals into tasks, track progress, organize projects, and collaborate with friends, achieve more, smarter and faster!",
      link: "https://azmai.app/",
      image: "/azm.png",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
    },
     {
      title: "Scanner AI",
      description:
        "Scanner is an Somali AI-powered tool that detects and segments medical images, helping healthcare professionals analyze and diagnose conditions more accurately and efficiently.",
      link: "",
      image: "/scaner.png",
      techStacks: ["Next.js", "PostgreSQL", "Python"],
    },
    {
      title: "justo bath & body care",
      description:
        "justo bath & body care is a project I worked on that focuses on providing high-quality, natural bath and body products.",
      link: "https://www.justocosmetics.com/",
      image: "/2.png",
      techStacks: ["Next.js", "MongoDb", "Stripe", "TypeScript"],
    },
     {
      title: "Minister of Health Somalia",
      description:
        "justo bath & body care is a project I worked on that focuses on providing high-quality, natural bath and body products.",
      link: "",
      image: "/moh.png",
      techStacks: ["Next.js", "PostgreSQL", "Railway", "TypeScript", "Python"],
    },
    
    {
      title: "Startup AI",
      description:
        "Startup AI is a platform generates business ideas, Pitch Decks, market research, and more.",
      link: "https://glowing-creponne-64b50b.netlify.app/",
      image: "/startup.png",
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
      title: "Hospital Uniso",
      description:
        "Aut  oWriter.ai is an AI-powered content generation tool that helps users create high-quality documents, articles, and reports quickly and efficiently.",
      link: "https://fluffy-hotteok-dd9781.netlify.app",
      image: "/hospital_uniso.png",
      techStacks: ["Svelte", "MongoDb", "Node.js", "supabase"],
    },

   
    {
      title: "Culinary AI",
      description:
        "Culinary AI — Revolutionize your restaurant, blog, or kitchen with intelligent menu generation, personalized recipe suggestions, and dietary adaptations powered by advanced artificial intelligence.",
      link: "https://effulgent-brigadeiros-b0f624.netlify.app/",
      image: "/culinary.png",
      techStacks: ["Next.js", "MongoDb", "Stripe"],
    },
  ];
  return (
    <div>
      <h1 className="py-5 pt-10 text-sm font-bold text-gray-700">Projects</h1>
      <HoverEffect items={items} className="gap-6" />
      <div className="flex items-center justify-center text-center py-10 gap-1 text-gray-600">
        <Link to="/projects" className="text-sm font-semibold">
          <button className="bg-gray-100 text-sm text-gray-600 md:px-4 px-10 py-2 rounded-md flex gap-1 ">
            <span className="text-black font-bold">View More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
