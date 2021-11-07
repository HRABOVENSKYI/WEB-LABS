import React from "react";
import CatalogFilter from "./CatalogFilter";

const CatalogHeader = () => {
  return (
    <div className="flex">
      <CatalogFilter
        name="Num of visitors"
        propertyName={"numOfVisitors"}
        options={[
          { name: "asc", value: "asc" },
          { name: "desc", value: "desc" },
        ]}
      />
      <CatalogFilter
        name="Num of animals"
        propertyName={"numOfAnimals"}
        options={[
          { name: "asc", value: "asc" },
          { name: "desc", value: "desc" },
        ]}
      />
    </div>
  );
};

export default CatalogHeader;
