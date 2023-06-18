import React from "react";
import "./Screen.css";

function Screen(props) {
  console.log(props.input);
  return (
    <div>
      <div className="screen">
        <p className="input">{props.input}</p>
      </div>
    </div>
  );
}

export default Screen;
