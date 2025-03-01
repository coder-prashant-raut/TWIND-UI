const Hero2 = () => {
    return (
      <section className="relative w-full h-screen bg-gray-900 text-white flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Elevate Your Web Experience
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 animate-fadeIn delay-150">
              A modern and elegant UI library crafted for seamless design and functionality.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 animate-fadeIn delay-300">
              <button className="px-6 py-3 bg-blue-500 font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 border border-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-gray-900 transition-all">
                Explore
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fadeIn delay-500">
            <img src="https://source.unsplash.com/600x400/?technology,code" alt="Hero Image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero2;