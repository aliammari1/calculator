import React from "react";
import "./NumberDisplay.css";

function Number() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "="];
  const buttons = [];
  for (let i = 0; i < numbers.length; i++) {
    buttons.push(<button className={"btn"}>{numbers[i]}</button>);
  }
  return (
    <div>
      <div className="numbers">{buttons}</div>
    </div>
  );
}

export default Number;
