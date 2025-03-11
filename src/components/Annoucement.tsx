const Annoucement = () => {
  return (
    <div className="w-full bg-white py-3 flex justify-center">
      <div className="relative px-5 max-w-[1020px] w-full mx-auto overflow-hidden bg-white">
        <div className="flex items-stretch">
          {/* Left accent bar */}
          {/* <div className="w-1.5 bg-gradient-to-b from-amber-400 via-emerald-500 to-amber-400"></div> */}

          {/* Main content */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 py-3">
            {/* Simplified moon icon and text */}
            <div className="flex items-center gap-3 mb-2 md:mb-0">
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-amber-500"
                >
                  <path
                    d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 11.0899 13.0461 14 16.636 14C18.3238 14 19.9425 13.3295 21.136 12.136C20.3318 16.6193 16.4554 20 11.818 20C6.75992 20 2.63636 15.8764 2.63636 10.8184C2.63636 6.18094 5.9996 2.30678 10.4763 1.5C9.28281 1.69628 8.15247 2.2072 7.18182 3C8.37529 3 9.54285 3.31607 10.5455 3.90909C10.5455 3.90909 11.5 4.5 12 3Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <h3 className="font-arabic text-xl font-medium text-amber-600">
                  رمضان مبارك
                </h3>
                <p className="text-sm text-blue-700">Ramadan Mubarak</p>
              </div>
            </div>

            {/* Center line separator - only visible on desktop */}
            <div className="hidden md:block h-10 w-px bg-amber-200 mx-4"></div>

            {/* Simple message */}
            <p className="text-sm text-center md:text-left text-gray-600 flex-1 max-w-md mb-2 md:mb-0">
              Wishing you a blessed month of reflection, growth, and spiritual
              connection.
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
                      ? "#10b981"
                      : i % 3 === 1
                      ? "#f59e0b"
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
