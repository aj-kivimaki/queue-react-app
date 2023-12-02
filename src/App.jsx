import { useState, useRef } from "react";
import Input from "./components/Input";
import Label from "./components/Label";

function App() {
  const [array, setArray] = useState([]);
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current.value === "") return;
    const newArray = [...array];
    newArray.unshift(inputRef.current.value);
    setArray(newArray);
    inputRef.current.value = "";
  };

  const handleRemove = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  };

  const clear = () => {
    setArray([]);
    inputRef.current.value = "";
  };

  return (
    <div className="app">
      <main className="main">
        <h1>QUEUE →</h1>
        <Input
          handleInput={handleInput}
          handleRemove={handleRemove}
          handleClear={clear}
          inputRef={inputRef}
        />
        <Label array={array} />
      </main>
    </div>
  );
}

export default App;
