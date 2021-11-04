import React from "react";
import Wrapper from "../components/Cards/Wrapper";
import ZooList from "../components/Cards/ZooList";
import AddButton from "../components/Menu/AddButton";
import ListingTitle from "../components/Menu/ListingTitle";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Wrapper>
          <div className="mb-6 flex justify-between">
            <ListingTitle />
            <AddButton />
          </div>
          <ZooList />
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default Home;
