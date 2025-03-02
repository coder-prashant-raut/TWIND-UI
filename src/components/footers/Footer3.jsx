const Footer3 = () => {
    return (
      <footer className="bg-gradient-to-r from-indigo-900 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?technology)' }}></div>
        
        <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">BrandName</h2>
            <p className="mt-4 text-gray-300">Innovating digital solutions for a better tomorrow.</p>
          </div>
  
          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold">Our Services</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">AI & Automation</a></li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all">Contact</a></li>
            </ul>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-semibold">Subscribe to Our Newsletter</h2>
            <form className="mt-4 flex flex-col items-center md:items-start">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="mt-3 bg-white text-indigo-700 px-6 py-2 rounded-md hover:bg-gray-200 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
        
        {/* Social Media Links */}
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
          href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/footers/Footer3.jsx"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
        >
          GitHub Code
         </a>
      </div>
      </footer>
    );
  };
  
  export default Footer3;