import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 mx-2 rounded inline-flex items-center max-h-10"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
