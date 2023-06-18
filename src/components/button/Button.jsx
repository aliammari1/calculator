import React from "react";
import "./Button.css";

function Button(props) {
  const handleClick = () => {
    console.log(props);
    props.handleClick(props.label);
  };
  return (
    <div className="btn" onClick={handleClick}>
      {props.label}
    </div>
  );
}

export default Button;
