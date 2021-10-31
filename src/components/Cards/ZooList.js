import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Card } from "./Card";

const ZooList = () => {
  const { zoos, isSearchActive, foundZoos } = useContext(GlobalContext);

  const currentZoos = isSearchActive ? foundZoos : zoos;

  return (
    <React.Fragment>
      {currentZoos.length > 0 ? (
        <React.Fragment>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentZoos.map((zoo) => (
                <Card key={zoo.id} zoo={zoo} />
              ))}
            </div>
          </section>
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No Data.</p>
      )}
    </React.Fragment>
  );
};

export default ZooList;
