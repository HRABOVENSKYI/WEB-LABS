import React from "react";
import zoo from "../../images/nature.svg";

const Heading = (props) => {
  return (
    <div className="flex p-24 rounded-lg border-solid border-4 border-green-300">
      <img src={zoo} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{props.zoo.name}</p>
        <p className="text-lg text-black font-normal my-4">
          Num of visitors: {props.zoo.numOfVisitors}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Num of animals: {props.zoo.numOfAnimals}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Type: {props.zoo.type}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Entrance fee: <b>{props.zoo.entranceFee}$</b>
        </p>
      </div>
    </div>
  );
};

export default Heading;
