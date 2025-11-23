import { useEffect } from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const ToolsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      name: "My Computer",
      category: "Workstation",
      description: "Primary setup for deep work and longer coding sessions.",
    },
    {
      name: "MacBook M4 Pro",
      category: "Laptop",
      description: "Mobile powerhouse for development on the go and travel days.",
    },
    {
      name: "iPhone 15 Pro Max",
      category: "Phone",
      description: "Everyday driver for communication, quick captures, and testing mobile flows.",
    },
    {
      name: "HP 27\" Monitor",
      category: "Display",
      description: "27-inch HP monitor for a clean dual-screen workspace.",
    },
    {
      name: "Omni Book 32\"",
      category: "Display",
      description: "Large-format 32-inch screen when I need extra room for design and dashboards.",
    },
    {
      name: "Apple Watch",
      category: "Wearable",
      description: "Keeps me on schedule with alerts, timers, and quick fitness check-ins.",
    },
    {
      name: "Wiwu Bag",
      category: "Carry",
      description: "Everyday carry bag to keep the essentials organized and protected.",
    },
    {
      name: "Apple Pro",
      category: "Audio",
      description: "Noise-cancelling buds for focus time and calls anywhere.",
    },
  ];

  return (
    <main className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5">
        <div className="flex items-center text-center gap-1 text-gray-600">
          <HiOutlineWrenchScrewdriver className="text-xl" />
          <h1 className="font-bold text-sm">Tools</h1>
        </div>
        <p>Daily gear I rely on to stay productive, organized, and connected.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border rounded-2xl bg-white p-5 shadow-sm hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {tool.category}
                </p>
                <h2 className="text-lg font-bold text-black">{tool.name}</h2>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">{tool.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ToolsScreen;
