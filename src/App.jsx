import { useState } from "react";
import NavBars from "./components/navbars/NavBars";
import Footers from "./components/footers/Footers";
import Cards from "./components/cards/Cards";
import Heros from "./components/heros/heros";
import Buttons from "./components/buttons/Buttons";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBars /> */}
      {/* <Footers/>
      <Cards/> */}
      {/* <Heros/> */}
     {/* <Buttons/> */}
     <Cards/>
     
    </>
  );
}

export default App;
