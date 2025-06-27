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
    {
      title: "Jamhuuriya (Jutsa)",
      description: "JUTSA Management System enables efficient work management.",
      link: "https://itday.jtech.so/",
      image: "/jutsa-mn.png",
      techStacks: ["React", "MongoDb", "Node.js", ""],
    },

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
        "A website that allows you to book an appointment with a doctor.",
      link: "https://www.somatlas.dev/",
      image: "/uniso.png",
      techStacks: ["React", "MongoDb", "Node.js", "supabase"],
    },
    {
      title: "Jamhuuriya (Jutsa)",
      description: "JUTSA Management System enables efficient work management.",
      link: "https://itday.jtech.so/",
      image: "/jutsa.png",
      techStacks: ["React", "MongoDb", "Node.js", ""],
    },
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
