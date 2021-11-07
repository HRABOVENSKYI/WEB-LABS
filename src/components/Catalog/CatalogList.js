import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CatalogCard } from "../Catalog/CatalogCard";
import NoDataText from "../NoDataText/NoDataText";
import CatalogHeader from "./CatalogHeader";

const CatalogList = () => {
  const { zoos, filters } = useContext(GlobalContext);

  const filteredZoos = zoos.filter((zoo) => zoo.zooName.toLowerCase().includes(filters["searchBy"].value));

  return (
    <React.Fragment>
      {filteredZoos.length > 0 ? (
        <React.Fragment>
          <CatalogHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredZoos
              .sort((first, second) => {
                const isAsc = filters["orderBy"].order === "asc";

                if (
                  first[filters["orderBy"].property] >=
                  second[filters["orderBy"].property]
                ) {
                  return isAsc ? 1 : -1;
                } else {
                  return isAsc ? -1 : 1;
                }
              })
              .map((zoo) => (
                <CatalogCard key={zoo.id} zoo={zoo} />
              ))}
          </div>
        </React.Fragment>
      ) : (
        <NoDataText />
      )}
    </React.Fragment>
  );
};

export default CatalogList;
