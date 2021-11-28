import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Wrapper from "../components/Cards/Wrapper";
import Heading from "../components/Heading/Heading";
import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/actions";

const ZooDetails = (route) => {
  let history = useHistory();

  const dispatch = useDispatch();

  const { zoos } = useContext(GlobalContext);

  const [selectedZoo, setSelectedZoo] = useState({
    id: null,
    name: null,
    numOfVisitors: null,
    numOfAnimals: null,
    type: null,
    entranceFee: null,
  });

  const currentZooId = route.match.params.id;

  useEffect(() => {
    const zooId = currentZooId;
    const selectedZoo = zoos.find(
      (currentZooTraversal) => currentZooTraversal.id === parseInt(zooId)
    );
    setSelectedZoo(selectedZoo);
  }, [currentZooId, zoos]);

  return (
    <Wrapper>
      <Heading zoo={selectedZoo} />
      <div className="flex justify-end py-8">
        <Button label="Go back" onClick={() => history.push("/catalog")} />
        <Button label="Add to cart" onClick={() => dispatch(addToCart(selectedZoo))} />
      </div>
    </Wrapper>
  );
};

export default ZooDetails;
