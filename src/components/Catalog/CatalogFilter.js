import React, { useContext } from "react";
import FILTER_KEYS from "../../context/FilterKeys";
import { GlobalContext } from "../../context/GlobalState";

const CatalogFilter = (props) => {
  const { addFilter } = useContext(GlobalContext);

  const onChangeHandler = (event) => {
    addFilter(FILTER_KEYS.ORDER_BY, {
      property: event.target.id,
      order: event.target.value,
    });
  };

  return (
    <div className="mr-12 mb-12">
      <label className="block mb-1 text-gray-600 font-light">
        {props.name}
      </label>
      <select
        id={props.propertyName}
        className="border bg-white rounded px-8 py-1 outline-none focus:border-green-500"
        onChange={onChangeHandler}
      >
        {props.options.map((option) => (
          <option className="py-1" key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CatalogFilter;
