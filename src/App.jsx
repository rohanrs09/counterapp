import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCount] = useState(15);

  const addValue = () => {
    if(counter < 20) {
      setCount(counter + 1);
    }
  };

  const removeValue = () => {
    if(counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
      <h1>HI Everyone</h1>
      <h2>counter app : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue} >Remove Value</button>
    </>
  );
}

export default App;
