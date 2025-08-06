import { AiFillProject } from "react-icons/ai";
// import Project from "./Project";
// import { ProjectsData } from "../../data/projects-data";
import { HoverEffect } from "../ui/card-hover-effect";
import { Link } from "react-router-dom";

const Projects = () => {
  const items = [
    {
      title: "justo bath & body care",
      description:
        "justo bath & body care is a project I worked on that focuses on providing high-quality, natural bath and body products.",
      link: "https://www.justocosmetics.com/",
      image: "/2.png",
      techStacks: ["Next.js", "MongoDb", "Stripe", "TypeScript"],
    },
    {
      title: "BarrowPay",
      description:
        "BarrowPay is a payment processing platform that simplifies online transactions.",
      link: "https://barrowpay.com/",
      image: "/barrow.png",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
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
      title: "AutoWriter.ai",
      description:
        "AutoWriter.ai is an AI-powered content generation tool that helps users create high-quality documents, articles, and reports quickly and efficiently.",
      link: "https://fluffy-hotteok-dd9781.netlify.app",
      image: "/Auto.png",
      techStacks: ["Svelte", "MongoDb", "Node.js", "supabase"],
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
      <div className="flex items-center text-center py-5 pt-10 gap-1 text-gray-600">
        <AiFillProject className="text-xl" />
        <h1 className="font-bold text-sm">Projects</h1>
      </div>
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
