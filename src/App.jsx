import { useState } from "react";
import NavBars from "./components/navbars/NavBars";
import Footers from "./components/footers/Footers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBars /> */}
      <Footers/>
    </>
  );
}

export default App;
