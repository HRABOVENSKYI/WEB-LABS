import React, { createContext, useEffect, useState } from "react";
import zoosApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [checkboxNames, setCheckboxNames] = useState([]);
  const [filters, setFilters] = useState([]);
  const [zoos, setZoos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    zoosApi
      .getZooTypes()
      .then(({ data }) => setCheckboxNames(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    zoosApi
      .getZoos(filters)
      .then(({ data }) => {
        setZoos(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filters]);

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

  return (
    <GlobalContext.Provider
      value={{
        zoos,
        searchKeyword,
        filters,
        isLoading,
        checkboxNames,
        addZoo,
        editZoo,
        removeZoo,
        setSearchKeyword,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
