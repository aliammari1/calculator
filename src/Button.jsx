import React from "react";
import "./Button.css";

function Button(props) {
  const handleClick = () => {
    console.table(props);
    props.handleClick(props.value);
  };
  return (
    <div className="btn" onClick={handleClick}>
      {props.label}
    </div>
  );
}

export default Button;
