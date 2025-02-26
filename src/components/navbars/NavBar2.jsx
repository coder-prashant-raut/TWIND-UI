import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar2() {
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
      <nav className="bg-gray-900 text-white shadow-lg px-6 py-4 rounded-b-xl border-b-4 border-blue-500">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-3xl font-extrabold tracking-wider">
            NEXUS
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-lg">
            <li><a href="#" className="hover:text-blue-400 transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Teams</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 text-center py-6 bg-gray-800 text-white font-semibold rounded-b-lg">
            <li><a href="#" className="block hover:text-blue-400 transition">Dashboard</a></li>
            <li><a href="#" className="block hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#" className="block hover:text-blue-400 transition">Teams</a></li>
            <li><a href="#" className="block hover:text-blue-400 transition">Contact</a></li>
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