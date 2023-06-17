import React from "react";
import "./Keyboard.css";
import NumberDisplay from "../Number/NumberDisplay";
import Operator from "../Operator/Operator";

function Keyboard() {
  return (
    <div className="keyboard">
      <NumberDisplay />
      <Operator />
    </div>
  );
}

export default Keyboard;
