import { useState } from "react";
import NavBars from "./components/navbars/NavBars";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBars />
    </>
  );
}

export default App;
