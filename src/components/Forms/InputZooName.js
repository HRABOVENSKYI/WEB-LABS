import React from "react";

const Input = (props) => {
  return (
    <div className="w-full mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="name"
      >
        Name of zoos
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        value={props.zoo.zooName}
        onChange={(e) => props.handleOnChange("zooName", e.target.value)}
        type="text"
        placeholder="Enter name"
      />
      <small className="text-red-600">{props.errors.zooName}</small>
    </div>
  );
};

export default Input;
