import React from "react";

const InputField = (props) => {

  return (
    <div className="w-full  mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.inputFieldName}
      >
        {props.inputFiledTitle}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        value={props.zoo[props.inputFieldName]}
        onChange={(e) => props.handleOnChange(props.inputFieldName, e.target.value)}
        type="text"
        placeholder={props.inputFiledPlaceholder}
      />
      <small className="text-red-600">{props.errors[props.inputFieldName]}</small>
    </div>
  );
};

export default InputField;
