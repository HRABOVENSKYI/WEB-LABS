import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Button from "../Button/Button";
import { Card } from "./Card";

const ZooList = () => {
  const { zoos, isSearchActive, foundZoos } = useContext(GlobalContext);

  const currentZoos = isSearchActive ? foundZoos : zoos;

  const [showMore, setShowMore] = useState(false);

  return (
    <React.Fragment>
      {currentZoos.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentZoos
              .slice(0, showMore ? currentZoos.length : 4)
              .map((zoo) => (
                <Card key={zoo.id} zoo={zoo} />
              ))}
          </div>
          {currentZoos.length > 4 ? (
            <div className="flex justify-center py-8">
              <Button
                onClick={() => setShowMore(!showMore)}
                label={!showMore ? "Show more" : "Show less"}
              />
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No Data</p>
      )}
    </React.Fragment>
  );
};

export default ZooList;
