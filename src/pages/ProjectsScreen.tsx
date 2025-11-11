// import Project from "./Project";
// import { ProjectsData } from "../../data/projects-data";
import { AiFillProject } from "react-icons/ai";
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
      title: "Hospital UNISO",
      description:
        "Hospital Uniso, a leading specialized private hospital in Mogadishu, Somalia.",
      link: "https://www.somatlas.dev/",
      image: "/hospital_uniso.png",
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
    // {
    //   title: "Scanner AI",
    //   description:
    //     "Scanner is an Somali AI-powered tool that detects and segments medical images, helping healthcare professionals analyze and diagnose conditions more accurately and efficiently.",
    //   link: "",
    //   image: "/scaner.png",
    //   techStacks: ["Next.js", "PostgreSQL", "Python"],
    // },
    // {
    //   title: "Culinary AI",
    //   description:
    //     "Culinary AI — Revolutionize your restaurant, blog, or kitchen with intelligent menu generation, personalized recipe suggestions, and dietary adaptations powered by advanced artificial intelligence.",
    //   link: "https://effulgent-brigadeiros-b0f624.netlify.app/",
    //   image: "/culinary.png",
    //   techStacks: ["Next.js", "MongoDb", "Stripe"],
    // },

    {
      title: "PeetesAutoSales",
      description:
        "Peetes Auto Sales is a car dealership that sells used cars.",
      link: "https://www.somatlas.dev/",
      image: "/landing4.png",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
    },
    {
      title: "Aslos",
      description:
        "A ecommerce system that allows you to sell your products online.",
      link: "https://aslos.so",
      image: "/landing5.png",
      techStacks: ["Next.js", "MongoDb", "Stripe", "TypeScript"],
    },

    {
      title: "Hospital UNISO",
      description:
        "Hospital Uniso, a leading specialized private hospital in Mogadishu, Somalia.",
      link: "https://www.somatlas.dev/",
      image: "/hospital_uniso.png",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
    },
    // {
    //   title: "Jamhuuriya (Jutsa)",
    //   description: "JUTSA Management System enables efficient work management.",
    //   link: "https://itday.jtech.so/",
    //   image: "/jutsa.png",
    //   techStacks: ["React", "MongoDb", "Node.js", ""],
    // },
  ];
  return (
    <main className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5">
        <div className="flex items-center text-center gap-1 text-gray-600">
          <AiFillProject className="text-xl" />
          <h1 className="font-bold text-sm">My Projects</h1>
        </div>
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
