import { useEffect } from "react";

const ToolsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      label: "Daily use",
      items: [
        {
          name: "MacBook M4 Pro",
          category: "Laptop",
          description: "Mobile powerhouse for development on the go and travel days.",
          image: "/Mac.m4",
        },
        {
          name: "iPhone 15 Pro Max",
          category: "Phone",
          description: "Everyday driver for communication, quick captures, and testing mobile flows.",
          image: "/apple.iphone15",
        },
        {
          name: "HP 27\" Monitor",
          category: "Display",
          description: "27-inch HP monitor for a clean dual-screen workspace.",
          image: "/hp.monitor",
        },
        {
          name: "Omni Book 32\"",
          category: "Display",
          description: "Large-format 32-inch screen when I need extra room for design and dashboards.",
          image: "/hp.omnibook",
        },
        {
          name: "Apple Watch",
          category: "Wearable",
          description: "Keeps me on schedule with alerts, timers, and quick fitness check-ins.",
          image: "/apple.watch",
        },
        {
          name: "Apple Pro",
          category: "Audio",
          description: "Noise-cancelling buds for focus time and calls anywhere.",
          image: "/apple.airpods",
        },
        {
          name: "Samsung S25",
          category: "Phone",
          description: "Android device for testing apps and mobile development.",
          image: "",
        },
      ],
    },
    {
      label: "Software",
      items: [
        {
          name: "VS Code",
          category: "Editor",
          description: "Main editor with TypeScript tooling, GitLens, and Tailwind helpers.",
          image: "vscode.jpg",
        },
        {
          name: "Azm",
          category: "Workspace",
          description: "Docs, tasks, and quick captures for ideas and meeting notes.",
          image: "azm_logo.png",
        },
        // {
        //   name: "Figma",
        //   category: "Design",
        //   description: "Rapid UI mockups before building components.",
        //   image: "",
        // },
        // {
        //   name: "MyM",
        //   category: "PM",
        //   description: "Issue tracking and sprints to keep shipping on schedule.",
        //   image: "",
        // },
         {
          name: "Xcode",
          category: "IDE",
          description: "IDE for iOS and macOS app development and testing.",
          image: "xcode.jpg",
        },
        {
          name: "Postman",
          category: "API Testing",
          description: "Testing and debugging APIs during development.",
          image: "postman.jpg",
        },
        {
          name: "Chrome",
          category: "Browser",
          description: "Primary browser for development and testing.",
          image: "chrome.svg",
        },
        {
          name: "GitHub",
          category: "Version Control",
          description: "Source code management and collaboration platform.",
          image: "",
        },
         {
          name: "Visual Studio Code",
          category: "Editor",
          description: "C# and .NET development with powerful extensions.",
          image: "vs.png",
        }
        ,{
          name: "Android Studio",
          category: "IDE",
          description: "Comprehensive IDE for Android app development and testing.",
          image: "android.studio",
        },
        {
          name: "PyCharm",
          category: "IDE",
          description: "Python development with intelligent code assistance.",
          image: "pycharm.png",
        },
        {
          name: "word",
          category: "Document",
          description: "Document creation and editing for various purposes.",
          image: "word.png",
        },
        {
          name: "cursor",
          category: "Editor",
          description: "AI-powered coding assistant to boost productivity.",
          image: "cursor.svg",
        }
        
        

      ],
    },
  ];

  return (
    <main className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5">
        <h1 className="font-bold text-sm text-gray-700">Tools</h1>
        <p>Daily gear I rely on to stay productive, organized, and connected.</p>
      </div>
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.label} className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {section.label}
            </p>
            {section.items.map((tool) => (
              <div key={tool.name} className="flex flex-col gap-3 rounded-xl p-3 sm:flex-row">
                <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
                  {tool.image ? (
                    <img
                      src={tool.image}
                      alt={tool.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white text-xs font-semibold uppercase text-gray-500">
                      {tool.name.slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    {tool.category}
                  </p>
                  <h2 className="text-lg font-medium text-black">{tool.name}</h2>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default ToolsScreen;
