import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import NavBars from "./components/Components/navbars/NavBars";
import Footers from "./components/Components/footers/Footers";
import Cards from "./components/Components/cards/Cards";
import Buttons from "./components/Components/buttons/Buttons";
import Home from "./components/twindinner/Home";
import Heros from "./components/Components/heros/Heros";
import Navbar from "./components/twindinner/Navbar";
import Footer from "./components/twindinner/Footer";
import Testimonials from "./components/Components/testimonials/Testimonials";
import Loaders from "./components/Components/loaders/Loaders";
import SideNav from "./components/SideNav/sideNav";
import Documentation from "./components/Components/docs/docs";
import NotFound from "./components/NotFound/NotFound"; // 👈 Import the 404 page

// Layout component to conditionally show the sidebar
const ContentWithSidebar = ({ children, theme }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex">
      {!isHomePage && (
        <div className="hidden md:block">
          <div className="sticky top-0 mt-15 h-screen">
            <SideNav theme={theme} />
          </div>
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

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

        <ContentWithSidebar theme={theme}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/components/navbars" element={<NavBars theme={theme} />} />
            <Route path="/components/footers" element={<Footers theme={theme} />} />
            <Route path="/components/cards" element={<Cards theme={theme} />} />
            <Route path="/components/buttons" element={<Buttons theme={theme} />} />
            <Route path="/components/heros" element={<Heros theme={theme} />} />
            <Route path="/components/testimonials" element={<Testimonials theme={theme} />} />
            <Route path="/components/loaders" element={<Loaders theme={theme} />} />
            <Route path="/docs" element={<Documentation theme={theme} />} />
            
            {/* 👇 404 Catch-all route must be last */}
            <Route path="*" element={<NotFound theme={theme} />} />
          </Routes>
        </ContentWithSidebar>

        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
