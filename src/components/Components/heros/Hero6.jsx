const Hero6 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 opacity-80 animate-gradientMove"></div>
        
        {/* Glassmorphic Card */}
        <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl max-w-4xl text-center animate-fadeIn">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Next-Gen UI Experience
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Elevate your design game with interactive, seamless, and dynamic UI components built for the modern web.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold rounded-full shadow-lg hover:opacity-90 transition-all">
              Explore Now
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </section>
    );
  };
  
  export default Hero6;
  export const hero6Code = `
  const Hero6 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 opacity-80 animate-gradientMove"></div>
        
        {/* Glassmorphic Card */}
        <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl max-w-4xl text-center animate-fadeIn">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Next-Gen UI Experience
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Elevate your design game with interactive, seamless, and dynamic UI components built for the modern web.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold rounded-full shadow-lg hover:opacity-90 transition-all">
              Explore Now
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </section>
    );
  };
  
  export default Hero6;
  `