import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-2 rounded inline-flex items-center"
      onClick={props.onClick}
    >
      <span className="pl-2">{props.label}</span>
    </button>
  );
};

export default Button;
