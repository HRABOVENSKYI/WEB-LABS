import React, { useContext } from "react";
import FILTER_KEYS from "../../context/FilterKeys";
import { GlobalContext } from "../../context/GlobalState";
import { CatalogCard } from "../Catalog/CatalogCard";
import NoDataText from "../NoDataText/NoDataText";
import CatalogHeader from "./CatalogHeader";

const CatalogList = () => {
  const { zoos, filters } = useContext(GlobalContext);

  const filteredZoos = zoos.filter((zoo) =>
    zoo.zooName.toLowerCase().includes(filters[FILTER_KEYS.SEARCH_BY].value)
  );

  return (
    <React.Fragment>
      {filteredZoos.length > 0 ? (
        <React.Fragment>
          <CatalogHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredZoos
              .sort((first, second) => {
                const isAsc = filters[FILTER_KEYS.ORDER_BY].order === "asc";

                if (
                  first[filters[FILTER_KEYS.ORDER_BY].property] >=
                  second[filters[FILTER_KEYS.ORDER_BY].property]
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
