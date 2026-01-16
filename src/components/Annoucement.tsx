const Annoucement = () => {
  return (
    <div className="w-full bg-white py-3 flex justify-center">
      <div className="relative px-5 max-w-[1020px] w-full mx-auto overflow-hidden bg-white">
        <div className="flex items-stretch">
          {/* Left accent bar */}
          {/* <div className="w-1.5 bg-gradient-to-b from-amber-400 via-emerald-500 to-amber-400"></div> */}

          {/* Main content */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 py-3">
            {/* ML/AI icon and text */}
            <div className="flex items-center gap-3 mb-2 md:mb-0">
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-blue-600"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-blue-600">
                  New Articles
                </h3>
                <p className="text-sm text-gray-600">Coming Soon</p>
              </div>
            </div>

            {/* Center line separator - only visible on desktop */}
            <div className="hidden md:block h-10 w-px bg-blue-200 mx-4"></div>

            {/* Simple message */}
            <p className="text-sm text-center md:text-left text-gray-600 flex-1 max-w-md mb-2 md:mb-0">
              Stay tuned! I'm adding articles documenting my journey as a Machine Learning Engineer.
            </p>

            {/* Close button */}
            {/* <button
              onClick={() => setIsVisible(false)}
              className="rounded-full p-1 hover:bg-gray-100 transition-colors text-gray-400"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button> */}
          </div>

          {/* Right accent bar */}
          {/* <div className="w-1.5 bg-gradient-to-b from-amber-400 via-emerald-500 to-amber-400"></div> */}
        </div>

        {/* Bottom dot pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 flex justify-center">
          <div className="flex gap-2">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor:
                    i % 3 === 0
                      ? "#3b82f6"
                      : i % 3 === 1
                      ? "#8b5cf6"
                      : "transparent",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
