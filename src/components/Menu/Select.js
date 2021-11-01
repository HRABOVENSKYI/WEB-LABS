import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Select = () => {
  const { orderZoos } = useContext(GlobalContext);

  const onOrderChange = (value) => {
    console.log("ON ORDER CHANGE");
    const orderByField = value;
    orderZoos(orderByField);
  };

  return (
    <>
      <label className="block mb-1 text-gray-600 font-light">Order by</label>
      <select
        className="border bg-white rounded px-4 py-2 outline-none focus:border-green-500"
        onChange={(e) => onOrderChange(e.target.value)}
      >
        <option className="py-1" value="none">
          none
        </option>
        <option className="py-1" value="numOfVisitors">
          num of visitors
        </option>
        <option className="py-1" value="numOfAnimals">
          num of animals
        </option>
      </select>
    </>
  );
};

export default Select;
