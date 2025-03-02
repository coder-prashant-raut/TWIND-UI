import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import NavBars from "./components/navbars/NavBars";
import Footers from "./components/footers/Footers";
import Cards from "./components/cards/Cards";
import Buttons from "./components/buttons/Buttons";
import Home from "./components/Home";
import Heros from "./components/heros/Heros"


const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-900 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">My Website</h1>
            <ul className="flex space-x-6">
              {["Home", "Navbars", "Footers", "Cards", "Buttons", "Heros"].map((page) => (
                <li key={page}>
                  <NavLink 
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`} 
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-lg transition ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
                    }
                  >
                    {page}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavBars /> } />
          <Route path="/footers" element={<Footers/>} />
          <Route path="/cards" element={ <Cards/> } />
          <Route path="/buttons" element={<Buttons/>} />
          <Route path="/heros" element={<Heros/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
