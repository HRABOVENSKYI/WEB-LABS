import React, { createContext, useState } from "react";
import FILTER_KEYS from "./FilterKeys";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    [FILTER_KEYS.ORDER_BY]: { property: "id", order: "asc" },
    [FILTER_KEYS.SEARCH_BY]: { value: "" },
  });

  const [zoos, setZoos] = useState([
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
  ]);

  function addZoo(zoo) {
    setZoos([...zoos, zoo]);
  }

  function editZoo(zoo) {
    const updatedZoos = zoos.map((z) => {
      if (z.id === zoo.id) {
        return zoo;
      }
      return z;
    });
    setZoos(updatedZoos);
  }

  function removeZoo(id) {
    const updatedZoos = zoos.filter((zoo) => zoo.id !== id);
    setZoos(updatedZoos);
  }

  function addFilter(key, value) {
    const newFilter = { [key]: value };
    setFilters({ ...filters, ...newFilter });
  }

  return (
    <GlobalContext.Provider
      value={{
        zoos: zoos,
        filters: filters,
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
