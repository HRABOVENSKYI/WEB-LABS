import React from "react";
import Wrapper from "../components/Cards/Wrapper";
import CatalogList from "../components/Catalog/CatalogList";
import Filters from "../components/Filters/Filters";

const Catalogue = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Filters />
        <CatalogList />
      </Wrapper>
    </React.Fragment>
  );
};

export default Catalogue;
