import { useState } from "react";
import NavBars from "./components/navbars/NavBars";
import Footers from "./components/footers/Footers";
import Cards from "./components/cards/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBars /> */}
      <Footers/>
      <Cards/>
    </>
  );
}

export default App;
