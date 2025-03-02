const Footer4 = () => {
    return (
      <footer className="relative bg-black text-white py-12 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-800 via-blue-600 to-green-500 opacity-20"></div>
        
        <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold">BrandName</h2>
            <p className="mt-4 text-gray-300">Revolutionizing the digital experience.</p>
          </div>
  
          {/* Navigation */}
          <div>
            <h2 className="text-xl font-semibold">Explore</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Support</a></li>
            </ul>
          </div>
  
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold">Stay Updated</h2>
            <form className="mt-4 flex flex-col items-center md:items-start">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="mt-3 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="relative mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-linkedin"></i></a>
        </div>
        
        {/* Bottom Section */}
        <div className="relative mt-8 text-center text-gray-400 border-t border-gray-600 pt-4">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>

        {/* GitHub Code Link Section */}
      <div className="text-center mt-6">
        <a
          href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/footers/Footer4.jsx"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
        >
          GitHub Code
         </a>
      </div>

      
      </footer>
    );
  };
  
  export default Footer4;