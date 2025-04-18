import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar3() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl px-8 py-4 rounded-b-2xl border-b-4 border-yellow-400">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-4xl font-extrabold tracking-wide">
            SPECTRA
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-10 font-semibold text-lg">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Features</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-5">
            {/* Theme Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col space-y-5 text-center py-8 bg-indigo-700 text-white font-bold rounded-b-2xl">
            <li><a href="#" className="block hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="block hover:text-yellow-300 transition">Features</a></li>
            <li><a href="#" className="block hover:text-yellow-300 transition">Pricing</a></li>
            <li><a href="#" className="block hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* GitHub Code Link Section */}
      <div className="text-center mt-6">
        <a
          href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/navbars/NavBar3.jsx"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
        >
          GitHub Code
         </a>
      </div>
    </div>
  );
}