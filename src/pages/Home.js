import React from "react";
import Wrapper from "../components/Cards/Wrapper";
import ZooList from "../components/Cards/ZooList";
import Heading from "../components/Heading/Heading";
import AddButton from "../components/Menu/AddButton";
import ListingTitle from "../components/Menu/ListingTitle";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Wrapper>
          <Heading />
          <div className="my-6 flex justify-between">
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
