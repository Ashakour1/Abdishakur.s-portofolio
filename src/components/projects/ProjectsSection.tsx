import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

type ProjectItem = {
  title: string;
  description: string;
  link: string;
  date: string;
  category: string;
};

const Projects = () => {
  const items: ProjectItem[] = [
    {
      title: "Azm",
      description:
        "Azm helps you turn goals into tasks, track progress, organize projects, and collaborate with friends, achieve more, smarter and faster!",
      link: "https://azmai.app/",
      date: "15/01/2024",
      category: "AI Tool",
    },
    {
      title: "Scanner AI",
      description:
        "Scanner is an Somali AI-powered tool that detects and segments medical images, helping healthcare professionals analyze and diagnose conditions more accurately and efficiently.",
      link: "",
      date: "20/03/2024",
      category: "AI Tool",
    },
    {
      title: "Startup AI",
      description:
        "Startup AI is a platform generates business ideas, Pitch Decks, market research, and more.",
      link: "",
      date: "10/05/2024",
      category: "AI Platform",
    },
    {
      title: "Culinary AI",
      description:
        "Culinary AI - Revolutionize your restaurant, blog, or kitchen with intelligent menu generation, personalized recipe suggestions, and dietary adaptations powered by advanced artificial intelligence.",
      link: "",
      date: "25/07/2024",
      category: "AI Tool",
    },
    {
      title: "Relia Pay",
      description:
        "A secure and robust payment gateway solution that enables seamless online transactions with support for multiple payment methods, real-time processing, and comprehensive transaction management.",
      link: "",
      date: "05/12/2024",
      category: "Payment System",
    },
    {
      title: "Manzilini",
      description:
        "Manzilini is a comprehensive platform that provides innovative solutions and services to help users achieve their goals and streamline their operations.",
      link: "https://manzilini.com",
      date: "15/12/2024",
      category: "Web App",
    },
  ];

  return (
    <section className="py-10 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-lg font-semibold text-gray-900">Projects</h1>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-700"
        >
          <span>View all projects</span>
          <FiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-gray-500">{item.date}</span>
                  <span className="rounded-md border border-blue-300 px-2 py-0.5 font-medium text-blue-600">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-700"
                >
                  <span>Visit</span>
                  <FiArrowUpRight />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
