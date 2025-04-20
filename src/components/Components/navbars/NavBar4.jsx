import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar4() {
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
      <nav className="relative bg-white dark:bg-gray-900 shadow-md rounded-b-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-gray-900 dark:text-white">
            UI LAB
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-300">
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Features</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Contact</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun size={24} color="#FFA500" /> : <Moon size={24} color="#FFA500" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900 dark:text-white">
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col text-center py-6 bg-gray-200 dark:bg-gray-800 rounded-b-lg shadow-md">
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Home</a></li>
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Features</a></li>
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Pricing</a></li>
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Contact</a></li>
          </ul>
        )}
      </nav>

     
    </div>
  );
}
export const navbar4Code = `
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar4() {
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
      <nav className="relative bg-white dark:bg-gray-900 shadow-md rounded-b-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-gray-900 dark:text-white">
            UI LAB
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-300">
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Features</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Contact</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun size={24} color="#FFA500" /> : <Moon size={24} color="#FFA500" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900 dark:text-white">
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col text-center py-6 bg-gray-200 dark:bg-gray-800 rounded-b-lg shadow-md">
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Home</a></li>
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Features</a></li>
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Pricing</a></li>
            <li><a href="#" className="block py-3 hover:text-blue-500 dark:hover:text-blue-300 transition">Contact</a></li>
          </ul>
        )}
      </nav>

     
    </div>
  );
}
`