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
import Navbar from "./components/twindinner/Navbar"
import Footer from "./components/twindinner/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-amber-50`">
       <Navbar/>

     <div className="pt-9">
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbars" element={<NavBars />} />
          <Route path="/footers" element={<Footers />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/heros" element={<Heros />} />
        </Routes>
     </div>

<Footer/>
      </div>
    </Router>
  );
};

export default App;
