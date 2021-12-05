import React from "react";

const SelectInput = (props) => {
  return (
    <div className="w-full  mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.inputFieldName}
      >
        {props.inputFieldTitle}
      </label>
      <select
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        value={props.zoo[props.inputFieldName]}
        onChange={(e) =>
          props.handleOnChange(props.inputFieldName, e.target.value)
        }
      >
        {props.zooTypes.map((zt) => (
          <option key={zt}>{zt}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
