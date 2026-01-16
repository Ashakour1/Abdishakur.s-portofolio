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
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
      date: "15/01/2024",
      category: "Web App",
    },
     {
      title: "Scanner AI",
      description:
        "Scanner is an Somali AI-powered tool that detects and segments medical images, helping healthcare professionals analyze and diagnose conditions more accurately and efficiently.",
      link: "",
      techStacks: ["Next.js", "PostgreSQL", "Python"],
      date: "20/03/2024",
      category: "AI Tool",
    },
    {
      title: "Startup AI",
      description:
        "Startup AI is a platform generates business ideas, Pitch Decks, market research, and more.",
      link: "https://glowing-creponne-64b50b.netlify.app/",
      techStacks: ["Next.js", "MongoDb", "Stripe"],
      date: "10/05/2024",
      category: "AI Platform",
    },
    {
      title: "Culinary AI",
      description:
        "Culinary AI — Revolutionize your restaurant, blog, or kitchen with intelligent menu generation, personalized recipe suggestions, and dietary adaptations powered by advanced artificial intelligence.",
      link: "https://effulgent-brigadeiros-b0f624.netlify.app/",
      techStacks: ["Next.js", "MongoDb", "Stripe"],
      date: "25/07/2024",
      category: "AI Tool",
    },
    {
      title: "Payment Gateway",
      description:
        "A secure and robust payment gateway solution that enables seamless online transactions with support for multiple payment methods, real-time processing, and comprehensive transaction management.",
      link: "",
      techStacks: ["Next.js", "Node.js", "Stripe", "TypeScript", "PostgreSQL"],
      date: "05/12/2024",
      category: "Payment System",
    },
    {
      title: "Manzilini",
      description:
        "Manzilini is a comprehensive platform that provides innovative solutions and services to help users achieve their goals and streamline their operations.",
      link: "https://manzilini.com",
      techStacks: ["Next.js", "React", "Node.js", "TypeScript"],
      date: "15/12/2024",
      category: "Web App",
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
