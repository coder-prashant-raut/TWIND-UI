const Hero4 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1E40AF" fillOpacity="0.5" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192V0H0Z"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fadeIn">
            Next-Gen UI Library
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 animate-fadeIn delay-150">
            Unlock the power of seamless design with beautifully crafted UI components built for modern web applications.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero4;
  export const hero4Code = `
  const Hero4 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1E40AF" fillOpacity="0.5" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192V0H0Z"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fadeIn">
            Next-Gen UI Library
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 animate-fadeIn delay-150">
            Unlock the power of seamless design with beautifully crafted UI components built for modern web applications.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero4;
  `