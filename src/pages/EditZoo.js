import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CancelLink from "../components/Forms/CancelLink";
import InputNumOfAnimals from "../components/Forms/InputNumOfAnimals";
import InputNumOfVisitors from "../components/Forms/InputNumOfVisitors";
import InputZooName from "../components/Forms/InputZooName";
import SubmitButton from "../components/Forms/SubmitButton";

import { GlobalContext } from "../context/GlobalState";

const EditZoo = (route) => {
  let history = useHistory();

  const { zoos, editZoo } = useContext(GlobalContext);

  const [selectedZoo, setSelectedZoo] = useState({
    id: null,
    zooName: null,
    numOfVisitors: null,
    numOfAnimals: null,
  });
  const [errors, setErrors] = useState({});

  const currentZooId = route.match.params.id;

  const validate = (selectedZoo) => {
    const errors = {};
    const regex = /^\d*[1-9]\d*$/;
    if (!selectedZoo.zooName) {
      errors.zooName = "Zoo name is required!";
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
        resultErrors.zooName ||
        resultErrors.numOfVisitors ||
        resultErrors.numOfAnimals
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
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputZooName
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
          />
          <InputNumOfVisitors
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
          />
          <InputNumOfAnimals
            zoo={selectedZoo}
            handleOnChange={handleOnChange}
            errors={errors}
          />
          <SubmitButton buttonText="Edit zoo" />
          <CancelLink />
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditZoo;
