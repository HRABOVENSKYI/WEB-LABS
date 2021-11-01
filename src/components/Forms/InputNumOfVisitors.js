import React from "react";

const InputNumOfVisitors = (props) => {
  return (
    <div className="w-full  mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="numOfVisitors"
      >
        Num of visitors
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        value={props.zoo.numOfVisitors}
        onChange={(e) => props.handleOnChange("numOfVisitors", e.target.value)}
        type="text"
        placeholder="Enter num of visitors"
      />
      <small className="text-red-600">{props.errors.numOfVisitors}</small>
    </div>
  );
};

export default InputNumOfVisitors;
