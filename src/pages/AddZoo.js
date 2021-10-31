import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const AddZoo = () => {
  let history = useHistory();

  const { addZoo, zoos } = useContext(GlobalContext);

  const [zooName, setZooName] = useState("");
  const [numOfVisitors, setNumOfVisitors] = useState("");
  const [numOfAnimals, setNumOfAnimals] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newZoo = {
      id: zoos.length + 1,
      zooName,
      numOfVisitors,
      numOfAnimals,
    };
    addZoo(newZoo);
    history.push("/");
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
