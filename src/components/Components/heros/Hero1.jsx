const Hero1 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-6xl text-center px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            Build Stunning Interfaces with Ease
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fadeIn delay-150">
            A powerful and flexible UI library for modern web applications.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-indigo-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
      </section>
    );
  };
  
  export default Hero1;
  export const hero1Code = `
  const Hero1 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-6xl text-center px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            Build Stunning Interfaces with Ease
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fadeIn delay-150">
            A powerful and flexible UI library for modern web applications.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-indigo-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
      </section>
    );
  };
  
  export default Hero1;
  `