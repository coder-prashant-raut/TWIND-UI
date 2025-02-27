const Footer2 = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-800 to-blue-600 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">BrandName</h2>
            <p className="mt-4 text-gray-300">Revolutionizing the way you experience digital solutions.</p>
          </div>
  
          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold">Our Services</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Support & Maintenance</a></li>
            </ul>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-semibold">Subscribe to Our Newsletter</h2>
            <form className="mt-4 flex flex-col items-center md:items-start">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="mt-3 bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-300 border-t border-gray-500 pt-4">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>
        {/* GitHub Code Link Section */}
      <div className="text-center mt-6">
        <a
          href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/navbars/NavBar4.jsx"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
        >
          GitHub Code
         </a>
      </div>
      </footer>
    );
  };
  
  export default Footer2;
  