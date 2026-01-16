import { HoverEffect } from "../components/ui/card-hover-effect";
import { useEffect } from "react";

const ProjectsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

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
      title: "justo bath & body care",
      description:
        "justo bath & body care is a project I worked on that focuses on providing high-quality, natural bath and body products.",
      link: "https://www.justocosmetics.com/",
      techStacks: ["Next.js", "MongoDb", "Stripe", "TypeScript"],
      date: "05/02/2024",
      category: "E-commerce",
    },
     {
      title: "Minister of Health Somalia",
      description:
        "A comprehensive healthcare management system for the Ministry of Health in Somalia.",
      link: "",
      techStacks: ["Next.js", "PostgreSQL", "Railway", "TypeScript", "Python"],
      date: "12/04/2024",
      category: "Government",
    },
    {
      title: "Hospital UNISO",
      description:
        "Hospital Uniso, a leading specialized private hospital in Mogadishu, Somalia.",
      link: "https://www.somatlas.dev/",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
      date: "08/06/2024",
      category: "Healthcare",
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
      title: "SomAtlasAPI",
      description:
        "Streamlining App Development with Key Somali Regional Data.",
      link: "https://www.somatlas.dev/",
      techStacks: ["Svelte", "MongoDb", "Node.js", "supabase"],
      date: "18/08/2024",
      category: "API",
    },
    {
      title: "AutoWriter.ai",
      description:
        "AutoWriter.ai is an AI-powered content generation tool that helps users create high-quality documents, articles, and reports quickly and efficiently.",
      link: "https://fluffy-hotteok-dd9781.netlify.app",
      techStacks: ["Svelte", "MongoDb", "Node.js", "supabase"],
      date: "22/09/2024",
      category: "AI Tool",
    },
    {
      title: "PeetesAutoSales",
      description:
        "Peetes Auto Sales is a car dealership that sells used cars.",
      link: "https://www.somatlas.dev/",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
      date: "14/10/2024",
      category: "E-commerce",
    },
    {
      title: "Aslos",
      description:
        "A ecommerce system that allows you to sell your products online.",
      link: "https://aslos.so",
      techStacks: ["Next.js", "MongoDb", "Stripe", "TypeScript"],
      date: "30/11/2024",
      category: "E-commerce",
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
    <main className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5">
        <h1 className="font-bold text-sm text-gray-700">My Projects</h1>
        <p>
          Here are some of the projects I have worked on. Click on the card to
          view more details.
        </p>
      </div>

      <HoverEffect items={items} className="gap-6" />
    </main>
  );
};

export default ProjectsScreen;
