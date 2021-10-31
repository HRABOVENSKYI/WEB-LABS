import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const EditZoo = (route) => {
  let history = useHistory();

  const { zoos, editZoo } = useContext(GlobalContext);

  const [selectedZoo, setSelectedZoo] = useState({
    id: null,
    zooName: null,
    numOfVisitors: null,
    numOfAnimals: null,
  });

  const currentZooId = route.match.params.id;

  useEffect(() => {
    const zooId = currentZooId;
    const selectedZoo = zoos.find(
      (currentZooTraversal) => currentZooTraversal.id === parseInt(zooId)
    );
    setSelectedZoo(selectedZoo);
  }, [currentZooId, zoos]);

  const onSubmit = (e) => {
    e.preventDefault();
    editZoo(selectedZoo);
    history.push("/");
  };

  const handleOnChange = (zooKey, newValue) =>
    setSelectedZoo({ ...selectedZoo, [zooKey]: newValue });

  if (!selectedZoo || !selectedZoo.id) {
    return <div>Invalid Zoo ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of zoos
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedZoo.zooName}
              onChange={(e) => handleOnChange("zooName", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="numOfVisitors"
            >
              Num of visitors
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedZoo.numOfVisitors}
              onChange={(e) => handleOnChange("numOfVisitors", e.target.value)}
              type="text"
              placeholder="Enter num of visitors"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="numOfAnimals"
            >
              Num of animals
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedZoo.numOfAnimals}
              onChange={(e) => handleOnChange("numOfAnimals", e.target.value)}
              type="text"
              placeholder="Enter num of animals"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Zoo
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

export default EditZoo;
