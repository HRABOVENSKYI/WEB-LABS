import React from "react";
import zoo from "../../images/nature.svg";

const Heading = (props) => {
  return (
    <div className="flex p-24 rounded-lg border-solid border-4 border-green-300">
      <img src={zoo} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{props.zoo.zooName}</p>
        <p className="text-lg text-black font-normal my-4">
          Num of visitors: {props.zoo.numOfVisitors}
        </p>
        <p className="text-lg text-balck font-normal">
          Num of animals: {props.zoo.numOfAnimals}
        </p>
      </div>
    </div>
  );
};

export default Heading;
