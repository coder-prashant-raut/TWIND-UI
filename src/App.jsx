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
import Home from "./components/Home";
import Heros from "./components/Components/heros/Heros";
import Navbar from "./components/twindinner/Navbar";
import Footer from "./components/twindinner/Footer";
import SideNav from "./components/SideNav/SideNav";
import ThemeToggle from "./components/Common/themeToggle";
// import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

const AppContent = () => {
  const location = useLocation();
  const showSideNav = location.pathname !== "/";

  return (
    <div className="bg-amber-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <Navbar />
      <div className="flex pt-16">
        {/* Show SideNav only if not on Home */}
        {showSideNav && <SideNav />}

        {/* Main content */}
        <div className="flex-1 px-4 py-6">
          {/* <ThemeToggle /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/navbar" element={<NavBars />} />
            <Route path="/components/footer" element={<Footers />} />
            <Route path="/components/card" element={<Cards />} />
            <Route path="/components/button" element={<Buttons />} />
            <Route path="/components/hero" element={<Heros />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
