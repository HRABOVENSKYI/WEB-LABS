import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import zoo from "../../images/nature.svg";

const Heading = () => {
  const { zoos } = useContext(GlobalContext);

  const firstZoo = zoos[0];

  return (
    <div className="flex p-24 rounded-lg border-solid border-4 border-green-300">
      <img src={zoo} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{firstZoo.zooName}</p>
        <p className="text-lg text-black font-normal my-4">
          Num of visitors: {firstZoo.numOfVisitors}
        </p>
        <p className="text-lg text-balck font-normal">
          Num of animals: {firstZoo.numOfAnimals}
        </p>
      </div>
    </div>
  );
};

export default Heading;
