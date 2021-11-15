import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import CancelLink from "../components/Forms/CancelLink";
import InputField from "../components/Forms/InputField";
import SubmitButton from "../components/Forms/SubmitButton";

import { GlobalContext } from "../context/GlobalState";

const AddZoo = () => {
  let history = useHistory();

  const { addZoo, zoos } = useContext(GlobalContext);

  const [zoo, setZoo] = useState({
    zooName: "",
    numOfVisitors: "",
    numOfAnimals: "",
    entranceFee: "",
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
        resultErrors.numOfAnimals ||
        resultErrors.entranceFee
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

  const validate = ({ zooName, numOfVisitors, numOfAnimals, entranceFee }) => {
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

    if (!entranceFee) {
      errors.entranceFee = "Entrance fee is required!";
    } else if (!regex.test(entranceFee)) {
      errors.entranceFee = "Invalid entrance fee";
    }

    return errors;
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputField
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="zooName"
            inputFiledTitle="Zoo name"
            inputFiledPlaceholder="Enter zoo name"
          />
          <InputField
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="numOfVisitors"
            inputFiledTitle="Num of visitors"
            inputFiledPlaceholder="Enter num of visitors"
          />
          <InputField
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="numOfAnimals"
            inputFiledTitle="Num of animals"
            inputFiledPlaceholder="Enter num of animals"
          />
          <InputField
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="entranceFee"
            inputFiledTitle="Entrance fee"
            inputFiledPlaceholder="Enter entrance fee"
          />
          <SubmitButton buttonText="Add zoo" />
          <CancelLink />
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddZoo;
