import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import zoo from "../../images/nature.svg";

const Card = (props) => {
  const { removeZoo } = useContext(GlobalContext);
  const zooId = props.zoo.id;

  return (
    <div className="w-full bg-gray-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-800">
      <div className="mb-8">
        <img className="h-36 w-36" src={zoo} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{props.zoo.zooName}</p>
        <p className="text-base text-gray-300 f ont-normal">
          Num of visitors: {props.zoo.numOfVisitors}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Num of animals: {props.zoo.numOfAnimals}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Entrance fee: <b>{props.zoo.entranceFee}$</b>
        </p>
      </div>
      <div className="flex-auto text-right pt-6">
        <Link to={`/edit/${zooId}`} title="Edit Zoo">
          <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
        </Link>
        <button
          onClick={() => removeZoo(zooId)}
          className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          title="Remove Zoo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
