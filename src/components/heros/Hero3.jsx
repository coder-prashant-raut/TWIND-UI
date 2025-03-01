const Hero3 = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,landscape')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg animate-fadeIn">
            Discover the Future
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fadeIn delay-150 max-w-2xl mx-auto">
            Experience cutting-edge design and performance like never before with our powerful UI library.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn delay-300">
            <button className="px-6 py-3 bg-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero3;
  