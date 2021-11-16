import React, { createContext, useEffect, useState } from "react";
import zoosApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

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

  return (
    <GlobalContext.Provider
      value={{
        zoos,
        searchKeyword,
        addZoo,
        editZoo,
        removeZoo,
        setSearchKeyword,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
