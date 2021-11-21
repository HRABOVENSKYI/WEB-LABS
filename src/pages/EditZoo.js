import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CancelLink from "../components/Forms/CancelLink";
import InputField from "../components/Forms/InputField";
import SubmitButton from "../components/Forms/SubmitButton";
import SelectInput from "../components/Forms/SelectInput";

import { GlobalContext } from "../context/GlobalState";

const EditZoo = (route) => {
  let history = useHistory();

  const { zoos, editZoo, zooTypes } = useContext(GlobalContext);

  const [selectedZoo, setSelectedZoo] = useState({});

  const [errors, setErrors] = useState({});

  const currentZooId = route.match.params.id;

  const validate = (selectedZoo) => {
    const errors = {};
    const regex = /^\d*[1-9]\d*$/;

    if (!selectedZoo.name) {
      errors.name = "Zoo name is required!";
    }

    if (!selectedZoo.numOfVisitors) {
      errors.numOfVisitors = "Num of visitors is required!";
    } else if (!regex.test(selectedZoo.numOfVisitors)) {
      errors.numOfVisitors = "Invalid num of visitors";
    }

    if (!selectedZoo.numOfAnimals) {
      errors.numOfAnimals = "Num of animals is required!";
    } else if (!regex.test(selectedZoo.numOfAnimals)) {
      errors.numOfAnimals = "Invalid num of animals";
    }

    if (!selectedZoo.entranceFee) {
      errors.entranceFee = "Entrance fee is required!";
    } else if (!regex.test(selectedZoo.entranceFee)) {
      errors.entranceFee = "Invalid entrance fee";
    }

    return errors;
  };

  useEffect(() => {
    const zooId = currentZooId;
    const selectedZoo = zoos.find(
      (currentZooTraversal) => currentZooTraversal.id === parseInt(zooId)
    );
    setSelectedZoo(selectedZoo);
  }, [currentZooId, zoos]);

  const onSubmit = (e) => {
    e.preventDefault();
    const resultErrors = validate(selectedZoo);
    setErrors(resultErrors);
    if (
      !(
        resultErrors.name ||
        resultErrors.numOfVisitors ||
        resultErrors.numOfAnimals ||
        resultErrors.entranceFee
      )
    ) {
      editZoo(selectedZoo);
      history.push("/");
    }
  };

  const handleOnChange = (zooKey, newValue) =>
    setSelectedZoo({ ...selectedZoo, [zooKey]: newValue });

  if (!selectedZoo || !selectedZoo.id) {
    return <div>Invalid Zoo ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-md container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputField
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="name"
            inputFieldTitle="Zoo name"
            inputFieldPlaceholder="Enter zoo name"
          />
          <div className="flex space-x-8 firm-control w-full">
            <InputField
              zoo={selectedZoo}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="numOfVisitors"
              inputFieldTitle="Num of visitors"
              inputFieldPlaceholder="Enter num of visitors"
            />
            <InputField
              zoo={selectedZoo}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="numOfAnimals"
              inputFieldTitle="Num of animals"
              inputFieldPlaceholder="Enter num of animals"
            />
          </div>
          <div className="flex space-x-8 firm-control w-full">
            <SelectInput
              zoo={selectedZoo}
              zooTypes={zooTypes}
              handleOnChange={handleOnChange}
              inputFieldName="type"
              inputFieldTitle="Zoo type"
            />
            <InputField
              zoo={selectedZoo}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="entranceFee"
              inputFieldTitle="Entrance fee"
              inputFieldPlaceholder="Enter entrance fee"
            />
          </div>
          <SubmitButton buttonText="Edit zoo" />
          <CancelLink />
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditZoo;
