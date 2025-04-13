import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-300">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Brand Name */}
      <div className="text-2xl font-extrabold tracking-wide font-mono">
        TWIND-UI
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 md:mt-0 flex space-x-6 text-lg font-medium">
        <a href="#" className="hover:text-gray-500 transition-all">
          Home
        </a>
        <a href="#" className="hover:text-gray-500 transition-all">
          About
        </a>
        <a href="#" className="hover:text-gray-500 transition-all">
          Services
        </a>
        <a href="#" className="hover:text-gray-500 transition-all">
          Contact
        </a>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-4 md:mt-0 flex space-x-4">
        <a href="#" className="text-white transition-all text-xl">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-white  transition-all text-xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white transition-all text-xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white transition-all text-xl">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 text-center text-white text-sm">
      &copy; {new Date().getFullYear()} BrandName. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer