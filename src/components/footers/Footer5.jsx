const Footer5 = () => {
    return (
      <footer className="bg-white text-gray-800 py-10 border-t border-gray-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <div className="text-2xl font-extrabold tracking-wide font-mono">
            BrandName
          </div>
  
          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0 flex space-x-6 text-lg font-medium">
            <a href="#" className="hover:text-gray-500 transition-all">Home</a>
            <a href="#" className="hover:text-gray-500 transition-all">About</a>
            <a href="#" className="hover:text-gray-500 transition-all">Services</a>
            <a href="#" className="hover:text-gray-500 transition-all">Contact</a>
          </nav>
  
          {/* Social Media Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-all text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-all text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-all text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-all text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>

        {/* GitHub Code Link Section */}
      <div className="text-center mt-6">
        <a
          href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/footers/Footer5.jsx"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
        >
          GitHub Code
         </a>
      </div>
      </footer>
    );
  };
  
  export default Footer5;
  