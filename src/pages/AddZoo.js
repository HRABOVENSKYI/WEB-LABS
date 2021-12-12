import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import CustomLink from "../components/Forms/CancelLink";
import InputField from "../components/Forms/InputField";
import SelectInput from "../components/Forms/SelectInput";
import SubmitButton from "../components/Forms/SubmitButton";

import { GlobalContext } from "../context/GlobalState";

const AddZoo = () => {
  let history = useHistory();

  const { addZoo, zooTypes } = useContext(GlobalContext);

  const [zoo, setZoo] = useState({
    name: "",
    numOfVisitors: "",
    numOfAnimals: "",
    type: zooTypes[0],
    entranceFee: "",
  });

  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const resultErrors = validate(zoo);
    setErrors(resultErrors);
    if (
      !(
        resultErrors.name ||
        resultErrors.numOfVisitors ||
        resultErrors.numOfAnimals ||
        resultErrors.entranceFee
      )
    ) {
      setZoo(zoo);
      addZoo(zoo);
      history.push("/");
    }
  };

  const handleOnChange = (zooKey, newValue) => {
    setZoo({ ...zoo, [zooKey]: newValue });
  };

  const validate = ({
    name,
    numOfVisitors,
    numOfAnimals,
    entranceFee,
  }) => {
    const errors = {};
    const regex = /^\d*[1-9]\d*$/;

    if (!name) {
      errors.name = "Zoo name is required!";
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
      <div className="w-full max-w-md container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputField
            zoo={zoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="name"
            inputFieldTitle="Zoo name"
            inputFieldPlaceholder="Enter zoo name"
          />
          <div className="flex space-x-8 firm-control w-full">
            <InputField
              zoo={zoo}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="numOfVisitors"
              inputFieldTitle="Num of visitors"
              inputFieldPlaceholder="Enter num of visitors"
            />
            <InputField
              zoo={zoo}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="numOfAnimals"
              inputFieldTitle="Num of animals"
              inputFieldPlaceholder="Enter num of animals"
            />
          </div>
          <div className="flex space-x-8 firm-control w-full">
            <SelectInput
              zoo={zoo}
              zooTypes={zooTypes}
              handleOnChange={handleOnChange}
              inputFieldName="type"
              inputFieldTitle="Zoo type"
            />
            <InputField
              zoo={zoo}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="entranceFee"
              inputFieldTitle="Entrance fee"
              inputFieldPlaceholder="Enter entrance fee"
            />
          </div>
          <SubmitButton buttonText="Add zoo" />
          <CustomLink to="/" name="Cancel" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddZoo;
