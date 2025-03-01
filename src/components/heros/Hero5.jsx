const Hero5 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 opacity-90"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 opacity-30 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fadeIn">
            The Future of UI Design
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 animate-fadeIn delay-150">
            Craft stunning, responsive, and modern web interfaces effortlessly with our next-gen UI components.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold rounded-full shadow-lg hover:opacity-90 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero5;
  