import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import CatalogCard from "../Catalog/CatalogCard";
import Loading from "../Loading/Loading";
import NoDataText from "../NoDataText/NoDataText";

const CatalogList = () => {
  const { zoos, searchKeyword } = useContext(GlobalContext);

  const filteredZoos = zoos.filter((zoo) =>
    zoo.name.toLowerCase().includes(searchKeyword)
  );

  if (!zoos.length) {
    return <Loading />
  }

  return (
    <React.Fragment>
      {filteredZoos.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredZoos.map((zoo) => (
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
