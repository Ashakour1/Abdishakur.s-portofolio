import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Tools = () => {

  const dailyTools = [
    {
      name: "MacBook M4 Pro",
      category: "Laptop",
      description: "Primary machine for development, design reviews, and shipping code.",
      image: "/Mac.m4",
    },
    {
      name: "iPhone 15 Pro Max",
      category: "Phone",
      description: "Daily driver for communication, quick captures, and mobile testing.",
      image: "/apple.iphone15",
    },
    {
      name: "HP 27\" Monitor",
      category: "Display",
      description: "27-inch HP monitor for a clean dual-screen workspace.",
      image: "/hp.monitor",
    },
    {
      name: "Apple Watch",
      category: "Wearable",
      description: "Alerts, timers, and health snapshots to keep me on track.",
      image: "/apple.watch",
    },
  ];

  const softwareTools = [
    {
      name: "VS Code",
      category: "Editor",
      description: "Typed tooling, GitLens, and Tailwind helpers keep the workflow fast.",
      image: "/vscode.jpg",
    },
    {
      name: "Postman",
      category: "API Testing",
      description: "Testing and debugging APIs during development.",
      image: "/postman.jpg",
    },
    {
      name: "Chrome",
      category: "Browser",
      description: "Primary browser for development and testing.",
      image: "/chrome.svg",
    },
    {
      name: "Azm",
      category: "Workspace",
      description: "Docs, tasks, and quick captures for ideas and meeting notes.",
      image: "/azm_logo.png",
    },
  ];
return  (
     <section className="mt-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Tools</p>
            <h2 className="text-lg font-semibold text-gray-900">Daily toolkit</h2>
            <p className="text-sm text-gray-600">
              Essentials and software I reach for when building and shipping.
            </p>
          </div>
          <Link
            to="/tools"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-700"
          >
            <span>View all tools</span>
            <FiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
            Daily use
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {dailyTools.map((tool) => (
              <div key={tool.name} className="flex gap-3 rounded-xl bg-white p-3">
                <div className="h-14 w-14 overflow-hidden rounded-lg bg-gray-100">
                  {tool.image ? (
                    <img
                      src={tool.image}
                      alt={tool.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase text-gray-500">
                      {tool.name.slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{tool.category}</p>
                  <p className="text-sm font-semibold text-gray-900">{tool.name}</p>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
            Software
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {softwareTools.map((tool) => (
              <div key={tool.name} className="flex gap-3 rounded-xl bg-white p-3">
                <div className="h-14 w-14 overflow-hidden rounded-lg bg-gray-100">
                  {tool.image ? (
                    <img
                      src={tool.image}
                      alt={tool.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase text-gray-500">
                      {tool.name.slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{tool.category}</p>
                  <p className="text-sm font-semibold text-gray-900">{tool.name}</p>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
)
};

export default Tools;