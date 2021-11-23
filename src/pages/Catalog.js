import React from "react";
import Wrapper from "../components/Cards/Wrapper";
import CatalogList from "../components/Catalog/CatalogList";

const Catalogue = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <CatalogList />
      </Wrapper>
    </React.Fragment>
  );
};

export default Catalogue;
