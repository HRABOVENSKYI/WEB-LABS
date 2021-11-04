import React from "react";
import Wrapper from "../components/Cards/Wrapper";
import ZooList from "../components/Cards/ZooList";

const Catalogue = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Wrapper>
          <ZooList />
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default Catalogue;
