import React from "react";

function Footer({ theme }) {
  const isDark = theme === "dark";

  return (
    <footer className={`${isDark ? "bg-black text-white border-white/10" : "bg-gray-100 text-gray-800 border-gray-300"} py-10 border-t`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-extrabold tracking-wide font-mono">
          TWIND-UI
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0 flex space-x-6 text-lg font-medium">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className={`transition-all hover:underline ${
                isDark ? "hover:text-gray-400" : "hover:text-blue-500"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="mt-4 md:mt-0 flex space-x-4 text-xl">
          {["facebook-f", "twitter", "instagram", "linkedin"].map((icon) => (
            <a key={icon} href="#" className={`transition-all ${isDark ? "text-white hover:text-gray-400" : "text-gray-800 hover:text-blue-500"}`}>
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} TWIND-UI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
