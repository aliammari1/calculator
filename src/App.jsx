import React, { useState } from "react";
import Screen from "./components/screen/Screen";
import Button from "./components/button/Button";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
    }
  };
  return (
    <div className="calculator">
      <Screen input={input} />
      <div className="btn-row">
        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="/" handleClick={handleClick} />
      </div>
      <div className="btn-row">
        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="*" handleClick={handleClick} />
      </div>
      <div className="btn-row">
        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />
      </div>
      <div className="btn-row">
        <Button label="0" handleClick={handleClick} />
        <Button label="c" handleClick={handleClear} />
        <Button label="=" handleClick={handleCalculate} />
        <Button label="+" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
