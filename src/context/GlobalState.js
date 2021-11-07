import React, { createContext, useReducer } from "react";
import { ACTIONS } from "./Actions";

import appReducer from "./AppReducer";

const initialState = {
  zoos: [
    {
      id: 1,
      zooName: "Magic Zoo",
      numOfVisitors: parseInt("33"),
      numOfAnimals: parseInt("12"),
      entranceFee: parseInt("13"),
    },
    {
      id: 2,
      zooName: "Amaizing Elephants",
      numOfVisitors: parseInt("21"),
      numOfAnimals: parseInt("4"),
      entranceFee: parseInt("133"),
    },
    {
      id: 3,
      zooName: "Happy Animals",
      numOfVisitors: parseInt("9"),
      numOfAnimals: parseInt("55"),
      entranceFee: parseInt("15"),
    },
    {
      id: 4,
      zooName: "Reptile World",
      numOfVisitors: parseInt("45"),
      numOfAnimals: parseInt("56"),
      entranceFee: parseInt("15"),
    },
    {
      id: 5,
      zooName: "Zoo of Extremes",
      numOfVisitors: parseInt("11"),
      numOfAnimals: parseInt("88"),
      entranceFee: parseInt("33"),
    },
  ],
  filters: {
    "orderBy": { property: "id", direction: "asc" },
    "searchBy": { value: "" },
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addZoo(zoo) {
    dispatch({
      type: ACTIONS.ADD_ZOO,
      payload: zoo,
    });
  }

  function editZoo(zoo) {
    dispatch({
      type: ACTIONS.EDIT_ZOO,
      payload: zoo,
    });
  }

  function removeZoo(id) {
    dispatch({
      type: ACTIONS.REMOVE_ZOO,
      payload: id,
    });
  }

  function addFilter(key, value) {
    const filter = { [key]: value }
    dispatch({
      type: ACTIONS.FILTER_ZOOS,
      payload: filter,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        zoos: state.zoos,
        filters: state.filters,
        addZoo,
        editZoo,
        removeZoo,
        addFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
