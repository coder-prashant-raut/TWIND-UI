import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTemplatesDropdownOpen, setIsTemplatesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Navbar", route: "/navbars" },
    { name: "Buttons", route: "/buttons" },
    { name: "Cards", route: "/cards" },
    { name: "Footers", route: "/footers" },
    { name: "Heros", route: "/heros" },
    { name: "Forms", route: "/forms" },
  ];

  return (
    <nav    style={{ fontFamily: "'Inter', sans-serif" }}
    className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md ${
      scrolled
        ? theme === "dark"
          ? "bg-black/80 text-white shadow-md border-b border-white/10 mt-4 mx-4 md:mx-40 rounded-xl"
          : "bg-white/80 text-black shadow-md border-b border-gray-200 mt-4 mx-4 md:mx-40 rounded-xl"
        : theme === "dark"
        ? " text-white border-transparent"
        : " text-black border-transparent"
    }`}
    
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wider">
  <span className={` ${
  theme ==='dark'
    ? " text-white"
    : " text-gray-900"
}`}>Brahma</span>
  <span className="ml-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-md dark:text-transparent">
    UI
  </span>
</h1>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Components Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md transition hover:bg-blue-600 hover:text-white"  >
              Components <FaChevronDown />
            </button>
            <div
              className={`${
                isDropdownOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              } absolute left-0 w-48 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md mt-2 transition-all duration-300 overflow-hidden`}
            >
              <ul>
                {navLinks.map(({ name, route }) => (
                  <li key={name}>
                    <NavLink
                      to={route}
                      className="block px-4 py-2 text-sm font-medium hover:bg-blue-500 hover:text-white"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Templates Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsTemplatesDropdownOpen(true)}
            onMouseLeave={() => setIsTemplatesDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md transition hover:bg-blue-600 hover:text-white">
              Templates <FaChevronDown />
            </button>
            <div
              className={`${
                isTemplatesDropdownOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              } absolute left-0 w-48 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md mt-2 transition-all duration-300 overflow-hidden`}
            >
              <ul>
                {["Template 1", "Template 2", "Template 3"].map((name, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={`/template${idx + 1}`}
                      className="block px-4 py-2 text-sm font-medium hover:bg-blue-500 hover:text-white"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Theme & Mobile Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full transition bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-yellow-300"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-2 bg-white dark:bg-black text-black dark:text-white">
          {/* Components Dropdown */}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer px-2 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">
              Components <FaChevronDown className="group-open:rotate-180 transition" />
            </summary>
            <ul className="pl-4 mt-1 space-y-1">
              {navLinks.map(({ name, route }) => (
                <li key={name}>
                  <NavLink
                    to={route}
                    className="block px-2 py-1 rounded hover:bg-blue-500 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>

          {/* Templates Dropdown */}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer px-2 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">
              Templates <FaChevronDown className="group-open:rotate-180 transition" />
            </summary>
            <ul className="pl-4 mt-1 space-y-1">
              {["Template 1", "Template 2", "Template 3"].map((name, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/template${idx + 1}`}
                    className="block px-2 py-1 rounded hover:bg-blue-500 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
