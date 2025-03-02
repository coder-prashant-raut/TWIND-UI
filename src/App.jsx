import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import NavBars from "./components/navbars/NavBars";
import Footers from "./components/footers/Footers";
import Cards from "./components/cards/Cards";
import Buttons from "./components/buttons/Buttons";
import Home from "./components/Home";
import Heros from "./components/heros/Heros";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-900 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">My Website</h1>
            <ul className="flex space-x-6">
              {["Home", "Navbars", "Footers", "Cards", "Buttons", "Heros"].map(
                (page) => (
                  <li key={page}>
                    <NavLink
                      to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg transition ${
                          isActive ? "bg-blue-500" : "hover:bg-gray-700"
                        }`
                      }
                    >
                      {page}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavBars />} />
          <Route path="/footers" element={<Footers />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/heros" element={<Heros />} />
        </Routes>
      </div>

      <footer className="bg-gray-900 text-white py-10 border-t border-gray-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <div className="text-2xl font-extrabold tracking-wide font-mono">
            BrandName
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
    </Router>
  );
};

export default App;
