import React from "react";

const InputNumOfAnimals = (props) => {
  return (
    <div className="w-full  mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="numOfAnimals"
      >
        Num of animals
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        value={props.zoo.numOfAnimals}
        onChange={(e) => props.handleOnChange("numOfAnimals", e.target.value)}
        type="text"
        placeholder="Enter num of animals"
      />
      <small className="text-red-600">{props.errors.numOfAnimals}</small>
    </div>
  );
};

export default InputNumOfAnimals;
