import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const AddZoo = () => {
  let history = useHistory();

  const { addZoo, zoos } = useContext(GlobalContext);

  const [zooName, setZooName] = useState("");
  const [numOfVisitors, setNumOfVisitors] = useState("");
  const [numOfAnimals, setNumOfAnimals] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const resultErrors = validate(zooName, numOfVisitors, numOfAnimals);
    setErrors(resultErrors);
    if (
      !(
        resultErrors.zooName ||
        resultErrors.numOfVisitors ||
        resultErrors.numOfAnimals
      )
    ) {
      const newZoo = {
        id: zoos.length + 1,
        zooName,
        numOfVisitors,
        numOfAnimals,
      };
      addZoo(newZoo);
      history.push("/");
    }
  };

  const validate = (zooName, numOfVisitors, numOfAnimals) => {
    const errors = {};
    const regex = /^\d*[1-9]\d*$/;
    if (!zooName) {
      errors.zooName = "Zoo name is required!";
    }

    if (!numOfVisitors) {
      errors.numOfVisitors = "Num of visitors is required!";
    } else if (!regex.test(numOfVisitors)) {
      errors.numOfVisitors = "Invalid num of visitors";
    }

    if (!numOfAnimals) {
      errors.numOfAnimals = "Num of animals is required!";
    } else if (!regex.test(numOfAnimals)) {
      errors.numOfAnimals = "Invalid num of animals";
    }

    return errors;
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of zoo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={zooName}
              onChange={(e) => setZooName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
            <small className="text-red-600">{errors.zooName}</small>
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="numOfVisitors"
            >
              Num of visitors
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={numOfVisitors}
              onChange={(e) => setNumOfVisitors(e.target.value)}
              type="text"
              placeholder="Enter num of visitors"
            />
            <small className="text-red-600">{errors.numOfVisitors}</small>
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="numOfAnimals"
            >
              Num of animals
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={numOfAnimals}
              onChange={(e) => setNumOfAnimals(e.target.value)}
              type="text"
              placeholder="Enter num of animals"
            />
            <small className="text-red-600">{errors.numOfAnimals}</small>
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Zoo
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddZoo;
