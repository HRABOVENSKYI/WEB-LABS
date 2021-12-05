import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Button from "../Button/Button";
import NoDataText from "../NoDataText/NoDataText";
import Card from "./Card";

const ZooList = () => {
  const { zoos, searchKeyword } = useContext(GlobalContext);

  const [showMore, setShowMore] = useState(false);

  const filteredZoos = zoos.filter((zoo) =>
    zoo.name.toLowerCase().includes(searchKeyword)
  );

  return (
    <React.Fragment>
      {filteredZoos.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredZoos.slice(0, showMore ? zoos.length : 4).map((zoo) => (
              <Card key={zoo.id} zoo={zoo} />
            ))}
          </div>
          {filteredZoos.length > 4 ? (
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
        <NoDataText text="No data" />
      )}
    </React.Fragment>
  );
};

export default ZooList;
