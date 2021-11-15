import React, { createContext, useEffect, useState } from "react";
import zoosApi from "../api/api";
import FILTER_KEYS from "./FilterKeys";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    [FILTER_KEYS.ORDER_BY]: { property: "id", order: "asc" },
    [FILTER_KEYS.SEARCH_BY]: { value: "" },
  });

  const [zoos, setZoos] = useState([]);

  useEffect(() => {
    zoosApi
      .getZoos()
      .then(({ data }) => setZoos(data))
      .catch((err) => console.log(err));
  }, []);

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
        zoos,
        filters,
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
