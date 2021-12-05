import React from "react";

const SubmitButton = (props) => {
  return (
    <div className="flex justify-around">
      <button className="align-self-center block mt-5 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
        {props.buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
