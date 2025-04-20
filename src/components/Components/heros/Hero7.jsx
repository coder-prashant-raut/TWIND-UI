const Hero7 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-800 via-blue-700 to-indigo-600 opacity-90 animate-gradientMove"></div>
        
        {/* Floating Neon Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 opacity-40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-500 opacity-40 rounded-full blur-2xl animate-float"></div>
        
        {/* Content Box */}
        <div className="relative z-10 bg-gray-800/30 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-12 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Elevate Your Web Presence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover cutting-edge UI components that blend creativity with performance for an unmatched experience.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="px-6 py-3 bg-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-200 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero7;
  export const hero7Code = `
  const Hero7 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-800 via-blue-700 to-indigo-600 opacity-90 animate-gradientMove"></div>
        
        {/* Floating Neon Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 opacity-40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-500 opacity-40 rounded-full blur-2xl animate-float"></div>
        
        {/* Content Box */}
        <div className="relative z-10 bg-gray-800/30 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-12 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Elevate Your Web Presence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover cutting-edge UI components that blend creativity with performance for an unmatched experience.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="px-6 py-3 bg-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-200 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero7;
  `