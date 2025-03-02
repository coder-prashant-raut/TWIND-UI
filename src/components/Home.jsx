const Home = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
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
  
        {/* Components Information Section */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">Available Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Buttons */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Buttons</h3>
              <p className="text-gray-400">
                A variety of modern buttons with different animations, styles, and hover effects.
              </p>
            </div>
  
            {/* Cards */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Cards</h3>
              <p className="text-gray-400">
                Sleek and stylish card components designed for showcasing content beautifully.
              </p>
            </div>
  
            {/* Navbar */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Navigation Bars</h3>
              <p className="text-gray-400">
                Responsive and elegant navbars to enhance user navigation experience.
              </p>
            </div>
  
            {/* Hero Sections */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Hero Sections</h3>
              <p className="text-gray-400">
                Stunning hero sections with eye-catching designs for impactful landing pages.
              </p>
            </div>
  
            {/* Footers */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Footers</h3>
              <p className="text-gray-400">
                Minimalistic and functional footers to complete your website layout.
              </p>
            </div>
  
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  