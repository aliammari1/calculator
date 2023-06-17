import React from "react";
import "./Operator.css";

function Operator() {
  const operators = ["+", "-", "*", "/"];
  const buttons = [];
  for (let i = 0; i < operators.length; i++) {
    buttons.push(<button className={"operator"}>{operators[i]}</button>);
  }
  return <div className="operators">{buttons}</div>;
}

export default Operator;
