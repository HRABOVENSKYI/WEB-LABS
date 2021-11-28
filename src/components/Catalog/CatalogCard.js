import React from "react";
import { Link } from "react-router-dom";
import zoo from "../../images/nature.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

const CatalogCard = (props) => {
  const zooId = props.zoo.id;

  const dispatch = useDispatch();

  return (
    <div className="w-full bg-gray-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-800">
      <div className="mb-8">
        <img className="h-36 w-36" src={zoo} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{props.zoo.name}</p>
        <p className="text-base text-gray-300 f ont-normal">
          Num of visitors: {props.zoo.numOfVisitors}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Num of animals: {props.zoo.numOfAnimals}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Type: {props.zoo.type}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Entrance fee: <b>{props.zoo.entranceFee}$</b>
        </p>
      </div>
      <div className="flex-auto text-center pt-6">
        <Link to={`/catalog/${zooId}`} title="View more">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
            View more
          </button>
        </Link>
        <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          onClick={() => dispatch(addToCart(props.zoo))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
