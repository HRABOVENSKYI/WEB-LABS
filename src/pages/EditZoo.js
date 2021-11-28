import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CancelLink from "../components/Forms/CancelLink";
import InputField from "../components/Forms/InputField";
import SubmitButton from "../components/Forms/SubmitButton";

import { GlobalContext } from "../context/GlobalState";

const EditZoo = (route) => {
  let history = useHistory();

  const { zoos, editZoo } = useContext(GlobalContext);

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

    if (!selectedZoo.type) {
      errors.type = "Type is required!";
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
        resultErrors.type ||
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
      <div className="w-full max-w-sm container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputField
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="name"
            inputFiledTitle="Zoo name"
            inputFiledPlaceholder="Enter zoo name"
          />
          <InputField
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="numOfVisitors"
            inputFiledTitle="Num of visitors"
            inputFiledPlaceholder="Enter num of visitors"
          />
          <InputField
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="numOfAnimals"
            inputFiledTitle="Num of animals"
            inputFiledPlaceholder="Enter num of animals"
          />
          <InputField
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="type"
            inputFiledTitle="Type"
            inputFiledPlaceholder="Enter zoo type"
          />
          <InputField
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="entranceFee"
            inputFiledTitle="Entrance fee"
            inputFiledPlaceholder="Enter entrance fee"
          />
          <SubmitButton buttonText="Edit zoo" />
          <CancelLink />
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditZoo;
