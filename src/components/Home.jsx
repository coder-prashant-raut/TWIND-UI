const Home = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Explore Modern UI Components
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            A collection of beautifully designed, reusable, and fully responsive UI components.
          </p>
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
  