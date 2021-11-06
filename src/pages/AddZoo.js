import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import CancelLink from "../components/Forms/CancelLink";
import InputNumOfAnimals from "../components/Forms/InputNumOfAnimals";
import InputNumOfVisitors from "../components/Forms/InputNumOfVisitors";
import InputZooName from "../components/Forms/InputZooName";
import SubmitButton from "../components/Forms/SubmitButton";

import { GlobalContext } from "../context/GlobalState";

const AddZoo = () => {
  let history = useHistory();

  const { addZoo, zoos } = useContext(GlobalContext);

  const [zoo, setZoo] = useState({
    id: null,
    zooName: "",
    numOfVisitors: "",
    numOfAnimals: "",
  });
  
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const resultErrors = validate(zoo);
    setErrors(resultErrors);
    if (
      !(
        resultErrors.zooName ||
        resultErrors.numOfVisitors ||
        resultErrors.numOfAnimals
      )
    ) {
      zoo.id = zoos.length + 1;
      setZoo(zoo);
      addZoo(zoo);
      history.push("/");
    }
  };

  const handleOnChange = (zooKey, newValue) => {
    setZoo({ ...zoo, [zooKey]: newValue });
  };

  const validate = ({ zooName, numOfVisitors, numOfAnimals }) => {
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
      <div className="w-full max-w-sm container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputZooName
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
          />
          <InputNumOfVisitors
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
          />
          <InputNumOfAnimals
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
          />
          <SubmitButton buttonText="Add zoo" />
          <CancelLink />
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddZoo;
