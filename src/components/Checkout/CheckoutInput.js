import { useField } from "formik";
import React from "react";

const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full  mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.id || props.name}
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <small className="text-red-600">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default InputField;
