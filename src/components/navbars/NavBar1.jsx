import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar1() {
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
      <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold dark:text-white">
            MyBrand
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 text-center py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
            <li><a href="#" className="block hover:text-blue-500">Home</a></li>
            <li><a href="#" className="block hover:text-blue-500">About</a></li>
            <li><a href="#" className="block hover:text-blue-500">Services</a></li>
            <li><a href="#" className="block hover:text-blue-500">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* GitHub Code Link Section */}
      <div className="text-center mt-6">
        <a
          href="https://github.com/your-repo"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
        >
          GitHub Code
         </a>
      </div>
    </div>
  );
}
