import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBars from "./components/navbars/NavBars";
import Footers from "./components/footers/Footers";
import Cards from "./components/cards/Cards";
import Buttons from "./components/buttons/Buttons";
import Home from "./components/twindinner/Home";
import Heros from "./components/heros/Heros";
import Navbar from "./components/twindinner/Navbar";
import Footer from "./components/twindinner/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Loaders from "./components/loaders/Loaders";

const App = () => {
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply theme to html root
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <div className="">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/navbars" element={<NavBars theme={theme}/>} />
            <Route path="/footers" element={<Footers theme={theme} />} />
            <Route path="/cards" element={<Cards theme={theme} />} />
            <Route path="/buttons" element={<Buttons theme={theme}/>} />
            <Route path="/heros" element={<Heros theme={theme} />} />
            <Route path="/testimonials" element={<Testimonials theme={theme} />} />
            <Route path="/loaders" element={<Loaders theme={theme} />} />
          </Routes>
        </div>

        <Footer theme={theme} />

      </div>
    </Router>
  );
};

export default App;
